import Calculator from '@/components/calculator/Calculator'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import MultiDogManager from '@/components/calculator/MultiDogManager'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">

        {/* HERO SECTION */}
        <section className="bg-brand-950 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-sans font-extrabold text-white leading-tight mb-4">
              Free Dog Calorie Calculator
            </h1>
            <p className="text-lg text-brand-400 font-body mb-6">
              Find out exactly how much to feed your dog — based on the vet-standard RER formula.
              Results in seconds. Free forever.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                '✅ Vet RER Formula',
                '🐾 180K+ Dogs Calculated',
                '🔒 No Signup Required',
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-brand-800 text-brand-100 text-xs font-sans font-semibold
                             px-4 py-2 rounded-full tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-12">

          {/* CALCULATOR SECTION */}
          <section aria-label="Dog calorie calculator">
            <Calculator />
          </section>

          {/* MULTI-DOG SECTION */}
          <section aria-label="Multi-dog household mode">
            <h2 className="text-2xl font-sans font-bold text-brand-800 mb-2 text-center">
              My Dogs — Multi-Dog Household Mode
            </h2>
            <p className="text-center text-gray-600 font-body mb-8">
              Calculate calories for up to 3 dogs in one session
            </p>
            <MultiDogManager />
          </section>

          {/* DIFFERENTIATORS */}
          <section aria-label="Unique features">
            <h2 className="text-2xl font-sans font-bold text-brand-800 mb-6 text-center">
              Features No Other Calculator Has
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: '🦴',
                  title: 'Treat Tracker',
                  desc: 'Deducts treat calories from your dog\'s daily food budget automatically.',
                },
                {
                  icon: '🏃',
                  title: 'Exercise Adder',
                  desc: 'Input walk minutes and get extra calories added to the daily target.',
                },
                {
                  icon: '📊',
                  title: 'BCS Body Score',
                  desc: 'Uses your dog\'s body condition score for a more accurate recommendation.',
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-xl p-5 shadow-sm border border-brand-100"
                >
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <h3 className="font-sans font-semibold text-brand-600 text-base mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-body leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section aria-label="How it works">
            <h2 className="text-2xl font-sans font-bold text-brand-800 mb-6 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Enter Details', desc: 'Weight, age, activity level and body condition score.' },
                { step: '2', title: 'Get Result', desc: 'Instant kcal calculation using the vet RER/MER formula.' },
                { step: '3', title: 'Feed With Confidence', desc: 'Morning and evening portions clearly laid out.' },
              ].map((s) => (
                <div key={s.step} className="flex flex-col items-center text-center p-5">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white
                                  font-sans font-extrabold text-xl flex items-center
                                  justify-center mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-sans font-semibold text-brand-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 font-body">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ SECTION */}
          <section aria-label="Frequently asked questions">
            <h2 className="text-2xl font-sans font-bold text-brand-800 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  q: 'How many calories does a dog need per day?',
                  a: 'Most adult dogs need 25–30 kcal per kg of body weight per day. This varies by age, activity level, and whether they are spayed or neutered. Use our calculator above for an exact figure.',
                },
                {
                  q: 'What is the RER formula for dogs?',
                  a: 'RER stands for Resting Energy Requirement. The formula is: RER = 70 × (body weight in kg)^0.75. This is the standard formula used by veterinarians worldwide.',
                },
                {
                  q: 'How much should I feed my dog per day?',
                  a: 'Feeding amount depends on the calorie density of your food. Divide your dog\'s daily kcal target by the kcal per cup shown on your food bag. Our calculator does this automatically.',
                },
                {
                  q: 'Does spaying or neutering affect calorie needs?',
                  a: 'Yes. Neutered dogs typically need about 10–15% fewer calories than intact dogs of the same size and activity level. Our calculator adjusts for this automatically.',
                },
                {
                  q: 'How do treats affect my dog\'s daily calories?',
                  a: 'Treats add up fast. Each small treat averages about 5 kcal. Our treat tracker deducts treat calories from your dog\'s kibble budget so you never overfeed.',
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white rounded-xl border border-brand-100 p-5 cursor-pointer
                             group open:shadow-md transition-shadow duration-200"
                >
                  <summary className="font-sans font-semibold text-brand-800 text-sm
                                      list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-brand-600 text-lg group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 font-body leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* BLOG GRID PLACEHOLDER */}
          <section aria-label="Latest articles">
            <h2 className="text-2xl font-sans font-bold text-brand-800 mb-6 text-center">
              Dog Nutrition Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'How Many Calories Does a Dog Need?', slug: 'dog-daily-calories', color: 'from-brand-600 to-brand-800' },
                { title: 'RER & MER Formula Explained', slug: 'rer-mer-formula', color: 'from-brand-800 to-brand-950' },
                { title: 'Senior Dog Calorie Guide', slug: 'senior-dog-calories', color: 'from-brand-400 to-brand-600' },
              ].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl overflow-hidden shadow-sm hover:shadow-md
                             transition-shadow duration-200 border border-brand-100"
                >
                  <div className={`bg-gradient-to-br ${post.color} h-24`} />
                  <div className="bg-white p-4">
                    <p className="font-sans font-semibold text-brand-800 text-sm leading-snug">
                      {post.title}
                    </p>
                    <p className="text-xs text-brand-600 mt-1 font-body">Read guide →</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              'name': 'Dog Calorie Calculator',
              'applicationCategory': 'HealthApplication',
              'operatingSystem': 'Web',
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'USD',
              },
              'description': 'Free dog calorie calculator using the RER/MER veterinary formula',
              'url': 'https://pawportions.com',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'How many calories does a dog need per day?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Most adult dogs need 25-30 kcal per kg of body weight per day. Use our free calculator above for an exact figure based on your dog\'s weight, age, and activity level.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'What is the RER formula for dogs?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'RER stands for Resting Energy Requirement. The formula is RER = 70 x (body weight in kg)^0.75. This is the standard formula used by veterinarians worldwide to calculate dog calorie needs.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'How much should I feed my dog per day?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Divide your dog\'s daily kcal target by the kcal per cup shown on your food bag. Our calculator does this automatically and shows morning and evening portions in cups.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'Does spaying or neutering affect calorie needs?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. Neutered dogs need approximately 10-15% fewer calories than intact dogs of the same size and activity level. Our calculator adjusts for this automatically.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'How do treats affect my dog\'s daily calories?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Each small treat averages about 5 kcal. Our treat tracker deducts treat calories from your dog\'s daily kibble budget automatically so you never overfeed.',
                  },
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  )
}
