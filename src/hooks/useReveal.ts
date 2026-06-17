import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

type RevealTrigger = 'scroll' | 'mount'

type UseRevealOptions = {
  trigger?: RevealTrigger
  threshold?: number
  rootMargin?: string
  delay?: number
}

export function useReveal({
  trigger = 'scroll',
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
  delay = 0,
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true)
      return
    }

    if (trigger === 'mount') {
      const timer = window.setTimeout(() => setVisible(true), delay)
      return () => window.clearTimeout(timer)
    }

    const node = ref.current
    if (!node) return

    let delayTimer: number | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        if (delay > 0) {
          delayTimer = window.setTimeout(() => setVisible(true), delay)
        } else {
          setVisible(true)
        }
        observer.disconnect()
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (delayTimer) window.clearTimeout(delayTimer)
    }
  }, [delay, reducedMotion, rootMargin, threshold, trigger])

  return { ref, visible }
}
