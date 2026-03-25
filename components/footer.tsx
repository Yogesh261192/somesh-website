import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

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
  "Delhi",
  "Shahdara",
  "Ghaziabad",
  "Noida",
  "Gurgaon",
  "Indirapuram",
  "Raj Nagar",
  "Loni",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <img src="/favicon.ico" alt="DelhiPhysio@Home" className="w-8 h-8 rounded-full" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                delhiphysioathome
              </span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Professional home physiotherapy services in Delhi NCR. We bring expert care to your doorstep for faster recovery and better health.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+918130171272" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 81301 71272</span>
              </a>
              <a href="mailto:info@delhiphysioathome.com" className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@delhiphysioathome.com</span>
              </a>
              <a 
                href="https://wa.me/918130171272" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
<div>
  <h3 className="text-sm font-semibold uppercase tracking-wider">Our Services</h3>
  <ul className="mt-4 space-y-2">
    {services.map((service) => (
      <li key={service.href}>
        <Link 
          href={service.href}
          className="text-sm text-background/70 hover:text-background transition-colors"
        >
          {service.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Service Areas</h3>
            <ul className="mt-4 space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span className="text-sm text-background/70">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            &copy; {new Date().getFullYear()} delhiphysioathome Delhi NCR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
