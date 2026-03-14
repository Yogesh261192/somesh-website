import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Target, Heart, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | PhysioCare Delhi NCR",
  description: "Learn about PhysioCare's mission to provide quality home physiotherapy services in Delhi NCR. Our certified physiotherapists bring expert care to your doorstep.",
}

const values = [
  {
    title: "Patient-Centered Care",
    description: "We put our patients first, ensuring every treatment plan is tailored to individual needs and goals.",
    icon: Heart,
  },
  {
    title: "Professional Excellence",
    description: "Our team consists of certified physiotherapists with advanced training and years of clinical experience.",
    icon: Award,
  },
  {
    title: "Accessibility",
    description: "We believe quality healthcare should be accessible to everyone, which is why we bring our services to your home.",
    icon: Users,
  },
  {
    title: "Result-Driven Approach",
    description: "We focus on measurable outcomes and continuous progress tracking for optimal recovery.",
    icon: Target,
  },
]

const stats = [
  { number: "2000+", label: "Patients Treated" },
  { number: "5+", label: "Years Experience" },
  { number: "6", label: "Cities Covered" },
  { number: "98%", label: "Satisfaction Rate" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About PhysioCare
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are a team of certified physiotherapists dedicated to providing quality home-based physiotherapy services across Delhi NCR. Our mission is to help patients recover comfortably without the hassle of traveling to clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                At PhysioCare, we believe that quality healthcare should be accessible and convenient for everyone. Many patients, especially the elderly and those recovering from surgery, find it difficult to travel to clinics regularly for their physiotherapy sessions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                That&apos;s why we bring professional physiotherapy services directly to your doorstep. Our certified physiotherapists use the same techniques and equipment as clinic-based therapy, ensuring you receive the same quality of care in the comfort of your home.
              </p>
              
              <ul className="mt-8 space-y-3">
                {[
                  "Eliminate travel stress and discomfort",
                  "Receive treatment in a familiar environment",
                  "Flexible scheduling to suit your routine",
                  "One-on-one personalized attention",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                      <Heart className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      Caring for You at Home
                    </p>
                    <p className="mt-2 text-muted-foreground">Professional care, personal touch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our approach to patient care.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 bg-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Experience the Difference?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book your first home physiotherapy session and see why thousands of patients trust PhysioCare for their recovery.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
