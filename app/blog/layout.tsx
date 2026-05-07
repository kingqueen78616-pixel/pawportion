import FloatingCTA from '@/components/blog/FloatingCTA'
import AffiliateDisclosure from '@/components/layout/AffiliateDisclosure'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="bg-brand-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <AffiliateDisclosure />
        </div>
        <div className="mt-6">
          {children}
        </div>
      </main>
      <FloatingCTA />
      <Footer />
    </>
  )
}
