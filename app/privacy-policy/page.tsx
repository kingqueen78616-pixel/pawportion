import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Privacy Policy | PawPortions',
  description: 'PawPortions privacy policy. Learn how we collect, use, and protect your data including information about Google AdSense, Analytics, and affiliate programs.',
  alternates: {
    canonical: 'https://pawportions.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        <section className="bg-brand-950 text-white py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold
                           text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-brand-400 font-body text-base">
              Last updated: June 2026
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl border border-brand-100 p-8
                          flex flex-col gap-8 prose prose-green max-w-none
                          font-body">

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions operates the website pawportions.com. This
                Privacy Policy explains what information we collect, how
                we use it, and your rights regarding your data. By using
                PawPortions, you agree to the practices described in this
                policy.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                PawPortions does not require account registration and does
                not collect personally identifiable information directly.
                However, the following third-party services we use may
                collect data automatically:
              </p>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li>
                  <strong>Usage data:</strong> Pages visited, time on site,
                  browser type, device type, and referring URL — collected
                  automatically by Google Analytics.
                </li>
                <li>
                  <strong>Calculator inputs:</strong> Dog details entered
                  into our calculators are processed entirely in your
                  browser and are never sent to our servers.
                </li>
                <li>
                  <strong>Cookies:</strong> Used by Google AdSense for
                  ad personalisation and Google Analytics for traffic
                  measurement.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                3. Google Analytics (GA4)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use Google Analytics 4 to understand how visitors use
                PawPortions. Google Analytics collects information such as
                pages visited, session duration, and general geographic
                location (country level). This data is anonymous and
                aggregated. You can opt out of Google Analytics tracking
                by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-800"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                4. Google AdSense
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions displays advertisements served by Google
                AdSense. Google AdSense uses cookies to serve ads based
                on your prior visits to this website and other websites.
                {"Google's"} use of advertising cookies enables it and its
                partners to serve ads based on your visit to PawPortions
                and other sites on the internet. You may opt out of
                personalised advertising by visiting{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-800"
                >
                  Google Ads Settings
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                5. Affiliate Programs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                PawPortions participates in the following affiliate
                programs. When you click an affiliate link and make a
                purchase, we may earn a commission at no extra cost to you:
              </p>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li>
                  <strong>Chewy Associates Program:</strong> We earn
                  commissions on qualifying purchases made through
                  Chewy affiliate links. Chewy may use cookies to track
                  referrals. Cookie duration: 15 days.
                </li>
                <li>
                  <strong>Amazon Associates Program:</strong> We are a
                  participant in the Amazon Services LLC Associates Program,
                  an affiliate advertising program designed to provide a
                  means for sites to earn advertising fees by advertising
                  and linking to Amazon.com. Cookie duration: 24 hours.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                6. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions uses cookies for the following purposes:
                advertising personalisation (Google AdSense), traffic
                analytics (Google Analytics), and affiliate tracking
                (Chewy and Amazon). By continuing to use PawPortions,
                you consent to the use of these cookies. You can control
                cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                7. California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                California residents have the right to request information
                about personal data we share with third parties for their
                direct marketing purposes. If you are a California resident
                and wish to make such a request, or to opt out of the sale
                of your personal information, please contact us at
                pawportions@gmail.com. Please note that PawPortions does
                not sell personal information as defined under CCPA.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                8. GDPR (European Users)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you are located in the European Economic Area, you have
                certain rights regarding your personal data under the
                General Data Protection Regulation (GDPR), including the
                right to access, correct, or delete your data. To exercise
                these rights, contact us at pawportions@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                9. {"Children's"} Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions is not directed at children under the age of
                13. We do not knowingly collect personal information from
                children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We
                will notify users of significant changes by updating the
                date at the top of this page. Continued use of PawPortions
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl">
                11. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For privacy-related questions, contact us at:{' '}
                <a
                  href="mailto:pawportions@gmail.com"
                  className="text-brand-600 hover:text-brand-800"
                >
                  pawportions@gmail.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
