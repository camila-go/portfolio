import { Reveal } from './Reveal'
import {
  achievements,
  certifications,
  coreStrengths,
  education,
  experience,
  site,
} from '../data/site'

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="border-b border-cami-border/60 px-4 py-16 sm:py-24"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal variant="fade-up">
          <h2
            id="resume-heading"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted"
          >
            <span className="text-cami-cyan">//</span> résumé &amp; experience
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cami-muted">
            Selected roles — full timeline including early-career marketing, print,
            and internships is in the PDF.
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={80} className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={site.resumePdf}
              download="Camila-Gonzalez-Resume-2026.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[#50E38A] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] shadow-[0_0_28px_rgba(80,227,138,0.35)] transition hover:brightness-110"
            >
              ↓ cGonzalezResume2026.pdf
            </a>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-xs text-cami-muted underline-offset-4 hover:text-cami-cyan hover:underline"
            >
              {site.email}
            </a>
            <span className="font-mono text-xs text-cami-muted/70">{site.phone}</span>
          </div>
        </Reveal>

        <div className="mt-14 space-y-10">
          <div>
            <Reveal variant="fade-in">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-rose">
                // professional_experience
              </h3>
            </Reveal>
            <ul className="mt-6 space-y-8">
              {experience.map((job, i) => (
                <Reveal key={job.company} variant="fade-up" delay={i * 80}>
                  <li className="hover-lift rounded-2xl border border-cami-border/70 bg-cami-surface/40 p-6 backdrop-blur-sm">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="font-sans text-lg font-semibold text-cami-fg">
                        {job.company}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-cami-amber">
                        {job.dates}
                      </p>
                    </div>
                    <p className="mt-1 font-mono text-sm text-cami-accent-soft">
                      {job.role}
                    </p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-cami-muted marker:text-cami-mint">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal variant="slide-left" delay={60}>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-cyan">
                  // education
                </h3>
                <p className="mt-4 font-sans text-base text-cami-fg">
                  {education.degree}
                </p>
                <p className="mt-1 font-mono text-sm text-cami-muted">
                  {education.school} · {education.year}
                </p>

                <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-cami-mint">
                  // certifications
                </h3>
                <ul className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c.name}
                      className="border-l-2 border-cami-border pl-3 font-mono text-sm"
                    >
                      <p className="text-cami-fg">{c.name}</p>
                      <p className="text-cami-muted">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="slide-right" delay={100}>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-amber">
                  // achievements
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-cami-muted">
                  {achievements.map((a) => (
                    <li key={a.title} className="flex gap-3">
                      <span className="text-cami-amber" aria-hidden>
                        ★
                      </span>
                      <span>
                        <span className="text-cami-fg">{a.title}</span>
                        <span className="text-cami-muted"> — {a.org}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-cami-rose">
                  // core_strengths
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coreStrengths.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-cami-border/70 bg-cami-surface/40 px-2.5 py-1 font-mono text-[11px] text-cami-muted transition hover:border-cami-cyan/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
