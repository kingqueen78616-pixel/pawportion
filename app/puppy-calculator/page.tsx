import Calculator from '@/components/calculator/Calculator'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Puppy Feeding Calculator | Age & Weight | PawPortions',
  description: 'Calculate exactly how much to feed your puppy by age and weight. Based on vet RER formula. Free, instant, no signup.',
}

export default function PuppyCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        {/* Hero */}
        <section className="bg-brand-950 text-white py-6 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-white mb-3">
              Puppy Feeding Calculator
            </h1>
            <p className="text-brand-400 font-body text-base">
              How much should I feed my puppy? Get an instant answer
              based on age, weight and activity level.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">

          {/* Info box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-yellow-800 font-body">
              🐶 <strong>Puppy tip:</strong> Puppies need 2–3x more calories
              per kg than adult dogs. Select the correct puppy life stage
              below for an accurate result.
            </p>
          </div>

          {/* Calculator */}
          <section aria-label="Puppy calorie calculator">
            <Calculator />
          </section>

          {/* Puppy feeding guide */}
          <section className="bg-white rounded-xl border border-brand-100 p-6">
            <h2 className="font-sans font-bold text-brand-800 text-xl mb-4">
              Puppy Feeding Guide by Age
            </h2>
            <div className="flex flex-col gap-3">
              {[
                { age: '6–12 weeks', meals: '4 meals/day', note: 'Very frequent feeding needed' },
                { age: '3–6 months', meals: '3 meals/day', note: 'Growing fast — high calorie needs' },
                { age: '6–12 months', meals: '2 meals/day', note: 'Transitioning to adult schedule' },
                { age: '12+ months', meals: '2 meals/day', note: 'Switch to adult food formula' },
              ].map((row) => (
                <div
                  key={row.age}
                  className="flex items-center justify-between p-3 bg-brand-50
                             rounded-lg border border-brand-100"
                >
                  <div>
                    <p className="font-sans font-semibold text-brand-800 text-sm">{row.age}</p>
                    <p className="text-xs text-gray-500 font-body">{row.note}</p>
                  </div>
                  <span className="text-sm font-bold text-brand-600 font-sans">
                    {row.meals}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
