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
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-cami-border/70 bg-cami-ink transition duration-300 group-hover:scale-[1.01] group-hover:border-cami-accent/40"
                  role="img"
                  aria-label={`Case study visual placeholder for ${p.title}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90`}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-semibold text-white/10 transition group-hover:text-white/20">
                    {p.index}
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 font-mono text-[11px] uppercase tracking-widest text-cami-muted">
                    <span className="text-cami-cyan">{p.tag}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                    <span>·</span>
                    <span className={statusClass[p.statusTone]}>{p.status}</span>
                  </div>
                  <h3 className="mt-3 font-sans text-2xl font-semibold text-cami-fg sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-cami-muted">
                    {p.excerpt}
                  </p>
                  <p className="mt-6 font-mono text-xs text-cami-accent-soft">
                    <span className="syntax-keyword">detail</span>
                    <span className="syntax-comment">
                      {' '}
                      → see résumé + contact for depth
                    </span>
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
