import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Target, Heart, Award, Zap, Calendar, MapPin, Smile } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Delhi Physio At Home — Home Physiotherapy in Ghaziabad & Delhi NCR",
  description: "Delhi Physio At Home provides expert physiotherapist home visits in Ghaziabad, Indirapuram, Raj Nagar, Noida & Delhi NCR. Certified physios, same-day booking available.",
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
  { number: "2000+", label: "Patients Recovered", icon: Zap },
  { number: "8+", label: "Years Experience", icon: Calendar },
  { number: "6+", label: "Key Regions Covered", icon: MapPin },
  { number: "98%", label: "Satisfaction Rate", icon: Smile },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section - Redesigned with Big Image */}
      <section className="relative bg-background pt-16 sm:pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Side */}
            <div className="space-y-6 max-w-2xl md:max-w-none">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Trusted Home Physiotherapy Partner
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
                About Delhi Physio At Home
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skip the clinic queue. We are a premier team of certified physiotherapists across Delhi NCR, committed to delivering clinical-grade rehabilitation right in the familiar comfort of your own home.
              </p>
            </div>

            {/* Precision Image Side - Updated */}
            <div className="relative h-[350px] md:h-[450px] w-full mt-10 md:mt-0">
              <div className="absolute inset-0 rounded-t-3xl md:rounded-3xl border border-border/50 shadow-2xl overflow-hidden shadow-primary/10">
                <Image
                  src="/assets/services/about-precise-home.jpg"
                  alt="Certified Physiotherapist from Delhi Physio At Home performs soft tissue mobilization on an older patient in a Ghaziabad home, showcasing high-quality clinical rehabilitation visits in Delhi NCR" // SEO-friendly Alt Text
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Subtle background glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-primary text-primary-foreground py-16 z-10 shadow-inner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-primary-foreground/20">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-6">
                <stat.icon className="h-8 w-8 mb-4 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-4xl md:text-5xl font-extrabold mb-1 leading-none tracking-tight">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base font-semibold text-primary-foreground/90 uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/30 py-16 sm:py-24 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                  We aim to democratize access to premium physiotherapy. For the elderly or post-op patients, traveling is often a bigger pain than the condition itself. We eliminate that barrier, providing clinical expertise and advanced techniques, personalized one-on-one, on your own terms.
              </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-background p-8 rounded-3xl shadow-sm border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Why We Choose Your Home:</h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "100% Focused One-on-One Attention",
                "Zero Travel Stress & Traffic Discomfort",
                "Clinical Techniques in a Safe Environment",
                "Family Inclusion in Rehabilitation",
                "Flexible Same-Day Booking Option",
                "Measure Progress in Daily Comfort"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Our Core Principles
            </h2>
            <p className="text-lg text-muted-foreground">
              These unwavering values guide every in-home session, ensuring consistent recovery success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 bg-card group hover:bg-muted/20 hover:scale-[1.03] transition-all shadow-sm">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors shadow-inner">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 sm:py-24 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto bg-background p-10 md:p-14 rounded-3xl shadow-lg border border-border/50 shadow-primary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-60" />
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 leading-tight relative z-10">
              Recover Faster. Travel Less.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed relative z-10">
              Join thousands who chose comfortable, expert home visits over clinic commutes. Book your initial assessment right now on WhatsApp.
            </p>
            <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2.5 h-12 px-9 text-base shadow-sm" asChild>
                <a
                  href="https://wa.me/918130171272?text=Hi,%20I'm%20looking%20to%20book%20a%20physio%20session"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Booking on WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}