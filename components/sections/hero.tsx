import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Star, Video, MessageSquare, ShieldCheck, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background border-b border-border/50 py-12 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Clinical Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Verified Clinical Care Across Delhi NCR
              </span>
            </div>
            
            {/* Selected Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.03em] text-foreground leading-[1.15]">
              Recover Comfortably. <br className="hidden sm:inline" />
              <span className="text-primary">Physiotherapy at Your Home.</span>
            </h1>
            
            {/* Selected Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
              Senior physiotherapists visit your doorstep with specialized rehab equipment. Tailored care for back pain, post-surgery recovery, and neurological rehab across Delhi NCR.
            </p>

            {/* Trust Rating Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                5.0 Rated
              </span>
              <span className="text-muted-foreground text-sm">|</span>
              <span className="text-sm text-muted-foreground font-medium">
                1,500+ Patients Treated Across Delhi, Noida & Ghaziabad
              </span>
            </div>

            {/* Conditions Treated Grid */}
            <div className="w-full pt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Key Specializations
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
                {['Back Pain', 'Neck & Cervical', 'Sciatica Relief', 'Frozen Shoulder'].map((item) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-foreground shadow-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/918130171272"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm shadow-sm hover:opacity-95 transition"
              >
                <MessageSquare className="h-4 w-4" />
                Book Home Visit on WhatsApp
              </a>

              <Link
                href="/virtual-consultation"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground hover:bg-muted/50 px-6 py-3.5 rounded-xl font-semibold text-sm shadow-sm transition"
              >
                <Video className="h-4 w-4 text-muted-foreground" />
                Video Consultation
              </Link>
            </div>

            {/* Location Indicator */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
              <MapPin className="h-3.5 w-3.5 text-primary/70 shrink-0" />
              <span>Direct visits available in Delhi, Noida, Greater Noida, Ghaziabad & Gurgaon</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
                <Image
                  src="/hero-image.webp"
                  alt="Senior physiotherapist providing home rehabilitation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Clinical Experience Badge */}
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-card p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3.5">
                  <div className="h-11 w-11 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-lg font-bold">8+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Years Experience</p>
                    <p className="text-xs text-muted-foreground">Ortho, Neuro & Post-Op Care</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}