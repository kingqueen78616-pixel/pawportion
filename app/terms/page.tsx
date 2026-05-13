import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Terms of Service | PawPortions',
  description: 'PawPortions terms of service. Read our terms before using the free dog calorie calculator and nutrition tools.',
  alternates: {
    canonical: 'https://pawportions.com/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        <section className="bg-brand-950 text-white py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold
                           text-white mb-3">
              Terms of Service
            </h1>
            <p className="text-brand-400 font-body text-base">
              Last updated: June 2026
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl border border-brand-100 p-8
                          flex flex-col gap-8 font-body">

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using PawPortions at pawportions.com,
                you agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions provides free online dog calorie and nutrition
                calculators based on veterinary formulas. Our tools are
                provided for informational purposes only and do not
                constitute veterinary advice.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                3. No Veterinary Advice
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The information and tools provided by PawPortions are for
                general informational purposes only. They are not a
                substitute for professional veterinary advice, diagnosis,
                or treatment. Always seek the advice of your veterinarian
                with any questions regarding your {"dog's"} health or diet.
                Never disregard professional veterinary advice because of
                something you have read or calculated on PawPortions.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                4. Accuracy of Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide accurate calculations based on
                established veterinary formulas, PawPortions makes no
                warranties about the accuracy, completeness, or suitability
                of the information provided. Individual dogs may vary
                significantly from calculated averages.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                5. Affiliate Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions participates in affiliate programs including
                the Chewy Associates Program and Amazon Associates Program.
                We earn commissions on qualifying purchases made through
                affiliate links on this site, at no additional cost to you.
                Our editorial content is not influenced by these
                relationships.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                6. Advertising
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions displays advertisements served by Google
                AdSense. We do not control the content of these
                advertisements. By using PawPortions, you acknowledge
                that advertisements may be displayed on the website.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                7. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All content on PawPortions — including text, graphics,
                logos, and software — is the property of PawPortions and
                is protected by applicable intellectual property laws.
                You may not reproduce, distribute, or create derivative
                works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PawPortions shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                arising from your use of our website or tools. Our total
                liability for any claim related to our service shall not
                exceed the amount you paid to use our service (which is
                zero, as PawPortions is free).
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                9. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at
                any time. Changes will be effective immediately upon
                posting. Your continued use of PawPortions after changes
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-xl mb-3">
                10. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms of Service, contact us at:{' '}
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
