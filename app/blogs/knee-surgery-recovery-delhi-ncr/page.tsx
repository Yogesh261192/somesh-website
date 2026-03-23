"use client"

import { useState } from "react"
import { ArrowRight, Clock, Calendar, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const content = {
  en: {
    lang: "English",
    title: "Knee Surgery Recovery at Home in Delhi NCR: A Complete Guide",
    subtitle:
      "Everything you need to know about post-operative physiotherapy at home after knee replacement or ACL surgery in Delhi, Ghaziabad, Noida & Gurgaon.",
    author: "Dr. Somesh",
    date: "March 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "Why Home Physiotherapy After Knee Surgery?",
        body: `After a Total Knee Replacement (TKR) or ACL reconstruction, physiotherapy is not optional — it is essential. Without proper rehab, stiffness, muscle weakness, and limited range of motion can become permanent.

Most patients in Delhi NCR face a common challenge: travelling to a clinic every day is exhausting and painful, especially in the first few weeks post-surgery. This is where home physiotherapy becomes a game-changer.

At Delhi Physio At Home, our certified physiotherapists come directly to your residence in Ghaziabad, Indirapuram, Raj Nagar, Noida, and across Delhi NCR — so you can focus entirely on your recovery.`,
      },
      {
        heading: "Week-by-Week Recovery Timeline",
        body: `**Week 1–2: Early Mobilisation**
The focus is on reducing swelling, managing pain, and gently moving the knee. Your physiotherapist will guide ankle pumps, quad sets, and straight leg raises to prevent blood clots and maintain muscle tone.

**Week 3–4: Strengthening Begins**
As swelling reduces, exercises progress to heel slides, mini squats, and step-ups. Walking with support is encouraged. Most patients in Ghaziabad and Noida begin walking short distances indoors by end of week 3.

**Week 5–8: Building Range of Motion**
Target is to achieve at least 90–100 degrees of knee flexion. Cycling on a stationary bike (if available at home) is introduced. Balance and proprioception exercises begin.

**Week 9–12: Functional Recovery**
Stair climbing, outdoor walking, and returning to daily activities. By 12 weeks, most patients are independent with a good quality of life.`,
      },
      {
        heading: "What Our Physiotherapist Does at Home",
        body: `During each home visit in Delhi NCR, our physiotherapist will:

• Assess your pain levels and swelling
• Measure your knee range of motion
• Guide you through personalised exercises
• Apply manual therapy techniques as needed
• Educate your family on how to assist you safely
• Adjust the treatment plan based on your progress

All of this happens in the comfort of your home — no waiting rooms, no travel stress.`,
      },
      {
        heading: "Common Mistakes to Avoid After Knee Surgery",
        body: `1. **Skipping sessions** — Consistency is everything in knee rehab. Even one missed week can set back your progress significantly.

2. **Doing too much too soon** — Pain should guide your limits. Pushing through sharp pain is dangerous.

3. **Not elevating the leg** — Elevation reduces swelling. Keep your leg raised when resting.

4. **Neglecting ice therapy** — Ice packs for 15–20 minutes after each session help manage post-exercise inflammation.

5. **Relying only on pain medication** — Medications manage symptoms. Physiotherapy fixes the underlying weakness and stiffness.`,
      },
      {
        heading: "Why Choose Delhi Physio At Home?",
        body: `✅ Certified & experienced physiotherapists (BPT, MIAP)
✅ Home visits across Delhi, Ghaziabad, Noida, Indirapuram, Raj Nagar, Gurgaon
✅ Personalised treatment plans — no generic routines
✅ Flexible scheduling — morning, evening, weekends
✅ Same-day & next-day bookings available
✅ 1500+ patients successfully treated
✅ 8+ years of clinical experience`,
      },
      {
        heading: "Book Your First Session Today",
        body: `If you or a loved one has recently had knee surgery and is looking for expert physiotherapy at home in Delhi NCR, we are here to help.

WhatsApp us or call us today — our team will assess your condition and schedule a visit as early as today.`,
      },
    ],
    cta: "Book on WhatsApp",
    ctaLink:
      "https://wa.me/918130171272?text=Hi,%20I%20need%20home%20physiotherapy%20after%20knee%20surgery",
  },
  hi: {
    lang: "हिन्दी",
    title: "दिल्ली NCR में घर पर घुटने की सर्जरी के बाद रिकवरी: एक संपूर्ण गाइड",
    subtitle:
      "घुटना प्रत्यारोपण (TKR) या ACL सर्जरी के बाद घर पर फिजियोथेरेपी के बारे में पूरी जानकारी — दिल्ली, गाजियाबाद, नोएडा और गुरुग्राम के मरीजों के लिए।",
    author: "डॉ. सोमेश",
    date: "मार्च 2026",
    readTime: "8 मिनट",
    sections: [
      {
        heading: "घुटने की सर्जरी के बाद घर पर फिजियोथेरेपी क्यों?",
        body: `टोटल नी रिप्लेसमेंट (TKR) या ACL सर्जरी के बाद फिजियोथेरेपी ज़रूरी है — यह वैकल्पिक नहीं है। सही रिहैबिलिटेशन के बिना, जकड़न, मांसपेशियों की कमज़ोरी और सीमित गति स्थायी हो सकती है।

दिल्ली NCR के अधिकतर मरीजों के सामने एक आम समस्या होती है: सर्जरी के बाद रोज़ क्लिनिक जाना थका देने वाला और दर्दनाक होता है। यहीं पर घर पर फिजियोथेरेपी बेहद फायदेमंद साबित होती है।

Delhi Physio At Home में हमारे प्रमाणित फिजियोथेरेपिस्ट सीधे आपके घर आते हैं — गाजियाबाद, इंदिरापुरम, राज नगर, नोएडा और पूरे दिल्ली NCR में।`,
      },
      {
        heading: "सप्ताह-दर-सप्ताह रिकवरी का क्रम",
        body: `**सप्ताह 1–2: शुरुआती गतिशीलता**
सूजन कम करना, दर्द प्रबंधन और घुटने को धीरे-धीरे हिलाना। एंकल पंप, क्वाड सेट और स्ट्रेट लेग रेज़ जैसे व्यायाम बताए जाते हैं।

**सप्ताह 3–4: मज़बूती की शुरुआत**
सूजन कम होने पर हील स्लाइड, मिनी स्क्वाट और स्टेप-अप शुरू होते हैं। अधिकतर मरीज़ सप्ताह 3 तक घर के अंदर थोड़ा चलने लगते हैं।

**सप्ताह 5–8: गति की सीमा बढ़ाना**
घुटने को 90–100 डिग्री तक मोड़ने का लक्ष्य। संतुलन और प्रोप्रियोसेप्शन अभ्यास शुरू होते हैं।

**सप्ताह 9–12: सामान्य जीवन की ओर**
सीढ़ियाँ चढ़ना, बाहर चलना और दैनिक गतिविधियों में वापसी। 12 सप्ताह तक अधिकतर मरीज़ स्वतंत्र रूप से चलने लगते हैं।`,
      },
      {
        heading: "घर पर हमारा फिजियोथेरेपिस्ट क्या करता है?",
        body: `हर होम विज़िट में हमारे फिजियोथेरेपिस्ट:

• दर्द और सूजन का आकलन करते हैं
• घुटने की गति की सीमा मापते हैं
• व्यक्तिगत व्यायाम कराते हैं
• आवश्यकतानुसार मैनुअल थेरेपी करते हैं
• परिवार को सहायता करना सिखाते हैं
• प्रगति के अनुसार उपचार योजना बदलते हैं`,
      },
      {
        heading: "घुटने की सर्जरी के बाद इन गलतियों से बचें",
        body: `1. **सेशन छोड़ना** — नियमितता सबसे ज़रूरी है। एक हफ्ते की छुट्टी भी रिकवरी को पीछे धकेल सकती है।

2. **जल्दी ज़्यादा करना** — तेज़ दर्द में ज़बरदस्ती करना खतरनाक है।

3. **पैर ऊपर न रखना** — आराम के समय पैर उठाकर रखें — सूजन कम होती है।

4. **बर्फ की सिकाई न करना** — हर सेशन के बाद 15–20 मिनट बर्फ लगाएं।

5. **सिर्फ दवाओं पर निर्भर रहना** — दवाएं लक्षण ठीक करती हैं, फिजियोथेरेपी कमज़ोरी और जकड़न।`,
      },
      {
        heading: "Delhi Physio At Home क्यों चुनें?",
        body: `✅ प्रमाणित और अनुभवी फिजियोथेरेपिस्ट (BPT, MIAP)
✅ दिल्ली, गाजियाबाद, नोएडा, इंदिरापुरम, राज नगर, गुरुग्राम में होम विज़िट
✅ व्यक्तिगत उपचार योजना — कोई सामान्य दिनचर्या नहीं
✅ लचीला समय — सुबह, शाम, सप्ताहांत
✅ उसी दिन और अगले दिन बुकिंग उपलब्ध
✅ 1500+ मरीज़ सफलतापूर्वक ठीक हुए
✅ 8+ वर्षों का क्लिनिकल अनुभव`,
      },
      {
        heading: "आज ही अपना पहला सेशन बुक करें",
        body: `यदि आपने या आपके किसी प्रियजन ने हाल ही में घुटने की सर्जरी करवाई है और दिल्ली NCR में घर पर फिजियोथेरेपी चाहते हैं, तो हम यहाँ हैं।

आज ही WhatsApp करें या कॉल करें — हमारी टीम आपकी स्थिति का आकलन करेगी और जल्द से जल्द विज़िट शेड्यूल करेगी।`,
      },
    ],
    cta: "WhatsApp पर बुक करें",
    ctaLink:
      "https://wa.me/918130171272?text=नमस्ते,%20मुझे%20घुटने%20की%20सर्जरी%20के%20बाद%20घर%20पर%20फिजियोथेरेपी%20चाहिए",
  },
}

