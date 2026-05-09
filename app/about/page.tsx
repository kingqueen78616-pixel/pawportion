import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'About PawPortions | Free Dog Calorie Calculator',
  description: 'Learn about PawPortions — a free dog calorie calculator built on vet-standard RER/MER formulas to help dog owners feed their pets right every day.',
  alternates: {
    canonical: 'https://pawportions.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        <section className="bg-brand-950 text-white py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold
                           text-white mb-3">
              About PawPortions
            </h1>
            <p className="text-brand-400 font-body text-base">
              Free dog nutrition tools built on vet-standard science.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl border border-brand-100 p-8
                          flex flex-col gap-8">

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-2xl mb-4">
                What is PawPortions?
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-3">
                PawPortions is a free online dog calorie and nutrition
                calculator. Our tools help dog owners calculate exactly
                how much to feed their dogs every day — based on the
                same RER and MER formulas used by veterinarians worldwide.
              </p>
              <p className="font-body text-gray-700 leading-relaxed">
                We built PawPortions because existing dog feeding tools
                are outdated, biased toward specific brands, or too
                technical for everyday dog owners. Our goal is to make
                accurate dog nutrition accessible to everyone — for free,
                forever, with no signup required.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-2xl mb-4">
                Our Tools
              </h2>
              <ul className="flex flex-col gap-3 font-body text-gray-700">
                {[
                  {
                    name: 'Dog Calorie Calculator',
                    desc: 'Calculate daily kcal and cup portions for any adult dog.',
                  },
                  {
                    name: 'Puppy Feeding Calculator',
                    desc: 'Puppy-specific calorie targets by age and weight.',
                  },
                  {
                    name: 'Breed Calculator',
                    desc: 'Tailored calorie calculations for 200+ breeds.',
                  },
                  {
                    name: 'Dog Feeding Chart',
                    desc: 'Quick reference calorie chart by weight and life stage.',
                  },
                ].map((tool) => (
                  <li key={tool.name} className="flex gap-3">
                    <span className="text-brand-600 font-bold mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-brand-800">
                        {tool.name}:
                      </span>{' '}
                      {tool.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-2xl mb-4">
                Our Formula
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-3">
                All PawPortions calculations are based on the
                RER/MER formula endorsed by the World Small Animal
                Veterinary Association (WSAVA):
              </p>
              <div className="bg-brand-50 rounded-lg p-4 font-mono text-sm
                              text-blue-700 border border-brand-100">
                <p>RER = 70 x (body weight in kg)^0.75</p>
                <p className="mt-1">MER = RER x Life Stage Factor</p>
              </div>
              <p className="font-body text-gray-500 text-sm mt-3">
                This is the same formula taught in veterinary schools
                and used in clinical practice worldwide.
              </p>
            </section>

            <section>
              <h2 className="font-sans font-bold text-brand-800 text-2xl mb-4">
                Disclaimer
              </h2>
              <p className="font-body text-gray-700 leading-relaxed">
                PawPortions provides general nutritional guidance based
                on standard veterinary formulas. Our tools are not a
                substitute for professional veterinary advice. Always
                consult your veterinarian before making significant
                changes to your {"dog's"} diet, especially if your dog has
                a medical condition.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
