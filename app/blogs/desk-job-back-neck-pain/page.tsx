"use client"

import { useState } from "react"

const content = {
  en: {
    category: "Back & Neck Pain",
    date: "March 21, 2026",
    title: "Desk Job? Don't Ignore Back & Neck Pain — Complete Guide for Young Professionals",
    intro: "If you're between 25 and 35 and spend 8-10 hours a day in front of a laptop, you're at high risk for back and neck pain. Poor posture, wrong chair height, and a sedentary lifestyle are silently damaging your spine. Here's everything you need to know.",
    sections: [
      {
        heading: "Why Is This Happening?",
        content: "Sitting for long hours puts enormous pressure on your spine. Hunching forward to look at a screen can put 4-5 times more pressure on your cervical vertebrae than sitting upright. Studies show that back and neck pain cases among 25-35 year old professionals have increased by over 40% in the last 5 years — largely due to sedentary lifestyles and work-from-home culture."
      },
      {
        heading: "Symptoms You Should Never Ignore",
        list: [
          "Stiffness in the neck or back when you wake up",
          "Difficulty getting up after sitting for long periods",
          "Headaches that start from the neck",
          "Numbness or tingling in hands or fingers",
          "Constant tightness in the shoulders",
          "Difficulty concentrating while working"
        ]
      },
      {
        heading: "5 Things You Can Do Right Now",
        tips: [
          { title: "1. Fix Your Screen Height", desc: "Your screen should be at eye level — not too low or too high. Tilting your head forward puts 4-5x more pressure on the cervical spine." },
          { title: "2. Take a Break Every 45 Minutes", desc: "Even a 2-3 minute break gives your muscles a chance to relax. Set a reminder on your phone." },
          { title: "3. Do These 3 Simple Stretches Daily", desc: "Chin Tuck: Pull your chin inward, hold for 5 seconds — repeat 10 times. Shoulder Roll: Roll both shoulders backward — 10 times. Cat-Cow Stretch: On all fours, arch your back up and down — 10 times." },
          { title: "4. Fix Your Sleeping Position", desc: "A pillow that is too thick or too thin can cause back and neck pain. Use a medium-firm pillow that keeps your neck in a neutral position." },
          { title: "5. Stay Hydrated", desc: "Spinal discs are 80% water. Dehydration directly affects disc health. Drink at least 2.5-3 litres of water daily." }
        ]
      },
      {
        heading: "Why Physiotherapy Is Essential",
        content: "Most people take painkillers or ignore the pain — but this only provides temporary relief. If pain has lasted more than 2 weeks, it is a sign you need professional help. A certified physiotherapist diagnoses your exact problem and creates a personalized exercise plan. Manual therapy, dry needling, and targeted exercises treat the root cause — not just the symptoms. And the best part? You do not need to visit a clinic. DelhiPhysio@Home certified physiotherapists come to your home across Delhi, Noida, Ghaziabad, Indirapuram, and Gurgaon."
      },
      {
        heading: "When to See a Doctor Immediately",
        list: [
          "Weakness developing in arms or legs",
          "Pain that worsens at night",
          "Difficulty with bladder or bowel control",
          "Pain lasting more than 4 weeks and getting worse"
        ],
        warning: true
      }
    ],
    ctaTitle: "Book Home Physiotherapy",
    ctaDesc: "Certified physiotherapists in Delhi NCR will come to your home for treatment. Book your first session today.",
    ctaWhatsApp: "Book on WhatsApp",
    ctaCall: "Call: +91 81301 71272",
    backLink: "← View All Blogs"
  },
  hi: {
    category: "पीठ और गर्दन दर्द",
    date: "21 मार्च 2०26",
    title: "डेस्क जॉब कर रहे हैं? पीठ और गर्दन दर्द को नज़रअंदाज़ न करें — युवा पेशेवरों के लिए संपूर्ण गाइड",
    intro: "अगर आपकी उम्र 25 से 35 के बीच है और आप दिन में 8-10 घंटे लैपटॉप के सामने बैठते हैं, तो आपको पीठ और गर्दन दर्द का खतरा बहुत अधिक है। गलत पोस्चर, गलत कुर्सी की ऊंचाई और बैठे रहने की आदत — ये सब मिलकर आपकी रीढ़ को नुकसान पहुंचा रहे हैं।",
    sections: [
      {
        heading: "यह दर्द क्यों हो रहा है?",
        content: "लंबे समय तक बैठने से रीढ़ की हड्डी पर बहुत अधिक दबाव पड़ता है। स्क्रीन की तरफ झुककर देखने से सर्वाइकल वर्टिब्रा पर 4-5 गुना अधिक दबाव पड़ता है। अध्ययनों के अनुसार, पिछले 5 वर्षों में 25-35 आयु वर्ग के पेशेवरों में पीठ और गर्दन दर्द के मामले 40% से अधिक बढ़े हैं — जिसका मुख्य कारण बैठे रहने की जीवनशैली और घर से काम करने की संस्कृति है।"
      },
      {
        heading: "ये लक्षण कभी नज़रअंदाज़ न करें",
        list: [
          "सुबह उठते समय गर्दन या पीठ में अकड़न",
          "लंबे समय बैठने के बाद उठने में कठिनाई",
          "सिरदर्द जो गर्दन से शुरू होता हो",
          "हाथों या उंगलियों में सुन्नपन या झनझनाहट",
          "कंधों में लगातार खिंचाव",
          "काम करते समय ध्यान केंद्रित करने में कठिनाई"
        ]
      },
      {
        heading: "5 काम जो आप अभी से कर सकते हैं",
        tips: [
          { title: "1. स्क्रीन की ऊंचाई ठीक करें", desc: "आपकी स्क्रीन आंखों के स्तर पर होनी चाहिए — न बहुत नीची, न बहुत ऊंची। सिर को आगे झुकाने से सर्वाइकल स्पाइन पर 4-5 गुना अधिक दबाव पड़ता है।" },
          { title: "2. हर 45 मिनट में एक बार उठें", desc: "सिर्फ 2-3 मिनट का ब्रेक भी मांसपेशियों को आराम देता है। अपने फोन में रिमाइंडर सेट करें।" },
          { title: "3. रोज़ ये 3 सरल स्ट्रेच करें", desc: "चिन टक: ठुड्डी को अंदर की तरफ खींचें, 5 सेकंड रोकें — 10 बार दोहराएं। शोल्डर रोल: दोनों कंधों को पीछे की तरफ घुमाएं — 10 बार। कैट-काउ स्ट्रेच: चारों हाथ-पांव पर आएं और कमर को ऊपर-नीचे करें — 10 बार।" },
          { title: "4. सोने का तरीका ठीक करें", desc: "बहुत मोटा या पतला तकिया पीठ और गर्दन दर्द का कारण बन सकता है। एक मध्यम-कठोर तकिया उपयोग करें जो गर्दन को सही स्थिति में रखे।" },
          { title: "5. पर्याप्त पानी पिएं", desc: "स्पाइनल डिस्क का 8०% हिस्सा पानी होता है। पानी की कमी सीधे डिस्क के स्वास्थ्य को प्रभावित करती है। दिन में कम से कम 2.5-3 लीटर पानी पिएं।" }
        ]
      },
      {
        heading: "फिजियोथेरेपी क्यों ज़रूरी है?",
        content: "अधिकतर लोग दर्द निवारक दवाएं लेते हैं या दर्द को नज़रअंदाज़ करते हैं — लेकिन यह केवल अस्थायी राहत देता है। अगर दर्द 2 सप्ताह से अधिक है, तो यह संकेत है कि आपको पेशेवर मदद की ज़रूरत है। एक प्रमाणित फिजियोथेरेपिस्ट आपकी सटीक समस्या का निदान करके व्यक्तिगत व्यायाम योजना बनाता है। मैनुअल थेरेपी, ड्राई नीडलिंग और लक्षित व्यायाम से मूल कारण का उपचार होता है — केवल लक्षणों का नहीं। और सबसे अच्छी बात? अब क्लिनिक जाने की ज़रूरत नहीं। DelhiPhysio@Home के प्रमाणित फिजियोथेरेपिस्ट आपके घर आते हैं — दिल्ली, नोएडा, गाजियाबाद, इंदिरापुरम और गुरुग्राम में।"
      },
      {
        heading: "तुरंत डॉक्टर से कब मिलें?",
        list: [
          "हाथों या पांवों में कमज़ोरी आ रही हो",
          "रात को दर्द अधिक होता हो",
          "मूत्राशय या आंत पर नियंत्रण में कठिनाई हो",
          "दर्द 4 सप्ताह से अधिक हो और बढ़ रहा हो"
        ],
        warning: true
      }
    ],
    ctaTitle: "घर पर फिजियोथेरेपी बुक करें",
    ctaDesc: "दिल्ली NCR में प्रमाणित फिजियोथेरेपिस्ट आपके घर आकर इलाज करेंगे। आज ही अपना पहला सत्र बुक करें।",
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
