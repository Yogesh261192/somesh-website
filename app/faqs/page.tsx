import { Metadata } from 'next'
import Script from 'next/script'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Physiotherapy FAQs | Answers for Delhi NCR | Same Day Visit',
  description: 'Have questions about home physiotherapy? Find answers about our treatments, booking, and same-day home visits in Delhi, Noida & Ghaziabad. Read more!',
  keywords: 'physiotherapy FAQ, home physiotherapy questions, Delhi physiotherapy services, physiotherapy booking, same day physiotherapist',
}

const faqs = [
  {
    question: "What is home physiotherapy?",
    answer: "Home physiotherapy brings clinical-grade, professional rehabilitation services directly to your doorstep. Our highly qualified physiotherapists visit you at your home with portable equipment, providing one-on-one personalized treatment in the comfort of your own environment. This eliminates the stress of traveling in traffic while in pain and allows for a much more convenient, focused, and faster recovery process."
  },
  {
    question: "How do I book a physiotherapy session?",
    answer: "Booking a session with us is quick and hassle-free. You can instantly book by messaging us on WhatsApp at +91 81301 71272, calling us directly, or filling out the contact form on our website. We strive to offer same-day home visits across Delhi NCR, scheduling a convenient time that fits perfectly into your daily routine."
  },
  {
    question: "What conditions do you treat?",
    answer: "We treat a comprehensive range of musculoskeletal and neurological conditions right at your home. This includes severe back pain, sciatica, cervical spondylosis, frozen shoulder, and sports injuries like ACL tears. We also specialize in post-surgical rehabilitation (knee/hip replacements) and elderly mobility care, ensuring targeted recovery for both acute injuries and chronic pain."
  },
  {
    question: "How long does each session last?",
    answer: "A standard home physiotherapy session typically lasts between 45 to 60 minutes, depending on the severity of your condition and the required treatment protocols. The initial visit usually takes a bit longer, as our physiotherapist conducts a thorough, comprehensive physical assessment to design your customized recovery plan. We focus on quality care, never rushing your treatment."
  },
  {
    question: "Do I need a doctor's prescription?",
    answer: "No, a doctor's prescription is not strictly mandatory to begin physiotherapy with us. Our certified physiotherapists are trained to independently assess, diagnose, and treat musculoskeletal conditions. However, if you have recently undergone surgery or have a severe medical history, we highly recommend sharing your doctor's notes so we can align our therapy with your physician’s surgical protocols."
  },
  {
    question: "What should I prepare for my first session?",
    answer: "For your first session, please wear comfortable, loose-fitting clothing that allows easy movement of the affected joints. Ensure there is a small, clear space in your room or living area where treatment and exercises can safely take place. Additionally, keep any relevant medical reports, MRI scans, X-rays, or previous prescriptions handy for our physiotherapist to review during the assessment."
  },
  {
    question: "Are your physiotherapists qualified?",
    answer: "Absolutely. Every physiotherapist on our team is a highly qualified, certified professional holding either a Bachelor’s (BPT) or Master’s (MPT) degree in Physiotherapy. They are fully registered with the respective medical councils and have years of clinical experience. We specifically train our team for home-based care to ensure they deliver hospital-grade treatment with utmost professionalism and empathy."
  },
  {
    question: "How many sessions will I need?",
    answer: "The total number of sessions heavily depends on the specific condition, its severity, and how your body responds to the initial treatments. Minor muscle strains might resolve in 3 to 5 sessions, while post-surgery rehab or chronic frozen shoulder may require a tailored 10 to 15 session plan. During your first assessment, our physiotherapist will provide a clear, estimated timeline for your complete recovery."
  },
  {
    question: "What areas do you serve?",
    answer: "We provide prompt and reliable home physiotherapy services across major regions of Delhi NCR. Our primary service areas include Central and East Delhi, Noida, Gurgaon, and comprehensive coverage of Ghaziabad (including Indirapuram, Vaishali, Vasundhara, and Raj Nagar Extension). We strategically map our therapists to ensure timely, same-day visits in these localities."
  },
  {
    question: "Do you provide emergency services?",
    answer: "While physiotherapy is generally not classified as an emergency medical service, we understand that conditions like acute locked back or severe sciatica require immediate attention. We strive to accommodate urgent pain-relief requests with same-day home visits whenever our schedule permits. However, for life-threatening medical emergencies, please rush to your nearest hospital immediately."
  },
  {
    question: "What equipment do you bring?",
    answer: "Our physiotherapists bring a complete mobile clinic setup right to your living room. This includes clinical-grade portable modalities such as TENS/IFT machines for pain relief, therapeutic ultrasound devices for tissue healing, and manual massagers. We also bring various resistance bands, mobilization belts, and basic exercise equipment to ensure you get a full-scale therapy session without needing to own any gear."
  },
  {
    question: "Can I get physiotherapy if I'm bedridden?",
    answer: "Yes, treating bedridden patients and senior citizens with severe mobility challenges is one of our core specialties. We design gentle, bed-based therapeutic exercises focusing on preventing muscle atrophy, improving blood circulation, and avoiding bedsores. Our empathetic physiotherapists work patiently to slowly rebuild strength and transition the patient from bed to sitting, and eventually to safe standing."
  },
  {
    question: "What is the cancellation policy?",
    answer: "We kindly request at least a 4-hour notice if you need to cancel or reschedule your home physiotherapy session. This allows us to offer that time slot to another patient in pain. While we understand that sudden emergencies happen and are accommodating, frequent late cancellations may incur a nominal fee to compensate for our therapist's travel time and schedule disruption."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer comprehensive online video consultations for patients who prefer remote guidance or live outside our physical service areas. These virtual sessions are excellent for initial posture assessments, guided home exercise programs, and follow-up reviews. We use secure video calls to closely monitor your movements and adjust your exercises in real-time."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to common questions about our home physiotherapy services in Delhi NCR.
              If you don't find what you're looking for, feel free to contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918130171272"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Call Us: +91 81301 71272
            </a>
            <a
              href="https://wa.me/918130171272?text=Hi,%20I%20have%20a%20question%20about%20your%20physiotherapy%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-background hover:bg-primary hover:text-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}