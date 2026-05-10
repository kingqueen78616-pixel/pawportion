'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (consent !== 'accepted') {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="alert"
      className="fixed bottom-0 left-0 right-0 bg-brand-950 text-white p-4 sm:p-6 z-50 shadow-2xl"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-body leading-relaxed text-center sm:text-left">
          We use cookies for analytics and personalised ads. By continuing to use PawPortions, you accept our use of cookies.{' '}
          <Link
            href="/privacy-policy"
            className="underline hover:text-brand-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="bg-brand-600 hover:bg-brand-500 text-white font-sans font-bold py-2 px-8 rounded-lg transition-colors whitespace-nowrap"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
