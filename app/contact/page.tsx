import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact & Book Appointment | delhiphysioathome Delhi NCR",
  description: "Book your home physiotherapy session in Delhi NCR. Contact us via phone, WhatsApp, or fill out our booking form. We serve Delhi, Noida, Gurgaon, and Ghaziabad.",
}

const contactInfo = [
  {
    title: "Phone",
    value: "+91 81301 71272",
    href: "tel:+918130171272",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@delhiphysioathome.com",
    href: "mailto:info@delhiphysioathome.com",
    icon: Mail,
  },
  {
    title: "Service Hours",
    value: "Mon - Sat: 8 AM - 8 PM",
    href: null,
    icon: Clock,
  },
  {
    title: "Service Areas",
    value: "Delhi, Noida, Gurgaon, Ghaziabad",
    href: null,
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Book Your Appointment
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to start your recovery journey? Fill out the form below or contact us directly. Our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Booking Form */}
            <div>
              <h2 
                className="text-2xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Request an Appointment
              </h2>
              <BookingForm />
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              <div>
                <h2 
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Quick Contact
                </h2>
                
                {/* Quick Action Buttons */}
                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  <Button size="lg" className="h-auto py-4 flex-col gap-2" asChild>
                    <a
                      href="https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Book on WhatsApp</span>
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-auto py-4 flex-col gap-2" asChild>
                    <a href="tel:+918130171272">
                      <Phone className="h-6 w-6" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>

                {/* Contact Info Cards */}
                <div className="grid gap-4">
                  {contactInfo.map((info) => (
                    <Card key={info.title} className="border-border/50">
                      <CardContent className="p-4">
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <info.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{info.title}</p>
                              <p className="font-medium">{info.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <info.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">{info.title}</p>
                              <p className="font-medium text-foreground">{info.value}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 
                  className="text-lg font-semibold text-foreground mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Our Location
                </h3>
                <div className="aspect-video rounded-xl bg-muted border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.064!3d28.549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x3cbe66a24b5fd89e!2sPhysio%20at%20home!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Physio at home Location"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <a 
                    href="https://www.google.com/maps/place/Physio+at+home/data=!4m2!3m1!1s0x0:0x3cbe66a24b5fd89e?sa=X&ved=1t:2428&hl=en&gl=in&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
