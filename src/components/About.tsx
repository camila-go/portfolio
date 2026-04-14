import { education, strengths } from '../data/site'

export function About() {
  return (
    <section
      id="about"
      className="border-b border-cami-border/60 px-4 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted"
        >
          <span className="text-cami-amber">//</span> profile & strengths
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-cami-muted">
            <p>
              I work end-to-end — from research and prototyping to product
              design, systems, and launch — with a bias for measurable outcomes (think
              A/B tests, usability sessions, and adoption). I&apos;m comfortable
              where AI augments the product: personalization, workflow speed,
              and responsible UX.
            </p>
            <p>
              <span className="syntax-keyword">Collaboration</span> with
              developers, copy, and PMs is how good UI ships;{' '}
              <span className="syntax-string">&quot;handoff&quot;</span> is a
              checkpoint, not the finish line.
            </p>
            <p className="font-mono text-xs text-cami-fg/80">
              {education.degree} — {education.school} ({education.year})
            </p>
          </div>
          <div className="rounded-2xl border border-cami-border/80 bg-cami-surface/50 p-6 font-mono text-sm leading-relaxed text-cami-muted backdrop-blur-sm">
            <p className="syntax-comment">// core_strengths[]</p>
            <ul className="mt-3 list-inside list-disc space-y-1.5 marker:text-cami-cyan">
              {strengths.map((s) => (
                <li key={s} className="pl-1">
                  <span className="syntax-string">{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 syntax-comment">
              // Figma (Make, Buzz) · Adobe suite · Axure · prototyping &
              research · HTML/CSS/JS · Agile
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
