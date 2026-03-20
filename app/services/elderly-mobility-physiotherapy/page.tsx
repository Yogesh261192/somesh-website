import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Elderly Mobility Physiotherapy in Vasundhara, Ghaziabad | Seniors Care",
  description: "Gentle physiotherapy and mobility training for seniors in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, Vaishali. Improve balance, strength, and independence for elderly.",
  keywords: [
    "elderly physiotherapy vasundhara",
    "senior mobility training ghaziabad",
    "physiotherapy for elderly noida",
    "balance and fall prevention indirapuram",
    "senior citizen physiotherapy vasundhara",
    "elderly care physiotherapist raj nagar",
    "geriatric physiotherapy vaishali",
    "fall prevention for seniors ghaziabad",
    "elderly mobility improvement vasundhara",
    "strength training for seniors noida",
    "independent living seniors",
    "geriatric rehabilitation ghaziabad",
  ].join(", "),
  openGraph: {
    title: "Elderly Mobility Physiotherapy in Vasundhara - Senior Care Excellence",
    description: "Specialized gentle physiotherapy for seniors to improve balance, strength, and independence in Vasundhara, Ghaziabad, and nearby areas. Prevent falls and enhance quality of life.",
    type: "website",
  },
}

export default function ElderlyMobilityPhysiotherapy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Elderly Mobility Physiotherapy
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Gentle exercises and mobility training to improve balance, strength, and independence for seniors in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/services/old_age.png"
                alt="Elderly woman in wheelchair smiling happily"
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
            <h2 className="text-3xl font-bold mt-8 mb-4">Understanding Elderly Mobility Challenges</h2>
            <p>
              As we age, changes in muscle strength, flexibility, balance, and coordination are natural. However, these changes often lead to reduced mobility, decreased independence, and increased risk of falls—all of which can dramatically impact quality of life. Our specialized elderly mobility physiotherapy programs in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali are designed specifically for senior citizens, addressing these age-related changes with gentle, effective interventions that maintain and improve mobility, strength, and independence.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Why Mobility Matters for Seniors</h2>
            <p>
              Mobility is fundamental to independent living. When elderly individuals lose mobility, they often become dependent on others for daily activities, which can lead to social isolation, depression, and accelerated physical decline. Our elderly physiotherapy services in Vasundhara focus on maintaining and restoring mobility to help seniors remain independent and engaged in life. Regular physiotherapy can help seniors continue walking, climbing stairs, getting in and out of chairs, and participating in recreational activities they enjoy.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Benefits of Elderly Mobility Physiotherapy:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improved muscle strength and endurance</li>
              <li>Enhanced balance and reduced fall risk</li>
              <li>Better flexibility and range of motion</li>
              <li>Improved cardiovascular health</li>
              <li>Reduced pain and stiffness</li>
              <li>Greater confidence in movement</li>
              <li>Maintained independence in daily activities</li>
              <li>Improved quality of life and social engagement</li>
              <li>Better sleep quality</li>
              <li>Enhanced mental and emotional well-being</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Common Conditions in Elderly Requiring Physiotherapy</h2>

            <h3 className="text-2xl font-bold mt-6 mb-3">Arthritis and Joint Pain</h3>
            <p>
              Arthritis is extremely common in elderly populations, affecting joints throughout the body. Our physiotherapy in Ghaziabad and surrounding areas provides specific exercises and techniques to reduce pain, maintain range of motion, and improve function in arthritic joints. We help seniors manage arthritis pain without over-reliance on medications.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Osteoporosis</h3>
            <p>
              Osteoporosis weakens bones and increases fracture risk, particularly in elderly women. Our specialized elderly physiotherapy in Vasundhara includes weight-bearing exercises and balance training that strengthen bones, improve balance, and reduce fall risk—preventing dangerous fractures.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Balance and Fall Risk</h3>
            <p>
              Falls are a leading cause of injury and loss of independence in seniors. Our elderly mobility training in Noida, Indirapuram, Raj Nagar, and Vaishali includes specialized balance training and proprioceptive exercises that significantly reduce fall risk while improving confidence in movement.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Post-Stroke Rehabilitation</h3>
            <p>
              Stroke recovery requires specialized rehabilitation to restore movement, strength, and function. Our physiotherapists in Vasundhara provide comprehensive post-stroke physiotherapy including movement retraining, strength restoration, and functional recovery programs.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Parkinson's Disease and Movement Disorders</h3>
            <p>
              Physiotherapy plays an important role in managing Parkinson's disease and other movement disorders in elderly patients. Our specialized programs address movement difficulties, improve balance, and enhance quality of life.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Reduced Mobility After Hospitalization</h3>
            <p>
              Hospitalization or extended bed rest can significantly reduce elderly mobility. Our physiotherapists in Ghaziabad provide rehabilitation programs to restore strength, mobility, and independence after hospitalization.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Our Approach to Elderly Physiotherapy</h2>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/assets/services/our_approach.png"
                alt="Elderly Physiotherapy Approach"
                fill
                className="object-cover"
              />
            </div>
            <p>
              Elderly physiotherapy requires a specialized, gentle approach that respects the individual needs, abilities, and limitations of older adults. Our approach in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali is comprehensive and compassionate.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Comprehensive Assessment</h3>
            <p>
              We begin with a thorough assessment including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medical history and current health conditions</li>
              <li>Medications and potential side effects</li>
              <li>Functional abilities and limitations</li>
              <li>Balance and fall risk assessment</li>
              <li>Strength and flexibility evaluation</li>
              <li>Pain levels and joint assessment</li>
              <li>Living situation and support systems</li>
              <li>Goals and desired activities</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Gentle Manual Therapy</h3>
            <p>
              Our manual therapy for elderly patients is gentle and carefully controlled:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gentle joint mobilization to improve mobility</li>
              <li>Soft tissue massage to reduce stiffness</li>
              <li>Stretching techniques adapted for elderly patients</li>
              <li>Hands-on assistance with movement patterns</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Customized Exercise Programs</h3>
            <p>
              All exercises are carefully selected and progressed based on the individual's abilities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gentle strengthening for major muscle groups</li>
              <li>Balance and proprioceptive training</li>
              <li>Flexibility and range of motion exercises</li>
              <li>Functional movement training for daily activities</li>
              <li>Walking and gait training</li>
              <li>Stair climbing and transfer training</li>
              <li>Progressive conditioning</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3">Balance and Fall Prevention Training</h3>
            <p>
              Fall prevention is crucial for elderly safety. Our specialty programs include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Static and dynamic balance training</li>
              <li>Tai Chi and similar balance techniques</li>
              <li>Perturbation training to improve reactions</li>
              <li>Environmental safety assessment and modifications</li>
              <li>Footwear and walking aid recommendations</li>
              <li>Confidence building for movement</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Specialized Programs for Elderly Patients</h2>

            <h3 className="text-2xl font-bold mt-6 mb-3">Strength Training Program</h3>
            <p>
              Maintaining muscle strength is essential for independence in elderly adults. Our physiotherapists in Vasundhara provide safe, effective strength training specially designed for seniors, focusing on muscles critical for daily activities like walking, climbing stairs, and getting up from chairs.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Mobility Enhancement Program</h3>
            <p>
              This program improves range of motion, flexibility, and overall mobility, making daily activities easier and more enjoyable. Clients in Ghaziabad and surrounding areas often find they can pursue preferred activities like gardening, walking, and socializing with renewed confidence.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Pain Management Program</h3>
            <p>
              Chronic pain is common in elderly populations. Our pain management programs in Noida, Indirapuram, Raj Nagar, and Vaishali use exercises, manual therapy, and therapeutic modalities to reduce pain and improve function without over-reliance on pain medications.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Cardiovascular Conditioning Program</h3>
            <p>
              Regular physical activity improves cardiovascular health and overall vitality in elderly individuals. Our programs provide safe cardiovascular conditioning appropriate for elderly health levels.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Home-Based Physiotherapy for Convenience</h2>
            <p>
              Many elderly patients prefer receiving physiotherapy at home for convenience and comfort. Our home-based physiotherapy services in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, and Vaishali provide the same quality care in the familiar environment of the patient's home. This is particularly beneficial for patients with limited mobility or those who are uncomfortable traveling to a clinic.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Assistive Devices and Equipment</h2>
            <p>
              Our elderly mobility physiotherapy includes recommendations and training for appropriate assistive devices such as canes, walkers, and rollators. We help seniors select and use these devices correctly to maximize safety and independence. Our physiotherapists also recommend home modifications to reduce fall risk and improve accessibility.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Caregiver Education</h2>
            <p>
              Many elderly patients have caregivers who support their daily activities. Our physiotherapy in Vasundhara includes caregiver education about proper technique for assisting with mobility, exercises to reinforce at home, and safety considerations. This ensures consistent support for the elderly patient's rehabilitation goals.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Maintaining Independence and Quality of Life</h2>
            <p>
              The ultimate goal of our elderly mobility physiotherapy in Ghaziabad and surrounding areas is to maintain independence and enhance quality of life. We measure success not just by improved strength or balance, but by elderly patients' ability to continue participating in activities they enjoy and maintaining the independence that is crucial for dignity and well-being.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-3">Active Aging and Social Engagement</h3>
            <p>
              We believe elderly individuals should remain active and engaged in life. Our physiotherapy programs enable:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Independent walking and outdoor activities</li>
              <li>Participation in hobbies and recreational activities</li>
              <li>Social engagement and community involvement</li>
              <li>Continued independence with personal care and household tasks</li>
              <li>Confidence in movement and reduced anxiety about falls</li>
              <li>Improved mental health and overall well-being</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Why Choose Our Elderly Physiotherapy Services?</h2>
            <p>
              When selecting elderly physiotherapy in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali, experience with seniors is essential:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specialized experience in geriatric physiotherapy</li>
              <li>Gentle, respectful approach sensitive to elderly needs</li>
              <li>Understanding of common elderly health conditions</li>
              <li>Safe exercise prescription for elderly bodies</li>
              <li>Fall prevention expertise</li>
              <li>Patient and family education</li>
              <li>Home-based physiotherapy services</li>
              <li>Focus on maintaining independence and quality of life</li>
              <li>Compassionate, personalized care</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Getting Started with Elderly Physiotherapy</h2>
            <p>
              If you or a family member in Vasundhara, Ghaziabad, Noida, Indirapuram, Raj Nagar, or Vaishali is experiencing reduced mobility, balance problems, falls, or has difficulty with daily activities, physiotherapy can help. Contact us today to discuss how our customized elderly mobility programs can improve strength, balance, and independence, allowing you or your loved one to continue enjoying life to the fullest.
            </p>
          </div>

          {/* CTA Card */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Ready to Improve Your Elderly Mobility?</CardTitle>
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
