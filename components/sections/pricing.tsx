import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Single Assessment",
    price: "₹600",
    description: "Perfect for initial diagnosis and pain relief.",
    features: ["Detailed physical assessment", "Initial pain relief therapy", "Customized exercise plan", "45-60 minute session"],
  },
  {
    name: "Standard Care Plan",
    price: "Custom",
    description: "Recommended for targeted recovery.",
    features: ["5 to 10 session packages", "Advanced modalities (TENS, IFT)", "Regular progress tracking", "Priority booking slots"],
  }
]

export function PricingSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Transparent Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">High-quality clinical physiotherapy at your doorstep, starting from just ₹600.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-muted/10 border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-primary">
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
              <Button className="w-full mt-8" asChild>
                <a href="https://wa.me/918130171272" target="_blank" rel="noreferrer">Book Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
