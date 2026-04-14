import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone, Target, Trophy, Briefcase, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Home Physiotherapy in Gurgaon | Premium Physio At Home Gurugram",
  description: "Clinical-grade home physiotherapy across Gurugram. Serving DLF Phases, Golf Course Road & Sohna Road for sports injuries, corporate neck pain, and rehab.",
  keywords: "physiotherapy in gurgaon, home physio dlf gurgaon, physiotherapist sohna road, sports injury clinic gurgaon, back pain gurugram",
}

export default function GurgaonLocationPage() {
  const subAreas = [
    { name: "DLF Phases & Cyber City", desc: "Premium in-home physiotherapy for residents of DLF Phase 1-5 and Cyber City executives." },
    { name: "Golf Course Road & Ext", desc: "Specialized sports injury rehab and pain management for luxury condominiums." },
    { name: "Sohna Road Areas", desc: "Rapid home visits across South City, Sector 47-50, and surrounding tech parks." },
    { name: "Sushant Lok & Sector 43", desc: "Dedicated physical therapy services for families, seniors, and post-surgery patients." },
    { name: "Palam Vihar & Old Gurgaon", desc: "Comprehensive elderly care, stroke rehab, and joint pain treatments at your doorstep." },
    { name: "New Gurgaon Sectors", desc: "Covering the expanding residential hubs in Sector 80+ with advanced therapeutic equipment." }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <MapPin className="mr-2 h-4 w-4" /> Serving Gurgaon (Gurugram)
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Premium Clinical Physiotherapy at Home in Gurugram
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Gurgaon demands peak performance. Don't let chronic pain or injuries slow you down. We bring elite, targeted physical therapy straight to your high-rise or villa.
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
            <h2 className="text-3xl font-bold mb-4">Unmatched Coverage in Millennium City</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the vibrant stretches of Golf Course Road to the emerging sectors of New Gurgaon, our experts are strategically placed for timely visits.
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

      {/* Targeted Services for Gurgaon */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Built for Corporate Executives & Athletes</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Gurgaon is home to weekend golfers, marathon runners, and executives working 12-hour shifts. We provide advanced manual therapy and rehab protocols tailored to active and high-stress lifestyles.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced Sports Injury Rehab (Golfer's Elbow, Runner's Knee)",
                  "Dry Needling & Myofascial Release for Tight Muscles",
                  "Corporate Posture Correction & Tech-Neck Relief",
                  "Post-Surgical Care (ACL Reconstruction, Spinal Surgery)"
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
                  <Trophy className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Sports Rehab</h3>
                  <p className="text-sm text-muted-foreground">Evidence-based return-to-sport protocols for athletes and fitness enthusiasts.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                  <Briefcase className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Flexible Timings</h3>
                  <p className="text-sm text-muted-foreground">We understand tight corporate schedules and offer flexible home visit slots.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">The Smart Choice for Physiotherapy in Gurugram</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
            If you are searching for a <strong>physiotherapist near me in Gurgaon</strong>, you likely want to avoid the horrendous traffic at IFFCO Chowk or Rajiv Chowk. Delhi Physio at Home provides an elite <strong>physiotherapy at home service in Gurugram</strong>, ensuring that residents of DLF, Sushant Lok, and Sohna Road get hospital-quality care without stepping out. 
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed text-justify">
            Our master's degree-holding therapists are experts in treating <strong>cervical pain</strong>, severe sciatica, and sports injuries like ligament tears. For families with elderly parents residing in Gurgaon, we offer dedicated geriatric physiotherapy focusing on fall prevention, arthritis management, and post-hip/knee replacement rehabilitation. Get back to your active lifestyle safely with our trusted experts.
          </p>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20 shadow-md">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">Reclaim Your Health in Gurugram</CardTitle>
              <p className="text-muted-foreground text-base mt-2">
                Recover effectively without stepping out. Book your in-home appointment today.
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