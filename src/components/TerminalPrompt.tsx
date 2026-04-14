import { useCallback, useState } from 'react'
import { site } from '../data/site'

const hints: Record<string, string> = {
  help: 'Commands: help | about | work | resume | contact | clear',
  about: `${site.fullName} — ${site.roles}. See #about.`,
  work: 'Selected projects: #work — Jynx, DPIC (Georgia Aquarium), NSA redesign.',
  resume: `PDF: ${site.resumePdf} — also #resume.`,
  contact: `${site.email} · ${site.phone} · ${site.handle}`,
  clear: '',
}

export function TerminalPrompt() {
  const [input, setInput] = useState('')
  const [lines, setLines] = useState<string[]>([])

  const run = useCallback(() => {
    const cmd = input.trim().toLowerCase()
    if (cmd === 'clear') {
      setLines([])
      setInput('')
      return
    }
    const out = hints[cmd] ?? `Unknown: ${input}. Try: help`
    setLines((prev) => [...prev, `> ${input}`, out].filter(Boolean))
    setInput('')
  }, [input])

  return (
    <div className="border-b border-cami-border/60 bg-cami-ink/40 px-4 py-6">
      <div className="mx-auto max-w-6xl font-mono text-sm">
        <p className="mb-3 text-[11px] uppercase tracking-widest text-cami-muted">
          Interactive
        </p>
        {lines.map((line, i) => (
          <p
            key={`${line}-${i}`}
            className={
              line.startsWith('>') ? 'text-cami-muted' : 'text-cami-fg/90'
            }
          >
            {line}
          </p>
        ))}
        <label className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-cami-mint">
            {site.shortName.toLowerCase()}@{site.handle}:~$
          </span>
          <input
            className="min-w-[12rem] flex-1 border-none bg-transparent text-cami-fg outline-none placeholder:text-cami-muted/60"
            placeholder="type a command (try: help)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') run()
            }}
            autoComplete="off"
            spellCheck={false}
          />
        </label>
      </div>
    </div>
  )
}
