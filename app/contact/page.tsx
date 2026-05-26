import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Contact PawPortions | Get in Touch',
  description: 'Contact the PawPortions team. We welcome feedback, bug reports, and partnership inquiries.',
  alternates: {
    canonical: 'https://pawportions.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        <section className="bg-brand-950 text-white py-6 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold
                           text-white mb-3">
              Contact Us
            </h1>
            <p className="text-brand-400 font-body text-base">
              We would love to hear from you.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl border border-brand-100 p-8
                          flex flex-col gap-8 max-w-xl mx-auto">

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-2xl mb-4">
                Get in Touch
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Have a question, found a bug, or want to suggest a
                feature? We read every message and respond within
                1–2 business days.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-4 bg-brand-50
                                rounded-lg border border-brand-100">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-sans font-semibold text-brand-800 text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:pawportions@gmail.com"
                      className="font-body text-brand-600 hover:text-brand-800
                                 transition-colors duration-200 text-sm"
                    >
                      pawportions@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                What to Include
              </h2>
              <ul className="flex flex-col gap-2 font-body text-gray-600 text-sm">
                {[
                  'Your dog breed, weight, and age (for calculation questions)',
                  'The page URL where you found an issue',
                  'Screenshots if reporting a visual bug',
                  'Your browser and device type',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-600 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                Partnership and Affiliate Inquiries
              </h2>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                For partnership, advertising, or affiliate inquiries,
                please email us at{' '}
                <a
                  href="mailto:pawportions@gmail.com"
                  className="text-brand-600 hover:text-brand-800"
                >
                  pawportions@gmail.com
                </a>{' '}
                with the subject line Partnership Inquiry.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
