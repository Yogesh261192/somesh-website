import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"

const highlights = [
  "Certified & Experienced Physiotherapists",
  "Home Visit Convenience",
  "Personalized Treatment Plans",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">Trusted by Patients Across Delhi NCR</span>
            </div>
            
            <h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Back Pain? Shoulder Pain? Get Relief at Home in Delhi NCR
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Book certified physiotherapist at home — same day visit available across Delhi NCR.
            </p>

            <p className="text-sm font-semibold text-foreground mt-2 max-w-xl">
              ⭐ Trusted by hundreds of patients across Delhi NCR | Most rated 5★ | Same Day Visit Available
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-3 max-w-xs">
              {['Back Pain', 'Neck Pain', 'Sciatica', 'Frozen Shoulder'].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-sm font-semibold text-primary mb-2">
              Book Your First Assessment Session at ₹500
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/contact">
                  <Phone className="h-4 w-4" />
                  Book Appointment
                </a>
              </Button>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Serving Delhi, Noida, Ghaziabad & Gurgaon
            </p>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <Image
                src="/hero-image.png"
                alt="Delhi Physio At Home - Home Visit Physiotherapy Session"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg border border-border">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">8+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Years Experience</p>
                  <p className="text-xs text-muted-foreground">Serving Delhi NCR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
