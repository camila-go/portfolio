import { site } from '../data/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative border-b border-cami-border/60 px-4 py-16 sm:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 cami-grid-lines opacity-[0.35]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cami-muted">
          <span className="text-cami-cyan">//</span> {site.roles}
        </p>
        <h1
          id="hero-heading"
          className="max-w-4xl font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-cami-fg sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cami-accent-soft via-cami-fg to-cami-cyan bg-clip-text text-transparent">
            {site.displayName}
          </span>{' '}
          <span className="text-cami-fg/95">
            {site.fullName.split(' ').slice(1).join(' ')}
          </span>
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-cami-muted/90 sm:text-sm">
          Also goes by {site.shortName} · {site.languages}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cami-muted">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-cami-accent px-6 py-3 font-sans text-sm font-semibold text-cami-void shadow-[0_0_32px_rgba(168,85,247,0.35)] transition hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cami-accent-soft"
          >
            View selected work
          </a>
          <a
            href={site.resumePdf}
            download
            className="inline-flex items-center justify-center rounded-full border border-cami-border bg-cami-surface/50 px-6 py-3 font-sans text-sm font-medium text-cami-fg backdrop-blur transition hover:border-cami-accent/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cami-muted"
          >
            Download résumé (PDF)
          </a>
          <a
            href={site.websiteUrl}
            className="font-mono text-xs text-cami-muted underline-offset-4 hover:text-cami-cyan hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {site.handle} →
          </a>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-cami-muted underline-offset-4 hover:text-cami-mint hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
