import { type FormEvent, useState } from 'react'
import { site } from '../data/site'
import { setAuthenticated, verifyPassword } from '../lib/siteAuth'

type PasswordGateProps = {
  onSuccess: () => void
}

export function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const ok = await verifyPassword(password)
      if (ok) {
        setAuthenticated()
        onSuccess()
        return
      }
      setError('Incorrect password. Try again.')
      setPassword('')
    } catch {
      setError('Something went wrong. Please refresh and try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="cami-mesh flex min-h-svh flex-col">
      <header className="border-b border-cami-border/80 bg-cami-ink/80 font-mono text-[11px] uppercase tracking-wider text-cami-muted backdrop-blur-md sm:text-xs">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <span>
            <span className="syntax-comment">SYS.AUTH :</span>{' '}
            <span className="text-cami-amber">RESTRICTED</span>
          </span>
          <span>
            <span className="syntax-comment">SYS.NODE :</span>{' '}
            <span className="text-cami-accent-soft">{site.handle}</span>
          </span>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-2xl border border-cami-border/70 bg-cami-ink/85 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted">
            <span className="text-cami-cyan">//</span> portfolio access
          </p>
          <h1 className="mt-3 font-sans text-2xl font-semibold text-cami-fg">
            Enter password
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-cami-muted">
            This site is private. Session access lasts until you close the
            browser tab.
          </p>

          <form className="mt-8 space-y-4" onSubmit={submit}>
            <label className="block">
              <span className="sr-only">Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-cami-border bg-cami-surface/80 px-4 py-3 font-mono text-sm text-cami-fg outline-none transition placeholder:text-cami-muted/50 focus:border-cami-mint/50 focus:ring-2 focus:ring-cami-mint/20"
                placeholder="password"
                disabled={busy}
                autoFocus
              />
            </label>
            {error ? (
              <p className="font-mono text-xs text-cami-rose" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={busy || password.length === 0}
              className="w-full rounded-full bg-[#50E38A] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] shadow-[0_0_28px_rgba(80,227,138,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? 'Checking…' : 'Unlock portfolio'}
            </button>
          </form>

          <p className="mt-6 font-mono text-[10px] text-cami-muted/80">
            {site.shortName.toLowerCase()}@{site.handle}:~$ auth required
          </p>
        </div>
      </main>
    </div>
  )
}
