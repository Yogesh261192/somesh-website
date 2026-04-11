"use client"

import { useState } from "react"
import { ArrowRight, Clock, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const content = {
  en: {
    lang: "English",
    category: "Foot Pain",
    title: "Heel Pain (Plantar Fasciitis) Treatment at Home in Delhi NCR",
    subtitle:
      "Complete guide to heel pain relief, exercises, and expert home physiotherapy in Delhi, Ghaziabad, Noida & Gurgaon.",
    author: "Dr. Somesh",
    date: "April 2026",
    readTime: "7 min read",
    sections: [
      {
        heading: "What is Heel Pain / Plantar Fasciitis?",
        body: `Heel pain, especially in the morning, is commonly caused by plantar fasciitis — inflammation of the thick band of tissue connecting your heel to your toes.

Many patients in Delhi NCR ignore early symptoms, which later leads to difficulty in walking and chronic pain.`,
      },
      {
        heading: "Common Causes in Daily Life",
        body: `• Standing for long hours  
• Walking barefoot on hard floors  
• Wearing improper footwear  
• Sudden increase in walking or workouts  
• Excess body weight  

Urban lifestyle in Delhi NCR plays a major role in this condition.`,
      },
      {
        heading: "Symptoms You Should Not Ignore",
        body: `• Sharp heel pain in the morning  
• Pain after long sitting  
• Heel stiffness  
• Difficulty in walking  

Ignoring these can worsen the condition over time.`,
      },
      {
        heading: "Best Exercises for Heel Pain Relief",
        body: `**Calf Stretch** — Reduces tension in heel  

**Heel Raises** — Strengthens foot muscles  

**Foot Rolling** — Use a bottle or ball  

**Towel Stretch** — Improves flexibility  

Regular practice ensures faster recovery.`,
      },
      {
        heading: "When Do You Need Physiotherapy at Home?",
        body: `If your pain lasts more than 5–7 days or increases while walking, professional physiotherapy is required.

Home physiotherapy in Delhi NCR helps you recover without travel and provides personalised care.`,
      },
      {
        heading: "Why Choose Delhi Physio At Home?",
        body: `✅ Certified & experienced physiotherapists (BPT, MIAP)  
✅ Home visits across Delhi NCR  
✅ Personalised treatment plans  
✅ Flexible scheduling  
✅ Same-day bookings available  
✅ 2000+ patients successfully treated`,
      },
      {
        heading: "Book Your First Session Today",
        body: `Don't ignore heel pain — early treatment prevents long-term damage.

Book your physiotherapy session today and start your recovery at home.`,
      },
    ],
    cta: "Book on WhatsApp",
    ctaLink:
      "https://wa.me/918130171272?text=Hi,%20I%20need%20heel%20pain%20physiotherapy%20at%20home",
  },

  hi: {
    lang: "हिन्दी",
    category: "पैर दर्द",
    title: "एड़ी के दर्द (Plantar Fasciitis) का घर पर इलाज – दिल्ली NCR",
    subtitle:
      "एड़ी के दर्द के कारण, एक्सरसाइज और घर पर फिजियोथेरेपी की पूरी जानकारी।",
    author: "डॉ. सोमेश",
    date: "अप्रैल 2026",
    readTime: "7 मिनट",
    sections: [
      {
        heading: "एड़ी का दर्द क्या है?",
        body: `सुबह उठते ही एड़ी में दर्द होना प्लांटर फैसाइटिस का संकेत हो सकता है।

इसे नजरअंदाज करने पर चलना मुश्किल हो सकता है।`,
      },
      {
        heading: "मुख्य कारण",
        body: `• लंबे समय तक खड़े रहना  
• कठोर सतह पर चलना  
• गलत जूते पहनना  
• अचानक ज्यादा चलना  
• वजन अधिक होना`,
      },
      {
        heading: "लक्षण",
        body: `• सुबह उठते ही दर्द  
• बैठने के बाद उठते समय दर्द  
• एड़ी में जकड़न  
• चलने में परेशानी`,
      },
      {
        heading: "बेहतरीन एक्सरसाइज",
        body: `**काफ स्ट्रेच**  
**हील रेज़**  
**फुट रोलिंग**  
**टॉवल स्ट्रेच**`,
      },
      {
        heading: "कब फिजियोथेरेपी लें?",
        body: `अगर दर्द 5–7 दिन में ठीक नहीं होता या बढ़ता है, तो इलाज जरूरी है।

घर पर फिजियोथेरेपी सबसे बेहतर विकल्प है।`,
      },
      {
        heading: "Delhi Physio At Home क्यों चुनें?",
        body: `✅ अनुभवी फिजियोथेरेपिस्ट  
✅ घर पर विज़िट  
✅ व्यक्तिगत इलाज  
✅ तुरंत बुकिंग  
✅ 2000+ सफल मरीज`,
      },
      {
        heading: "आज ही बुक करें",
        body: `एड़ी के दर्द को नजरअंदाज न करें।

आज ही इलाज शुरू करें।`,
      },
    ],
    cta: "WhatsApp पर बुक करें",
    ctaLink:
      "https://wa.me/918130171272?text=नमस्ते,%20मुझे%20एड़ी%20के%20दर्द%20का%20इलाज%20चाहिए",
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
        style={{
          fontFamily: isHindi
            ? "'Noto Sans Devanagari', sans-serif"
            : "inherit",
        }}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    )
  })
}

export default function Page() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]
  const isHindi = lang === "hi"

  return (
    <>
      {/* FONT SAME */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap');
      `}</style>

      <article className="bg-background min-h-screen">

        {/* HERO SAME AS KNEE */}
        <section className="bg-primary/5 border-b border-border py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">

            {/* TOGGLE SAME */}
            <div className="mb-6 flex items-center gap-2">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLang("hi")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  lang === "hi"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                हिन्दी
              </button>
            </div>

            {/* CATEGORY TAG SAME */}
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              {c.category}
            </span>

            {/* TITLE SAME */}
            <h1
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
              style={{
                fontFamily: isHindi
                  ? "'Noto Sans Devanagari', sans-serif"
                  : "var(--font-display)",
              }}
            >
              {c.title}
            </h1>

            {/* SUBTITLE */}
            <p
              className="text-lg text-muted-foreground mb-6"
              style={{
                fontFamily: isHindi
                  ? "'Noto Sans Devanagari', sans-serif"
                  : "inherit",
              }}
            >
              {c.subtitle}
            </p>

            {/* META SAME */}
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

        {/* CONTENT SAME */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">

            {c.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2
                  className="text-xl font-bold mb-3 sm:text-2xl"
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

            {/* CTA SAME */}
            <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
              <h3 className="text-xl font-bold mb-2">
                {isHindi ? "अभी बुक करें" : "Ready to Start Your Recovery?"}
              </h3>

              <p className="text-muted-foreground mb-6">
                {isHindi
                  ? "घर पर प्रमाणित फिजियोथेरेपिस्ट"
                  : "Certified physiotherapist at your home in Delhi NCR"}
              </p>

              <Button size="lg" className="gap-2" asChild>
                <a href={c.ctaLink} target="_blank">
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