import { useCallback, useEffect, useRef, useState } from 'react'
import { navItems } from '../data/site'

const sections = navItems.map((n) => n.id)

/** Mint from design ref (~#50E38A) — active pill + glow */
const activePill =
  'rounded-full bg-[#50E38A] px-4 py-2.5 text-[#0a0a0a] shadow-[0_0_28px_rgba(80,227,138,0.45),0_0_60px_rgba(80,227,138,0.12)]'

export function ModuleStickyNav() {
  const [active, setActive] = useState(0)
  /** While true, scroll-spy does not overwrite (↑↓ choose module; Enter or click applies). */
  const keyboardOnly = useRef(false)

  const go = useCallback((index: number) => {
    keyboardOnly.current = false
    const id = sections[index]
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(index)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target
      if (
        t instanceof HTMLInputElement ||
        t instanceof HTMLTextAreaElement ||
        (t instanceof HTMLElement && t.isContentEditable)
      ) {
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        keyboardOnly.current = true
        setActive((i) => Math.min(i + 1, sections.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        keyboardOnly.current = true
        setActive((i) => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter') go(active)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, go])

  useEffect(() => {
    const endKeyboard = () => {
      keyboardOnly.current = false
    }
    window.addEventListener('wheel', endKeyboard, { passive: true })
    window.addEventListener('touchmove', endKeyboard, { passive: true })
    return () => {
      window.removeEventListener('wheel', endKeyboard)
      window.removeEventListener('touchmove', endKeyboard)
    }
  }, [])

  useEffect(() => {
    const syncFromScroll = () => {
      if (keyboardOnly.current) return
      const marker = window.innerHeight * 0.22
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= marker) {
          setActive(i)
          return
        }
      }
      setActive(0)
    }

    syncFromScroll()
    window.addEventListener('scroll', syncFromScroll, { passive: true })
    window.addEventListener('resize', syncFromScroll)
    return () => {
      window.removeEventListener('scroll', syncFromScroll)
      window.removeEventListener('resize', syncFromScroll)
    }
  }, [])

  return (
    <div
      className="sticky top-4 z-50 px-4 pb-6 pt-2"
      aria-label="Section navigation"
    >
      <div className="pointer-events-none mx-auto max-w-6xl">
        <div className="pointer-events-auto rounded-2xl border border-cami-border/70 bg-cami-ink/85 px-4 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6">
          <p className="font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-cami-muted sm:text-[11px] sm:tracking-[0.18em]">
            CAMILA@NAV &gt; SELECT MODULE [↑↓ ARROWS + ENTER OR CLICK]
          </p>
          <nav className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Primary">
            {navItems.map((item, i) => {
              const isActive = i === active
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(i)
                  }}
                  className={`font-mono text-xs uppercase tracking-[0.2em] transition sm:text-sm ${
                    isActive
                      ? activePill
                      : 'text-cami-fg/85 hover:text-cami-fg'
                  }`}
                >
                  {isActive ? '> ' : ''}
                  {String(i + 1).padStart(2, '0')}._{item.label}
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
