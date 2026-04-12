import { Metadata } from 'next'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, MapPin, ArrowRight, Phone, ShieldCheck, Activity, HeartPulse } from "lucide-react"

export const metadata: Metadata = {
  title: "Knee Surgery Rehab | Home Physio Noida | No Travel Needed",
  description: "Post-surgery pain and stiffness? Recover safely with expert home rehabilitation for joint replacements and ACL tears in Noida & Delhi NCR. Call today!",
  keywords: "post surgery physiotherapy at home, knee replacement recovery ghaziabad, ACL rehab noida, orthopedic physiotherapist home visit, hip replacement therapy",
  openGraph: {
    title: "Post Surgery Rehabilitation at Home - Expert Physiotherapy",
    description: "Professional, safe, and effective post-surgery rehabilitation delivered to your doorstep in Delhi NCR.",
    type: "website",
  },
}

export default function PostSurgeryRehabilitation() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <HeartPulse className="mr-2 h-4 w-4" /> Safe & Professional Home Care
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Post-Surgery Rehabilitation at Your Doorstep
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Skip the painful travel. Get expert orthopedic rehabilitation for joint replacements, ACL repairs, and fractures in the safety and comfort of your home across Delhi NCR.
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
                src="/assets/services/post_surgery.webp"
                alt="Patient receiving post-surgery knee rehabilitation at home"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Home Rehab Matters */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-primary w-6 h-6" /> Why Post-Surgery Rehab Matters
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Surgery only fixes the structural issue. The true success of any orthopedic intervention depends entirely on the rehabilitation that follows. 
                <br/><br/>
                Without proper physiotherapy, patients risk severe complications like joint stiffness (Arthrofibrosis), muscle atrophy, and prolonged pain. Our <strong>home-visit programs</strong> ensure you get consistent, professional care when traveling is not an option.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-6">Common Surgeries We Rehabilitate:</h3>
              <ul className="space-y-4">
                {[
                  "Total Knee Replacement (TKR)",
                  "Total Hip Replacement (THR)",
                  "ACL / PCL Reconstruction & Meniscus Repair",
                  "Shoulder Surgeries (Rotator Cuff, Frozen Shoulder manipulation)",
                  "Spinal Surgeries (Discectomy, Laminectomy, Fusion)",
                  "Post-Fracture Plaster Removal Rehab"
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

      {/* 4 Phases of Recovery */}
      <section className="py-16 bg-gradient-to-b from-transparent to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our 4-Phase Recovery Protocol</h2>
            <p className="text-foreground/70 text-lg">
              We follow strict, evidence-based surgical protocols to ensure you transition safely from complete bed rest to full active mobility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 order-2 md:order-1 bg-muted/20">
              <Image
                src="/assets/services/post_approach.webp"
                alt="Post-Surgery Recovery Protocol in action"
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
                  Acute Phase (0-2 Weeks)
                </h3>
                <p className="text-foreground/70 pl-10">Focus on pain management, reducing swelling, wound care guidance, and gentle isometric movements to prevent blood clots and stiffness.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    2
                  </span>
                  Early Strengthening (2-4 Weeks)
                </h3>
                <p className="text-foreground/70 pl-10">Restoring Joint Range of Motion (ROM), weaning off walking aids (walkers/crutches), and initiating light weight-bearing exercises.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    3
                  </span>
                  Progressive Strengthening (4-8 Weeks)
                </h3>
                <p className="text-foreground/70 pl-10">Advanced resistance training, balance & coordination exercises, and restoring normal gait (walking pattern) without limping.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                    4
                  </span>
                  Return to Normal Life (8+ Weeks)
                </h3>
                <p className="text-foreground/70 pl-10">Sport-specific or activity-specific training, high-intensity conditioning, and ensuring you have the confidence to resume your pre-surgery lifestyle.</p>
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
              <h3 className="text-xl font-bold mb-3">Therapy Duration</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Post-surgery sessions are typically 45-60 minutes long. Total recovery time depends entirely on the surgery type—ranging from 4 weeks for minor repairs to 12+ weeks for total joint replacements.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Advanced Equipment</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We bring clinical-grade equipment to your home, including TENS, IFT, Ultrasound for tissue healing, resistance bands, and mobility aids required for your specific phase of recovery.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Service Areas</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We provide intensive post-op care across <strong>Ghaziabad and Noida</strong>. Our primary zones include Raj Nagar Extension, Indirapuram, Vasundhara, and Vaishali.
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
              <CardTitle className="text-2xl md:text-3xl">Start Your Recovery Journey Today</CardTitle>
              <CardDescription className="text-base mt-2">
                Early rehabilitation is the key to a successful surgery. Book an expert home assessment now.
              </CardDescription>
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