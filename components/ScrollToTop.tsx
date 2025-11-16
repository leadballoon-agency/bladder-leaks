'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()
  const isFirstMount = useRef(true)

  useEffect(() => {
    // Skip scroll on first mount (page load/refresh) to preserve natural behavior
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }

    // Only scroll to top on route changes (not on refresh)
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
