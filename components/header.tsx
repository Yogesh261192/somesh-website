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
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed inset-0 z-[101] flex flex-col bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-100">
                  <img src="/favicon.ico" alt="delhiphysioathome" className="rounded-full" />
                </div>
                <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                  DelhiPhysio@Home
                </span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col px-6 py-4 gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-3 mt-auto">
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+918130171272" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button className="w-full" asChild>
                <a
                  href="https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
