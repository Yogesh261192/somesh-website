"use client"

import { useState } from "react"

const content = {
  en: {
    category: "Sports & Fitness Recovery",
    date: "May 21, 2026",
    title: "Post-Workout Pain vs Injury — What Every Gym-Goer in Delhi Needs to Know",
    intro: "You crushed your workout. Now your body is screaming. But is it normal muscle soreness — or something more serious? Most gym-goers in Delhi ignore post-workout pain until it becomes a real injury. This guide will help you tell the difference and recover smarter.",
    sections: [
      {
        heading: "Normal Soreness vs. Real Injury — Know the Difference",
        content: "Delayed Onset Muscle Soreness (DOMS) is completely normal. It peaks 24–48 hours after exercise and fades within 3–5 days. But sharp pain during a lift, joint pain, swelling, or pain that worsens after 72 hours — that's your body signalling something is wrong. Ignoring it and pushing through is how minor strains turn into serious injuries that keep you out of the gym for months."
      },
      {
        heading: "Symptoms You Should Never Push Through",
        list: [
          "Sharp or stabbing pain during or after exercise",
          "Joint swelling or visible bruising",
          "Pain that worsens after 3 days instead of improving",
          "Reduced range of motion in a joint",
          "Weakness in a limb that wasn't there before",
          "Clicking or popping sounds in a joint with pain"
        ]
      },
      {
        heading: "5 Recovery Mistakes Gym-Goers Make",
        tips: [
          { title: "1. Skipping the Cool-Down", desc: "Stopping abruptly after intense exercise keeps lactic acid pooled in muscles. 5–10 minutes of light movement and stretching flushes it out and cuts soreness by 30–40%." },
          { title: "2. Training the Same Muscle Two Days in a Row", desc: "Muscle repair happens during rest, not during training. Hitting the same muscle group before it's recovered breaks it down further. Allow 48 hours minimum between sessions for the same group." },
          { title: "3. Ignoring Hydration and Protein", desc: "Muscle fibres tear during exercise and rebuild during recovery. Without adequate protein (1.6–2.2g per kg body weight) and hydration (3+ litres daily), recovery slows dramatically." },
          { title: "4. Using Only Ice and Pain Killers", desc: "Ice and NSAIDs reduce inflammation — but inflammation is part of the healing process. Chronic use actually slows tissue repair. Movement-based recovery (active rest, physiotherapy) heals faster." },
          { title: "5. Returning Too Soon After Injury", desc: "Feeling 70% better doesn't mean you're ready to train at 100%. Returning before full recovery is the number one cause of recurring injuries. A physiotherapist can tell you exactly when you're ready." }
        ]
      },
      {
        heading: "How Physiotherapy Speeds Up Gym Recovery",
        content: "A physiotherapist doesn't just treat injuries — they identify why the injury happened in the first place. Poor movement patterns, muscle imbalances, and weak stabiliser muscles are usually the root cause. Manual therapy reduces muscle tightness and restores joint mobility. Targeted rehab exercises rebuild strength around the injured area. And a personalised return-to-training plan means you come back stronger — not just healed. Delhi Physio at Home physiotherapists visit you at home across Delhi, Noida, Ghaziabad, Indirapuram, and Gurgaon — so you don't lose recovery time travelling to a clinic."
      },
      {
        heading: "See a Physiotherapist Immediately If You Have",
        list: [
          "Pain that hasn't improved after 5–7 days of rest",
          "Swelling around a joint that isn't going down",
          "Inability to bear weight on a leg or use an arm normally",
          "A pop or snap heard at the time of injury",
          "Recurring pain in the same spot every time you train"
        ],
        warning: true
      }
    ],
    ctaTitle: "Book a Physio at Home",
    ctaDesc: "Certified physiotherapists in Delhi NCR come to your home for sports injury assessment and recovery. No clinic visit needed.",
    ctaWhatsApp: "Book on WhatsApp",
    ctaCall: "Call: +91 81301 71272",
    backLink: "← View All Blogs"
  },
  hi: {
    category: "स्पोर्ट्स और फिटनेस रिकवरी",
    date: "21 मई 2026",
    title: "वर्कआउट के बाद दर्द — सामान्य है या चोट? दिल्ली के जिम जाने वालों के लिए पूरी जानकारी",
    intro: "जिम से थके-हारे लौटे, और अब पूरा शरीर दर्द कर रहा है। क्या यह सामान्य मांसपेशी दर्द है — या कुछ गंभीर? दिल्ली में अधिकतर जिम जाने वाले इस दर्द को नज़रअंदाज़ करते हैं जब तक यह असली चोट नहीं बन जाती। यह गाइड आपको फर्क समझने और सही तरीके से रिकवर करने में मदद करेगी।",
    sections: [
      {
        heading: "सामान्य दर्द और चोट में फर्क जानें",
        content: "DOMS (डिलेड ऑनसेट मसल सोरनेस) पूरी तरह सामान्य है। यह व्यायाम के 24–48 घंटे बाद चरम पर होता है और 3–5 दिन में ठीक हो जाता है। लेकिन लिफ्टिंग के दौरान तेज़ दर्द, जोड़ों में दर्द, सूजन, या 72 घंटे बाद भी बढ़ता दर्द — ये संकेत हैं कि कुछ गड़बड़ है। इसे नज़रअंदाज़ करके ट्रेनिंग जारी रखना छोटी मोच को गंभीर चोट में बदल देता है।"
      },
      {
        heading: "इन लक्षणों को कभी नज़रअंदाज़ न करें",
        list: [
          "व्यायाम के दौरान या बाद में तेज़ या चुभने वाला दर्द",
          "जोड़ों में सूजन या नील पड़ना",
          "3 दिन बाद भी दर्द कम होने की बजाय बढ़ना",
          "जोड़ की गतिशीलता कम होना",
          "किसी अंग में नई कमज़ोरी महसूस होना",
          "जोड़ में क्लिक या पॉपिंग की आवाज़ के साथ दर्द"
        ]
      },
      {
        heading: "जिम जाने वाले ये 5 रिकवरी गलतियाँ करते हैं",
        tips: [
          { title: "1. कूल-डाउन न करना", desc: "तीव्र व्यायाम के बाद अचानक रुकने से मांसपेशियों में लैक्टिक एसिड जमा रहता है। 5–10 मिनट की हल्की मूवमेंट और स्ट्रेचिंग से दर्द 30–40% कम हो जाता है।" },
          { title: "2. एक ही मांसपेशी को लगातार दो दिन ट्रेन करना", desc: "मांसपेशियों की मरम्मत आराम के दौरान होती है, ट्रेनिंग के दौरान नहीं। रिकवरी से पहले दोबारा ट्रेनिंग नुकसान पहुंचाती है। एक ही मांसपेशी समूह के बीच कम से कम 48 घंटे का अंतर रखें।" },
          { title: "3. पानी और प्रोटीन को नज़रअंदाज़ करना", desc: "व्यायाम से मांसपेशियाँ टूटती हैं और आराम से बनती हैं। पर्याप्त प्रोटीन (1.6–2.2 ग्राम प्रति किलो वजन) और पानी (3+ लीटर रोज़) के बिना रिकवरी बहुत धीमी होती है।" },
          { title: "4. सिर्फ बर्फ और दर्द निवारक दवाएं लेना", desc: "बर्फ और NSAIDs सूजन कम करते हैं — लेकिन सूजन ठीक होने की प्रक्रिया का हिस्सा है। लगातार उपयोग से टिशू रिपेयर धीमी हो जाती है। मूवमेंट-आधारित रिकवरी (फिजियोथेरेपी) ज़्यादा तेज़ी से ठीक करती है।" },
          { title: "5. चोट के बाद जल्दी वापस ट्रेनिंग शुरू करना", desc: "70% ठीक महसूस होने का मतलब 100% तैयार होना नहीं है। पूरी रिकवरी से पहले वापसी बार-बार चोट का सबसे बड़ा कारण है। एक फिजियोथेरेपिस्ट बता सकता है कि आप कब सच में तैयार हैं।" }
        ]
      },
      {
        heading: "फिजियोथेरेपी जिम रिकवरी को कैसे तेज़ करती है?",
        content: "फिजियोथेरेपिस्ट सिर्फ चोट का इलाज नहीं करता — वह यह भी पता लगाता है कि चोट क्यों लगी। गलत मूवमेंट पैटर्न, मांसपेशियों का असंतुलन, और कमज़ोर स्टेबलाइज़र मसल्स आमतौर पर मूल कारण होते हैं। मैनुअल थेरेपी से मांसपेशियों की अकड़न कम होती है और जोड़ों की गतिशीलता वापस आती है। लक्षित रिहैब व्यायाम से चोटग्रस्त क्षेत्र के आसपास ताकत बनती है। Delhi Physio at Home के फिजियोथेरेपिस्ट आपके घर आते हैं — दिल्ली, नोएडा, गाजियाबाद, इंदिरापुरम और गुरुग्राम में।"
      },
      {
        heading: "तुरंत फिजियोथेरेपिस्ट से मिलें अगर",
        list: [
          "5–7 दिन आराम के बाद भी दर्द ठीक नहीं हुआ",
          "जोड़ के आसपास सूजन कम नहीं हो रही",
          "पैर पर वज़न डालने या हाथ सामान्य तरीके से उपयोग करने में असमर्थता",
          "चोट के समय पॉप या स्नैप की आवाज़ आई हो",
          "हर बार ट्रेनिंग में एक ही जगह दर्द होता हो"
        ],
        warning: true
      }
    ],
    ctaTitle: "घर पर स्पोर्ट्स फिजियो बुक करें",
    ctaDesc: "दिल्ली NCR में प्रमाणित फिजियोथेरेपिस्ट घर आकर स्पोर्ट्स इंजरी का आकलन और रिकवरी करते हैं। क्लिनिक जाने की ज़रूरत नहीं।",
    ctaWhatsApp: "WhatsApp पर बुक करें",
    ctaCall: "कॉल करें: +91 81301 71272",
    backLink: "← सभी ब्लॉग देखें"
  }
}

export default function BlogPost() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]

  return (
    <main className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === "en" ? "bg-white shadow text-primary" : "text-gray-500 hover:text-gray-700"}`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === "hi" ? "bg-white shadow text-primary" : "text-gray-500 hover:text-gray-700"}`}
            >
              हिंदी
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{c.category}</span>
            <span className="text-xs text-muted-foreground">{c.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground">{c.intro}</p>
        </div>

        {/* Sections */}
        <article className="space-y-8">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-bold text-foreground mb-3">{section.heading}</h2>
              {"content" in section && (
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              )}
              {"list" in section && (
                <ul className="space-y-2 text-muted-foreground">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`mt-1 ${section.warning ? "text-red-500" : "text-primary"}`}>
                        {section.warning ? "⚠" : "✓"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {"tips" in section && (
                <div className="space-y-4">
                  {section.tips.map((tip, j) => (
                    <div key={j} className="bg-primary/5 rounded-xl p-5">
                      <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">{c.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918130171272?text=Hi, I would like to book a physiotherapy session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {c.ctaWhatsApp}
            </a>
            <a
              href="tel:+918130171272"
              className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              {c.ctaCall}
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {c.backLink}
          </a>
        </div>

      </div>
    </main>
  )
}