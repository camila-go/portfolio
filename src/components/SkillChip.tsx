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

const VIEWPORT_PAD = 16
const TOOLTIP_MAX_WIDTH = 272

type TooltipAnchor = {
  left: number
  top: number
  placement: 'above' | 'below'
  maxWidth: number
}

type SkillChipProps = {
  label: string
  description?: string
  className?: string
  activeKey: string | null
  onToggle: (key: string) => void
}

function computeTooltipAnchor(rect: DOMRect): TooltipAnchor {
  const maxWidth = Math.min(
    TOOLTIP_MAX_WIDTH,
    window.innerWidth - VIEWPORT_PAD * 2,
  )
  const spaceBelow = window.innerHeight - rect.bottom
  const spaceAbove = rect.top
  const placement =
    spaceBelow < 120 && spaceAbove > spaceBelow ? 'above' : 'below'

  const centerX = rect.left + rect.width / 2
  const half = maxWidth / 2
  const left = Math.max(
    VIEWPORT_PAD + half,
    Math.min(centerX, window.innerWidth - VIEWPORT_PAD - half),
  )

  return {
    left,
    top: placement === 'below' ? rect.bottom : rect.top,
    placement,
    maxWidth,
  }
}

function SkillChipTooltip({
  id,
  text,
  anchor,
}: {
  id: string
  text: string
  anchor: TooltipAnchor
}) {
  const tooltipRef = useRef<HTMLParagraphElement>(null)
  const [left, setLeft] = useState(anchor.left)

  useLayoutEffect(() => {
    setLeft(anchor.left)
    const el = tooltipRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    let adjusted = anchor.left

    if (rect.left < VIEWPORT_PAD) {
      adjusted += VIEWPORT_PAD - rect.left
    } else if (rect.right > window.innerWidth - VIEWPORT_PAD) {
      adjusted -= rect.right - (window.innerWidth - VIEWPORT_PAD)
    }

    setLeft(adjusted)
  }, [anchor, text])

  const transform =
    anchor.placement === 'above'
      ? 'translate(-50%, calc(-100% - 8px))'
      : 'translate(-50%, 8px)'

  return createPortal(
    <p
      ref={tooltipRef}
      id={id}
      role="tooltip"
      style={{
        position: 'fixed',
        left,
        top: anchor.top,
        transform,
        maxWidth: anchor.maxWidth,
      }}
      className="pointer-events-none z-[200] rounded-lg border border-cami-border bg-cami-surface px-3.5 py-2.5 text-left text-xs leading-relaxed break-words text-cami-fg shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
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
  const [tooltipAnchor, setTooltipAnchor] = useState<TooltipAnchor | null>(null)
  const text = description ?? getSkillDescription(label)

  useLayoutEffect(() => {
    if (!isActive || !buttonRef.current) {
      setTooltipAnchor(null)
      return
    }

    const updatePosition = () => {
      const rect = buttonRef.current?.getBoundingClientRect()
      if (!rect) return
      setTooltipAnchor(computeTooltipAnchor(rect))
    }

    buttonRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
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
      {isActive && tooltipAnchor ? (
        <SkillChipTooltip id={descId} text={text} anchor={tooltipAnchor} />
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

    const onPointerDown = (event: PointerEvent) => {
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

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [activeKey])

  return { activeKey, toggle, containerRef }
}
