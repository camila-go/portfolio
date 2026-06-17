import { useCallback, useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'
import { site } from '../data/site'

type ChatTurn = {
  role: 'user' | 'assistant'
  content: string
}

const HELP_TEXT = `Ask about Camila's work, skills, or experience. Try:
  • What did you build at SEI?
  • Tell me about Jynx
  • What are your AI skills?`

export function TerminalPrompt() {
  const [input, setInput] = useState('')
  const [turns, setTurns] = useState<ChatTurn[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = transcriptRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [turns, loading, error])

  const send = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    setError(null)

    if (text.toLowerCase() === 'clear') {
      setTurns([])
      setInput('')
      return
    }

    if (text.toLowerCase() === 'help') {
      setTurns((prev) => [
        ...prev,
        { role: 'user', content: text },
        { role: 'assistant', content: HELP_TEXT },
      ])
      setInput('')
      return
    }

    const userTurn: ChatTurn = { role: 'user', content: text }
    const nextTurns = [...turns, userTurn]
    setTurns(nextTurns)
    setInput('')
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
  }, [input, loading, turns])

  return (
    <Reveal variant="fade-up">
      <section
        className="border-b border-cami-border/60 bg-cami-ink/40 px-4 py-8 sm:py-10"
        aria-label="Ask about Camila"
      >
        <div className="mx-auto max-w-3xl font-mono text-sm">
          <p className="mb-4 text-[11px] uppercase tracking-widest text-cami-muted">
            <span className="text-cami-cyan">//</span> ask_about_cami
          </p>

          <div
            ref={transcriptRef}
            className="max-h-64 space-y-3 overflow-y-auto pr-1"
          >
            {turns.length === 0 && !loading && !error ? (
              <p className="text-cami-muted/70">
                Ask about my work, skills, or experience — or type{' '}
                <span className="text-cami-fg/80">help</span> for ideas.
              </p>
            ) : null}

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

          <label className="mt-4 flex flex-wrap items-center gap-2 border-t border-cami-border/50 pt-4">
            <span className="text-cami-mint">
              {site.shortName.toLowerCase()}@{site.handle}:~$
            </span>
            <input
              className="min-w-[12rem] flex-1 border-none bg-transparent text-cami-fg outline-none placeholder:text-cami-muted/60 disabled:opacity-50"
              placeholder="ask about my work, skills, or experience"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void send()
              }}
              disabled={loading}
              autoComplete="off"
              spellCheck={false}
            />
          </label>
        </div>
      </section>
    </Reveal>
  )
}
