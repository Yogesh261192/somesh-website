import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Post Surgery Rehabilitation in Vasundhara, Ghaziabad | Physiotherapy",
  description: "Expert post-surgery rehabilitation and recovery programs in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, Vaishali. Joint replacement, ligament repair recovery.",
  keywords: [
    "post surgery rehabilitation vasundhara",
    "joint replacement rehabilitation ghaziabad",
    "knee surgery recovery noida",
    "shoulder surgery rehabilitation indirapuram",
    "hip replacement physiotherapy vasundhara",
    "ligament repair recovery raj nagar",
    "post operative physiotherapy vaishali",
    "ACL reconstruction rehabilitation ghaziabad",
    "post surgery recovery exercises vasundhara",
    "orthopedic rehabilitation noida",
    "surgical recovery physiotherapist",
    "post operative recovery program",
  ].join(", "),
  openGraph: {
    title: "Post Surgery Rehabilitation in Vasundhara - Expert Recovery Programs",
    description: "Professional post-surgery rehabilitation for joint replacements, ligament repairs, and orthopedic surgeries in Vasundhara, Ghaziabad, and nearby areas.",
    type: "website",
  },
}

export default function PostSurgeryRehabilitation() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Post Surgery Rehabilitation
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Expert recovery programs for joint replacements, ligament repairs, and orthopedic surgeries in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/services/post_surgery.webp"
                alt="Post surgery knee with medical bandage and support"
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
            <h2 className="text-3xl font-bold mt-8 mb-4">Understanding Post-Surgery Recovery</h2>
            <p>
              Orthopedic surgery can be transformative in addressing joint problems, ligament injuries, and structural damage. However, the true success of a surgical intervention depends critically on the quality of post-operative rehabilitation. Our comprehensive post-surgery rehabilitation programs in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali are designed to optimize your recovery, restore function, and return you to your desired activities as quickly and safely as possible.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Why Post-Surgery Rehabilitation Matters</h2>
            <p>
              Many patients underestimate the importance of rehabilitation after orthopedic surgery. While surgery addresses the structural problem, rehabilitation restores function, strength, and confidence. Without proper post-surgery rehabilitation in Vasundhara, patients may experience prolonged recovery, reduced range of motion, persistent weakness, or delayed return to normal activities. Our specialized programs prevent these complications by providing evidence-based rehabilitation tailored to your specific surgery.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Goals of Post-Surgery Physiotherapy:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduce pain and swelling in the surgical area</li>
              <li>Restore normal range of motion and flexibility</li>
              <li>Rebuild strength in surgical and adjacent muscles</li>
              <li>Improve balance, proprioception, and stability</li>
              <li>Restore functional mobility for daily activities</li>
              <li>Enable safe return to sports and recreational activities</li>
              <li>Prevent complications such as stiffness and contractures</li>
              <li>Provide psychological support and motivation during recovery</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Common Surgeries We Treat</h2>

            <h3 className="text-2xl font-bold mt-6 mb-3">Knee Surgery and ACL Reconstruction</h3>
            <p>
              Knee surgeries, particularly ACL reconstructions, are among the most common orthopedic procedures. Our post-surgery rehabilitation programs in Vasundhara and throughout Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali follow evidence-based protocols that progressively restore knee function. We work through various phases of recovery, from initial pain management and range of motion restoration to advanced strengthening and proprioceptive training needed for return to sports.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Shoulder Surgery</h3>
            <p>
              Shoulder surgeries, including rotator cuff repairs and labral repairs, require meticulous rehabilitation. The subtle mechanics of the shoulder joint demand careful, progressive exercises. Our physiotherapists in Vasundhara provide specialized post-surgery rehabilitation that respects surgical timelines while progressively restoring shoulder strength, mobility, and function.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Hip Surgery and Joint Replacement</h3>
            <p>
              Hip replacement and hip arthroscopy patients benefit tremendously from structured post-surgery rehabilitation. Our programs in Ghaziabad and surrounding areas help patients achieve pain-free movement, improve gait patterns, and safely progress to normal walking and functional activities. We provide specific exercises that restore hip strength while protecting the surgical site.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Ankle and Foot Surgery</h3>
            <p>
              Ankle surgeries and foot procedures require specialized rehabilitation to restore balance, proprioception, and walking mechanics. Our physiotherapists in Noida, Indirapuram, Raj Nagar, and Vaishali provide progressive rehabilitation that safely returns patients to normal weight-bearing and functional activities.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Phases of Post-Surgery Rehabilitation</h2>
            <p>
              Post-operative rehabilitation typically follows distinct phases, each with specific goals and guidelines. Our physiotherapists in Vasundhara design phase-specific programs that progress safely and effectively.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 1: Acute Phase (0-2 Weeks Post-Surgery)</h3>
            <p>
              This critical phase focuses on pain management, swelling reduction, and protection of the surgical site:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gentle range of motion exercises within safe limits</li>
              <li>Isometric muscle contractions to maintain strength</li>
              <li>Ice and elevation to reduce swelling</li>
              <li>Pain management through modalities</li>
              <li>Basic mobility and transfer training</li>
              <li>Wound care and precautions instruction</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 2: Early Strengthening Phase (2-4 Weeks)</h3>
            <p>
              As pain and swelling decrease, rehabilitation progresses to include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Progressive range of motion exercises</li>
              <li>Gentle active-assisted exercises</li>
              <li>Isometric and light isotonic strengthening</li>
              <li>Proprioceptive training initiation</li>
              <li>Controlled weight-bearing progression</li>
              <li>Functional mobility improvement</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 3: Progressive Strengthening (4-8 Weeks)</h3>
            <p>
              This phase emphasizes building strength and functional capacity:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resistance exercises with progressive resistance</li>
              <li>Full range of motion achievement</li>
              <li>Advanced proprioceptive training</li>
              <li>Balance and coordination exercises</li>
              <li>Functional movement patterns</li>
              <li>Return to basic activities of daily living</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Phase 4: Advanced Rehabilitation (8+ Weeks)</h3>
            <p>
              The final phase prepares for return to normal activities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sport-specific or activity-specific training</li>
              <li>High-intensity strengthening exercises</li>
              <li>Cardiovascular conditioning</li>
              <li>Advanced proprioceptive and balance training</li>
              <li>Agility and power development</li>
              <li>Return to sport or recreation protocols</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Our Post-Surgery Rehabilitation Approach</h2>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/assets/services/post_approach.webp"
                alt="Post-Surgery Recovery Approach"
                fill
                className="object-cover"
              />
            </div>
            <p>
              Our post-surgery rehabilitation in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali is individualized, evidence-based, and results-oriented. We combine the latest evidence with clinical experience to deliver superior outcomes.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Initial Assessment and Planning</h3>
            <p>
              We begin post-surgery rehabilitation with thorough assessment including surgical details, current restrictions, range of motion, strength, swelling, and functional limitations. This information guides our program design specific to your needs.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Manual Therapy</h3>
            <p>
              Hands-on treatment accelerates recovery by improving mobility and reducing pain:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scar tissue mobilization and manipulation</li>
              <li>Joint mobilization to restore normal mechanics</li>
              <li>Soft tissue massage to reduce tension</li>
              <li>Manual lymphatic drainage to reduce swelling</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Therapeutic Modalities</h3>
            <p>
              Modern modalities support recovery and pain management:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ice and heat therapy for pain and swelling management</li>
              <li>Electrotherapy modalities</li>
              <li>Ultrasound therapy for tissue healing</li>
              <li>Compression therapy for swelling reduction</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Progressive Exercise Programming</h3>
            <p>
              Structured, progressive exercises form the foundation of recovery, building strength, mobility, and confidence as you progress through rehabilitation phases.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Home Exercise Programs</h2>
            <p>
              Success in post-surgery rehabilitation depends on consistent adherence to home exercises. Our physiotherapists in Vasundhara provide detailed home programs tailored to your rehabilitation phase. These exercises are crucial for maintaining progress between therapy sessions and accelerating overall recovery.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Return to Sports and Activities</h2>
            <p>
              One of our primary goals in post-surgery rehabilitation throughout Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali is enabling safe return to sports and recreational activities. We follow evidence-based return-to-sport protocols that progress gradually, ensuring structural integrity is maintained while rebuilding confidence and skill.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Why Choose Our Post-Surgery Rehabilitation?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specialized experience in post-operative care</li>
              <li>Phase-specific protocols based on surgical type</li>
              <li>Evidence-based progression guidelines</li>
              <li>Experienced physiotherapists in Vasundhara, Ghaziabad, and surrounding areas</li>
              <li>Individualized programming based on your goals</li>
              <li>Close communication with your surgeon when needed</li>
              <li>Home physiotherapy services for convenience</li>
              <li>Demonstration and education for independent care</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Recovery Timeline Expectations</h2>
            <p>
              Recovery timelines vary based on the type of surgery, your age, overall health, and adherence to rehabilitation. Many patients progress through the initial phases relatively quickly, with the later phases taking longer as strength and confidence build. During your initial consultation for post-surgery rehabilitation in Vasundhara, we'll provide realistic expectations specific to your situation.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Complications We Help Prevent</h2>
            <p>
              Proper post-surgery rehabilitation prevents common complications:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Arthrofibrosis (joint stiffness)</li>
              <li>Reduced range of motion</li>
              <li>Chronic pain and inflammation</li>
              <li>Weakness and muscle atrophy</li>
              <li>Proprioceptive deficits</li>
              <li>Gait abnormalities</li>
              <li>Re-injury risk</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Begin Your Recovery Today</h2>
            <p>
              If you have recently undergone orthopedic surgery in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, don't delay starting rehabilitation. Early, appropriate post-surgery rehabilitation is the cornerstone of successful recovery. Contact our experienced physiotherapy team today to begin your personalized post-surgery rehabilitation program and get back to doing what you love.
            </p>
          </div>

          {/* CTA Card */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Ready for Your Post-Surgery Rehabilitation?</CardTitle>
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
