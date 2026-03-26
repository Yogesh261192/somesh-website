import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

export const metadata: Metadata = {
  title: 'DelhiPhysio@Home | Expert Home Physiotherapy in Delhi NCR & Ghaziabad',
  description: 'Certified physiotherapists at your doorstep in Delhi, Noida, Gurgaon, and Ghaziabad. Specialist care for back pain, sports injuries, and post-surgery rehab.',
  keywords: 'home physiotherapy Delhi, physiotherapist near me, back pain treatment, sports injury recovery, post surgery rehabilitation, elderly physiotherapy, Delhi NCR physiotherapy, physiotherapy vasundhara, physiotherapy ghaziabad, physiotherapy noida, physiotherapy indirapuram',
  generator: 'DelhiPhysioAtHome',
  openGraph: {
    title: 'DelhiPhysio@Home | Professional Home Physiotherapy Services',
    description: 'Get expert physiotherapy treatment at your doorstep. Certified physiotherapists for all your recovery needs.',
    url: 'https://delhiphysioathome.com',
    siteName: 'DelhiPhysio@Home',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-JC5F20EXDT"
          strategy="afterInteractive"
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JC5F20EXDT');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}