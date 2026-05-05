import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dog Calorie Calculator | Free & Instant | PawPortions',
  description: 'Calculate your dog\'s exact daily calories and portions in seconds. Based on the vet RER formula. Free forever, no signup.',
  metadataBase: new URL('https://pawportions.com'),
  openGraph: {
    title: 'Free Dog Calorie Calculator — Instant Kcal & Portions',
    description: 'Find out exactly how much to feed your dog. Based on vet-standard RER formula. Results in 10 seconds. Free.',
    url: 'https://pawportions.com',
    siteName: 'PawPortions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Dog Calorie Calculator | PawPortions',
    description: 'Calculate your dog\'s exact daily calories in seconds. Free, no signup.',
  },
}

export const viewport = {
  themeColor: '#16A34A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID
  const enableAds = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true'
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-brand-50 text-gray-900 antialiased">
        {children}

        {/* Google Analytics GA4 */}
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}

        {/* Google AdSense */}
        {enableAds && adsenseId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
