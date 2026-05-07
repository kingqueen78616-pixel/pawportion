import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'
import AdUnit from '@/components/ads/AdUnit'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://pawportions.com/blog/${post.slug}`,
      images: [{ url: post.og_image }],
    },
    alternates: {
      canonical: `https://pawportions.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(params.slug, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: {
      '@type': 'Organization',
      name: 'PawPortions',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PawPortions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pawportions.com/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pawportions.com/blog/${post.slug}`,
    },
    description: post.description,
    image: post.og_image,
  }

  return (
    <article className="flex-1 min-w-0">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Post header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-sans font-extrabold
                       text-brand-950 leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 font-body">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
      </header>

      {/* Ad slot after para 2 */}
      <AdUnit slot="rectangle" className="my-6 mx-auto" />

      {/* MDX Content */}
      <div className="prose prose-green max-w-none font-body
                      prose-headings:font-sans prose-headings:text-brand-800
                      prose-a:text-brand-600 prose-strong:text-gray-900">
        <MDXRemote source={post.content} />
      </div>

      {/* Ad slot after para 5 */}
      <AdUnit slot="rectangle" className="my-6 mx-auto" />

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="font-sans font-bold text-brand-800 text-xl mb-4">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((related) => (
              <BlogCard
                key={related.slug}
                title={related.title}
                description={related.description}
                slug={related.slug}
                date={related.date}
                readTime={related.readTime}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
