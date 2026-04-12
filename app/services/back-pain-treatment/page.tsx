import { Metadata } from 'next'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, MapPin, Activity, ArrowRight, Phone, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Sciatica & Back Pain? Home Physio Ghaziabad | Same Day",
  description: "Severe back pain or sciatica? Skip the travel and get expert physiotherapy at home in Vasundhara, Noida & Ghaziabad. Book your same-day session! ₹600 onwards.",
  keywords: "home physiotherapy back pain, back pain treatment vasundhara, back pain relief ghaziabad, sciatica treatment noida, best physiotherapist for back pain, same day physiotherapist",
  openGraph: {
    title: "Back Pain Treatment at Home - Expert Physiotherapy",
    description: "Professional back pain treatment and physiotherapy services delivered to your doorstep in Delhi NCR.",
    type: "website",
  },
}

export default function BackPainTreatment() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Expert Back Pain Treatment at Your Doorstep
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Comprehensive home physiotherapy for chronic back pain, sciatica, and spinal issues across Vasundhara, Ghaziabad, Noida, and Indirapuram.
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
                src="/back-pain-hero.png"
                alt="Certified physiotherapist from Delhi Physio At Home providing expert back pain treatment and sciatica relief at a patient's home in Indirapuram, Ghaziabad"
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
                <Activity className="text-primary w-6 h-6" /> Understanding Back Pain
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Back pain can significantly impact your quality of life, limiting your ability to work, exercise, and enjoy daily activities. Modern lifestyles, particularly desk jobs and sedentary routines, have made back pain increasingly prevalent. 
                <br/><br/>
                Through our specialized <strong>home physiotherapy services</strong>, we aim to address the root cause of your pain without you needing to travel to a clinic while in discomfort.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-6">Common Causes We Treat:</h3>
              <ul className="space-y-4">
                {[
                  "Muscle or ligament strain from lifting or sudden movements",
                  "Poor posture during work (especially office workers)",
                  "Herniated or bulging discs pressing on nerves",
                  "Sciatica causing radiating pain down the legs",
                  "Arthritis and degenerative disc disease",
                  "Spinal stenosis (narrowing of the spinal canal)"
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
            <h2 className="text-3xl font-bold mb-4">Our Home Treatment Approach</h2>
            <p className="text-foreground/70 text-lg">
              We believe in a holistic approach. Rather than simply masking symptoms with pain medication, we focus on addressing the underlying causes right in the comfort of your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 order-2 md:order-1">
              <Image
                src="/back-pain-treatment.png"
                alt="Professional physiotherapist utilizing advanced manual therapy techniques for chronic lower back pain treatment at home in Noida"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">1</span>
                  Comprehensive Assessment
                </h3>
                <p className="text-foreground/70 pl-10">We begin with a detailed evaluation of your medical history, posture, and mobility to identify the exact source of your pain.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">2</span>
                  Manual Therapy
                </h3>
                <p className="text-foreground/70 pl-10">Hands-on techniques including spinal mobilization, soft tissue massage, and myofascial release to relieve muscle tension.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">3</span>
                  Targeted Exercises
                </h3>
                <p className="text-foreground/70 pl-10">Customized exercise programs to strengthen core muscles, improve flexibility, and stabilize your spine to prevent future injuries.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">4</span>
                  Modern Modalities
                </h3>
                <p className="text-foreground/70 pl-10">We carry portable, advanced equipment like TENS/IFT machines and Ultrasound therapy for deep tissue healing and pain relief.</p>
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
                Acute back pain often responds quickly to treatment. Most patients begin experiencing significant relief within <strong>2-3 sessions</strong>. Chronic conditions may require a tailored 4-6 week management plan for complete recovery.
              </p>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Lifestyle & Prevention</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Ergonomic workspace setup</li>
                <li>• Posture training for daily activities</li>
                <li>• Weight management to reduce spinal strain</li>
                <li>• Proper sleep positioning</li>
              </ul>
            </div>
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Service Areas</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                We provide prompt home visit services across <strong>Ghaziabad and Delhi NCR</strong>, with specialized focus areas including Vasundhara, Indirapuram, Raj Nagar Extension, Vaishali, and Noida.
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
              <CardTitle className="text-2xl md:text-3xl">Ready to Relieve Your Back Pain?</CardTitle>
              <CardDescription className="text-base mt-2">
                Don't travel in pain. Book an expert home physiotherapy session today.
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