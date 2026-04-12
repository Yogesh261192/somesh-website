import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, MapPinHouse } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Our Team", href: "/#doctors" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
]

const services = [
  { label: "Back Pain Treatment", href: "/services/back-pain-treatment" },
  { label: "Neck Pain Therapy", href: "/services/neck-pain-therapy" },
  { label: "Post Surgery Rehabilitation", href: "/services/post-surgery-rehabilitation" },
  { label: "Sports Injury Recovery", href: "/services/sports-injury-recovery" },
  { label: "Elderly Mobility Physiotherapy", href: "/services/elderly-mobility-physiotherapy" },
]

const serviceAreas = [
  { name: "Delhi", slug: "delhi" },
  { name: "Ghaziabad", slug: "ghaziabad" },
  { name: "Noida", slug: "noida" },
  { name: "Gurgaon", slug: "gurgaon" },
  { name: "Indirapuram", slug: "indirapuram" },
  { name: "Raj Nagar", slug: "raj-nagar" }
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white overflow-hidden shadow-sm border border-border">
                <Image src="/assets/logo.png" alt="Delhi Physio At Home" width={40} height={40} className="h-full w-full object-cover" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>DelhiPhysio@Home</span>
            </div>
            
            <p className="text-sm text-background/70 leading-relaxed">
              Professional home physiotherapy services in Delhi NCR. Expert care at your doorstep.
            </p>

            {/* ---> YAHAN HAI NAYA ADDRESS BLOCK <--- */}
            <div className="flex items-start gap-2 text-sm text-background/80 pt-2 pb-2">
              <MapPinHouse className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Base Location:</strong><br/>
                Savy Ville De, Raj Nagar Extension,<br/>
                Ghaziabad, Uttar Pradesh 201003
              </span>
            </div>
            {/* -------------------------------------- */}

            <div className="flex flex-col gap-3 pt-2">
              <a href="https://share.google/hd99r79Hofg1p2Hsd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors group">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-semibold underline decoration-primary underline-offset-4 group-hover:text-primary transition-all">
                  Find Us on Google Maps - Delhi NCR
                </span>
              </a>
              <a href="tel:+918130171272" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 81301 71272</span>
              </a>
              <a href="mailto:info@delhiphysioathome.com" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@delhiphysioathome.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-background/70 hover:text-background transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Service Areas</h3>
            <ul className="mt-4 space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link href={`/locations/${area.slug}`} className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
                    <MapPin className="h-3 w-3 text-primary" />
                    <span>{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/60">
          &copy; {new Date().getFullYear()} DelhiPhysio@Home Delhi NCR. All rights reserved.
        </div>
      </div>
    </footer>
  )
}