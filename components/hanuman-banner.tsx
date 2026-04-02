"use client"

import { useEffect, useState } from "react"

export function HanumanBanner() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const target = new Date(2026, 3, 3, 0, 0, 0) // April is monthIndex 3

    function check() {
      const now = new Date()
      if (now >= target) {
        setVisible(false)
      }
    }

    check()
    const timer = setInterval(check, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-yellow-600 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 sm:py-2.5 md:text-sm">
        <div>
          <strong className="mr-2 font-bold">🙏 Hanuman Janmotsav Ki Hardik Shubhkamnayein!</strong>
          Wish you strong health and pain-free living. Book Delhi NCR physiotherapy now and get same-day home care.
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/918130171272?text=Hi,%20I%20am%20interested%20in%20Hanuman%20Jayanti%20offer%20for%20physiotherapy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-white/20 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/40 sm:text-sm"
          >
            Book Now
          </a>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close Hanuman Jayanti banner"
            className="rounded bg-white/20 px-2 py-1 text-xs font-semibold text-white transition hover:bg-white/40"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
