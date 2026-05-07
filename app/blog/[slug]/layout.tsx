import BlogSidebar from '@/components/blog/BlogSidebar'

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        {children}
      </div>
      <BlogSidebar />
    </div>
  )
}
