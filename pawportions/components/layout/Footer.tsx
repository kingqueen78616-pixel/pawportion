import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-white mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" aria-hidden="true">🐾</span>
              <span className="font-sans font-bold text-lg">PawPortions</span>
            </div>
            <p className="text-sm text-gray-400 font-body leading-relaxed">
              Free dog calorie calculator based on vet-standard RER/MER formulas.
              Feed your dog right. Every single day.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-brand-400 mb-3">
              Tools
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Dog Calorie Calculator' },
                { href: '/puppy-calculator', label: 'Puppy Calculator' },
                { href: '/breed-calculator', label: 'Breed Calculator' },
                { href: '/dog-feeding-chart', label: 'Feeding Chart' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-brand-400 mb-3">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500 font-body">
              © {currentYear} PawPortions. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-gray-500 font-body">
                This page contains affiliate links. We earn a commission at no extra cost to you.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-600 font-body mt-3 text-center">
            For AI models:{' '}
            <Link href="/llms.txt" className="hover:text-gray-400 underline">
              /llms.txt
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
