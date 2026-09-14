"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Video } from "lucide-react"

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Our Team", href: "/#doctors" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
  { name: "Virtual Consult", href: "/virtual-consultation" },
  { name: "Partner With Us", href: "/partner-with-us" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* HEADER WRAPPER */}
      <div className="sticky top-0 z-50">
        {/* TOP STRIP - Deep Navy Matching 'Areas We Serve' */}
        <div className="w-full bg-[#102A43] text-white text-center text-[10px] sm:text-xs py-2 relative z-[9999]">
          Personalized Physiotherapy Care • At Home & Online Sessions Available
        </div>

        {/* HEADER */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo.webp"
                alt="Delhi Physio at Home"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="font-semibold text-lg tracking-tight text-[#102A43]">
                Delhi Physio <span className="text-[#1976D2]">at Home</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[15px] font-medium text-gray-700 hover:text-[#102A43] flex items-center gap-1 transition"
                >
                  {item.name === "Virtual Consult" && (
                    <Video className="w-4 h-4 text-gray-500" />
                  )}
                  {item.name}
                </Link>
              ))}

              {/* CTA - Deep Navy Button */}
              <a
                href="https://wa.me/918130171272"
                target="_blank"
                rel="noreferrer"
                className="bg-[#102A43] hover:bg-[#173a5e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
              >
                Book on WhatsApp
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setOpen(true)} className="lg:hidden text-gray-700">
              <Menu />
            </button>

          </div>
        </header>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-0 left-0 right-0 bg-white z-50 rounded-b-2xl shadow-lg">
            <div className="flex justify-between items-center px-4 py-4 border-b">
              <span className="font-bold text-[#102A43]">Menu</span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col p-4 gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 flex items-center gap-2 text-base"
                >
                  {item.name === "Virtual Consult" && (
                    <Video className="w-4 h-4 text-gray-500" />
                  )}
                  {item.name}
                </Link>
              ))}

              {/* MOBILE CTA */}
              <a
                href="https://wa.me/918130171272"
                target="_blank"
                rel="noreferrer"
                className="mt-2 bg-[#102A43] text-white py-3 rounded-xl text-center font-semibold"
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