function renderBody(text: string, isHindi: boolean) {
  return text.split("\n\n").map((para, i) => {
    const formatted = para
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>")
    return (
      <p
        key={i}
        className="mb-4 leading-relaxed text-foreground/80"
        style={{ fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "inherit" }}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    )
  })
}

export default function KneeSurgeryBlogPage() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]
  const isHindi = lang === "hi"

  return (
    <>
      {/* Google Font for Devanagari */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap');
      `}</style>

      <article className="bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-primary/5 border-b border-border py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">

            {/* Language Toggle */}
            <div className="mb-6 flex items-center gap-2">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  lang === "hi"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                हिन्दी
              </button>
            </div>

            {/* Category */}
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Post-Surgery Recovery
            </span>

            {/* Title */}
            <h1
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4"
              style={{
                fontFamily: isHindi
                  ? "'Noto Sans Devanagari', sans-serif"
                  : "var(--font-display)",
              }}
            >
              {c.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg text-muted-foreground mb-6"
              style={{ fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "inherit" }}
            >
              {c.subtitle}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {c.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {c.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {c.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {c.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2
                  className="text-xl font-bold text-foreground mb-3 sm:text-2xl"
                  style={{
                    fontFamily: isHindi
                      ? "'Noto Sans Devanagari', sans-serif"
                      : "var(--font-display)",
                  }}
                >
                  {section.heading}
                </h2>
                {renderBody(section.body, isHindi)}
              </div>
            ))}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
              <h3
                className="text-xl font-bold text-foreground mb-2"
                style={{ fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "var(--font-display)" }}
              >
                {isHindi ? "अभी बुक करें" : "Ready to Start Your Recovery?"}
              </h3>
              <p
                className="text-muted-foreground mb-6"
                style={{ fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "inherit" }}
              >
                {isHindi
                  ? "घर पर प्रमाणित फिजियोथेरेपिस्ट — दिल्ली NCR में।"
                  : "Certified physiotherapist at your home across Delhi NCR."}
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href={c.ctaLink} target="_blank" rel="noopener noreferrer">
                  {c.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
