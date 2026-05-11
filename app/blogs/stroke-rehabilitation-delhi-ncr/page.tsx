"use client"

import { useState } from "react"
import Script from "next/script"
import Link from "next/link"

const content = {
  en: {
    category: "Stroke Rehabilitation",
    date: "May 11, 2026",
    title:
      "Stroke Recovery at Home — Complete Physiotherapy Guide for Paralysis Rehabilitation in Delhi NCR",
    intro:
      "Stroke recovery can feel overwhelming for both patients and families. With the right physiotherapy rehabilitation at home, many stroke survivors improve balance, walking, hand movement and daily independence. This guide explains stroke rehab stages, exercises and home physiotherapy options across Delhi NCR.",
    author: "Dr. Somesh",
    readTime: "10 min read",

    sections: [
      {
        heading: "What Happens After a Stroke?",
        content:
          "A stroke occurs when blood supply to a part of the brain gets interrupted. This can affect movement, speech, balance, coordination and muscle control depending on the area involved."
      },

      {
        heading: "Common Problems After Stroke",
        list: [
          "Weakness or paralysis on one side",
          "Difficulty walking or standing",
          "Balance and coordination issues",
          "Hand stiffness and reduced grip",
          "Speech or swallowing difficulty",
          "Shoulder pain and spasticity",
          "Bed mobility and transfer problems"
        ],
        content:
          "Every stroke patient presents differently. Early physiotherapy rehabilitation plays a major role in recovery."
      },

      {
        heading: "Why Early Stroke Physiotherapy Matters",
        list: [
          "Prevents muscle stiffness and contractures",
          "Improves circulation and mobility",
          "Helps regain balance and walking",
          "Improves confidence and independence",
          "Reduces bed-rest complications",
          "Promotes brain-muscle re-learning"
        ],
        content:
          "The brain has the ability to adapt through neuroplasticity. Guided rehabilitation helps the brain create new movement pathways."
      },

      {
        heading: "Stages of Stroke Rehabilitation",
        list: [
          "Acute stage — positioning, breathing and passive movements",
          "Early rehab stage — sitting balance and assisted standing",
          "Functional recovery stage — gait training and strengthening",
          "Advanced stage — coordination, stair climbing and endurance"
        ],
        content:
          "Stroke rehabilitation is gradual and requires consistency, patience and regular guided exercises."
      },

      {
        heading: "Benefits of Home Physiotherapy for Stroke Patients",
        list: [
          "Comfortable rehab in familiar environment",
          "Less stress compared to hospital travel",
          "Personalized one-on-one sessions",
          "Family education and caregiver guidance",
          "Better focus on functional daily activities",
          "Safer mobility training at home"
        ],
        content:
          "Home physiotherapy is especially useful for elderly, bedridden or severe stroke patients."
      },

      {
        heading: "What Does a Stroke Physiotherapy Session Include?",
        list: [
          "Detailed assessment and movement analysis",
          "Bed mobility and transfer training",
          "Balance and gait training",
          "Muscle activation and strengthening",
          "Stretching for stiffness/spasticity",
          "Hand function and coordination exercises",
          "Caregiver education and positioning"
        ]
      },

      {
        heading: "5 Important Exercises for Stroke Recovery",
        numbered: [
          "Passive arm and leg range-of-motion exercises",
          "Bridging exercise for bed mobility",
          "Supported sitting balance training",
          "Weight shifting while standing",
          "Assisted walking with gait training"
        ],
        content:
          "Exercises should always be performed according to the patient's stage and physical condition."
      },

      {
        heading: "Modern Neuro-Rehabilitation Techniques",
        list: [
          "Neuro-developmental therapy (NDT)",
          "Balance and gait rehabilitation",
          "Functional electrical stimulation (FES)",
          "Mirror therapy for upper limb recovery",
          "TENS for pain management",
          "Task-oriented movement retraining"
        ]
      },

      {
        heading: "Signs Recovery is Progressing Well",
        list: [
          "Improved sitting or standing balance",
          "Better movement control",
          "Reduced stiffness",
          "Improved walking tolerance",
          "Better hand coordination",
          "More independence in daily tasks"
        ]
      },

      {
        heading: "Red Flags — When Immediate Medical Help is Needed",
        warning: true,
        list: [
          "Sudden worsening weakness",
          "New facial drooping or speech issues",
          "Breathing difficulty",
          "Severe uncontrolled blood pressure",
          "Sudden confusion or unconsciousness",
          "Chest pain during rehab"
        ]
      },

      {
        heading: "Why Choose Delhi Physio At Home?",
        list: [
          "✅ Expert stroke rehabilitation physiotherapy",
          "✅ Home physiotherapy across Delhi NCR",
          "✅ Personalized neuro rehab programs",
          "✅ Caregiver training and support",
          "✅ Flexible home visit timings",
          "✅ Experienced in paralysis & bedridden care"
        ]
      }
    ]
  },

  hi: {
    category: "स्ट्रोक पुनर्वास",
    date: "9 मई 2026",
    title:
      "स्ट्रोक रिकवरी के लिए सम्पूर्ण होम फिजियोथेरेपी गाइड — पैरालिसिस रिहैबिलिटेशन दिल्ली NCR",

    intro:
      "स्ट्रोक के बाद मरीज और परिवार दोनों के लिए रिकवरी कठिन लग सकती है। सही फिजियोथेरेपी और नियमित रिहैबिलिटेशन से चलना, संतुलन और दैनिक कार्यों में काफी सुधार संभव है।",

    author: "डॉ. सोमेश",
    readTime: "10 मिनट पढ़ें",

    sections: [
      {
        heading: "स्ट्रोक के बाद क्या होता है?",
        content:
          "स्ट्रोक में मस्तिष्क के किसी हिस्से में रक्त आपूर्ति बाधित हो जाती है, जिससे शरीर की मूवमेंट, संतुलन, बोलने और मांसपेशियों के नियंत्रण पर असर पड़ सकता है।"
      },

      {
        heading: "स्ट्रोक के सामान्य लक्षण",
        list: [
          "एक तरफ कमजोरी या पैरालिसिस",
          "चलने में कठिनाई",
          "संतुलन बिगड़ना",
          "हाथ में जकड़न",
          "बोलने में समस्या",
          "शोल्डर दर्द",
          "बेड से उठने-बैठने में कठिनाई"
        ]
      },

      {
        heading: "जल्दी फिजियोथेरेपी क्यों जरूरी है?",
        list: [
          "मांसपेशियों की जकड़न रोकने में मदद",
          "चलने-फिरने की क्षमता बढ़ती है",
          "संतुलन सुधारता है",
          "आत्मनिर्भरता बढ़ती है",
          "बेड रेस्ट की जटिलताएं कम होती हैं",
          "ब्रेन-मसल री-लर्निंग में मदद"
        ]
      },

      {
        heading: "स्ट्रोक रिहैबिलिटेशन के चरण",
        list: [
          "शुरुआती चरण — पोजिशनिंग और पैसिव मूवमेंट",
          "अर्ली रिहैब — बैठना और खड़ा होना",
          "रिकवरी चरण — वॉकिंग और स्ट्रेंथनिंग",
          "एडवांस चरण — बैलेंस और कोऑर्डिनेशन"
        ]
      },

      {
        heading: "घर पर फिजियोथेरेपी के फायदे",
        list: [
          "आरामदायक वातावरण",
          "अस्पताल जाने की परेशानी कम",
          "पर्सनलाइज्ड सेशन",
          "परिवार को सही गाइडेंस",
          "दैनिक गतिविधियों पर बेहतर फोकस",
          "सुरक्षित वॉकिंग ट्रेनिंग"
        ]
      },

      {
        heading: "एक स्ट्रोक फिजियोथेरेपी सेशन में क्या होता है?",
        list: [
          "डिटेल्ड असेसमेंट",
          "बेड मोबिलिटी ट्रेनिंग",
          "बैलेंस ट्रेनिंग",
          "मसल एक्टिवेशन",
          "स्ट्रेचिंग",
          "वॉकिंग प्रैक्टिस",
          "केयरगिवर गाइडेंस"
        ]
      },

      {
        heading: "स्ट्रोक रिकवरी के लिए 5 एक्सरसाइज",
        numbered: [
          "पैसिव हाथ-पैर मूवमेंट",
          "ब्रिजिंग एक्सरसाइज",
          "सपोर्टेड सिटिंग बैलेंस",
          "स्टैंडिंग वेट शिफ्टिंग",
          "असिस्टेड वॉकिंग"
        ]
      },

      {
        heading: "आधुनिक न्यूरो रिहैब तकनीकें",
        list: [
          "NDT थेरेपी",
          "गेट ट्रेनिंग",
          "FES",
          "मिरर थेरेपी",
          "TENS",
          "फंक्शनल ट्रेनिंग"
        ]
      },

      {
        heading: "रिकवरी के अच्छे संकेत",
        list: [
          "बैठने/खड़े होने में सुधार",
          "जकड़न कम होना",
          "चलने में सुधार",
          "हाथ की मूवमेंट बेहतर होना",
          "दैनिक कार्यों में स्वतंत्रता बढ़ना"
        ]
      },

      {
        heading: "रेड फ्लैग्स — तुरंत डॉक्टर से संपर्क करें",
        warning: true,
        list: [
          "अचानक कमजोरी बढ़ना",
          "सांस लेने में परेशानी",
          "नई फेस ड्रूपिंग",
          "बेहोशी या भ्रम",
          "सीने में दर्द"
        ]
      },

      {
        heading: "क्यों चुनें Delhi Physio At Home?",
        list: [
          "✅ एक्सपर्ट स्ट्रोक रिहैबिलिटेशन",
          "✅ दिल्ली NCR में होम विज़िट",
          "✅ पर्सनलाइज्ड न्यूरो प्रोग्राम",
          "✅ केयरगिवर सपोर्ट",
          "✅ फ्लेक्सिबल टाइमिंग",
          "✅ पैरालिसिस केयर अनुभव"
        ]
      }
    ]
  }
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Stroke Rehabilitation at Home in Delhi NCR | Delhi Physio At Home",
  description:
    "Expert stroke rehabilitation and paralysis physiotherapy at home across Delhi NCR.",
  author: {
    "@type": "Person",
    name: "Dr. Somesh"
  },
  publisher: {
    "@type": "Organization",
    name: "Delhi Physio At Home"
  },
  datePublished: new Date().toISOString()
}

