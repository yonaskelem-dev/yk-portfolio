import { useEffect } from 'react'
import Lenis from 'lenis'

export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -80 } })

    return () => lenis.destroy()
  }, [])
}