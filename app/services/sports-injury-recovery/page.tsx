import { Metadata } from 'next'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, MapPin, ArrowRight, Phone, Activity, Trophy, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Sports Injury Recovery at Home in Delhi NCR & Ghaziabad",
  description: "Expert sports physiotherapy for ankle sprains, ACL tears, muscle strains, and athletic injuries in Ghaziabad, Noida, and Indirapuram. Get back in the game safely.",
  keywords: "sports injury physiotherapy ghaziabad, ankle sprain treatment noida, ACL rehab indirapuram, athletic sports physiotherapist home visit, sports injury doctor",
  openGraph: {
    title: "Sports Injury Recovery at Home - Expert Physiotherapy",
    description: "Professional sports rehabilitation programs to get athletes and active individuals back to peak performance.",
    type: "website",
  },
}

export default function SportsInjuryRecovery() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Trophy className="mr-2 h-4 w-4" /> Fast & Safe Return to Sport
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Get Back in the Game Stronger Than Before
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Expert sports physiotherapy for athletes and weekend warriors. We treat sprains, strains, and tears right at your home across Delhi NCR, saving you the travel pain.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="https://wa.me/918130171272" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity shadow-sm"
                >
                  WhatsApp Us <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+918130171272" 
                  className="inline-flex items-center gap-2 bg-background border border-border text-foreground px-6 py-3 rounded-md font-semibold hover:bg-muted transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" /> +91 81301 71272
                </a>
              </div>
            </div>
            <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-muted/20">
              <Image
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
                alt="Athlete recovering from sports injury with professional support"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding & Conditions */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Zap className="text-primary w-6 h-6" /> Overcome Your Injury
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Whether you're a professional athlete, a gym enthusiast, or someone who loves their weekend cricket matches, a sports injury can drastically halt your momentum. 
                <br/><br/>
                Ignoring minor sprains or rushing back without proper rehab often leads to chronic instability or worse tears. Our <strong>home sports rehabilitation</strong> focuses on biomechanical correction, so you don't just heal—you prevent re-injury.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-6">Common Injuries We Rehabilitate:</h3>
              <ul className="space-y-4">
                {[
                  "Ankle Sprains & Instability",
                  "Knee Injuries (ACL, MCL, Meniscus Tears)",
                  "Shoulder Impingement & Rotator Cuff Strains",
                  "Muscle Tears (Hamstrings, Quads, Calf)",
                  "Overuse Injuries (Tennis/Golfer's Elbow)",
                  "Plantar Fasciitis & Achilles Tendinitis"
                ].map((cause, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Phases of Sports Rehab */}
      <section className="py-16 bg-gradient-to-b from-transparent to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our "Return to Sport" Protocol</h2>
            <p className="text-foreground/70 text-lg">
              We progress you through clinical phases to ensure your muscles, tendons, and ligaments are 100% ready for high-impact activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 order-2 md:order-1 bg-muted/20">
              <Image
                src="/assets/services/sports_approach.webp"
                alt="Advanced sports injury rehabilitation program"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    1
                  </span>
                  Acute Care (0-72 Hours)
                </h3>
                <p className="text-foreground/70 pl-10">Implementing POLICE (Protection, Optimal Loading, Ice, Compression, Elevation) protocols to rapidly drop swelling and acute pain.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    2
                  </span>
                  Early Mobilization (1-2 Weeks)
                </h3>
                <p className="text-foreground/70 pl-10">Manual therapy and gentle active-assisted movements to restore full pain-free Range of Motion (ROM) without stressing the healing tissue.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    3
                  </span>
                  Progressive Loading (2-6 Weeks)
                </h3>
                <p className="text-foreground/70 pl-10">Rebuilding foundational strength through isotonic resistance training, proprioceptive balance exercises, and neuromuscular control.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    4
                  </span>
                  Sport-Specific Conditioning
                </h3>
                <p className="text-foreground/70 pl-10">High-intensity plyometrics, agility drills, and explosive power movements mimicking your specific sport to ensure you are competition-ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Recovery Timeline</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Minor strains/sprains usually heal in <strong>1-3 weeks</strong>. Moderate ligament tears may take 4-8 weeks, while post-surgical sports rehab (like ACL) requires a structured 4-6 month roadmap.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Advanced Healing</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We use modern modalities like Ultrasound therapy for deep tissue cellular repair, TENS for pain blocking, and customized taping (K-Tape) to support joints during movement.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Service Areas</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Skip the clinic queue. We bring sports rehabilitation to your home or local gym facility across <strong>Ghaziabad and Noida</strong>, including Vasundhara, Indirapuram, and Raj Nagar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20 shadow-md">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">Don't Let the Injury Bench You Forever</CardTitle>
              <CardDescription className="text-base mt-2">
                Proper rehab prevents chronic pain and re-injury. Book an expert assessment and start your comeback today.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-6">
              <Button asChild size="lg" className="w-full sm:w-auto text-md px-8">
                <Link href="/contact">Book Your Home Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  )
}