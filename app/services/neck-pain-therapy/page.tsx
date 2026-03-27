import { Metadata } from 'next'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, MapPin, Activity, ArrowRight, Phone, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Neck Pain & Cervical Therapy at Home in Delhi NCR, Noida",
  description: "Expert home physiotherapy for neck pain, cervical spondylosis, tension headaches, and stiffness in Ghaziabad, Noida, and Indirapuram.",
  keywords: "home physiotherapy neck pain, cervical spondylosis treatment ghaziabad, neck pain relief noida, tension headaches therapy, cervical physiotherapist",
  openGraph: {
    title: "Neck Pain Therapy at Home - Expert Physiotherapy",
    description: "Professional neck pain therapy and cervical treatment delivered to your doorstep in Delhi NCR.",
    type: "website",
  },
}

export default function NeckPainTherapy() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Expert Neck Pain & Cervical Therapy at Home
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Professional home physiotherapy for cervical spondylosis, text-neck, tension headaches, and stiffness across Ghaziabad, Noida, and Delhi NCR.
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
            <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
              <Image
                src="/assets/services/neck_pain.jpg"
                alt="Patient with neck pain receiving physiotherapy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding & Causes Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Activity className="text-primary w-6 h-6" /> Understanding Neck Pain
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Neck pain has become an epidemic in our modern, screen-driven society. Whether it's a stiff neck after waking up, or chronic cervical pain from long desk hours, it can trigger severe tension headaches and limit your daily life.
                <br/><br/>
                Our specialized <strong>home physiotherapy services</strong> bring the clinic to you, providing targeted relief for cervical issues without the hassle of traveling through traffic while in pain.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-6">Common Conditions We Treat:</h3>
              <ul className="space-y-4">
                {[
                  "Cervical Spondylosis (Age-related wear and tear)",
                  "'Text-Neck' & muscle strain from poor screen posture",
                  "Tension headaches radiating from the neck & shoulders",
                  "Whiplash injuries from sudden jerks or accidents",
                  "Cervical Radiculopathy (Nerve compression/pinched nerve)",
                  "Herniated or bulging cervical discs"
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

      {/* Treatment Approach Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cervical Treatment Approach</h2>
            <p className="text-foreground/70 text-lg">
              We focus on restoring cervical mobility, releasing trapped nerves, and strengthening your neck muscles for long-term relief right in your living room.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 order-2 md:order-1 bg-muted/20">
              <Image
                src="/assets/services/Techniques.png"
                alt="Professional manual therapy for neck pain"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">1</span>
                  Postural & Clinical Assessment
                </h3>
                <p className="text-foreground/70 pl-10">Detailed evaluation of your sleeping habits, workstation ergonomics, and cervical range of motion to find the pain trigger.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">2</span>
                  Advanced Manual Therapy
                </h3>
                <p className="text-foreground/70 pl-10">Cervical joint mobilization, trigger point therapy, and deep tissue massage to instantly release severe muscle knots and tension.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">3</span>
                  Strengthening & Correction
                </h3>
                <p className="text-foreground/70 pl-10">Targeted exercises for deep cervical flexors to correct your posture, stabilize the spine, and prevent future neck sprains.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">4</span>
                  Pain-Relief Modalities
                </h3>
                <p className="text-foreground/70 pl-10">Application of portable Ultrasound therapy, TENS, and Cervical Traction to reduce nerve compression and inflammation quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid (Timeline, Prevention, Areas) */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Expected Timeline</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Acute neck stiffness or tension headaches usually improve within <strong>2-3 sessions</strong>. Chronic issues like Cervical Spondylosis may need a 3-5 week consistent rehabilitation plan.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Ergonomics & Prevention</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Keep monitors at eye level</li>
                <li>• Use supportive cervical pillows</li>
                <li>• Take frequent screen breaks (20-20-20 rule)</li>
                <li>• Daily neck stretching routines</li>
              </ul>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Service Areas</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We bring expert cervical care to your home across <strong>Ghaziabad and Noida</strong>, covering key areas like Vasundhara, Indirapuram, Raj Nagar, and Vaishali.
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
              <CardTitle className="text-2xl md:text-3xl">Get Rid of Neck Stiffness Today</CardTitle>
              <CardDescription className="text-base mt-2">
                Don't let cervical pain turn into a severe headache. Book an expert home visit now.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-6">
              <Button asChild size="lg" className="w-full sm:w-auto text-md px-8">
                <Link href="/contact">Schedule Your Home Visit</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  )
}