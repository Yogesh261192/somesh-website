import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Activity, Heart, Stethoscope, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Home Physiotherapy in Delhi | Best Physio At Home in South, East & West Delhi",
  description: "Skip Delhi traffic. Get clinical-grade home physiotherapy across South Delhi, Preet Vihar, Punjabi Bagh, and more. Expert treatment for back pain, strokes & post-surgery.",
  keywords: "physiotherapy in delhi, home physio south delhi, best physiotherapist vasant vihar, back pain treatment delhi, physio at home punjabi bagh",
}

export default function DelhiLocationPage() {
  const subAreas = [
    { name: "South Delhi", desc: "Serving Vasant Vihar, Hauz Khas, Greater Kailash, Defence Colony, and Saket with premium care." },
    { name: "East Delhi & Shahdara", desc: "Rapid home visits across Preet Vihar, Laxmi Nagar, Mayur Vihar, and surrounding regions." },
    { name: "West Delhi", desc: "Comprehensive rehab services in Punjabi Bagh, Rajouri Garden, Janakpuri, and Dwarka." },
    { name: "North Delhi", desc: "Expert physical therapy spanning Pitampura, Rohini, Model Town, and Civil Lines." },
    { name: "Central Delhi", desc: "Discreet and professional therapy for residents in Connaught Place, Karol Bagh, and nearby." },
    { name: "New Delhi Region", desc: "Serving diplomats, government officials, and residents in the heart of the capital." }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <MapPin className="mr-2 h-4 w-4" /> Serving All of Delhi
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Beat the Traffic. Get Expert Physiotherapy at Home in Delhi.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Traveling through Delhi's notorious traffic with a backache or fresh joint replacement is agonizing. We bring clinical-grade, personalized rehabilitation directly to your doorstep, anywhere in the capital.
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
            <h2 className="text-3xl font-bold mb-4">Extensive Coverage Across the Capital</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the quiet lanes of South Delhi to the bustling neighborhoods of East and West Delhi, our certified therapists are never too far away.
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

      {/* Targeted Services for Delhi */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Care for Delhiites</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Life in Delhi is fast-paced. Whether you're a senior citizen recovering from a stroke in Greater Kailash, or a young professional dealing with a slipped disc in Dwarka, our treatments are designed around your specific lifestyle.
              </p>
              <ul className="space-y-4">
                {[
                  "Post-Surgical Rehabilitation (Knee & Hip Replacement)",
                  "Neurological Care (Stroke, Parkinson's, Paralysis)",
                  "Severe Back Pain & Sciatica Relief",
                  "Sports Injury Recovery for Active Individuals"
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
                  <Activity className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Modern Equipment</h3>
                  <p className="text-sm text-muted-foreground">We carry portable IFT, TENS, and Ultrasound machines to your home.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                  <Stethoscope className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Certified Experts</h3>
                  <p className="text-sm text-muted-foreground">Highly qualified BPT/MPT physiotherapists with clinical experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Home Physiotherapy is Crucial in Delhi</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
            Finding a reliable <strong>physiotherapist in Delhi</strong> can be overwhelming. The city's vast geography and heavy traffic make daily clinical visits stressful, often aggravating the very pain you're trying to cure. DelhiPhysio@Home solves this by offering a premium <strong>physiotherapy at home service in Delhi</strong>. Our expert team covers everything from <em>frozen shoulder treatment in West Delhi</em> to <em>elderly mobility care in South Delhi</em>. 
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">
            We specialize in treating chronic conditions like cervical spondylosis, lumbar radiculopathy (sciatica), and joint arthritis. If you or a loved one has recently undergone an orthopedic surgery at major Delhi hospitals, our <strong>post-operative home rehabilitation</strong> ensures a safe, infection-free, and rapid recovery right in your living room.
          </p>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20 shadow-md">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">Start Your Recovery in Delhi Today</CardTitle>
              <p className="text-muted-foreground text-base mt-2">
                Don't let pain dictate your life. Schedule a professional home assessment now.
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
