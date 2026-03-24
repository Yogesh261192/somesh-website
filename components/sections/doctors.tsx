import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const doctors = [
  {
    name: "Dr. Somesh Mamgain",
    qualification: "BPT, MIAP",
    experience: "8+ Years",
    specializations: ["Stroke Rehab", "Post TKR/THR Rehab", "Sports Rehab"],
    bio: "Dr. Somesh specializes in Post-Op Orthopedic rehabilitation, elderly care, and sports injuries. He has helped over 1500 patients recover from chronic pain and post-surgical conditions.",
    image: "/assets/services/Somesh1.jpeg",
  },
  {
    name: "Dr. Sarita Yadav",
    qualification: "BPT",
    experience: "8+ Years",
    specializations: ["Neurological Rehab", "Sports Injury Recovery", "Elderly Care"],
    bio: "Dr.Sarita is an expert in Cardio and neurological rehabilitation, specializing in stroke recovery and mobility improvement for elderly patients.",
    image: "/assets/services/sarita1.png",
  }
]

export function DoctorsSection() {
  return (
    <section id="doctors" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet Our Physiotherapists
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experienced and certified professionals dedicated to your recovery and well-being.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {/* Photo */}
                  <div className="relative w-full h-80 flex-shrink-0 bg-muted">
                    {doctor.image ? (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="absolute inset-0 w-full h-full object-contain object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                          <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 items-center text-center">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">{doctor.qualification}</p>
                      <p className="text-sm text-muted-foreground">{doctor.experience} Experience</p>
                    </div>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {doctor.specializations.map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {doctor.bio}
                    </p>
                    
                    <Button className="w-full sm:w-auto" asChild>
                      <a
                        href={`https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20with%20${doctor.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Appointment
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}