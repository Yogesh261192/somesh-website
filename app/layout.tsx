import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Delhi Physio at Home | Expert Home Physiotherapy in Delhi NCR & Ghaziabad',
  description: 'Certified physiotherapists at your doorstep in Delhi, Noida, Gurgaon, and Ghaziabad. Specialist care for back pain, sports injuries, and post-surgery rehab.',
  keywords: 'home physiotherapy Delhi, physiotherapist near me, back pain treatment, sports injury recovery, post surgery rehabilitation, elderly physiotherapy, Delhi NCR physiotherapy, physiotherapy vasundhara, physiotherapy ghaziabad, physiotherapy noida, physiotherapy indirapuram',
  generator: 'DelhiPhysioAtHome',
  openGraph: {
    title: 'Delhi Physio at Home | Professional Home Physiotherapy Services',
    description: 'Get expert physiotherapy treatment at your doorstep. Certified physiotherapists for all your recovery needs.',
    url: 'https://delhiphysioathome.com',
    siteName: 'Delhi Physio at Home',
    type: 'website',
  },
  icons: {
    icon: '/assets/logo.webp',
    shortcut: '/assets/logo.webp',
    apple: '/assets/logo.webp',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#2d6a4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>

        {/* Google Tag (Analytics + Ads) */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-10787773299"
          strategy="afterInteractive"
        />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Google Analytics
            gtag('config', 'G-JC5F20EXDT');

            // Google Ads
            gtag('config', 'AW-10787773299');
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Delhi Physio At Home",
            "image": "https://delhiphysioathome.com/assets/logo.webp",
            "@id": "https://delhiphysioathome.com",
            "url": "https://delhiphysioathome.com",
            "telephone": "+918130171272",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Savy Ville De, Raj Nagar Extension",
              "addressLocality": "Ghaziabad",
              "addressRegion": "UP",
              "postalCode": "201012",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.7058,
              "longitude": 77.4437
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "08:00",
              "closes": "19:30"
            },
            "sameAs": [
              "https://share.google/hd99r79Hofg1p2Hsd"
            ]
          })}
        </Script>

      </head>

      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-8 sm:pt-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}