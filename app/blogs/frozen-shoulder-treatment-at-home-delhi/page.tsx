"use client"

import { useState } from "react"
import Script from "next/script"
import Link from "next/link"

const todayStr = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })

const content = {
  en: {
    category: "Shoulder Pain & Mobility",
    date: "March 30, 2026",
    title: "Frozen Shoulder? Don't Suffer in Silence — Complete Home Physiotherapy Guide for Delhi NCR",
    intro: "Frozen shoulder (adhesive capsulitis) can wreck your day-to-day life. This guide shows stage-wise home treatment, expert tips for Delhi life, and how to get same-day physiotherapist at home service across Delhi NCR.",
    author: "Dr. Somesh",
    readTime: "8 min read",
    sections: [
      {
        heading: "What is Frozen Shoulder?",
        content: "Frozen shoulder, known as adhesive capsulitis, is stiffness and pain in the shoulder joint that gets worse over time. It progresses through three stages: freezing, frozen, and thawing. Early recognition makes home physiotherapy more effective."
      },
      {
        heading: "Stage 1: Freezing",
        content: "Pain increases and range of motion starts dropping. Daily tasks like driving in Delhi traffic or reaching for kitchen shelves become difficult.",
        list: [
          "Gradual pain increase, especially at night",
          "Motion begins to restrict — lifting arm sideways hurts",
          "Still some movement possible with discomfort"
        ]
      },
      {
        heading: "Stage 2: Frozen",
        content: "Stiffness dominates and movement is severely limited. This is the hardest stage for people in WFH plus AC room culture.",
        list: [
          "Shoulder feels locked, can't raise hand above shoulder height",
          "Pain may reduce slightly but stiffness remains",
          "Daily activities like bathing and dressing are affected"
        ]
      },
      {
        heading: "Stage 3: Thawing",
        content: "Range of motion improves gradually as the capsule loosens. Safe therapeutic exercises and professional physiotherapy speed recovery."
      },
      {
        heading: "Why is it more common in Delhi NCR residents?",
        list: [
          "WFH culture leads to long desk hours and poor posture (tech neck and shoulder stiffness)",
          "Sitting in AC rooms and commuting less reduces shoulder motion",
          "Pollution and stress can worsen muscle tension around shoulders",
          "Frequent driving in traffic and one-sided bag use adds joint strain"
        ],
        content: "A Delhi lifestyle of long sitting, AC office, and uneven commuting patterns is a perfect storm for frozen shoulder and cervical spondylosis related shoulder pain."
      },
      {
        heading: "Stage-wise Home Physiotherapy Treatment",
        list: [
          "Freezing: gentle mobility + pain relief, hot pack, neural flossing",
          "Frozen: controlled stretching, manual therapy shoulder mobilization",
          "Thawing: active strengthening, rotator cuff physiotherapy and functional reaching"
        ],
        content: "Our physiotherapist at home Ghaziabad Noida Delhi team customizes the plan for each stage, including tele-rehabilitation shoulder follow-ups."
      },
      {
        heading: "5 Exercises You Can Do at Home",
        numbered: [
          "Pendulum swing: bend at waist and let arm swing in circles for 1-2 minutes",
          "Cross-body reach: gently pull affected arm across chest for 15-20 seconds, 3 reps",
          "Wall crawl: walk fingers up wall to shoulder height and down, 2 sets of 10",
          "Doorway stretch: hold door frame and lean forward for anterior shoulder stretch 20 sec",
          "External rotation with towel: hold towel behind back and pull with good arm, 10 reps"
        ],
        content: "Do these slowly, avoid sharp pain, and repeat twice a day. Combine with shoulder exercises at home for best results."
      },
      {
        heading: "When Does a Physiotherapist Visit Help More Than Exercises Alone?",
        list: [
          "If stiffness continues after 2 weeks of consistent home exercises",
          "If you feel sharp pain, catch, or instability during movement",
          "If daily tasks remain impossible and pain affects sleep",
          "If you need hands-on manual therapy shoulder mobilization and dry needling frozen shoulder"
        ],
        content: "The right home visit physiotherapist same day booking can break the cycle with targeted joint mobilization, muscle release, and expert rehab monitoring."
      },
      {
        heading: "Modern Treatments Available at Home",
        list: [
          "Dry needling frozen shoulder for trigger point release",
          "Shockwave therapy shoulder to improve tissue healing",
          "TENS for pain modulation and sleep improvement",
          "Wearable sensor rehab 2026 to track range and progress",
          "Tele-rehabilitation shoulder check-ins for WFH schedule"
        ]
      },
      {
        heading: "Red flags — When to See a Doctor Immediately",
        list: [
          "Sudden severe pain with swelling or redness",
          "Numbness/tingling radiating to hand or fingers",
          "Rapid loss of arm function or weakness",
          "Fever with shoulder pain (possible infection)",
          "Post-surgery shoulder rehabilitation complications"
        ],
        warning: true
      },
      {
        heading: "Why Choose Delhi Physio At Home?",
        list: [
          "✅ Certified team with physiotherapist at home Delhi option",
          "✅ Same day home visit physiotherapist in Delhi NCR, Ghaziabad, Noida, Gurgaon",
          "✅ Expert in adhesive capsulitis physiotherapy and cervical spondylosis related shoulder pain",
          "✅ In-person manual therapy and guided shoulder exercises at home",
          "✅ Top-rated for comfort, hygiene and Delhi-friendly timing"
        ]
      }
    ]
  },
  hi: {
    category: "कंधे का दर्द और मोबिलिटी",
    date: "30 मार्च 2026",
    title: "फ्रोजन शोल्डर? चुप्पी मत सहिए — दिल्ली NCR के लिए पूर्ण होम फिजियोथेरेपी मार्गदर्शिका",
    intro: "फ्रोजन शोल्डर (एडेसिव कैप्सुलाइटिस) से रोज़मर्रा की ज़िंदगी प्रभावित हो सकती है। यह गाइड स्टेज-वार घर पर इलाज, दिल्ली के संदर्भ, और उसी दिन फिजियोथेरेपिस्ट आने का तरीका बताती है।",
    author: "डॉ. सोमेश",
    readTime: "8 मिनट पढ़ें",
    sections: [
      {
        heading: "फ्रोजन शोल्डर क्या है?",
        content: "फ्रोजन शोल्डर एक स्थिति है जिसमें कंधे का जोड़ कठोर और दर्दनाक हो जाता है। यह तीन चरणों में आता है: फ्रीज़िंग, फ्रोज़न, और थॉइंग। शुरुआती पहचान घर पर फिजियोथेरेपी को असरदार बनाती है।"
      },
      {
        heading: "चरण 1: फ्रीज़िंग",
        content: "दर्द बढ़ता है और मूवमेंट घटने लगता है। दिल्ली ट्रैफ़िक में ड्राइविंग या रैक पर सामान लेने में मुश्किल होती है।",
        list: [
          "रात में दर्द बढ़ना",
          "आर्म को साइड में उठाने पर दर्द होना",
          "हल्की दर्द के साथ मूवमेंट बची रहती है"
        ]
      },
      {
        heading: "चरण 2: फ्रोज़न",
        content: "कठोरता अधिक होती है और आंदोलन बहुत सीमित होता है। WFH और एसी कमरे की जीवनशैली इस चरण को कठिन बना देती है।",
        list: [
          "कंधा बंद जैसा महसूस होना",
          "दर्द कम हो सकता है लेकिन जकड़न बनी रहती है",
          "नहाना, कपड़े पहनना मुश्किल हो जाता है"
        ]
      },
      {
        heading: "चरण 3: थॉइंग",
        content: "धीरे-धीरे रेंज ऑफ़ मोशन बढ़ती है। सुरक्षित व्यायाम और प्रोफेशनल फिजियोथेरेपी शरीर को वापस मज़बूती देती है।"
      },
      {
        heading: "दिल्ली NCR में यह अधिक क्यों है?",
        list: [
          "वर्क-फ्रॉम-होम की आदत से लंबी बैठने की स्थिति और खराब पोस्चर (टेक नेक + कंधे जकड़न)",
          "एसी में बैठने और कम चलने से कंधे की गतिशीलता घटती है",
          "प्रदूषण और तनाव से मसल टेंशन बढ़ती है",
          "ट्रैफ़िक ड्राइविंग और एक तरफा बैग उपयोग से जोड़ पर दबाव बढ़ता है"
        ],
        content: "दिल्ली की जीवनशैली फ्रोजन शोल्डर और सिरवाइकल स्पॉन्डिलोसिस संबंधी कंधे दर्द को बढ़ावा देती है।"
      },
      {
        heading: "स्टेज-वार होम फिजियोथेरेपी ट्रीटमेंट",
        list: [
          "फ्रीज़िंग: हल्की मॉबिलिटी, दर्द निवारण, हॉट पैक, न्यूरल फ्लॉसिंग",
          "फ्रोज़न: नियंत्रित स्ट्रेचिंग, मैनुअल थेरेपी शोल्डर मोबिलाइजेशन",
          "थॉइंग: सक्रिय स्ट्रेंथनिंग, रोटेटर कफ़ फिजियोथेरेपी"
        ],
        content: "हमारी टीम हर चरण के लिए कस्टम प्लान देती है, जिसमें टेली-रिहैबिलिटेशन शोल्डर फॉलो-अप भी शामिल है।"
      },
      {
        heading: "घर पर कर सकने वाले 5 एक्सरसाइज़",
        numbered: [
          "पेंडुलम स्विंग: कमर से झुककर हाथ को 1-2 मिनट गोल घुमाएं",
          "क्रॉस-बॉडी रीच: प्रभावित हाथ को छाती की ओर 15-20 सेकेंड खींचें, 3 रेप",
          "वॉल क्रॉल: दीवार पर उंगलियां ऊंचा-नीचे करें, 2 सेट 10",
          "डोरवे स्ट्रेच: दरवाज़े को पकड़कर आगे झुकें, 20 सेकंड",
          "टॉवेल रोटेशन: पीछे टॉवेल पकड़ें और अच्छी बाजू से खींचें, 10 रेप"
        ],
        content: "धीरे करें, तेज दर्द से बचें, दिन में दो बार दोहराएं। यह होम शोल्डर एक्सरसाइज़ का एक असरदार सेट है।"
      },
      {
        heading: "व्यायाम से ज़्यादा फिजियोथेरेपिस्ट विज़िट कब मदद करता है?",
        list: [
          "दो सप्ताह लगातार एक्सरसाइज़ के बाद भी जकड़न बनी रहे",
          "हरकत में तेज दर्द या फंसाव महसूस हो",
          "दैनिक काम मुश्किल हों और नींद प्रभावित हो",
          "मैन्युअल थेरेपी शोल्डर मोबिलाइजेशन और ड्राई नीडलिंग की ज़रूरत लगे"
        ],
        content: "सही होम विज़िट फिजियोथेरेपिस्ट उसी दिन की बुकिंग से चरम दर्द चक्र को तोड़ सकता है।"
      },
      {
        heading: "घर में उपलब्ध आधुनिक उपचार",
        list: [
          "ड्राई नीडलिंग फ्रोजन शोल्डर",
          "शॉकवेव थेरेपी शोल्डर",
          "TENS दर्द नियंत्रण के लिए",
          "वियरेबल सेंसर रिहैब 2026",
          "टेली-रिहैबिलिटेशन शोल्डर"
        ]
      },
      {
        heading: "रेड फ्लैग्स — कब डॉक्टर से तुरंत मिलें",
        list: [
          "तेज़ दर्द, सूजन या लालिमा",
          "हाथ/उंगलियों में सुन्नता",
          "जल्दी कमजोरी या गति की हानि",
          "बुख़ार के साथ कंधे का दर्द",
          "पोस्ट-सर्जरी शोल्डर रिहैब में जटिलताएं"
        ],
        warning: true
      },
      {
        heading: "क्यों चुनें Delhi Physio At Home?",
        list: [
          "✅ प्रमाणित टीम, महिला फिजियोथेरेपिस्ट at home विकल्प",
          "✅ दिल्ली NCR, गाज़ियाबाद, नोएडा, गुड़गांव में उसी दिन की विज़िट",
          "✅ एडेसिव कैप्सुलाइटिस फिजियोथेरेपी व सिरवाइकल स्पॉन्डिलोसिस संबंधी कंधे दर्द विशेषज्ञ",
          "✅ घर पर मैन्युअल थेरेपी और संरक्षित कंधे एक्सरसाइज़",
          "✅ हाई-हाइजीन, भरोसेमंद और दिल्ली अनुसार समय"
        ]
      }
    ]
  }
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Frozen Shoulder Treatment at Home in Delhi NCR | DelhiPhysio@Home",
  "description": "Expert home physiotherapy for frozen shoulder in Delhi, Ghaziabad, Noida & Gurgaon.",
  "author": { "@type": "Person", "name": "Dr. Somesh" },
  "publisher": { "@type": "Organization", "name": "DelhiPhysio@Home" },
  "datePublished": new Date().toISOString()
}

export default function FrozenShoulderBlog() {
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

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            {c.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-3">{c.intro}</p>

          <div className="mt-6 mb-10">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/P5CSXeG7H9Q"
                title="Frozen Shoulder Home Physiotherapy Guide"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-md"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

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
          <a
            href="https://wa.me/918130171272"
            target="_blank"
            className="bg-primary text-white px-6 py-3 rounded-lg"
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