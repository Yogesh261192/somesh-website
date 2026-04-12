import Script from 'next/script'

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Delhi Physio at Home",
    "image": "https://yourdomain.com/assets/services/about-precise-home.jpg",
    "@id": "https://yourdomain.com",
    "url": "https://yourdomain.com",
    "telephone": "+918130171272",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raj Nagar Extension",
      "addressLocality": "Ghaziabad",
      "addressRegion": "UP",
      "postalCode": "201017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.7041, // Replace with your exact latitude
      "longitude": 77.1025 // Replace with your exact longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  }

  return (
    <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}