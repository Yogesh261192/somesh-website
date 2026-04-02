"use client"

import { useState } from "react"
import Script from "next/script"
import Link from "next/link"

const content = {
  en: {
    category: "Sciatica & Slip Disc",
    date: "April 2, 2026",
    title: "Slip Disc Treatment at Home | Sciatica Pain Relief Exercises (Delhi NCR Physio Guide)",
    intro: "Herniated/slip disc and sciatica can be treated at home with guided physiotherapy. This Delhi NCR home physiotherapy guide includes exercises, lifestyle fixes, and same-day physiotherapist at home booking.",
    author: "Dr. Somesh",
    readTime: "9 min read",
    sections: [
      {
        heading: "What is Slip Disc (Herniated Disc) and Sciatica?",
        content: "A slip disc occurs when the spinal disc nucleus pushes through the outer ring, irritating nearby nerves and causing lower back pain, leg pain, or sciatic nerve symptoms. Proper home physiotherapy reduces pain, improves mobility, and prevents recurrence."
      },
      {
        heading: "Common Causes in Delhi NCR Lifestyle",
        content: "These are the key triggers we see in Gurgaon, Noida, Ghaziabad and Delhi residents who prefer AC rooms and long commutes.",
        list: [
          "Prolonged sitting in traffic and corporate chairs",
          "Poor posture while working from home (forward head + rounded shoulders)",
          "Heavy lifting without core support (shopping bags, errand loads)",
          "Lack of regular back strengthening and core stability exercises",
          "High stress leading to muscle guarding and tight hamstrings"
        ]
      },
      {
        heading: "Trending Keywords Covered",
        list: [
          "Slip disc treatment at home",
          "Sciatica pain relief exercises",
          "Herniated disc physiotherapy",
          "Back pain exercises in Delhi",
          "Physiotherapist at home Delhi NCR",
          "Lower back pain relief at home",
          "Home physiotherapy for sciatica"
        ]
      },
      {
        heading: "Stage 1: Acute Pain Management",
        list: [
          "Ice packs 15 min every 2-3 hours for 48-72 hours",
          "Avoid heavy lifting and sudden twisting",
          "Use a lumbar roll while driving and sitting",
          "Gentle walking 5-10 min every hour"
        ],
        content: "In the first 1-2 weeks, focus on controlling pain and maintaining gentle movement. Local same-day physiotherapist at home can provide pain-relieving manual therapy and soft tissue release."
      },
      {
        heading: "Stage 2: Mobility + Neural Flossing",
        list: [
          "Pelvic tilt + cat-camel for lumbar mobility",
          "Knee-to-chest stretch and piriformis stretch",
          "Sciatic nerve flap (seated nerve glide)",
          "Hip hinge practice with band support"
        ],
        content: "Progress to functional movement with neutral spine and neural mobilization. These activities address sciatica pain relief exercises while preventing recurrence."
      },
      {
        heading: "Stage 3: Strength and Posture Control",
        list: [
          "Bird-dog and dead bug core stabilization",
          "Bridge with max knee extension for glutes",
          "Side plank and knee to chest with hold",
          "Prone lumbar extension (McKenzie press-up)"
        ],
        content: "Core stability and posterior chain strengthening are critical for long-term slip disc recovery and prevention. Home programs from our physiotherapist in Delhi NCR help reinforce these routines."
      },
      {
        heading: "6 Sciatica Pain Relief Exercises at Home",
        numbered: [
          "Sciatic nerve floss: seated heel slide + toe extension 10 reps",
          "Straight leg raise with band 3x10 (avoid pain)",
          "Hamstring stretch on wall 30 sec each side",
          "Hip flexor stretch in lunge 30 sec each side",
          "Child pose with breathing 5 deep breaths",
          "Wall sit with neutral spine 20-30 sec"
        ],
        content: "Do these exercises daily. Start easy and increase slowly; avoid if there is sharp leg pain. Combine with lifestyle modifications (ergonomic chair, frequent breaks, proper lifting)."
      },
      {
        heading: "Why At-Home Physiotherapy Works Best in Delhi NCR",
        list: [
          "Convenience for busy professionals and senior citizens",
          "Avoids long travel in traffic with back pain",
          "Customized program for your home environment and job demands",
          "Same day physiotherapist at home near me (Delhi, Gurgaon, Noida, Ghaziabad)",
          "Hands-on manual therapy, TENS and dry needling available" 
        ]
      },
      {
        heading: "When to Seek Advanced Care",
        list: [
          "Progressive leg weakness or difficulty walking",
          "Bowel/bladder changes (cauda equina concern)",
          "Severe shooting pain, numbness below knee despite 2 weeks of therapy",
          "Pain waking you at night and restricting daily activities"
        ],
        warning: true
      },
      {
        heading: "Plan Your Delhi Physio At Home Visit",
        content: "Book via WhatsApp, get a detailed evaluation, home rollouts, and follow-up routine. We provide certified physiotherapists for slip disc, sciatica, lower back pain & posture correction across Delhi NCR."
      }
    ]
  },
  hi: {
    category: "साइएटिका और स्लिप डिस्क",
    date: "2 अप्रैल 2026",
    title: "स्लिप डिस्क ट्रीटमेंट घर पर | साइएटिका दर्द राहत एक्सरसाइज़ (दिल्ली NCR फिजियो गाइड)",
    intro: "हर्नियेटेड डिस्क/स्लिप डिस्क और साइएटिका को मार्गदर्शित फिजियोथेरेपी से घर पर ठीक किया जा सकता है। यह दिल्ली NCR गाइड एक्सरसाइज़, जीवनशैली उपाय और वही दिन फिजियोथेरेपिस्ट घर पर बुकिंग शामिल करता है।",
    author: "डॉ. सोमेश",
    readTime: "9 मिनट पढ़ें",
    sections: [
      {
        heading: "स्लिप डिस्क और साइएटिका क्या है?",
        content: "स्लिप डिस्क में डिस्क का गदा बाहर निकल जाता है और नसों पर दबाव बनता है, जिससे कमर और पैर में दर्द होता है। सही घर पर फिजियोथेरेपी से दर्द कम होता है, गतिशीलता बढ़ती है और दोबारा होने की संभावना घटती है।"
      },
      {
        heading: "दिल्ली NCR जीवनशैली में आम कारण",
        content: "ये मुख्य ट्रिगर हैं जो गुरुग्राम, नोएडा, गाजियाबाद और दिल्ली के रहने वालों में अधिक मिलते हैं।",
        list: [
          "लंबी ड्राइव और कॉर्पोरेट कुर्सी पर बैठना",
          "वर्क-फ्रॉम-होम में खराब पोस्चर (फॉरवर्ड हेड + राउंड शोल्डर्स)",
          "कोर सपोर्ट के बिना भारी वजन उठाना",
          "राइड नहीं करने वाली पीठ की ताकत के व्यायाम की कमी",
          "मांसपेशियों में तनाव और हैमस्ट्रिंग की कठोरता"
        ]
      },
      {
        heading: "ट्रेंडिंग कीवर्ड्स",
        list: [
          "स्लिप डिस्क ट्रीटमेंट घर पर",
          "साइएटिका दर्द राहत एक्सरसाइज़",
          "हर्नियेटेड डिस्क फिजियोथेरेपी",
          "दिल्ली में बैक पेन एक्सरसाइज़",
          "फिजियोथेरेपिस्ट घर पर दिल्ली NCR"
        ]
      },
      {
        heading: "चरण 1: तीव्र दर्द प्रबंधन",
        list: [
          "आइस पैक 15 मिनट हर 2-3 घंटे",
          "भारी उठाने और अचानक मुरझाने से बचें",
          "ड्राइविंग और बैठते समय लंबर रोल का प्रयोग",
          "हर घंटे हल्की वॉक 5-10 मिनट"
        ],
        content: "पहले 1-2 सप्ताह में दर्द नियंत्रित करें और हल्की गति बनाए रखें। वही दिन फिजियोथेरेपिस्ट घर पर मैन्युअल थेरपी और सॉफ्ट टिशू रिलीज दे सकता है।"
      },
      {
        heading: "चरण 2: मोबिलिटी + न्यूरल फ्लॉसिंग",
        list: [
          "पेल्विक टिल्ट + कैट-कैमल",
          "घुटने-छाती स्ट्रेच और पिरिफॉर्मिस स्ट्रेच",
          "सिटेड साइएटिक नर्व फ्लैप",
          "बैंड सपोर्ट के साथ हिप हिन्ज़"
        ],
        content: "न्यूट्रल स्पाइन और न्यूरल मोबिलाइज़ेशन पर काम करें। ये साइएटिका दर्द राहत एक्सरसाइज़ लंबी अवधि में सुधार लाते हैं।"
      },
      {
        heading: "चरण 3: स्ट्रेंथ और पोस्चर कंट्रोल",
        list: [
          "बर्ड-डॉग और डेड बग",
          "ब्रिज विथ नॉए कनी एक्सटेंशन",
          "साइड प्लैंक और नी-टू-चेस्ट होल्ड",
          "प्रोन लंबर एक्सटेंशन"
        ],
        content: "कोर स्टेबिलिटी और पोस्टेरियर चेन स्ट्रेंथ जरूरी है। दिल्ली NCR घर पर प्रोग्राम इनवर्क के साथ विकसित करें।"
      },
      {
        heading: "6 साइएटिका दर्द राहत एक्सरसाइज़ घर पर",
        numbered: [
          "सीटेड हील स्लाइड + टो एक्सटेंशन 10 रेप",
          "बैंड के साथ स्ट्रेट लेग रेज़ 3x10",
          "दीवार पर हैमस्ट्रिंग स्ट्रेच 30 सेकंड",
          "लंज में हिप फ्लेक्सर स्ट्रेच 30 सेकेंड",
          "चाइल्ड पोज़ 5 गहरी सांस",
          "न्यूट्रल स्पाइन के साथ वॉल सिट 20-30 सेकंड"
        ],
        content: "रोज़ अभ्यास करें और तेज़ दर्द से बचें। यह स्लिप डिस्क पुनर्वास के लिए एक मजबूत रूटीन है।"
      },
      {
        heading: "दिल्ली NCR में घर पर फिजियोथेरेपी क्यों बेहतर है",
        list: [
          "व्यस्त पेशेवरों और वरिष्ठ नागरिकों के लिए सुविधा",
          "ट्रैफ़िक में लांबा सफर टालें",
          "घर के वातावरण और जॉब डिमांड के अनुसार कस्टमाइज़्ड प्रोग्राम",
          "स्लिप डिस्क, साइएटिका, लोअर बैक पेन के लिये नजदीकी फिजियोथेरेपिस्ट",
          "मैन्युअल थेरेपी, TENS, ड्राई नीडलिंग सुविधाएं"
        ]
      },
      {
        heading: "अग्रिम देखभाल कब लें",
        list: [
          "पैरों में कमजोरी या चलने में कठिनाई",
          "मूत्र/मल नियंत्रण संबंधी बदलाव",
          "दो हफ्ते में भी तेज दर्द और सुन्नता",
          "बिस्तर से जागने वाला दर्द"
        ],
        warning: true
      },
      {
        heading: "दिल्ली फिजियो एट होम विज़िट प्लान",
        content: "व्हाट्सएप पर बुक करें, विस्तृत इवैल्युएशन पाएं, और फॉलो-अप रूटीन प्राप्त करें। हमारे प्रमाणित फिजियोथेरेपिस्ट स्लिप डिस्क, साइएटिका, और पोज़्चर सुधार के लिये दिल्ली NCR में उपलब्ध हैं।"
      }
    ]
  }
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Slip Disc Treatment at Home | Sciatica Pain Relief Exercises (Delhi NCR Physio Guide)",
  description: "Home physiotherapy guide for slip disc and sciatica in Delhi NCR with exercises and same-day physiotherapist at home service.",
  author: { "@type": "Person", name: "Dr. Somesh" },
  publisher: { "@type": "Organization", name: "DelhiPhysio@Home" },
  datePublished: new Date().toISOString()
}

export default function SlipDiscBlog() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <Script id="blog-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="font-semibold text-primary">{c.category}</span>
            <span>|</span>
            <span>{c.date}</span>
          </div>

          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${lang === "en" ? "bg-primary text-white" : "bg-muted/20 text-muted-foreground"}`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("hi")}
              className={`px-3 py-1 rounded ${lang === "hi" ? "bg-primary text-white" : "bg-muted/20 text-muted-foreground"}`}
            >
              हिंदी
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">{c.title}</h1>

          <p className="text-lg text-muted-foreground mb-3">{c.intro}</p>

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
              <h2 className="text-2xl font-bold text-foreground mb-3">{section.heading}</h2>
              {section.content && <p className="text-muted-foreground mb-3">{section.content}</p>}
              {section.list && (
                <ul className={`${section.warning ? "text-red-600" : "text-muted-foreground"}`}>
                  {section.list.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
              )}
              {section.numbered && (
                <ol className="list-decimal ml-5 text-muted-foreground">
                  {section.numbered.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </article>

        <div className="mt-12 text-center">
          <a href="https://wa.me/918130171272" target="_blank" className="bg-primary text-white px-6 py-3 rounded-lg">
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
