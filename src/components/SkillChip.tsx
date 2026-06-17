import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { getSkillDescription } from '../data/skillDescriptions'

type TooltipPosition = {
  left: number
  top: number
  placement: 'above' | 'below'
}

type SkillChipProps = {
  label: string
  description?: string
  className?: string
  activeKey: string | null
  onToggle: (key: string) => void
}

function SkillChipTooltip({
  id,
  text,
  position,
}: {
  id: string
  text: string
  position: TooltipPosition
}) {
  const transform =
    position.placement === 'above'
      ? 'translate(-50%, calc(-100% - 8px))'
      : 'translate(-50%, 8px)'

  return createPortal(
    <p
      id={id}
      role="tooltip"
      style={{
        position: 'fixed',
        left: position.left,
        top: position.top,
        transform,
      }}
      className="pointer-events-none z-[200] w-max max-w-[17rem] rounded-lg border border-cami-border bg-cami-surface px-3.5 py-2.5 text-left text-xs leading-relaxed text-cami-fg shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
    >
      {text}
    </p>,
    document.body,
  )
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
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | null>(
    null,
  )
  const text = description ?? getSkillDescription(label)

  useLayoutEffect(() => {
    if (!isActive || !buttonRef.current) {
      setTooltipPosition(null)
      return
    }

    const updatePosition = () => {
      const rect = buttonRef.current?.getBoundingClientRect()
      if (!rect) return

      const spaceBelow = window.innerHeight - rect.bottom
      const placement = spaceBelow < 100 ? 'above' : 'below'

      setTooltipPosition({
        left: rect.left + rect.width / 2,
        top: placement === 'below' ? rect.bottom : rect.top,
        placement,
      })
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isActive])

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => onToggle(label)}
        aria-expanded={isActive}
        aria-describedby={isActive ? descId : undefined}
        className={`relative cursor-pointer rounded-full border px-2.5 py-1 font-mono text-[11px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cami-cyan ${className} ${
          isActive
            ? 'z-10 border-cami-cyan bg-cami-cyan/15 text-cami-cyan'
            : ''
        }`}
      >
        {label}
      </button>
      {isActive && tooltipPosition ? (
        <SkillChipTooltip id={descId} text={text} position={tooltipPosition} />
      ) : null}
    </>
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
