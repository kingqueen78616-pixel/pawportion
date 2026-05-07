'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Heading {
  id: string
  text: string
  level: number
}

interface BlogSidebarProps {
  showCTA?: boolean
}

export default function BlogSidebar({ showCTA = true }: BlogSidebarProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = document.querySelectorAll('h2, h3')
    const items: Heading[] = []

    elements.forEach((el) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || ''
      }
      items.push({
        id: el.id,
        text: el.textContent || '',
        level: Number(el.tagName[1]),
      })
    })

    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -60% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 flex flex-col gap-4">

        {headings.length > 0 && (
          <div className="bg-white rounded-xl border border-brand-100 p-4">
            <p className="font-sans font-semibold text-brand-800 text-sm
                          uppercase tracking-wider mb-3">
              Contents
            </p>
            <nav aria-label="Table of contents">
              <ul className="flex flex-col gap-1">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className={`block text-xs font-body py-1 transition-colors duration-200
                        ${h.level === 3 ? 'pl-3' : ''}
                        ${activeId === h.id
                          ? 'text-brand-600 font-semibold'
                          : 'text-gray-500 hover:text-brand-600'
                        }`}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {showCTA && (
          <div className="bg-brand-600 rounded-xl p-4 text-white">
            <p className="font-sans font-bold text-sm mb-1">
              🐾 Free Calculator
            </p>
            <p className="text-xs font-body text-brand-100 mb-3">
              Get your dog{"'"}s exact daily calories in seconds.
            </p>
            <Link
              href="/"
              className="block text-center bg-white text-brand-600
                         font-sans font-bold text-xs py-2 px-3 rounded-lg
                         hover:bg-brand-50 transition-colors duration-200"
            >
              Try our free calculator →
            </Link>
          </div>
        )}
      </div>
    </aside>
  )
}
