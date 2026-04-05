"use client"

import { useState } from "react"
import Link from "next/link"

const content = {
  en: {
    category: "Neurological Rehabilitation",
    date: "April 5, 2026",
    title: "Parkinson's Disease",
    intro:
      "Parkinson's Disease care at home can help reduce stiffness, improve balance, and support everyday movement without the extra stress of clinic travel.",
    sections: [
      {
        heading: "Why Home Physiotherapy Helps Parkinson's Disease",
        content:
          "Parkinson's often affects walking, turning, and the ability to stand up safely. Home physiotherapy allows a therapist to work with your actual surroundings and build a rehab plan that fits your daily life.",
      },
      {
        heading: "What a Home Visit Includes",
        list: [
          "Assessment of gait, balance, and movement patterns in your home",
          "Guided balance exercises to reduce falls",
          "Gentle mobility drills to ease stiffness and improve flexibility",
          "Practical advice for standing, turning, and walking safely",
        ],
      },
      {
        heading: "Symptoms We Support",
        list: [
          "Slow movement and stiffness",
          "Difficulty turning or changing direction",
          "Reduced arm swing and coordination",
          "Balance issues and fear of falling",
          "Daily tasks like getting in and out of chairs",
        ],
      },
      {
        heading: "Why Delhi NCR Home Care Works Best",
        content:
          "For Parkinson's patients, therapy is most effective when it matches the home environment. We support patients across Delhi, Noida, Ghaziabad, and Gurgaon with flexible home visit slots and clear weekly progress goals.",
      },
      {
        heading: "How to Book Your First Session",
        list: [
          "Send a WhatsApp message with your condition details",
          "Choose a same-day or next-day home visit slot",
          "Receive a personalised physiotherapy plan and home exercise routine",
          "Track progress with follow-up visits and easy home guidance",
        ],
      },
    ],
    ctaTitle: "Book Parkinson's Physiotherapy in Delhi NCR",
    ctaDesc:
      "A certified physiotherapist will visit your home and help you manage Parkinson's symptoms with practical balance and movement training.",
    ctaWhatsApp: "Book on WhatsApp",
    ctaCall: "Call: +91 81301 71272",
    backLink: "← View All Blogs",
  },
  hi: {
    category: "न्यूरोलॉजिकल रिहैबिलिटेशन",
    date: "5 अप्रैल 2026",
    title: "पार्किंसन रोग",
    intro:
      "पार्किंसन रोग के लिए घर पर फिजियोथेरेपी कठोरता घटाने, संतुलन सुधारने और रोज़मर्रा की गतिशीलता को बेहतर बनाने में मदद कर सकती है।",
    sections: [
      {
        heading: "पार्किंसन रोग में होम फिजियोथेरेपी क्यों मदद करती है",
        content:
          "पार्किंसन अक्सर चलने, मुड़ने और सुरक्षित खड़े होने को प्रभावित करता है। घर पर फिजियोथेरेपिस्ट आपके वास्तविक वातावरण में काम करके एक व्यावहारिक योजना बनाता है।",
      },
      {
        heading: "होम विज़िट में क्या होता है",
        list: [
          "घर में चलने और संतुलन का मूल्यांकन",
          "फॉल को कम करने के लिए संतुलन अभ्यास",
          "कठोरता कम करने के लिए कोमल गतिशीलता ड्रिल",
          "सुरक्षित खड़े होने, घूमने और चलने के व्यावहारिक सुझाव",
        ],
      },
      {
        heading: "हम किन लक्षणों में मदद करते हैं",
        list: [
          "धीमा चलना और अकड़न",
          "मोड़ने या दिशा बदलने में कठिनाई",
          "बाहों की गति और समन्वय में कमी",
          "संतुलन की समस्याएँ और गिरने का डर",
          "कुर्सी से उठने जैसे दैनिक कार्य",
        ],
      },
      {
        heading: "दिल्ली NCR में घर पर देखभाल क्यों बेहतर है",
        content:
          "पार्किंसन मरीजों के लिए सबसे अच्छा परिणाम उस वातावरण में मिलता है जहां वे रहते हैं। हम दिल्ली, नोएडा, गाजियाबाद और गुरुग्राम में लचीले समय और स्पष्ट प्रगति लक्ष्य के साथ सेवा देते हैं।",
      },
      {
        heading: "पहला सेशन कैसे बुक करें",
        list: [
          "व्हाट्सएप पर अपनी स्थिति बताएं",
          "पहले या अगले दिन का होम विज़िट चुनें",
          "व्यक्तिगत फिजियोथेरेपी योजना और होम एक्सरसाइज़ रूटीन पाएं",
          "फॉलो-अप विज़िट से प्रगति ट्रैक करें",
        ],
      },
    ],
    ctaTitle: "दिल्ली NCR में पार्किंसन फिजियोथेरेपी बुक करें",
    ctaDesc:
      "एक प्रमाणित फिजियोथेरेपिस्ट आपके घर आएगा और संतुलन व गतिशीलता प्रशिक्षण के साथ मदद करेगा।",
    ctaWhatsApp: "WhatsApp पर बुक करें",
    ctaCall: "कॉल: +91 81301 71272",
    backLink: "← सभी ब्लॉग देखें",
  },
}

export default function ClientParkinsonsDisease() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "en" ? "bg-white shadow text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "hi" ? "bg-white shadow text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{c.category}</span>
            <span className="text-xs text-muted-foreground">{c.date}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground">{c.intro}</p>
        </div>

        <article className="space-y-10">
          {c.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
              {section.content && <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>}
              {section.list && (
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">{c.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20home%20physiotherapy%20for%20Parkinson's%20Disease%20in%20Delhi%20NCR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {c.ctaWhatsApp}
            </a>
            <a
              href="tel:+918130171272"
              className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors text-center"
            >
              {c.ctaCall}
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {c.backLink}
          </Link>
        </div>
      </div>
    </main>
  )
}
