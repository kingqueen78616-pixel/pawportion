import AffiliateDisclosure from '@/components/layout/AffiliateDisclosure'
import FloatingCTA from '@/components/blog/FloatingCTA'
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AffiliateDisclosure />
          <div className="mt-6">
            {children}
          </div>
        </div>
      </main>
      <FloatingCTA />
      <Footer />
    </>
  )
}