export default function StrokeRehabBlog() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(schema)}
      </Script>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="font-semibold text-primary">
              {c.category}
            </span>
            <span>|</span>
            <span>{c.date}</span>
          </div>

          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${
                lang === "en"
                  ? "bg-primary text-white"
                  : "bg-muted/20 text-muted-foreground"
              }`}
            >
              English
            </button>

            <button
              type="button"
              onClick={() => setLang("hi")}
              className={`px-3 py-1 rounded ${
                lang === "hi"
                  ? "bg-primary text-white"
                  : "bg-muted/20 text-muted-foreground"
              }`}
            >
              हिंदी
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            {c.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-3">
            {c.intro}
          </p>

          <div className="text-sm text-muted-foreground">
            <span>{c.author}</span>
            <span className="mx-2">•</span>
            <span>{c.date}</span>
            <span className="mx-2">•</span>
            <span>{c.readTime}</span>
          </div>
        </div>

        <article className="space-y-8">
          {c.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {section.heading}
              </h2>

              {section.content && (
                <p className="text-muted-foreground mb-3">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul
                  className={`space-y-2 ${
                    section.warning
                      ? "text-red-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.list.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
              )}

              {section.numbered && (
                <ol className="list-decimal ml-5 text-muted-foreground space-y-2">
                  {section.numbered.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </article>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/918130171272"
            target="_blank"
            className="bg-primary text-white px-6 py-3 rounded-lg inline-block"
          >
            Book on WhatsApp
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blogs">← View All Blogs</Link>
        </div>
      </div>
    </main>
  )
}