import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Back Pain Treatment & Relief in Vasundhara, Ghaziabad | Physiotherapy",
  description: "Expert back pain treatment in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, Vaishali. Comprehensive physiotherapy for chronic back pain, sciatica, and spinal issues. Book your session today.",
  keywords: [
    "back pain treatment vasundhara",
    "physiotherapy vasundhara",
    "back pain relief ghaziabad",
    "sciatica treatment noida",
    "spinal pain therapy indirapuram",
    "chronic back pain treatment vaishali",
    "back pain physician raj nagar",
    "best physiotherapist for back pain vasundhara",
    "home physiotherapy back pain ghaziabad",
    "lower back pain treatment",
    "upper back pain relief",
    "back pain physiotherapy noida",
  ].join(", "),
  openGraph: {
    title: "Back Pain Treatment in Vasundhara, Ghaziabad - Expert Physiotherapy",
    description: "Professional back pain treatment and physiotherapy services in Vasundhara, Ghaziabad, Noida, and nearby areas. Specializing in chronic back pain and sciatica relief.",
    type: "website",
  },
}

export default function BackPainTreatment() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Back Pain Treatment & Relief
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Expert physiotherapy treatment for back pain, sciatica, and spinal issues in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/back-pain-hero.png"
                alt="Patient with back pain touching lower back"
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
            <h2 className="text-3xl font-bold mt-8 mb-4">Understanding Back Pain</h2>
            <p>
              Back pain is one of the most common health complaints affecting millions of people globally. Whether you're in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, back pain can significantly impact your quality of life, limiting your ability to work, exercise, and enjoy daily activities. Our specialized physiotherapy services in Vasundhara offer comprehensive treatment solutions designed to address the root cause of your back pain and provide long-lasting relief.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">What Causes Back Pain?</h2>
            <p>
              Back pain can originate from various sources, including muscle strain, poor posture, herniated discs, spinal stenosis, and degenerative disc disease. Modern lifestyles, particularly desk jobs and sedentary routines, have made back pain increasingly prevalent in areas like Ghaziabad, Noida, and Indirapuram. Whether you experience acute pain from an injury or chronic pain lasting more than three months, our physiotherapists in Vasundhara are equipped to diagnose and treat your condition effectively.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Common Causes Include:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Muscle or ligament strain from lifting heavy objects or sudden movements</li>
              <li>Poor posture during work, especially among office workers in Noida and Ghaziabad</li>
              <li>Herniated or bulging discs pressing on nerves</li>
              <li>Spinal stenosis (narrowing of the spinal canal)</li>
              <li>Arthritis and degenerative disc disease</li>
              <li>Sciatica causing radiating pain down the legs</li>
              <li>Scoliosis and other spinal curvatures</li>
              <li>Injuries from accidents or sports</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Our Back Pain Treatment Approach</h2>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/back-pain-treatment.png"
                alt="Professional Physiotherapy Treatment"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <p>
              At our physiotherapy clinic in Vasundhara, we believe in a holistic approach to back pain treatment. Rather than simply masking symptoms with pain medication, we focus on addressing the underlying causes. Our certified physiotherapists conduct thorough assessments to understand your specific condition before designing a personalized treatment plan tailored to your needs.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Comprehensive Assessment</h3>
            <p>
              Our physiotherapists in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali begin with a detailed evaluation including your medical history, lifestyle factors, and functional limitations. We may use diagnostic imaging when necessary and perform specific orthopedic tests to identify the exact source of your pain.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Manual Therapy Techniques</h3>
            <p>
              Manual therapy is a cornerstone of our back pain treatment in Vasundhara. Our trained physiotherapists use hands-on techniques including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Spinal mobilization:</strong> Gentle movements to improve spinal joint mobility and reduce stiffness</li>
              <li><strong>Soft tissue massage:</strong> Therapeutic massage to relieve muscle tension and improve blood flow</li>
              <li><strong>Myofascial release:</strong> Targeting the connective tissue surrounding muscles to reduce pain</li>
              <li><strong>Trigger point therapy:</strong> Addressing specific points of muscle tension</li>
              <li><strong>Joint manipulation:</strong> Controlled movements to restore normal spinal alignment</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Targeted Exercise Program</h3>
            <p>
              One of the most effective components of back pain treatment is a customized exercise program. Our physiotherapists in Vasundhara design specific exercises to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strengthen core muscles that support the spine</li>
              <li>Improve flexibility and range of motion</li>
              <li>Correct posture and body mechanics</li>
              <li>Stabilize the spine and prevent future injuries</li>
              <li>Gradually increase functional capacity</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Modalities and Technology</h3>
            <p>
              Our back pain treatment in Ghaziabad and surrounding areas, including Noida, Indirapuram, Raj Nagar, and Vaishali, utilizes modern physiotherapy modalities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>TENS therapy:</strong> Transcutaneous electrical nerve stimulation for pain relief</li>
              <li><strong>Heat therapy:</strong> Improving circulation and relaxing muscles</li>
              <li><strong>Ultrasound therapy:</strong> Promoting tissue healing</li>
              <li><strong>Interferential current:</strong> Reducing inflammation and pain</li>
              <li><strong>Traction therapy:</strong> Decompressing the spine and relieving nerve pressure</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Sciatica and Radiating Pain Treatment</h2>
            <p>
              Sciatica, a form of back pain that radiates down the leg, is particularly common in areas with sedentary workforces like Noida and Ghaziabad. This condition occurs when the sciatic nerve is compressed or irritated. Our specialized back pain treatment in Vasundhara includes specific techniques to relieve nerve compression and reduce radiating symptoms. Through targeted exercises, manual therapy, and postural correction, we help patients regain mobility and eliminate pain.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Lifestyle and Prevention Tips</h2>
            <p>
              Beyond treatment sessions, managing back pain requires lifestyle modifications. Our physiotherapists in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali provide comprehensive guidance including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ergonomics:</strong> Proper workspace setup to prevent recurring pain</li>
              <li><strong>Posture training:</strong> Maintaining correct alignment during daily activities</li>
              <li><strong>Activity modification:</strong> Adapting movements to protect your back</li>
              <li><strong>Strengthening routines:</strong> Home exercises to maintain improvements</li>
              <li><strong>Stress management:</strong> Understanding the connection between stress and muscle tension</li>
              <li><strong>Weight management:</strong> Reducing strain on the spine</li>
              <li><strong>Sleep positioning:</strong> Proper sleep habits for spinal health</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Why Choose Our Physiotherapy Services?</h2>
            <p>
              When seeking back pain treatment in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, you want experienced, certified professionals. Our team brings years of expertise in treating various back pain conditions. We are committed to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing personalized treatment plans based on thorough assessments</li>
              <li>Using evidence-based therapeutic techniques</li>
              <li>Offering convenient home physiotherapy services</li>
              <li>Ensuring transparent communication about treatment progress</li>
              <li>Empowering patients with knowledge for self-management</li>
              <li>Achieving long-term results without dependency on medication</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">How Long Does Treatment Take?</h2>
            <p>
              The duration of back pain treatment varies depending on the severity of your condition, how long you've had pain, and your commitment to the treatment plan. Acute back pain often responds quickly to treatment, while chronic conditions may require longer-term management. Most patients begin experiencing significant relief within 4-6 weeks of consistent physiotherapy in Vasundhara, Ghaziabad, or other areas. However, we develop treatment timelines specific to your condition during the initial assessment.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Testimonials from Our Patients</h2>
            <p>
              Hundreds of patients across Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali have found relief through our back pain treatment programs. Many have successfully returned to their normal activities and sports after working with our physiotherapists. Their success stories motivate us to continue delivering exceptional care.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Get Started with Your Back Pain Treatment Today</h2>
            <p>
              Don't let back pain limit your life. Whether you're in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, our experienced physiotherapists are ready to help you achieve lasting relief. Contact us today to schedule your comprehensive assessment and begin your journey to a pain-free life.
            </p>
          </div>

          {/* CTA Card */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Ready to Relieve Your Back Pain?</CardTitle>
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
