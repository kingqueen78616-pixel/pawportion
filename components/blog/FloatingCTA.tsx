'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (isDismissed) return

      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const percent = (scrolled / total) * 100

      setIsVisible(percent >= 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40
                 bg-brand-950 text-white rounded-full shadow-lg
                 flex items-center gap-3 px-5 py-3"
      role="complementary"
      aria-label="Calculator call to action"
    >
      <span className="text-sm font-body text-brand-100">
        🐾 Get your dog{"'"}s exact calories
      </span>
      <Link
        href="/"
        className="bg-brand-600 hover:bg-brand-400 text-white
                   font-sans font-bold text-xs px-4 py-2 rounded-full
                   transition-colors duration-200 whitespace-nowrap"
      >
        Try our free calculator →
      </Link>
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="text-gray-400 hover:text-white text-lg font-bold
                   focus:outline-none ml-1"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  )
}
