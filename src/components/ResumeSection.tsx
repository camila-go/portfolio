import {
  achievements,
  certifications,
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
        <h2
          id="resume-heading"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-muted"
        >
          <span className="text-cami-cyan">//</span> résumé &amp; experience
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cami-muted">
          Full timeline — additional roles in marketing, print, internships, and
          contract design — is in the PDF.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={site.resumePdf}
            download="Camila-Gonzalez-Resume-2025.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-[#50E38A] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] shadow-[0_0_28px_rgba(80,227,138,0.35)] transition hover:brightness-110"
          >
            ↓ cGonzalezResume2025.pdf
          </a>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-cami-muted underline-offset-4 hover:text-cami-cyan hover:underline"
          >
            {site.email}
          </a>
          <span className="font-mono text-xs text-cami-muted/70">{site.phone}</span>
        </div>

        <div className="mt-14 space-y-10">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-rose">
              // professional_experience
            </h3>
            <ul className="mt-6 space-y-8">
              {experience.map((job) => (
                <li
                  key={job.company}
                  className="rounded-2xl border border-cami-border/70 bg-cami-surface/40 p-6 backdrop-blur-sm"
                >
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
              ))}
            </ul>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-mint">
                // certifications
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-sm text-cami-muted">
                {certifications.map((c) => (
                  <li key={c} className="border-l-2 border-cami-border pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-cami-cyan">
                // education
              </h3>
              <p className="mt-4 font-sans text-base text-cami-fg">
                {education.school}
              </p>
              <p className="mt-1 font-mono text-sm text-cami-muted">
                {education.degree} · {education.year}
              </p>
              <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-cami-amber">
                // achievements
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-cami-muted">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-cami-mint" aria-hidden>
                      ✓
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
