import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useScrollY() {
  const [y, setY] = useState(0)

  useEffect(() => {
    const onScroll = () => setY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return y
}

export function useScrolledPast(offset = 12) {
  const y = useScrollY()
  return y > offset
}

export function useParallax(factor = 0.12) {
  const reducedMotion = useReducedMotion()
  const y = useScrollY()
  if (reducedMotion) return 0
  return y * factor
}
