import Calculator from '@/components/calculator/Calculator'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Dog Food Calculator by Breed | PawPortions',
  description: 'Calculate your dog daily calories and portions by breed. Tailored nutrition for every breed size. Free and instant.',
}

const BREED_SIZES = [
  { size: 'Toy', weight: '1–5 kg', examples: 'Chihuahua, Pomeranian, Yorkshire Terrier', kcal: '150–300' },
  { size: 'Small', weight: '5–10 kg', examples: 'Beagle, Shih Tzu, Pug', kcal: '300–500' },
  { size: 'Medium', weight: '10–25 kg', examples: 'Labrador, Border Collie, Bulldog', kcal: '500–900' },
  { size: 'Large', weight: '25–45 kg', examples: 'German Shepherd, Golden Retriever', kcal: '900–1,500' },
  { size: 'Giant', weight: '45kg+', examples: 'Great Dane, Saint Bernard, Mastiff', kcal: '1,500–2,500' },
]

export default function BreedCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        {/* Hero */}
        <section className="bg-brand-950 text-white py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-white mb-3">
              Dog Food Calculator by Breed
            </h1>
            <p className="text-brand-400 font-body text-base">
              Tailored daily calorie and portion calculations for every
              breed size — from Chihuahua to Great Dane.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">

          {/* Breed size reference table */}
          <section className="bg-white rounded-xl border border-brand-100 p-6">
            <h2 className="font-sans font-bold text-brand-800 text-xl mb-4">
              Calorie Needs by Breed Size
            </h2>
            <div className="flex flex-col gap-2">
              {BREED_SIZES.map((b) => (
                <div
                  key={b.size}
                  className="grid grid-cols-4 gap-2 p-3 bg-brand-50
                             rounded-lg border border-brand-100 text-sm"
                >
                  <span className="font-sans font-bold text-brand-600">{b.size}</span>
                  <span className="text-gray-500 font-body">{b.weight}</span>
                  <span className="text-gray-400 font-body text-xs col-span-1 hidden sm:block">
                    {b.examples}
                  </span>
                  <span className="font-bold text-brand-800 font-sans text-right">
                    {b.kcal} kcal
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Calculator */}
          <section aria-label="Breed dog calorie calculator">
            <Calculator />
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
