import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Home Visit Physiotherapy",
    badge: "Most Popular",
    price: "Starting ₹600",
    description: "Best for hands-on treatment at your home.",
    features: [
      "Detailed physical assessment",
      "Pain relief therapy (manual + modalities)",
      "Customized exercise plan",
      "45–60 minute session",
      "Package discounts available"
    ],
    cta: "Book Home Visit",
    link: "https://wa.me/918130171272"
  },
  {
    name: "Video Consultation",
    badge: "Quick & Affordable",
    price: "₹399 / session",
    description: "Ideal for quick guidance and follow-ups from home.",
    features: [
      "30–45 min video consultation",
      "Expert physio assessment",
      "Personalized exercise guidance",
      "Post-session WhatsApp support",
      "Available across India"
    ],
    cta: "Book Video Consultation",
    link: "/virtual-consultation"
  }
]

export function PricingSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple & Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose between home visit physiotherapy or online consultation — based on your comfort.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-muted/10 border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              
              {/* 🔥 BADGE */}
              <div className="absolute top-4 right-4 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                {pkg.badge}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>

                <div className="mt-4 text-4xl font-extrabold text-primary">
                  {pkg.price}
                </div>

                <p className="mt-2 text-muted-foreground">{pkg.description}</p>

                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button className="w-full mt-8" asChild>
                <a href={pkg.link} target="_blank" rel="noreferrer">
                  {pkg.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}