import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

export type RevealVariant =
  | 'fade-up'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'blur-up'
  | 'scale-in'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  trigger?: 'scroll' | 'mount'
  delay?: number
  style?: CSSProperties
}

const variantClass: Record<RevealVariant, string> = {
  'fade-up': 'reveal-fade-up',
  'fade-in': 'reveal-fade-in',
  'slide-left': 'reveal-slide-left',
  'slide-right': 'reveal-slide-right',
  'blur-up': 'reveal-blur-up',
  'scale-in': 'reveal-scale-in',
}

export function Reveal({
  children,
  className = '',
  variant = 'fade-up',
  trigger = 'scroll',
  delay = 0,
  style,
}: RevealProps) {
  const { ref, visible } = useReveal({ trigger, delay })

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[variant]} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
