import { useCallback, useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'
import { site } from '../data/site'

type ChatTurn = {
  role: 'user' | 'assistant'
  content: string
}

const HELP_TEXT = `Try asking:
  • What did you build at SEI?
  • Tell me about Jynx
  • What are your AI skills?`

const SUGGESTIONS = [
  'What did you build at SEI?',
  'Tell me about Jynx',
  'What are your AI skills?',
] as const

export function TerminalPrompt() {
  const [input, setInput] = useState('')
  const [turns, setTurns] = useState<ChatTurn[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const el = transcriptRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [turns, loading, error])

  const submitText = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || loading) return

      setError(null)
      setInput('')

      if (trimmed.toLowerCase() === 'clear') {
        setTurns([])
        return
      }

      if (trimmed.toLowerCase() === 'help') {
        setTurns((prev) => [
          ...prev,
          { role: 'user', content: trimmed },
          { role: 'assistant', content: HELP_TEXT },
        ])
        return
      }

      const userTurn: ChatTurn = { role: 'user', content: trimmed }
      const nextTurns = [...turns, userTurn]
      setTurns(nextTurns)
      setLoading(true)

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: nextTurns }),
        })

        const raw = await res.text()
        let data: { reply?: string; error?: string } = {}
        try {
          data = JSON.parse(raw) as { reply?: string; error?: string }
        } catch {
          throw new Error(
            res.ok ? 'Invalid response from server' : 'Connection failed — try again in a moment.',
          )
        }

        if (!res.ok) {
          throw new Error(data.error ?? `Request failed (${res.status})`)
        }

        if (!data.reply) {
          throw new Error('Empty response')
        }

        setTurns((prev) => [...prev, { role: 'assistant', content: data.reply! }])
      } catch (err) {
        const message =
          err instanceof Error && err.message
            ? err.message
            : 'Connection failed — try again in a moment.'
        setError(
          message === 'Chat is not configured'
            ? 'Chat is not configured on the server yet.'
            : message,
        )
      } finally {
        setLoading(false)
      }
    },
    [loading, turns],
  )

  const send = useCallback(() => {
    void submitText(input)
  }, [input, submitText])

  const handleSuggestion = useCallback(
    (suggestion: string) => {
      void submitText(suggestion)
      inputRef.current?.focus()
    },
    [submitText],
  )

  return (
    <Reveal variant="fade-up">
      <section
        className="border-b border-cami-border/60 bg-cami-ink/40 px-4 py-8 sm:py-10"
        aria-label="Ask about Camila"
      >
        <div className="mx-auto max-w-3xl font-mono text-sm">
          <p className="mb-5 text-[11px] uppercase tracking-widest text-cami-muted">
            <span className="text-cami-cyan">//</span> ask_about_cami
          </p>

          {turns.length === 0 && !loading && !error ? (
            <div className="mb-4 flex flex-wrap gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSuggestion(suggestion)}
                  className="rounded-full border border-cami-border/80 bg-cami-surface/60 px-3 py-1.5 text-left text-xs text-cami-fg/80 transition hover:border-cami-cyan/40 hover:bg-cami-surface hover:text-cami-fg"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}

          <div
            ref={transcriptRef}
            className={`space-y-3 overflow-y-auto pr-1 ${turns.length > 0 || loading || error ? 'mb-4 max-h-64' : ''}`}
          >
            {turns.map((turn, i) => (
              <div key={`${turn.role}-${i}`}>
                {turn.role === 'user' ? (
                  <p className="text-cami-muted">
                    <span className="text-cami-mint">
                      {site.shortName.toLowerCase()}@{site.handle}:~$
                    </span>{' '}
                    {turn.content}
                  </p>
                ) : (
                  <p className="whitespace-pre-wrap leading-relaxed text-cami-fg/90">
                    {turn.content}
                  </p>
                )}
              </div>
            ))}

            {loading ? (
              <p className="cami-status-pulse text-cami-muted">
                <span className="text-cami-cyan">//</span> thinking...
              </p>
            ) : null}

            {error ? (
              <p className="text-cami-rose">{error}</p>
            ) : null}
          </div>

          <div className="rounded-xl border border-cami-border bg-cami-surface/80 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-within:border-cami-cyan/50 focus-within:ring-1 focus-within:ring-cami-cyan/30">
            <label className="flex flex-wrap items-center gap-2">
              <span className="shrink-0 text-cami-mint">
                {site.shortName.toLowerCase()}@{site.handle}:~$
              </span>
              <span className="inline-flex min-w-0 items-center">
                <input
                  ref={inputRef}
                  className={`min-w-[9ch] max-w-full border-none bg-transparent text-cami-fg outline-none placeholder:text-cami-muted/50 disabled:opacity-50 ${!input && !loading ? 'caret-transparent' : 'caret-cami-cyan'}`}
                  style={{ width: `${Math.max(9, input.length + 1)}ch` }}
                  placeholder="Type here…"
                  aria-label="Ask about Camila's work, skills, or experience"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') send()
                  }}
                  disabled={loading}
                  autoComplete="off"
                  spellCheck={false}
                />
                {!input && !loading ? (
                  <span
                    className="cami-terminal-cursor -ml-px h-[1.1em] w-2 shrink-0 bg-cami-cyan/80"
                    aria-hidden
                  />
                ) : null}
              </span>
            </label>
            <p className="mt-2 text-[10px] text-cami-muted/70">
              Press <kbd className="text-cami-muted">Enter</kbd> to send · type{' '}
              <button
                type="button"
                onClick={() => void submitText('help')}
                className="text-cami-cyan/90 underline-offset-2 hover:text-cami-cyan hover:underline"
              >
                help
              </button>{' '}
              for more
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
