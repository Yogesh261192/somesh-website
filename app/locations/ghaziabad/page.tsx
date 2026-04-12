import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Home, HeartPulse, CheckCircle2, UserPlus } from "lucide-react"

export const metadata: Metadata = {
  title: "Home Physiotherapy in Ghaziabad | Best Physio At Home Services",
  description: "Top-rated home physiotherapy in Ghaziabad. Serving Kavi Nagar, Vaishali, Vasundhara & Crossings Republik for knee rehab, sciatica, and elderly care.",
  keywords: "physiotherapy in ghaziabad, home physio near me ghaziabad, physiotherapist kavi nagar, back pain treatment ghaziabad, knee replacement rehab ghaziabad",
}

export default function GhaziabadLocationPage() {
  const subAreas = [
    { name: "Vaishali & Kaushambi", desc: "Expert home physiotherapy for residents near the Delhi border, providing quick pain relief." },
    { name: "Vasundhara", desc: "Serving Sectors 1 to 19 with dedicated post-surgery rehab and elderly mobility care." },
    { name: "Indirapuram", desc: "Fast, same-day visits for IT professionals and families living in Indirapuram societies." },
    { name: "Raj Nagar & Kavi Nagar", desc: "Premium physical therapy for chronic back pain, stroke recovery, and arthritis management." },
    { name: "Crossings Republik", desc: "Comprehensive sports injury and orthopedic rehabilitation directly in your high-rise." },
    { name: "Sanjay Nagar & Govindpuram", desc: "Reliable and affordable home care visits for all musculoskeletal conditions." }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <MapPin className="mr-2 h-4 w-4" /> Serving Ghaziabad
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Trusted Home Physiotherapy for Ghaziabad Families
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Skip the NH-24 traffic and crowded clinics. We deliver compassionate, clinical-grade physical therapy directly to your home, ensuring faster recovery for you and your loved ones.
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
            <h2 className="text-3xl font-bold mb-4">Deep Coverage Across Ghaziabad</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Because our core base is in Ghaziabad, we ensure prompt, reliable, and consistent home visits across all major sectors and colonies.
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

      {/* Targeted Services for Ghaziabad */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Dedicated Care for Elders & Families</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ghaziabad is home to many multi-generational families. We specialize in providing gentle, highly effective physiotherapy for senior citizens, alongside robust pain management for working adults.
              </p>
              <ul className="space-y-4">
                {[
                  "Knee & Hip Replacement Home Rehabilitation",
                  "Stroke & Paralysis Recovery Programs",
                  "Chronic Back Pain & Sciatica Treatment",
                  "Frozen Shoulder & Joint Stiffness Care"
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
                  <HeartPulse className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Elderly Focus</h3>
                  <p className="text-sm text-muted-foreground">Fall prevention and mobility enhancement exercises tailored for older adults.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                  <UserPlus className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Family Trusted</h3>
                  <p className="text-sm text-muted-foreground">Hundreds of Ghaziabad families trust us for compassionate, hygienic home care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Local Physiotherapy Experts in Ghaziabad</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
            When looking for the <strong>best physiotherapist in Ghaziabad</strong>, convenience and expertise matter most. Transporting a patient with severe back pain or a recent knee surgery through city traffic can delay healing. DelhiPhysio@Home provides complete <strong>physiotherapy at home in Ghaziabad</strong>, covering every major hub from Vaishali and Vasundhara to Kavi Nagar and Crossings Republik.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">
            Our clinical team arrives fully equipped with advanced modalities like TENS, ultrasound, and manual therapy tools. We specialize in treating <strong>cervical spondylosis</strong>, frozen shoulder, ligament injuries, and neurological conditions like stroke. Experience hospital-grade rehabilitation in the safety and comfort of your own bedroom.
          </p>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20 shadow-md">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">Ready for a Pain-Free Life?</CardTitle>
              <p className="text-muted-foreground text-base mt-2">
                Book your Ghaziabad home visit today and start recovering comfortably.
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