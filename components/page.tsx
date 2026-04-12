import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Home Physiotherapy in Vasundhara | Expert Care",
  description: "Specialized home physiotherapy serving Vasundhara sectors. Book reliable home visits for pain relief and post-surgery rehab.",
  keywords: "physiotherapy in vasundhara, home physio vasundhara, physiotherapist vasundhara, knee rehab vasundhara",
}

export default function VasundharaLocationPage() {
  const subAreas = [
    "Vasundhara Sector 1 to 5",
    "Vasundhara Sector 6 to 10",
    "Vasundhara Sector 11 to 15",
    "Vasundhara Sector 16 to 19",
    "Mewar Institute Area",
    "Vasundhara Enclave"
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <MapPin className="mr-2 h-4 w-4" /> Serving Vasundhara Region
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Expert Physiotherapy at Home in Vasundhara
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            High-quality home physiotherapy care for residents of Vasundhara. We bring clinical-grade equipment directly to your doorstep.
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
            <h2 className="text-3xl font-bold mb-4">Areas We Serve in Vasundhara</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Broad coverage ensuring that reliable physical therapy reaches you promptly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subAreas.map((area, index) => (
              <Card key={index} className="bg-muted/20 border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-primary" /> {area}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Providing customized and comfortable home care sessions for faster recovery in {area}.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20 shadow-md">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl">Ready for Better Mobility?</CardTitle>
              <p className="text-muted-foreground text-base mt-2">
                Connect with us for reliable physiotherapy in the Vasundhara area.
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