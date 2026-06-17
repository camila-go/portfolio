import { Reveal } from './Reveal'
import { SkillChip, useSkillChipGroup } from './SkillChip'
import { SkillTagGrid } from './SkillTagGrid'
import {
  coreCompetencies,
  coreStrengths,
  education,
} from '../data/site'

export function About() {
  const strengths = useSkillChipGroup()

  return (
    <section
      id="about"
      className="border-b border-cami-border/60 px-4 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade-up">
          <h2
            id="about-heading"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted"
          >
            <span className="text-cami-amber">//</span> profile & strengths
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="slide-left" delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-cami-muted">
              <p>
                I work end-to-end — from research and prototyping to product
                design, systems, and launch — with a bias for measurable outcomes
                (think A/B tests, usability sessions, and adoption). I&apos;m
                comfortable where AI augments the product: personalization,
                workflow speed, and responsible UX.
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
          </Reveal>

          <Reveal variant="slide-right" delay={120}>
            <div className="hover-lift rounded-2xl border border-cami-border/80 bg-cami-surface/50 p-6 backdrop-blur-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cami-muted">
                <span className="text-cami-mint">//</span> core_strengths[]
              </p>
              <div
                ref={strengths.containerRef}
                className="mt-4 flex flex-wrap gap-2"
              >
                {coreStrengths.map((s) => (
                  <SkillChip
                    key={s}
                    label={s}
                    activeKey={strengths.activeKey}
                    onToggle={strengths.toggle}
                    className="border-cami-border/70 bg-cami-void/40 px-3 text-cami-fg/90 hover:border-cami-cyan/40 hover:text-cami-cyan"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="blur-up" delay={60} className="mt-14">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted">
            <span className="text-cami-cyan">//</span> core_competencies
          </h3>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-relaxed text-cami-muted/90">
            {coreCompetencies.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-2">
                {i > 0 && (
                  <span className="text-cami-border" aria-hidden>
                    ·
                  </span>
                )}
                <span>{item}</span>
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={100} className="mt-14">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted">
            <span className="text-cami-rose">//</span> technical_skills
          </h3>
          <div className="mt-6">
            <SkillTagGrid />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
