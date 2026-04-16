import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">
                Trusted by Patients Across Delhi NCR
              </span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Physiotherapy at Home or Online - Start Recovering Today
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Book physiotherapy at home or consult online via video call.  
              Same-day visits available across Delhi NCR.
            </p>

            {/* Trust line */}
            <p className="text-sm font-semibold text-foreground max-w-xl">
              ⭐ 5★ Rated | Delhi, Noida & Ghaziabad | Trusted by 1500+ Patients
            </p>

            {/* Conditions */}
            <ul className="grid grid-cols-2 gap-3 max-w-xs">
              {['Back Pain', 'Neck Pain', 'Sciatica', 'Frozen Shoulder'].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Heading */}
            <p className="text-sm font-medium text-foreground">
              Choose how you want your treatment:
            </p>

            {/* 🔥 CTA BUTTONS */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <a
                href="https://wa.me/918130171272"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-center font-semibold shadow-md hover:scale-[1.02] transition"
              >
                Book Home Visit 
              </a>

              <a
                href="/virtual-consultation"
    className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-center font-semibold shadow-md hover:scale-[1.02] transition flex-1"
              >
                Video Consultation 
              </a>

            </div>

            {/* Location */}
            <p className="text-sm text-muted-foreground">
              Serving Delhi, Noida, Ghaziabad & Gurgaon
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:pl-8">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/hero-image.webp"
                alt="Home Physiotherapy Session"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg border">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">8+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Years Experience</p>
                  <p className="text-xs text-muted-foreground">Delhi NCR</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}