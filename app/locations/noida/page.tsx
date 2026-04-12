import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Laptop, Zap, ShieldCheck, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Home Physiotherapy in Noida & Greater Noida | Expert Physio At Home",
  description: "Specialized home physiotherapy for Noida's IT professionals & residents. Serving Sector 62, 137, Noida Extension & Greater Noida for back pain and post-op care.",
  keywords: "physiotherapy in noida, home physio greater noida, physiotherapist noida extension, cervical pain treatment noida, back pain physio sector 62",
}

export default function NoidaLocationPage() {
  const subAreas = [
    { name: "Central Noida Sectors", desc: "Covering Sectors 15 to 50, 62, and City Center with fast, reliable home care." },
    { name: "Noida Expressway", desc: "Premium physiotherapy services for high-rise societies along the Noida-Greater Noida Expressway (Sec 137, 143, 150)." },
    { name: "Noida Extension", desc: "Dedicated therapists serving Greater Noida West, Gaur City, and surrounding residential hubs." },
    { name: "Greater Noida", desc: "Comprehensive home rehabilitation available across Alpha, Beta, Gamma, and Omega sectors." },
    { name: "Corporate Hubs", desc: "Specialized ergonomic and pain-relief therapies for IT professionals near Sector 62, 125, and 142." },
    { name: "Jaypee Greens & Premium Societies", desc: "Exclusive, discreet, and clinical-grade physical therapy for luxury townships." }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <MapPin className="mr-2 h-4 w-4" /> Serving Noida Region
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Expert Physiotherapy at Home for Noida's Fast-Paced Residents
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Long working hours and high-rise living shouldn't mean compromising on your health. We bring tailored rehabilitation directly to your apartment across Noida and Greater Noida.
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
            <h2 className="text-3xl font-bold mb-4">Extensive Coverage in Gautam Buddha Nagar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you live near the bustling City Center or in a peaceful sector of Greater Noida, we deliver quality care directly to your society.
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

      {/* Targeted Services for Noida */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Combat "Tech Neck" & Desk Job Pains</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Noida is an IT and corporate hub. Sitting for 9-10 hours a day leads to severe cervical pain, lower back stiffness, and sciatica. Our therapists specialize in treating posture-related musculoskeletal issues right in your home.
              </p>
              <ul className="space-y-4">
                {[
                  "Ergonomic Posture Correction & Cervical Rehab",
                  "Lumbar Spondylosis & Slip Disc Treatment",
                  "Sports Injury Recovery (ACL, Meniscus Tears)",
                  "Post-Op Knee Replacement Care for Seniors"
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
                  <Laptop className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Corporate Care</h3>
                  <p className="text-sm text-muted-foreground">Tailored stretching and strengthening plans for software engineers and executives.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                  <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Society Friendly</h3>
                  <p className="text-sm text-muted-foreground">We comply with high-rise society entry rules, ensuring smooth, hassle-free visits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Home Physiotherapy in Noida?</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
            Finding the time to visit a clinic after a long day at the office is difficult. With our <strong>physiotherapist at home in Noida</strong> service, you receive hospital-standard treatment without leaving your living room. We are highly active across the Noida Expressway, serving patients in Sector 137, 143, and extending our expert services to <strong>Noida Extension (Greater Noida West)</strong>.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">
            From treating acute sports injuries common among weekend athletes in Jaypee Greens, to providing intensive <strong>stroke rehabilitation in Greater Noida</strong>, our team brings portable modalities (TENS, IFT, Ultrasound) and manual therapy expertise to deliver guaranteed results. Say goodbye to joint pain and frozen shoulders with Noida's most trusted home care physiotherapy team.
          </p>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20 shadow-md">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">Ready to Work Pain-Free?</CardTitle>
              <p className="text-muted-foreground text-base mt-2">
                Say goodbye to travel fatigue. Our physiotherapist will come to your Noida home.
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