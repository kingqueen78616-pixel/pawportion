'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Calculator' },
  { href: '/dog-feeding-chart', label: 'Feeding Chart' },
  { href: '/puppy-calculator', label: 'Puppy Calc' },
  { href: '/breed-calculator', label: 'By Breed' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="bg-brand-950 sticky top-0 z-50 shadow-md"
      aria-label="Main navigation"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-sans font-bold text-lg tracking-tight"
            aria-label="PawPortions home"
          >
            <span className="text-2xl" aria-hidden="true">🐾</span>
            <span>PawPortions</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-sans font-semibold text-sm tracking-wide
                           hover:text-brand-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="sm:hidden text-white p-2 rounded-lg
                       hover:bg-brand-800 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-brand-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden bg-brand-950 border-t border-brand-800 px-4 pb-4"
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-sans font-semibold text-sm
                           py-3 px-4 rounded-lg hover:bg-brand-800
                           transition-colors duration-200 block"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
