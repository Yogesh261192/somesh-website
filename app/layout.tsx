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
  title: 'Delhi NCR |Indirapuram| Vasundhara | Professional Home Physiotherapy Services',
  description: 'Get expert physiotherapy treatment at your doorstep in Delhi, Noida, Gurgaon, and Ghaziabad. Certified physiotherapists for back pain, sports injuries, post-surgery rehab, and elderly care.',
  keywords: 'home physiotherapy Delhi, physiotherapist near me, back pain treatment, sports injury recovery, post surgery rehabilitation, elderly physiotherapy, Delhi NCR physiotherapy, physiotherapy vasundhara, physiotherapy ghaziabad, physiotherapy noida, physiotherapy indirapuram, physiotherapy raj nagar, physiotherapy vaishali, physiotherapist vasundhara, best physiotherapist ghaziabad, home physiotherapy service, physical therapy near me',
  generator: 'v0.app',
  openGraph: {
    title: 'delhiphysioathome Delhi NCR | Professional Home Physiotherapy Services',
    description: 'Get expert physiotherapy treatment at your doorstep. Certified physiotherapists for all your recovery needs.',
    type: 'website',
  },
  icons: {
    icon: [
      {url:'/favicon.ico'},
      // {
      //   url: '/icon-light-32x32.png',
      //   media: '(prefers-color-scheme: light)',
      // },
      // {
      //   url: '/icon-dark-32x32.png',
      //   media: '(prefers-color-scheme: dark)',
      // },
      // {
      //   url: '/icon.svg',
      //   type: 'image/svg+xml',
      // },
    ],
    apple: '/apple-touch-icon.png',
  },
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
