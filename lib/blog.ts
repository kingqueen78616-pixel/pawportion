import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  keywords: string[]
  og_image: string
  author: string
  readTime: string
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '')
    const filePath = path.join(BLOG_DIR, file)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      keywords: data.keywords || [],
      og_image: data.og_image || '/og-image.png',
      author: data.author || 'PawPortions',
      readTime: data.readTime || '5 min read',
    } as BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    keywords: data.keywords || [],
    og_image: data.og_image || '/og-image.png',
    author: data.author || 'PawPortions',
    readTime: data.readTime || '5 min read',
    content,
  }
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}
