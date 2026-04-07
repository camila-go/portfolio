import type { CaseStudyFigure } from '../../data/caseStudies'

export function FigurePlaceholder({
  figure,
  index,
}: {
  figure: CaseStudyFigure
  index: number
}) {
  const { variant, caption } = figure

  const shell =
    'overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.35)]'

  const inner = (
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-zinc-900 to-zinc-950" />
  )

  if (variant === 'hero-stack') {
    return (
      <figure className="group">
        <div className={`relative aspect-[16/10] ${shell}`}>
          {inner}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative h-full w-full max-w-sm">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-[85%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-zinc-700/80 bg-zinc-800/60 shadow-lg transition group-hover:brightness-110"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${(i - 1.5) * 4}deg) translateX(${(i - 1.5) * 12}px)`,
                    zIndex: i,
                  }}
                />
              ))}
            </div>
          </div>
          <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            fig. {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <figcaption className="mt-3 text-center text-sm italic text-zinc-500">
          {caption}
        </figcaption>
      </figure>
    )
  }

  if (variant === 'pair') {
    return (
      <figure>
        <div className={`relative aspect-[4/3] ${shell}`}>
          {inner}
          <div className="absolute inset-0 grid grid-cols-2 gap-px bg-zinc-800/80 p-4">
            <div className="rounded-lg bg-zinc-800/70" />
            <div className="rounded-lg bg-zinc-800/70" />
          </div>
        </div>
        <figcaption className="mt-3 text-center text-sm italic text-zinc-500">
          {caption}
        </figcaption>
      </figure>
    )
  }

  if (variant === 'wide') {
    return (
      <figure>
        <div className={`relative aspect-[21/9] ${shell}`}>
          {inner}
          <div className="absolute inset-0 flex items-stretch gap-2 p-4">
            <div className="flex-1 rounded-lg bg-zinc-800/70" />
            <div className="hidden w-1/3 rounded-lg bg-zinc-800/50 sm:block" />
          </div>
        </div>
        <figcaption className="mt-3 text-center text-sm italic text-zinc-500">
          {caption}
        </figcaption>
      </figure>
    )
  }

  if (variant === 'tall') {
    return (
      <figure>
        <div className={`relative mx-auto max-w-sm aspect-[9/16] ${shell}`}>
          {inner}
          <div className="absolute inset-4 flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-12 rounded-md bg-zinc-800/70" />
            ))}
          </div>
        </div>
        <figcaption className="mt-3 text-center text-sm italic text-zinc-500">
          {caption}
        </figcaption>
      </figure>
    )
  }

  /* gallery */
  return (
    <figure>
      <div className={`relative ${shell}`}>
        {inner}
        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-zinc-800/70"
            />
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm italic text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  )
}
