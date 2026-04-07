import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { FigurePlaceholder } from '../components/caseStudy/FigurePlaceholder'
import { FooterNav } from '../components/FooterNav'
import { SystemHeader } from '../components/SystemHeader'
import {
  getAdjacentCaseStudies,
  getCaseStudy,
} from '../data/caseStudies'

function OrangeBullet() {
  return (
    <span
      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
      aria-hidden
    />
  )
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudy(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!slug || !study) {
    return <Navigate to="/" replace />
  }

  const { prev, next } = getAdjacentCaseStudies(slug)

  return (
    <div className="min-h-svh bg-[#050507] text-zinc-300">
      <SystemHeader />
      <div className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#050507]/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link
            to="/#work"
            className="font-mono text-xs text-orange-400 transition hover:text-orange-300"
          >
            ← All work
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            Case study
          </span>
        </div>
      </div>

      <article>
        <header className="border-b border-zinc-900 px-4 pb-16 pt-12 sm:pt-16">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-orange-500/90">
              {study.shortTitle}
            </p>
            <h1 className="mt-4 font-sans text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
              {study.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              {study.dek}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <FigurePlaceholder
              figure={{
                caption: 'Product UI exploration — replace with your screens',
                variant: 'hero-stack',
              }}
              index={0}
            />
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
            <div className="space-y-14">
              <section aria-labelledby="problem">
                <h2
                  id="problem"
                  className="font-sans text-2xl font-semibold text-white"
                >
                  {study.problem.title}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
                  {study.problem.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <ul className="mt-8 space-y-3">
                  {study.problem.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-zinc-300">
                      <OrangeBullet />
                      <span className="pt-0.5">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="solution">
                <h2
                  id="solution"
                  className="font-sans text-2xl font-semibold text-white"
                >
                  {study.solution.title}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
                  {study.solution.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <ul className="mt-8 space-y-3">
                  {study.solution.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-zinc-300">
                      <OrangeBullet />
                      <span className="pt-0.5">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Overview
                </p>
                <dl className="mt-4 space-y-4">
                  {study.meta.map((row) => (
                    <div key={row.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-sm text-zinc-200">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>

        {study.sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="border-t border-zinc-900 px-4 py-16"
          >
            <div className="mx-auto max-w-4xl">
              <h2 className="font-sans text-2xl font-semibold text-white sm:text-3xl">
                {sec.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
                {sec.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {sec.bullets && sec.bullets.length > 0 ? (
                <ul className="mt-8 space-y-3">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-zinc-300">
                      <OrangeBullet />
                      <span className="pt-0.5">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {sec.figures && sec.figures.length > 0 ? (
                <div
                  className={`mt-12 space-y-12 ${
                    sec.figures.length > 1 &&
                    sec.figures.every((f) => f.variant === 'pair')
                      ? 'grid gap-8 sm:grid-cols-2'
                      : 'flex flex-col gap-12'
                  }`}
                >
                  {sec.figures.map((fig, fi) => (
                    <FigurePlaceholder
                      key={`${sec.id}-${fig.caption}-${fi}`}
                      figure={fig}
                      index={fi}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}

        <section
          className="border-t border-zinc-900 px-4 py-20"
          aria-labelledby="takeaways"
        >
          <div className="mx-auto max-w-4xl">
            <h2
              id="takeaways"
              className="font-sans text-2xl font-semibold text-white sm:text-3xl"
            >
              Key takeaways
            </h2>
            <ul className="mt-10 flex flex-col gap-4">
              {study.takeaways.map((t) => (
                <li
                  key={t.title}
                  className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400"
                    aria-hidden
                  >
                    ◆
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-white">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {t.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <nav
          className="border-t border-zinc-900 px-4 py-12"
          aria-label="Adjacent case studies"
        >
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/work/${prev.slug}`}
                className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:border-orange-500/40 hover:bg-zinc-900/60"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Previous
                </span>
                <span className="mt-2 font-sans text-lg font-medium text-white group-hover:text-orange-200">
                  ← {prev.shortTitle}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/work/${next.slug}`}
                className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 text-right transition hover:border-orange-500/40 hover:bg-zinc-900/60 sm:col-start-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Next
                </span>
                <span className="mt-2 font-sans text-lg font-medium text-white group-hover:text-orange-200">
                  {next.shortTitle} →
                </span>
              </Link>
            ) : null}
          </div>
        </nav>
      </article>

      <FooterNav />
    </div>
  )
}
