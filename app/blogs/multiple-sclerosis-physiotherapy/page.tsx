"use client"

import { useState } from "react"
import { ArrowRight, Clock, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const content = {
  en: {
    lang: "English",
    title: "Multiple Sclerosis Physiotherapy at Home — Complete Rehabilitation Guide for MS Patients in Delhi NCR",
    subtitle:
      "Expert home physiotherapy for MS patients covering fatigue management, spasticity treatment, gait retraining and neuro rehab across Delhi, Noida, Ghaziabad and Gurugram.",
    author: "Dr. Somesh",
    date: "June 2026",
    readTime: "10 min read",
    sections: [
      {
        heading: "What Is Multiple Sclerosis (MS)?",
        body: `Multiple sclerosis is an autoimmune disease where the body's immune system attacks the myelin sheath — the protective covering of nerve fibres in the brain and spinal cord. This disrupts signals between the brain and the body, causing a wide range of neurological symptoms.

MS most commonly affects people between 20–40 years of age. While there is no cure, physiotherapy and rehabilitation play a crucial role in managing symptoms, slowing functional decline and maintaining independence for longer.`,
      },
      {
        heading: "Types of MS",
        body: `**Relapsing-Remitting MS (RRMS)** — The most common type. Episodes of symptoms are followed by periods of partial or full recovery.

**Primary Progressive MS (PPMS)** — Gradual worsening from the onset with no clear relapses or remissions.

**Secondary Progressive MS (SPMS)** — Begins as RRMS but eventually transitions to steady progression.

**Clinically Isolated Syndrome (CIS)** — A first episode of neurological symptoms that may or may not develop into full MS.

Physiotherapy goals and exercise intensity are adapted based on the MS type, current disease phase and relapse status.`,
      },
      {
        heading: "Common Symptoms Managed With MS Physiotherapy",
        body: `MS affects every patient differently. The most common symptoms that physiotherapy directly addresses include:

• Muscle weakness in the legs, arms and core
• MS fatigue — the most disabling and misunderstood symptom
• Balance and coordination problems
• Spasticity and muscle stiffness
• Walking difficulty and gait abnormalities
• Tremors and poor fine motor control
• Cognitive fatigue and concentration issues
• Falls and fear of falling

A personalised physiotherapy plan targets the specific functional problems affecting your daily life — not a generic programme.`,
      },
      {
        heading: "Why Physiotherapy Is Essential for MS",
        body: `Most patients rely on medications alone — but disease-modifying drugs only manage relapses, not functional decline. Physiotherapy directly addresses walking, strength, balance and fatigue.

Research confirms that regular home-based rehabilitation produces meaningful improvements in MS walking scores, fatigue levels and balance outcomes. The brain has the ability to adapt through neuroplasticity — guided rehabilitation helps create new movement pathways even in progressive MS.

Early physiotherapy also prevents secondary complications: muscle contractures, pressure sores in advanced cases, disuse atrophy, and the psychological impact of losing independence.`,
      },
      {
        heading: "MS Fatigue Management — The Most Important Part of Rehab",
        body: `MS fatigue is neurological — not ordinary tiredness. It is the most common reason MS patients stop rehabilitation programmes.

A skilled physiotherapist teaches pacing strategies and energy conservation techniques, and schedules exercise during your peak energy windows. Cooling strategies before exercise help prevent Uhthoff's phenomenon — temporary worsening of symptoms due to heat or overexertion.

Key fatigue management strategies include:
• Pacing and energy conservation throughout the day
• Scheduling exercise during morning peak energy windows
• Pre-cooling techniques before physical activity
• Graded aerobic conditioning to improve overall endurance
• Sleep hygiene and planned rest periods

Managing fatigue is often the single biggest quality-of-life improvement in MS rehabilitation.`,
      },
      {
        heading: "5 Key Exercises for Multiple Sclerosis Rehabilitation",
        body: `**1. Seated Leg Strengthening**
Quad sets and heel slides done seated — builds lower limb strength without overexertion. Essential for MS patients with walking difficulty.

**2. Standing Balance Training**
Tandem stance and single-leg balance with support — reduces fall risk and improves confidence in walking. Graded progressively based on ability.

**3. Core Stability Exercises**
Supine bridges and dead bugs — strengthens the core which directly improves posture, balance and walking endurance.

**4. Stretching for Spasticity**
Sustained calf and hamstring stretches to reduce MS-related stiffness. Reduces pain and improves range of motion for walking.

**5. Assisted Walking and Gait Retraining**
Supervised walking practice to correct gait patterns, manage foot drop and build walking tolerance safely.

All exercises are graded to the patient's fatigue tolerance and disease stage. A trained physio manages Uhthoff's phenomenon carefully — overexertion is counterproductive in MS rehab.`,
      },
      {
        heading: "Advanced Neuro-Physiotherapy Techniques Used for MS",
        body: `• **NDT (Neuro-developmental therapy)** — movement re-education for better motor control
• **FES (Functional electrical stimulation)** — specifically used for foot drop in MS
• **Balance retraining** on unstable surfaces for proprioception
• **Task-specific gait training** — real-world walking practice
• **TENS** — pain and spasticity management
• **PNF (Proprioceptive neuromuscular facilitation)** — advanced strengthening technique
• **Hydrotherapy** — low-impact strengthening especially useful in heat-sensitive patients
• **Fatigue and energy conservation counselling** — essential for long-term management`,
      },
      {
        heading: "Benefits of Home Physiotherapy for MS Patients",
        body: `For MS patients, home physiotherapy is not just a convenience — it is often clinically superior to clinic-based rehab.

**No travel fatigue** — When fatigue is your main symptom, the exhaustion of travelling to a clinic leaves nothing for rehabilitation itself. Home physio removes this entirely.

**Familiar environment** — Rehab in your own home means functional training is directly applicable to your daily life.

**Flexible scheduling** — Sessions can be timed around your peak energy windows, not fixed clinic hours.

**Caregiver involvement** — Family members learn correct handling, positioning and exercise guidance.

Studies confirm that home-based MS rehabilitation produces outcomes comparable to clinic-based programmes — with significantly better long-term compliance.`,
      },
      {
        heading: "Why Choose Delhi Physio At Home for MS Rehabilitation?",
        body: `✅ Specialist neuro physiotherapy for MS at home
✅ Home visits across Delhi, Noida, Ghaziabad and Gurugram
✅ Personalised MS rehab programs — no generic routines
✅ Fatigue management and energy conservation guidance
✅ Caregiver training and home exercise programs
✅ Flexible morning and evening timings
✅ Experience with RRMS, PPMS and advanced MS cases
✅ 8+ years of neurological rehabilitation experience`,
      },
      {
        heading: "Book Your MS Physiotherapy Session Today",
        body: `If you or a loved one has been diagnosed with MS and is looking for expert home physiotherapy in Delhi NCR, we are here to help.

WhatsApp us or call us today — our physiotherapist will assess your condition and schedule a visit at a time that suits your energy levels.`,
      },
    ],
    cta: "Book on WhatsApp",
    ctaLink: "https://wa.me/918130171272?text=Hi,%20I%20would%20like%20to%20book%20a%20home%20physiotherapy%20session%20for%20MS",
  },
  hi: {
    lang: "हिन्दी",
    title: "मल्टीपल स्केलेरोसिस के लिए घर पर फिजियोथेरेपी — दिल्ली NCR में MS रिहैबिलिटेशन गाइड",
    subtitle:
      "MS मरीजों के लिए थकान प्रबंधन, स्पास्टिसिटी उपचार, वॉकिंग ट्रेनिंग और न्यूरो रिहैब — दिल्ली, नोएडा, गाज़ियाबाद और गुरुग्राम में होम विज़िट।",
    author: "डॉ. सोमेश",
    date: "जून 2026",
    readTime: "10 मिनट",
    sections: [
      {
        heading: "मल्टीपल स्केलेरोसिस क्या है?",
        body: `मल्टीपल स्केलेरोसिस एक ऑटोइम्यून बीमारी है जिसमें शरीर की प्रतिरक्षा प्रणाली मस्तिष्क और रीढ़ की हड्डी में नसों के माइलिन शीथ पर हमला करती है। इससे मस्तिष्क और शरीर के बीच संदेश बाधित होते हैं।

MS सबसे अधिक 20–40 वर्ष की उम्र के लोगों को प्रभावित करती है। इसका कोई स्थायी इलाज नहीं है, लेकिन फिजियोथेरेपी लक्षणों को कम करने, फंक्शनल गिरावट धीमी करने और लंबे समय तक स्वतंत्रता बनाए रखने में बेहद प्रभावी है।`,
      },
      {
        heading: "MS के प्रकार",
        body: `**रिलैप्सिंग-रिमिटिंग MS (RRMS)** — सबसे सामान्य प्रकार। लक्षण आते-जाते हैं।

**प्राइमरी प्रोग्रेसिव MS (PPMS)** — शुरू से ही धीरे-धीरे बिगड़ता है, कोई स्पष्ट रिलैप्स नहीं।

**सेकेंडरी प्रोग्रेसिव MS (SPMS)** — RRMS से शुरू होकर स्थिर प्रगति में बदल जाता है।

**क्लिनिकली आइसोलेटेड सिंड्रोम (CIS)** — पहला एपिसोड जो MS में बदल सकता है।

MS के प्रकार, बीमारी के चरण और रिलैप्स की स्थिति के अनुसार फिजियोथेरेपी प्लान बदलता है।`,
      },
      {
        heading: "MS के सामान्य लक्षण",
        body: `MS हर मरीज को अलग तरह से प्रभावित करती है। फिजियोथेरेपी से जिन लक्षणों में सीधा फायदा होता है:

• मांसपेशियों में कमजोरी — पैर, हाथ, कोर
• MS थकान — सबसे कमजोर करने वाला लक्षण
• संतुलन और समन्वय की समस्या
• स्पास्टिसिटी और जकड़न
• चलने में कठिनाई और गेट की समस्या
• कंपन और हाथों का कंट्रोल कम होना
• कॉग्निटिव थकान और एकाग्रता में कमी
• गिरने का डर`,
      },
      {
        heading: "MS में फिजियोथेरेपी क्यों जरूरी है?",
        body: `ज्यादातर मरीज केवल दवाओं पर निर्भर रहते हैं — लेकिन दवाएं केवल रिलैप्स को मैनेज करती हैं, फंक्शनल गिरावट को नहीं रोकतीं। फिजियोथेरेपी सीधे चलना, ताकत, बैलेंस और थकान को टार्गेट करती है।

रिसर्च यह पुष्टि करती है कि नियमित होम-बेस्ड रिहैबिलिटेशन MS वॉकिंग स्कोर, थकान और बैलेंस में सार्थक सुधार लाती है। न्यूरोप्लास्टिसिटी के जरिए मस्तिष्क नए मूवमेंट पाथवे बना सकता है — गाइडेड रिहैब इसी प्रक्रिया को बढ़ावा देती है।

जल्दी फिजियोथेरेपी शुरू करने से मांसपेशियों की जकड़न, डिसयूज एट्रोफी और स्वतंत्रता खोने के मनोवैज्ञानिक प्रभाव को भी रोका जा सकता है।`,
      },
      {
        heading: "MS थकान प्रबंधन — रिहैब का सबसे अहम हिस्सा",
        body: `MS की थकान न्यूरोलॉजिकल होती है — सामान्य थकान नहीं। यह सबसे आम कारण है जिससे MS मरीज रिहैबिलिटेशन बीच में छोड़ देते हैं।

एक प्रशिक्षित फिजियोथेरेपिस्ट पेसिंग स्ट्रेटेजी, एनर्जी कंजर्वेशन तकनीकें सिखाता है और आपके एनर्जी पीक विंडो में एक्सरसाइज शेड्यूल करता है। Uhthoff's phenomenon — गर्मी या अत्यधिक मेहनत से लक्षणों का अस्थायी बिगड़ना — को कूलिंग तकनीकों से रोका जाता है।

मुख्य थकान प्रबंधन रणनीतियां:
• दिनभर पेसिंग और एनर्जी कंजर्वेशन
• सुबह एनर्जी पीक में एक्सरसाइज शेड्यूल करना
• एक्सरसाइज से पहले प्री-कूलिंग तकनीक
• ग्रेडेड एरोबिक कंडिशनिंग से सहनशीलता बढ़ाना
• नींद की गुणवत्ता और आराम की योजना`,
      },
      {
        heading: "MS रिकवरी के लिए 5 मुख्य एक्सरसाइज",
        body: `**1. सीटेड लेग स्ट्रेंथनिंग**
बैठकर क्वाड सेट्स और हील स्लाइड्स — बिना ज्यादा मेहनत के निचले अंगों की ताकत बढ़ाते हैं।

**2. स्टैंडिंग बैलेंस ट्रेनिंग**
सपोर्ट के साथ टैंडम स्टांस और सिंगल-लेग बैलेंस — गिरने का खतरा कम करता है।

**3. कोर स्टेबिलिटी एक्सरसाइज**
सुपाइन ब्रिजिंग — पोस्चर, बैलेंस और चलने की सहनशीलता सीधे सुधारता है।

**4. स्पास्टिसिटी के लिए स्ट्रेचिंग**
कैल्फ और हैमस्ट्रिंग स्ट्रेचिंग — जकड़न कम करती है और चलने की रेंज बेहतर करती है।

**5. असिस्टेड वॉकिंग और गेट रिट्रेनिंग**
गेट पैटर्न सुधारने, फुट ड्रॉप मैनेज करने और चलने की सहनशीलता सुरक्षित तरीके से बढ़ाने के लिए।`,
      },
      {
        heading: "आधुनिक न्यूरो फिजियोथेरेपी तकनीकें",
        body: `• **NDT थेरेपी** — बेहतर मोटर कंट्रोल के लिए मूवमेंट री-एजुकेशन
• **FES** — फुट ड्रॉप के लिए फंक्शनल इलेक्ट्रिकल स्टिमुलेशन
• **बैलेंस रिट्रेनिंग** — प्रोप्रियोसेप्शन के लिए अनस्टेबल सरफेस पर
• **टास्क-स्पेसिफिक गेट ट्रेनिंग** — रियल-वर्ल्ड वॉकिंग प्रैक्टिस
• **TENS** — दर्द और स्पास्टिसिटी प्रबंधन
• **PNF तकनीक** — एडवांस स्ट्रेंथनिंग
• **हाइड्रोथेरेपी** — हीट-सेंसिटिव मरीजों के लिए लो-इम्पैक्ट स्ट्रेंथनिंग`,
      },
      {
        heading: "क्यों चुनें Delhi Physio At Home?",
        body: `✅ MS के लिए स्पेशलिस्ट न्यूरो फिजियोथेरेपी
✅ दिल्ली, नोएडा, गाज़ियाबाद और गुरुग्राम में होम विज़िट
✅ पर्सनलाइज्ड MS रिहैब प्रोग्राम — कोई जेनेरिक रूटीन नहीं
✅ थकान प्रबंधन और एनर्जी कंजर्वेशन गाइडेंस
✅ केयरगिवर ट्रेनिंग और होम एक्सरसाइज प्रोग्राम
✅ सुबह और शाम की फ्लेक्सिबल टाइमिंग
✅ RRMS, PPMS और एडवांस MS केसेज़ का अनुभव
✅ 8+ वर्षों का न्यूरोलॉजिकल रिहैबिलिटेशन अनुभव`,
      },
      {
        heading: "आज ही अपना सेशन बुक करें",
        body: `अगर आपको या आपके किसी प्रियजन को MS है और दिल्ली NCR में घर पर एक्सपर्ट फिजियोथेरेपी चाहिए, तो हम यहाँ हैं।

आज ही WhatsApp करें या कॉल करें — हमारी टीम आपकी स्थिति का आकलन करेगी और आपके एनर्जी लेवल के अनुसार विज़िट शेड्यूल करेगी।`,
      },
    ],
    cta: "WhatsApp पर बुक करें",
    ctaLink: "https://wa.me/918130171272?text=नमस्ते,%20मुझे%20MS%20के%20लिए%20घर%20पर%20फिजियोथेरेपी%20चाहिए",
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

export default function MSRehabBlogPage() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  const c = content[lang]
  const isHindi = lang === "hi"

  return (
    <>
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
              Neurological Rehabilitation
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
                {isHindi ? "अभी बुक करें" : "Ready to Start MS Rehabilitation?"}
              </h3>
              <p
                className="text-muted-foreground mb-6"
                style={{ fontFamily: isHindi ? "'Noto Sans Devanagari', sans-serif" : "inherit" }}
              >
                {isHindi
                  ? "घर पर प्रमाणित न्यूरो फिजियोथेरेपिस्ट — दिल्ली NCR में।"
                  : "Certified neuro physiotherapist at your home across Delhi NCR."}
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