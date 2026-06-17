import { Reveal } from './Reveal'
import { useParallax } from '../hooks/useScrollProgress'
import { site } from '../data/site'

function HeroPhoto() {
  return (
    <Reveal trigger="mount" variant="scale-in" delay={120}>
      <div className="shrink-0">
        <div className="relative w-[88px] sm:w-[112px]">
          <div
            className="absolute -inset-px rounded-[13px] bg-gradient-to-br from-cami-cyan/80 to-cami-accent/80"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-xl bg-[#0c0c20] p-0.5">
            <img
              src={site.headshot}
              alt={`Portrait of ${site.fullName}`}
              width={112}
              height={138}
              className="block aspect-[28/35] w-full rounded-[10px] object-cover object-[center_10%] brightness-[0.94] contrast-[1.04] saturate-[0.88]"
            />
          </div>
          <p className="mt-1.5 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-cami-muted sm:text-[9px]">
            <span className="text-cami-cyan">//</span>{' '}
            <span className="cami-status-pulse text-cami-mint">Online</span>
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export function Hero() {
  const parallaxY = useParallax(0.08)

  return (
    <section
      id="home"
      className="relative border-b border-cami-border/60 px-4 py-16 sm:py-20 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="cami-grid-lines cami-grid-animated pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <Reveal trigger="mount" variant="fade-in" delay={0}>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-cami-muted">
            <span className="text-cami-cyan">//</span> {site.roles}
          </p>
        </Reveal>

        <div className="flex items-start gap-5 sm:gap-7">
          <HeroPhoto />
          <Reveal trigger="mount" variant="fade-up" delay={80} className="min-w-0 flex-1 pt-0.5">
            <h1
              id="hero-heading"
              className="font-sans text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-cami-fg sm:text-4xl md:text-5xl"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-cami-accent-soft via-cami-fg to-cami-cyan bg-clip-text text-transparent">
                {site.displayName}
              </span>{' '}
              <span className="text-cami-fg/95">
                {site.fullName.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="mt-2.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-cami-muted/90 sm:mt-3 sm:text-xs sm:tracking-[0.15em]">
              Also goes by {site.shortName} · {site.languages}
            </p>
          </Reveal>
        </div>

        <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
          <Reveal trigger="mount" variant="blur-up" delay={180}>
            <p className="text-base leading-relaxed text-cami-muted sm:text-lg">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal trigger="mount" variant="fade-up" delay={260}>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] leading-relaxed text-cami-muted">
              <a
                href="/"
                className="text-cami-cyan underline decoration-cami-cyan/25 underline-offset-4 transition hover:text-cami-accent-soft"
              >
                {site.handle}
              </a>
              <span className="text-cami-border" aria-hidden>
                ·
              </span>
              <a
                href={`mailto:${site.email}`}
                className="text-cami-cyan underline decoration-cami-cyan/25 underline-offset-4 hover:text-cami-accent-soft"
              >
                {site.email}
              </a>
              <span className="text-cami-border" aria-hidden>
                ·
              </span>
              <span>{site.phone}</span>
            </p>
          </Reveal>

          <Reveal trigger="mount" variant="fade-in" delay={320}>
            <p className="font-mono text-[11px] leading-relaxed text-cami-muted/80">
              <a href="#work" className="transition hover:text-cami-cyan">
                {site.caseStudyFocus}
              </a>
            </p>
          </Reveal>

          <Reveal trigger="mount" variant="fade-up" delay={380}>
            <div className="flex flex-wrap items-center gap-3 pt-0.5 sm:gap-4">
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
