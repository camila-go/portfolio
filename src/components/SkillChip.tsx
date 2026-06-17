import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { getSkillDescription } from '../data/skillDescriptions'

type SkillChipProps = {
  label: string
  description?: string
  className?: string
  activeKey: string | null
  onToggle: (key: string) => void
}

export function SkillChip({
  label,
  description,
  className = '',
  activeKey,
  onToggle,
}: SkillChipProps) {
  const isActive = activeKey === label
  const descId = useId()
  const text = description ?? getSkillDescription(label)

  return (
    <div className="relative inline-flex max-w-full">
      <button
        type="button"
        onClick={() => onToggle(label)}
        aria-expanded={isActive}
        aria-describedby={isActive ? descId : undefined}
        className={`cursor-pointer rounded-full border px-2.5 py-1 font-mono text-[11px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cami-cyan ${className} ${
          isActive
            ? 'border-cami-cyan/50 bg-cami-cyan/10 text-cami-cyan'
            : ''
        }`}
      >
        {label}
      </button>
      {isActive ? (
        <p
          id={descId}
          role="tooltip"
          className="absolute left-1/2 top-full z-30 mt-2 w-max max-w-[15rem] -translate-x-1/2 rounded-lg border border-cami-border/80 bg-cami-ink/95 px-3 py-2 text-left text-[11px] leading-snug text-cami-muted shadow-lg backdrop-blur-sm"
        >
          {text}
        </p>
      ) : null}
    </div>
  )
}

export function useSkillChipGroup() {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback((key: string) => {
    setActiveKey((current) => (current === key ? null : key))
  }, [])

  useEffect(() => {
    if (!activeKey) return

    const onPointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveKey(null)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveKey(null)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [activeKey])

  return { activeKey, toggle, containerRef }
}
