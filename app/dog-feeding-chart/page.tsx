import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Dog Feeding Chart 2026 | Free PDF | PawPortions',
  description: 'Free dog feeding chart by weight and life stage. Download as PDF. Updated 2026 data based on vet RER formula.',
}

const FEEDING_DATA = [
  { weight: '2 kg', puppy: '165', adult: '105', senior: '90' },
  { weight: '5 kg', puppy: '320', adult: '205', senior: '175' },
  { weight: '10 kg', puppy: '540', adult: '345', senior: '295' },
  { weight: '15 kg', puppy: '730', adult: '465', senior: '400' },
  { weight: '20 kg', puppy: '900', adult: '575', senior: '495' },
  { weight: '25 kg', puppy: '1,060', adult: '675', senior: '580' },
  { weight: '30 kg', puppy: '1,210', adult: '770', senior: '660' },
  { weight: '35 kg', puppy: '1,350', adult: '860', senior: '740' },
  { weight: '40 kg', puppy: '1,480', adult: '945', senior: '810' },
  { weight: '50 kg', puppy: '1,740', adult: '1,110', senior: '955' },
]

export default function DogFeedingChartPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        {/* Hero */}
        <section className="bg-brand-950 text-white py-6 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-white mb-3">
              Dog Feeding Chart by Weight & Life Stage (2026)
            </h1>
            <p className="text-brand-400 font-body text-base">
              Quick reference kcal/day by weight. For exact portions,
              use our free calculator below.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">

          {/* Chart table */}
          <section className="bg-white rounded-xl border border-brand-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-950 text-white">
                    <th className="p-4 text-left font-sans font-semibold">Weight</th>
                    <th className="p-4 text-center font-sans font-semibold">🐶 Puppy</th>
                    <th className="p-4 text-center font-sans font-semibold">🐕 Adult</th>
                    <th className="p-4 text-center font-sans font-semibold">🦮 Senior</th>
                  </tr>
                </thead>
                <tbody>
                  {FEEDING_DATA.map((row, i) => (
                    <tr
                      key={row.weight}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50'}
                    >
                      <td className="p-4 font-sans font-bold text-brand-800">
                        {row.weight}
                      </td>
                      <td className="p-4 text-center text-gray-700 font-body">
                        {row.puppy} kcal
                      </td>
                      <td className="p-4 text-center text-gray-700 font-body">
                        {row.adult} kcal
                      </td>
                      <td className="p-4 text-center text-gray-700 font-body">
                        {row.senior} kcal
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA to calculator */}
          <div className="text-center">
            <p className="text-sm text-gray-500 font-body mb-3">
              Need exact portions including cups, treats and exercise?
            </p>
            <Link
              href="/"
              className="inline-block bg-brand-600 hover:bg-brand-800 text-white
                         font-sans font-bold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Use the Free Calculator →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
