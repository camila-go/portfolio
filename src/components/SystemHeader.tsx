import { site } from '../data/site'

export function SystemHeader() {
  return (
    <header className="border-b border-cami-border/80 bg-cami-ink/80 font-mono text-[11px] uppercase tracking-wider text-cami-muted backdrop-blur-md sm:text-xs">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1">
          <span>
            <span className="syntax-comment">SYS.NAME :</span>{' '}
            <span className="text-cami-fg">{site.sysVersion}</span>
          </span>
          <span>
            <span className="syntax-comment">SYS.AUTH :</span>{' '}
            <span className="text-cami-mint">PORTFOLIO_PUBLIC</span>
          </span>
          <span>
            <span className="syntax-comment">SYS.NODE :</span>{' '}
            <a
              href={site.websiteUrl}
              className="text-cami-accent-soft hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {site.handle}
            </a>
          </span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 sm:justify-end">
          <span>
            <span className="syntax-comment">UPTIME :</span>{' '}
            <span className="text-cami-fg">DESIGN_OPS</span>
          </span>
          <span>
            <span className="syntax-comment">STATUS :</span>{' '}
            <span className="text-cami-amber">200</span>
          </span>
        </div>
      </div>
    </header>
  )
}
