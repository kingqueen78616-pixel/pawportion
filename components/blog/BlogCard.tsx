import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  slug: string
  date: string
  readTime: string
  color?: string
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  readTime,
  color = 'from-brand-600 to-brand-800',
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-xl overflow-hidden shadow-sm
                 hover:shadow-md transition-shadow duration-200
                 border border-brand-100 bg-white"
    >
      {/* Color gradient header */}
      <div className={`bg-gradient-to-br ${color} h-24`} />

      {/* Content */}
      <div className="p-4">
        <p className="font-sans font-semibold text-brand-800 text-sm
                      leading-snug mb-2">
          {title}
        </p>
        <p className="text-xs text-gray-500 font-body leading-relaxed mb-3
                      line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-body">{date}</span>
          <span className="text-xs text-brand-600 font-body">{readTime}</span>
        </div>
      </div>
    </Link>
  )
}
