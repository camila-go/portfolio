import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { projects } from '../data/site'

const statusClass = {
  amber: 'text-cami-amber',
  mint: 'text-cami-mint',
} as const

export function Work() {
  return (
    <section
      id="work"
      className="border-b border-cami-border/60 px-4 py-16 sm:py-24"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade-up">
          <h2
            id="work-heading"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted"
          >
            <span className="text-cami-mint">//</span> selected case studies
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-2xl font-medium text-cami-fg sm:text-3xl">
            Shipped product work plus deep case studies — outcomes and craft.
          </p>
        </Reveal>

        <ul className="mt-12 flex flex-col gap-12">
          {projects.map((p, i) => (
            <li key={p.id}>
              <article className="group grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
                <Reveal variant={i % 2 === 0 ? 'slide-right' : 'slide-left'} delay={60}>
                  <Link
                    to={`/work/${p.id}`}
                    className="hover-lift relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-cami-border/70 bg-cami-ink transition duration-300 hover:scale-[1.01] hover:border-cami-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cami-accent"
                    aria-label={`Open case study: ${p.title}`}
                  >
                    {(p as { cover?: string }).cover ? (
                      <img
                        src={(p as { cover?: string }).cover}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90 transition duration-500 group-hover:opacity-100`}
                          aria-hidden
                        />
                        <div className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-semibold text-white/10 transition duration-500 group-hover:scale-105 group-hover:text-white/20">
                          {p.index}
                        </div>
                      </>
                    )}
                  </Link>
                </Reveal>
                <Reveal variant={i % 2 === 0 ? 'slide-left' : 'slide-right'} delay={140}>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3 font-mono text-[11px] uppercase tracking-widest text-cami-muted">
                      <span className="text-cami-cyan">{p.tag}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                      <span>·</span>
                      <span className={statusClass[p.statusTone]}>{p.status}</span>
                    </div>
                    <h3 className="mt-3 font-sans text-2xl font-semibold text-cami-fg sm:text-3xl">
                      <Link
                        to={`/work/${p.id}`}
                        className="transition hover:text-cami-accent-soft"
                      >
                        {p.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-cami-muted">
                      {p.excerpt}
                    </p>
                    <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
                      <Link
                        to={`/work/${p.id}`}
                        className="text-cami-accent-soft underline-offset-4 transition hover:text-cami-mint hover:underline"
                      >
                        Read case study →
                      </Link>
                      {'liveUrl' in p && p.liveUrl ? (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cami-muted underline-offset-4 transition hover:text-cami-cyan hover:underline"
                        >
                          {'liveLabel' in p && p.liveLabel
                            ? p.liveLabel
                            : 'Live site'}
                        </a>
                      ) : null}
                    </p>
                  </div>
                </Reveal>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
