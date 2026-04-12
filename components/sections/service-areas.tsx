import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const areas = [
  { name: "Delhi", description: "All areas including South Delhi, Shahdara, North Delhi, East Delhi, West Delhi", slug: "delhi" },
  { name: "Ghaziabad", description: "Indirapuram, Vaishali, Kaushambi, Loni, Vasundhara, Raj Nagar", slug: "ghaziabad" },
  { name: "Noida", description: "All sectors including Greater Noida and Noida Extension", slug: "noida" },
  { name: "Gurgaon", description: "All sectors including DLF, Sohna Road, Golf Course Road", slug: "gurgaon" },
  { name: "Indirapuram", description: "Niti Khand, Shakti Khand, Gyan Khand, Ahinsa Khand", slug: "indirapuram" },
  { name: "Raj Nagar", description: "Raj Nagar Extension, Raj Nagar District Centre", slug: "raj-nagar" },
]

export function ServiceAreasSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Areas We Serve
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            We provide home physiotherapy services across Delhi NCR region.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={`/locations/${area.slug}`}
              className="flex items-start gap-3 rounded-lg bg-primary-foreground/10 p-4 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors cursor-pointer"
            >
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {area.name}
                  <ArrowRight className="h-3 w-3 opacity-70" />
                </h3>
                <p className="text-sm text-primary-foreground/70 mt-1">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-primary-foreground/80 mb-4">
            Don&apos;t see your area? Contact us to check availability.
          </p>
          <Button variant="secondary" size="lg" className="gap-2" asChild>
            <a href="/contact">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}