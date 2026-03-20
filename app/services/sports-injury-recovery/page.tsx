import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Sports Injury Recovery in Vasundhara, Ghaziabad | Physiotherapy",
  description: "Expert sports injury treatment and recovery in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, Vaishali. Sprains, strains, and sports rehabilitation by certified professionals.",
  keywords: [
    "sports injury recovery vasundhara",
    "sports injury physiotherapy ghaziabad",
    "ankle sprain treatment noida",
    "knee injury rehabilitation indirapuram",
    "sports medicine vasundhara",
    "athlete physiotherapist raj nagar",
    "muscle strain treatment vaishali",
    "sports injury doctor ghaziabad",
    "athletic performance physiotherapy vasundhara",
    "sports rehabilitation noida",
    "injury prevention training",
    "return to sport program",
  ].join(", "),
  openGraph: {
    title: "Sports Injury Recovery in Vasundhara - Expert Athletic Rehabilitation",
    description: "Professional sports injury treatment and recovery programs for athletes in Vasundhara, Ghaziabad, and nearby areas. Specializing in sprains, strains, and safe return to sport.",
    type: "website",
  },
}

export default function SportsInjuryRecovery() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Sports Injury Recovery
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Professional treatment for athletes and active individuals recovering from sprains, strains, and sports injuries in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
                alt="Football player in action with athletic performance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mt-8 mb-4">Understanding Sports Injuries</h2>
            <p>
              Sports injuries are common among athletes and active individuals across all age groups and skill levels. Whether you're a professional athlete, weekend warrior, or fitness enthusiast in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, sports injuries can significantly impact your performance and quality of life. Our specialized physiotherapy services provide comprehensive sports injury recovery programs designed to get you back in the game as quickly and safely as possible.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Types of Sports Injuries We Treat</h2>

            <h3 className="text-2xl font-bold mt-6 mb-3">Sprains and Strains</h3>
            <p>
              Sprains (ligament injuries) and strains (muscle or tendon injuries) are among the most common sports injuries. Our physiotherapists in Vasundhara provide immediate and ongoing treatment to reduce pain, swelling, and disability while promoting healthy healing. Early intervention in sports injury recovery can significantly reduce recovery time and prevent chronic instability.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Overuse Injuries</h3>
            <p>
              Overuse injuries develop gradually from repetitive stress. These include tendinitis, bursitis, and stress fractures. Our sports injury recovery programs in Ghaziabad, Noida, and surrounding areas address the underlying causes of overuse injuries, including training errors, biomechanical issues, and muscle imbalances, providing lasting solutions.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Acute Impact Injuries</h3>
            <p>
              Direct impacts and collisions can cause significant acute injuries. Our physiotherapists in Vasundhara manage acute impact injuries through structured rehabilitation that progresses safely while protecting the injured structures during recovery.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Specific Sports Injuries</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ankle sprains and instability</li>
              <li>Knee injuries including ACL and MCL sprains</li>
              <li>Shoulder injuries and rotator cuff strains</li>
              <li>Hamstring and quadriceps strains</li>
              <li>Plantar fasciitis and heel pain</li>
              <li>Tennis and golfer's elbow</li>
              <li>Stress fractures</li>
              <li>Muscle contusions and bruising</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Immediate Care for Sports Injuries</h2>
            <p>
              The initial management of sports injuries is critical for optimal recovery. Our sports injury recovery protocols in Vasundhara follow the established RICE (Rest, Ice, Compression, Elevation) and POLICE (Protection, Optimal Loading, Ice, Compression, Elevation) principles to minimize damage and accelerate healing.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">First 48-72 Hours:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protection from further injury through activity modification</li>
              <li>Ice application to reduce swelling and pain</li>
              <li>Compression bandaging for swelling control</li>
              <li>Elevation to minimize fluid accumulation</li>
              <li>Controlled, gentle movement when appropriate</li>
              <li>Professional assessment to determine severity</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Comprehensive Sports Injury Recovery Program</h2>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/assets/services/sports_approach.webp"
                alt="Sports Injury Recovery Program"
                fill
                className="object-cover"
              />
            </div>
            <p>
              Our sports injury recovery approach in Ghaziabad and surrounding areas progresses through distinct phases, each designed to gradually restore function, strength, and confidence to return to sport.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 1: Acute Phase (0-3 Days)</h3>
            <p>
              Focus on protecting the injury and managing symptoms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pain and swelling management</li>
              <li>Gentle range of motion within pain tolerance</li>
              <li>Immobilization or bracing as appropriate</li>
              <li>Education on injury care and recovery expectations</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 2: Early Mobilization (3 Days - 2 Weeks)</h3>
            <p>
              Transition to controlled progressive movement:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Increased range of motion exercises</li>
              <li>Isometric muscle strengthening</li>
              <li>Proprioceptive and balance training initiation</li>
              <li>Swelling management through modalities</li>
              <li>Functional movement retraining</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 3: Progressive Strengthening (2-6 Weeks)</h3>
            <p>
              Build strength and return to activity:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Isotonic and resistance exercises</li>
              <li>Advanced proprioceptive training</li>
              <li>Balance and coordination development</li>
              <li>Sport-specific movement patterns</li>
              <li>Gradual return to light activity</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 4: Advanced Rehabilitation (6+ Weeks)</h3>
            <p>
              Sport-specific training and return to competition:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sport-specific technique work</li>
              <li>High-intensity strengthening exercises</li>
              <li>Agility, speed, and power development</li>
              <li>Sport-specific drills and practice</li>
              <li>Graduated return to competition protocol</li>
              <li>Injury prevention strategies</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Assessment and Diagnosis</h2>
            <p>
              Our physiotherapists in Vasundhara, Noida, Indirapuram, Raj Nagar, and Vaishali perform thorough assessments to accurately diagnose sports injuries. We evaluate pain patterns, range of motion, muscle strength, proprioception, and functional abilities. This comprehensive assessment guides our treatment plans and helps predict recovery timelines.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Manual Therapy for Sports Injuries</h2>
            <p>
              Hands-on treatment accelerates sports injury recovery by improving mobility, reducing pain, and promoting healing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Soft tissue massage and mobilization</li>
              <li>Joint mobilization to restore normal mechanics</li>
              <li>Myofascial release techniques</li>
              <li>Scar tissue management</li>
              <li>Manual stretching and proprioceptive training</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Therapeutic Modalities</h2>
            <p>
              Our sports injury recovery programs in Ghaziabad utilize modern therapeutic modalities to support healing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cryotherapy:</strong> Ice and cold therapy for acute inflammation</li>
              <li><strong>Thermotherapy:</strong> Heat therapy for muscle relaxation and healing</li>
              <li><strong>Electrotherapy:</strong> TENS and other electrical modalities for pain relief</li>
              <li><strong>Ultrasound:</strong> Promoting tissue healing and cellular repair</li>
              <li><strong>Compression therapy:</strong> Managing swelling and promoting circulation</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Proprioceptive and Balance Training</h2>
            <p>
              Sports injury recovery isn't just about strength and range of motion. Proprioceptive training—developing the body's awareness of position and movement—is crucial for athletic performance and injury prevention. Our physiotherapists in Vasundhara incorporate progressive proprioceptive exercises that challenge balance, coordination, and neuromuscular control in sport-specific contexts.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Return to Sport Guidelines</h2>
            <p>
              One of our primary goals in sports injury recovery is enabling safe return to sport and physical activity. We follow evidence-based return-to-sport protocols that consider:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adequate healing time for tissue structures</li>
              <li>Achievement of necessary strength and flexibility</li>
              <li>Restored proprioception and balance</li>
              <li>Confidence and psychological readiness</li>
              <li>Sport-specific skill and conditioning</li>
              <li>Gradual progression to full participation</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Injury Prevention Training</h2>
            <p>
              Prevention is better than cure. Our physiotherapists in Noida, Indirapuram, Raj Nagar, Ghaziabad, Vasundhara, and Vaishali provide injury prevention programs for athletes. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Warm-up and cool-down protocols</li>
              <li>Flexibility and mobility routines</li>
              <li>Strengthening exercises for injury prevention</li>
              <li>Proper technique training</li>
              <li>Biomechanical analysis and correction</li>
              <li>Training load management</li>
              <li>Appropriate footwear and equipment selection</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Customized Home Exercise Programs</h2>
            <p>
              Success in sports injury recovery depends on consistent adherence to exercises at home. Our physiotherapists provide detailed, easy-to-follow home exercise programs tailored to your injury and recovery phase. These programs are essential for maintaining progress and accelerating recovery between therapy sessions.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Why Choose Our Sports Injury Recovery Services?</h2>
            <p>
              When selecting physiotherapy for sports injury recovery in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, experience with athletes is crucial:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specialized experience in sports injury management</li>
              <li>Understanding of athletic performance demands</li>
              <li>Evidence-based return-to-sport protocols</li>
              <li>Sport-specific rehabilitation expertise</li>
              <li>Injury prevention knowledge and training</li>
              <li>Communication with coaches and trainers</li>
              <li>Convenient home physiotherapy services</li>
              <li>Commitment to getting you back to your sport</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Recovery Timeline</h2>
            <p>
              Sports injury recovery timelines vary based on injury severity, injury type, your age, and fitness level. Minor sprains may resolve in 1-3 weeks, while significant ligament injuries or fractures may require 2-3 months. More serious injuries may require 4-6 months or longer. During your initial assessment in Vasundhara or other service areas, we'll provide realistic recovery expectations.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Get Back in the Game</h2>
            <p>
              Don't let sports injuries sideline you. If you're experiencing pain or limited function from a sports injury in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, contact our experienced sports injury recovery specialists today. We're committed to providing the therapy you need to recover fully and return to your sport stronger and more confident than before.
            </p>
          </div>

          {/* CTA Card */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Ready for Your Sports Injury Recovery?</CardTitle>
              <CardDescription>Book your physiotherapy session in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali today</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <Link href="/contact">Schedule Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
