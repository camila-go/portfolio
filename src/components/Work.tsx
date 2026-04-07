import { Link } from 'react-router-dom'
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
        <h2
          id="work-heading"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted"
        >
          <span className="text-cami-mint">//</span> selected case studies
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-2xl font-medium text-cami-fg sm:text-3xl">
          Highlights from higher ed, enterprise, and freelance — outcomes-first.
        </p>

        <ul className="mt-12 flex flex-col gap-12">
          {projects.map((p) => (
            <li key={p.id}>
              <article className="group grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
                <Link
                  to={`/work/${p.id}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-cami-border/70 bg-cami-ink transition duration-300 hover:scale-[1.01] hover:border-cami-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cami-accent"
                  aria-label={`Open case study: ${p.title}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90`}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-semibold text-white/10 transition group-hover:text-white/20">
                    {p.index}
                  </div>
                </Link>
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
                  <p className="mt-6 font-mono text-xs">
                    <Link
                      to={`/work/${p.id}`}
                      className="text-cami-accent-soft underline-offset-4 transition hover:text-cami-mint hover:underline"
                    >
                      Read case study →
                    </Link>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
