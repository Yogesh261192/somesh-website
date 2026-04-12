"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Our Team", href: "/#doctors" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const now = new Date()
    const isRamNavami = 
      now.getFullYear() === 2026 && 
      now.getMonth() === 2 && 
      now.getDate() === 26

    if (isRamNavami) {
      setShowBanner(true)
    }
  }, [])

  return (
    <>
      {/* Dynamic Ram Navami Banner */}
      {showBanner && (
        <div className="w-full bg-[#FF9933] py-2 px-4 text-center text-white font-semibold text-sm sm:text-base shadow-md">
          🙏 Shubh Ram Navami! May Lord Rama heal every pain and bless you with great health. ✨
        </div>
      )}

      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* ... Baaki ka logo aur nav code same rahega ... */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white overflow-hidden shadow-sm border border-border">
                <Image src="/assets/logo.png" alt="Delhi Physio At Home" width={40} height={40} className="h-full w-full object-cover" priority />
              </div>
              <span className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                DelhiPhysio@Home
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+918130171272" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href="https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* ... Mobile Menu Code ... */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 9998,
              backgroundColor: 'rgba(0,0,0,0.3)'
            }}
          />
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 9999,
            backgroundColor: 'white',
            borderRadius: '0 0 16px 16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
                <Image src="/assets/logo.png" alt="Delhi Physio At Home" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} priority />
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827' }}>DelhiPhysio@Home</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} style={{ padding: '8px', color: '#374151', background: 'none', border: 'none', cursor: 'pointer' }}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', padding: '8px 16px' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#111827',
                    borderRadius: '8px',
                    textDecoration: 'none'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div style={{
              padding: '12px 24px 20px',
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <a href="tel:+918130171272" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', padding: '11px',
                border: '1px solid #d1d5db',
                borderRadius: '8px', color: '#111827',
                fontWeight: '500', textDecoration: 'none'
              }}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '11px', backgroundColor: '#15803d',
                  color: 'white', borderRadius: '8px',
                  fontWeight: '500', textDecoration: 'none'
                }}
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}