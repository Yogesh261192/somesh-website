import { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | DelhiPhysio@Home',
  description: 'Get answers to common questions about our home physiotherapy services in Delhi NCR. Learn about our treatments, booking process, and what to expect.',
  keywords: 'physiotherapy FAQ, home physiotherapy questions, Delhi physiotherapy services, physiotherapy booking',
}

const faqs = [
  {
    question: "What is home physiotherapy?",
    answer: "Home physiotherapy brings professional physiotherapy services directly to your doorstep. Our qualified physiotherapists visit you at home, providing personalized treatment in the comfort of your own environment. This eliminates the need for travel and allows for more convenient recovery."
  },
  {
    question: "How do I book a physiotherapy session?",
    answer: "You can book a session in three easy ways: 1) Call us at +91 81301 71272, 2) Message us on WhatsApp at the same number, or 3) Use our online booking form. We'll schedule a convenient time for your first assessment and treatment."
  },
  {
    question: "What conditions do you treat?",
    answer: "We treat a wide range of musculoskeletal conditions including back pain, neck pain, sports injuries, post-surgical rehabilitation, elderly mobility issues, joint problems, and chronic pain conditions. Our physiotherapists are experienced in both acute and chronic conditions."
  },
  {
    question: "How long does each session last?",
    answer: "Each physiotherapy session typically lasts 45-60 minutes, depending on your specific needs and condition. The first session may be slightly longer as it includes a comprehensive assessment."
  },
  {
    question: "Do I need a doctor's prescription?",
    answer: "While a doctor's prescription is not mandatory, we recommend consulting your physician before starting physiotherapy, especially for serious conditions. Our physiotherapists can work alongside your healthcare team for optimal results."
  },
  {
    question: "What should I prepare for my first session?",
    answer: "Wear comfortable, loose-fitting clothing that allows easy movement. Clear a space in your home where treatment can take place. Have any relevant medical reports, X-rays, or doctor's notes ready. Most importantly, be ready to discuss your medical history and current symptoms."
  },
  {
    question: "Are your physiotherapists qualified?",
    answer: "Yes, all our physiotherapists are highly qualified professionals with Bachelor's or Master's degrees in Physiotherapy. They are registered with the Indian Association of Physiotherapists and have extensive experience in home-based care."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on your condition, severity, and response to treatment. Our physiotherapist will assess you during the first visit and provide a recommended treatment plan. Most conditions require 8-12 sessions, but this can vary."
  },
  {
    question: "What areas do you serve?",
    answer: "We provide home physiotherapy services across Delhi NCR including Delhi, Shahdara, Noida, Gurgaon, Ghaziabad, Indirapuram, Raj Nagar, and Loni. If you're outside these areas, please contact us to discuss availability."
  },
  {
    question: "Do you provide emergency services?",
    answer: "While we don't provide emergency services, we can often accommodate urgent cases within 24 hours. For medical emergencies, please contact your nearest hospital or emergency services immediately."
  },
  {
    question: "What equipment do you bring?",
    answer: "Our physiotherapists come equipped with portable treatment tools including therapeutic ultrasound machines, TENS units, exercise bands, resistance equipment, and manual therapy tools. We also provide home exercise programs and education."
  },
  {
    question: "Can I get physiotherapy if I'm bedridden?",
    answer: "Yes, we specialize in treating patients who are bedridden or have mobility challenges. Our physiotherapists can provide treatment in your bedroom and adapt exercises to your current abilities. We focus on gentle, effective techniques suitable for your condition."
  },
  {
    question: "What is the cancellation policy?",
    answer: "We require at least 4 hours notice for session cancellations. Late cancellations or no-shows may be charged. However, we understand emergencies happen and will work with you to reschedule when possible."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer virtual consultations for initial assessments, follow-ups, and exercise guidance. This can be particularly useful for patients who prefer remote care or need quick advice between in-person sessions."
  }
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
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