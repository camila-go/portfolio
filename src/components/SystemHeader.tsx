import { site } from '../data/site'
import { useScrolledPast } from '../hooks/useScrollProgress'

export function SystemHeader() {
  const scrolled = useScrolledPast(16)

  return (
    <header
      className={`sticky top-0 z-50 border-b font-mono text-[11px] uppercase tracking-wider text-cami-muted backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-500 sm:text-xs ${
        scrolled
          ? 'border-cami-cyan/20 bg-cami-ink/95 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'border-cami-border/80 bg-cami-ink/80'
      }`}
    >
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
            <a href="/" className="text-cami-accent-soft transition hover:underline">
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
            <span className="cami-status-pulse text-cami-amber">200</span>
          </span>
        </div>
      </div>
    </header>
  )
}
