import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { DoctorsSection } from "@/components/sections/doctors"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { ServiceAreasSection } from "@/components/sections/service-areas"
import { CTASection } from "@/components/sections/cta"
import { PricingSection } from "@/components/sections/pricing"
import { RecentBlogsSection } from "@/components/sections/recent-blogs"
import GoogleReviews from '@/components/GoogleReviews'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PricingSection />
      <DoctorsSection />
      <GoogleReviews />
      <ServiceAreasSection />
      <RecentBlogsSection />
      <CTASection />
    </>
  )
}