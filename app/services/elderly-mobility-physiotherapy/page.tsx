import { Metadata } from 'next'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, MapPin, ArrowRight, Phone, HeartHandshake, ShieldCheck, Activity } from "lucide-react"

export const metadata: Metadata = {
  title: "Elderly Fall Risk? Home Physio Ghaziabad | Safe Care",
  description: "Worried about elderly falls or arthritis? Gentle, professional senior physiotherapy delivered to your home in Ghaziabad & Noida. Book an assessment!",
  keywords: "elderly physiotherapy at home, geriatric physiotherapist ghaziabad, fall prevention for seniors noida, stroke rehab at home, arthritis pain relief",
  openGraph: {
    title: "Elderly Mobility Physiotherapy at Home - Expert Care",
    description: "Gentle, professional, and compassionate physiotherapy for the elderly, delivered safely to your home.",
    type: "website",
  },
}

export default function ElderlyMobilityPhysiotherapy() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <HeartHandshake className="mr-2 h-4 w-4" /> Compassionate & Patient Care
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Regain Independence & Mobility at Home
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Traveling to a clinic can be exhausting for seniors. We bring gentle, expert geriatric physiotherapy directly to your doorstep across Delhi NCR, focusing on fall prevention, pain relief, and daily independence.
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
              {/* YAHA LOCAL IMAGE PATH SET KIYA HAI */}
              <Image
                src="/assets/services/elderly_hero.png"
                alt="Indian physiotherapist gently helping an elderly patient stand safely at home"
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
                <ShieldCheck className="text-primary w-6 h-6" /> Safety & Fall Prevention First
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                For the elderly, a simple fall can lead to severe complications like hip fractures or prolonged bed rest. Furthermore, age-related conditions like Arthritis or Parkinson's can slowly take away the confidence to walk independently.
                <br/><br/>
                Our <strong>home-based geriatric care</strong> eliminates the stress of waiting rooms and bumpy car rides. We focus on building strength, improving balance, and modifying the home environment to keep your loved ones safe and active.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-6">Conditions We Carefully Manage:</h3>
              <ul className="space-y-4">
                {[
                  "Osteoarthritis & Rheumatoid Arthritis Pain",
                  "Stroke Rehabilitation & Paralysis Care",
                  "Balance Disorders & Frequent Falling",
                  "Parkinson’s Disease Mobility Issues",
                  "Post-Hospitalization & ICU Weakness",
                  "General Age-Related Muscle Atrophy"
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

      {/* 4 Phases of Elderly Care */}
      <section className="py-16 bg-gradient-to-b from-transparent to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Gentle Approach to Senior Care</h2>
            <p className="text-foreground/70 text-lg">
              We don't rush. Our physiotherapists are trained to be extremely patient, working at a pace that is comfortable and motivating for the elderly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 order-2 md:order-1 bg-muted/20">
              {/* YAHA LOCAL IMAGE PATH SET KIYA HAI */}
              <Image
                src="/assets/services/elderly_approach.png"
                alt="Compassionate geriatric physical therapy session with senior citizen in Indian home"
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
                  Comprehensive Fall Assessment
                </h3>
                <p className="text-foreground/70 pl-10">We evaluate walking patterns (gait), balance, and home hazards (like loose rugs or slippery floors) to create a zero-fall environment.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    2
                  </span>
                  Gentle Pain & Stiffness Relief
                </h3>
                <p className="text-foreground/70 pl-10">Using soothing manual therapy, heat application, and gentle joint mobilization to ease arthritis pain and morning stiffness.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    3
                  </span>
                  Balance & Strength Building
                </h3>
                <p className="text-foreground/70 pl-10">Safe, chair-based exercises and assisted standing routines to rebuild leg strength and improve core stability without exhaustion.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    4
                  </span>
                  Functional Independence
                </h3>
                <p className="text-foreground/70 pl-10">Training for daily activities—like safely getting out of bed, using the washroom, or climbing a few stairs—to restore dignity and confidence.</p>
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
              <h3 className="text-xl font-bold mb-3">Paced Sessions</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Elderly sessions are designed to be fatigue-free. We take frequent breaks and focus on consistency (2-3 times a week) rather than high-intensity, ensuring slow but steady progress.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Neurological Care</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                For patients recovering from a stroke or managing Parkinson's, we use specialized neuro-rehabilitation techniques to help rewire brain-muscle connections and improve mobility.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Service Areas</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We provide reliable, on-time home visits across <strong>Ghaziabad and Noida</strong>, deeply serving areas like Rajnagar Extension, Indirapuram, Vasundhara, and Vaishali.
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
              <CardTitle className="text-2xl md:text-3xl">Give Them the Gift of Mobility</CardTitle>
              <CardDescription className="text-base mt-2">
                Don't let age or pain confine your loved ones. Give them the gentle care they deserve, right here in Delhi NCR. Book a gentle, in-home assessment today.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-6">
              <Button asChild size="lg" className="w-full sm:w-auto text-md px-8">
                <Link href="/contact">Book a Home Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  )
}