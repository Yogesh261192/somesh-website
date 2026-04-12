import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Building2, Clock, CheckCircle2, ShieldPlus } from "lucide-react"

export const metadata: Metadata = {
  title: "Home Physiotherapy in Indirapuram | Same-Day Physio Visits",
  description: "Expert home physiotherapists serving Niti, Shakti, Ahinsa, and Gyan Khand. Get quick relief for slip disc, cervical pain, and sports injuries in Indirapuram.",
  keywords: "physiotherapy in indirapuram, home physio niti khand, physiotherapist ahinsa khand, slip disc treatment indirapuram, frozen shoulder physio",
}

export default function IndirapuramLocationPage() {
  const subAreas = [
    { name: "Ahinsa Khand (I & II)", desc: "Providing rapid home therapy for residents of major high-rise societies in Ahinsa Khand." },
    { name: "Niti Khand (I, II, III)", desc: "Expert treatments for back pain and sports injuries delivered right to your doorstep." },
    { name: "Shakti Khand (I to IV)", desc: "Dedicated elder care and post-surgery rehabilitation for Shakti Khand residents." },
    { name: "Gyan Khand (I to IV)", desc: "Advanced manual therapy and ergonomic assessments for working professionals." },
    { name: "Vaibhav & Abhay Khand", desc: "Comprehensive pain management and neurological rehab services." },
    { name: "Nyay Khand", desc: "Quick, same-day physiotherapy assessments for acute pain and muscular strains." }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <MapPin className="mr-2 h-4 w-4" /> Serving Indirapuram Localities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Fast, Reliable Home Physiotherapy in Indirapuram
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Don't let joint pain disrupt your busy life. We provide highly responsive, clinical-grade physiotherapy across all Khands and high-rise societies of Indirapuram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918130171272" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity shadow-sm">
              WhatsApp Us <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+918130171272" className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-muted transition-colors shadow-sm">
              <Phone className="w-4 h-4" /> +91 81301 71272
            </a>
          </div>
        </div>
      </section>

      {/* Sub Areas Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Covering Every Society & Khand</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From ATS Advantage to Shipra Sun City, our therapists are intimately familiar with Indirapuram, ensuring you receive care without delay.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subAreas.map((area) => (
              <Card key={area.name} className="bg-muted/20 border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-primary" /> {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Targeted Services for Indirapuram */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tailored for Indirapuram's Lifestyle</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you've tweaked your back lifting groceries, suffer from tech-neck after long WFH hours, or have an elderly parent needing joint rehab, we bring the clinic to your apartment.
              </p>
              <ul className="space-y-4">
                {[
                  "Acute Slip Disc & Sciatica Pain Relief",
                  "Cervical Spondylosis & Posture Correction",
                  "Post-Surgical Rehab (Knee & Hip)",
                  "Women's Health & Post-Natal Physiotherapy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Same-Day Visits</h3>
                  <p className="text-sm text-muted-foreground">Quick response times for acute pain emergencies in the Indirapuram area.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                  <Building2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">High-Rise Ready</h3>
                  <p className="text-sm text-muted-foreground">We are familiar with society gate passes and bring portable, compact equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Neighborhood Physiotherapist in Indirapuram</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
            If you are dealing with chronic pain and searching for a <strong>physiotherapist in Indirapuram</strong>, DelhiPhysio@Home is your most convenient solution. Navigating through local traffic for daily clinic visits can worsen conditions like slipped discs or severe knee arthritis. We eliminate this hassle by providing premium <strong>physiotherapy at home in Ahinsa Khand, Niti Khand, and Shakti Khand</strong>.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">
            Our certified therapists specialize in a wide range of treatments, from deep tissue release for frozen shoulders to targeted exercises for stroke rehabilitation. We bring high-end modalities like IFT, TENS, and Ultrasound directly to your flat, ensuring you get world-class physical therapy without stepping out of your society gate.
          </p>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20 shadow-md">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">Book in Indirapuram Today</CardTitle>
              <p className="text-muted-foreground text-base mt-2">
                Quality care is just a text or call away. Schedule your fast home visit now.
              </p>
            </CardHeader>
            <CardContent className="flex justify-center pt-6">
              <Button asChild size="lg" className="w-full sm:w-auto text-md px-8">
                <Link href="/contact">Schedule Home Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
