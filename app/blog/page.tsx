import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'

export const metadata = {
  title: 'Dog Nutrition Blog | PawPortions',
  description: 'Expert guides on dog nutrition, calorie needs, feeding schedules and more. Based on vet-standard formulas.',
  alternates: {
    canonical: 'https://pawportions.com/blog',
  },
}

const CARD_COLORS = [
  'from-brand-600 to-brand-800',
  'from-brand-800 to-brand-950',
  'from-brand-400 to-brand-600',
  'from-brand-600 to-brand-400',
  'from-brand-950 to-brand-800',
  'from-brand-400 to-brand-800',
]

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-950 text-white py-6 px-4
                          -mx-4 sm:-mx-6 lg:-mx-8 -mt-6 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold
                         text-white mb-3">
            Dog Nutrition Blog
          </h1>
          <p className="text-brand-400 font-body text-base">
            Vet-standard guides on feeding, calories, and nutrition
            for every dog breed and life stage.
          </p>
        </div>
      </section>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 font-body">
            Blog posts coming soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              slug={post.slug}
              date={post.date}
              readTime={post.readTime}
              color={CARD_COLORS[index % CARD_COLORS.length]}
            />
          ))}
        </div>
      )}
    </>
  )
}
