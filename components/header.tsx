"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Our Team", href: "/#doctors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <img src="/favicon.ico" alt="delhiphysioathome" className="rounded-full" />
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 'auto',
height: '700px',
overflow: 'hidden',
borderradius: '0 0 12px 12px',
          zIndex: 9999,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Top bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setMobileMenuOpen(false)}>
              <img src="/favicon.ico" alt="DelhiPhysio@Home" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>DelhiPhysio@Home</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} style={{ padding: '8px', color: '#374151' }}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: '4px' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '12px',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#111827',
                  borderRadius: '8px'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div style={{
            marginTop: 'auto',
            padding: '16px 24px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <a href="tel:+918130171272" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', padding: '12px', border: '1px solid #e5e7eb',
              borderRadius: '8px', color: '#111827', fontWeight: '500',
              textDecoration: 'none'
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
                padding: '12px', backgroundColor: '#15803d',
                color: 'white', borderRadius: '8px', fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}
