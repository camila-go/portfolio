import { metrics } from '../data/site'

export function Metrics() {
  return (
    <section
      className="border-b border-cami-border/60 px-4 py-14 sm:py-20"
      aria-labelledby="metrics-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="metrics-heading"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted"
        >
          <span className="text-cami-rose">//</span> snapshot
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {metrics.map((m) => (
            <article
              key={m.id}
              className={`rounded-2xl border border-cami-border/80 bg-cami-surface/60 p-6 backdrop-blur-sm ${m.glow}`}
            >
              <p
                className={`font-sans text-3xl font-semibold tracking-tight sm:text-4xl ${m.accent}`}
              >
                {m.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-cami-muted">
                {m.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cami-muted">
                {m.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
