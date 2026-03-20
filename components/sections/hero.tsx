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
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <span className="text-sm font-medium text-primary">Trusted by 200+ Patients in Delhi NCR</span>
            </div>
            
            <h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Professional Home Physiotherapy in Delhi NCR
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Skip the clinic visits. Our certified physiotherapists come to your home, providing personalized treatment for faster recovery and lasting relief.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

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
          </div>

          <div className="relative lg:pl-8">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=600&fit=crop"
                alt="Doctor consulting with patient in physiotherapy"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg border border-border">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">5+</span>
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
