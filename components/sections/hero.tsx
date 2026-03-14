import { Button } from "@/components/ui/button"
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
              <span className="text-sm font-medium text-primary">Trusted by 2000+ Patients in Delhi NCR</span>
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
                  href="https://wa.me/918130717272?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session"
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
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                    <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>Expert Care at Your Home</p>
                  <p className="mt-2 text-muted-foreground">Professional physiotherapy without the hassle of travel</p>
                </div>
              </div>
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
