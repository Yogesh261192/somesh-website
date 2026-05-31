"use client"

import { useState } from "react"

const content = {
  en: {
    category: "Neurological Rehabilitation",
    date: "May 31, 2026",
    title: "Multiple Sclerosis Physiotherapy at Home — Complete Rehabilitation Guide for MS Patients in Delhi NCR",
    intro: "Multiple sclerosis (MS) is a chronic neurological condition that causes fatigue, weakness, balance problems and walking difficulty. Early, consistent physiotherapy at home can significantly slow functional decline and help MS patients stay independent longer. This guide covers MS symptoms, physiotherapy techniques and home rehab options across Delhi NCR.",
    sections: [
      {
        heading: "What Is Multiple Sclerosis (MS)?",
        content: "MS is an autoimmune disease where the body's immune system attacks the myelin sheath — the protective covering of nerve fibres in the brain and spinal cord. This disrupts signals between the brain and the body, causing a wide range of neurological symptoms. MS most commonly affects people between 20–40 years of age. While there is no cure, physiotherapy and rehabilitation play a crucial role in managing symptoms and maintaining function."
      },
      {
        heading: "Types of MS",
        list: [
          "Relapsing-Remitting MS (RRMS) — most common type; episodes of symptoms followed by recovery",
          "Primary Progressive MS (PPMS) — gradual worsening from onset with no clear relapses",
          "Secondary Progressive MS (SPMS) — begins as RRMS but transitions to steady progression",
          "Clinically Isolated Syndrome (CIS) — first episode, may develop into full MS"
        ]
      },
      {
        heading: "Common Symptoms Managed With MS Physiotherapy",
        list: [
          "Muscle weakness — legs, arms, core",
          "MS fatigue — the most disabling symptom",
          "Balance and coordination problems",
          "Spasticity and muscle stiffness",
          "Walking difficulty and gait abnormalities",
          "Tremors and poor fine motor control",
          "Cognitive fatigue and concentration issues",
          "Falls and fear of falling"
        ]
      },
      {
        heading: "Why Physiotherapy Is Essential for MS",
        content: "Most patients rely on medications alone — but this only manages relapses, not functional decline. Physiotherapy directly addresses walking, strength, balance and fatigue. Research confirms that regular home-based rehabilitation produces meaningful improvements in MS walking scores, fatigue levels and balance outcomes. A certified physiotherapist creates a personalised plan based on your MS type, current phase and relapse status."
      },
      {
        heading: "5 Key Exercises for Multiple Sclerosis Rehabilitation",
        tips: [
          { title: "1. Seated Leg Strengthening", desc: "Quad sets and heel slides done seated — builds lower limb strength without overexertion. Essential for MS patients with walking difficulty." },
          { title: "2. Standing Balance Training", desc: "Tandem stance and single-leg balance with support — reduces fall risk and improves confidence in walking. Graded progressively." },
          { title: "3. Core Stability Exercises", desc: "Supine bridges and dead bugs — strengthens the core which directly improves posture, balance and walking endurance." },
          { title: "4. Stretching for Spasticity", desc: "Sustained calf and hamstring stretches to reduce MS-related stiffness. Reduces pain and improves range of motion for walking." },
          { title: "5. Assisted Walking and Gait Retraining", desc: "Supervised walking practice to correct gait patterns, manage foot drop and build walking tolerance safely." }
        ]
      },
      {
        heading: "MS Fatigue Management — A Critical Part of Rehab",
        content: "MS fatigue is neurological — not ordinary tiredness. It is the most common reason MS patients stop rehabilitation. A skilled physiotherapist teaches pacing strategies, energy conservation techniques and schedules exercise during your peak energy windows. Cooling strategies before exercise help prevent Uhthoff's phenomenon — temporary worsening of symptoms due to heat or overexertion. Managing fatigue is often the single biggest quality-of-life improvement in MS rehab."
      },
      {
        heading: "Advanced Neuro-Physiotherapy Techniques for MS",
        list: [
          "Neuro-developmental therapy (NDT) — movement re-education",
          "Functional electrical stimulation (FES) — for foot drop",
          "Balance retraining on unstable surfaces",
          "Task-specific gait training",
          "TENS — pain and spasticity management",
          "Proprioceptive neuromuscular facilitation (PNF)",
          "Hydrotherapy — low-impact strengthening",
          "Fatigue and energy conservation counselling"
        ]
      },
      {
        heading: "Benefits of Home Physiotherapy for MS Patients",
        list: [
          "No travel stress — critical when fatigue is a main symptom",
          "Rehab in a familiar, safe home environment",
          "Personalised one-on-one sessions",
          "Real-world functional training in your own home",
          "Flexible scheduling around your peak energy times",
          "Caregiver and family education included",
          "Better long-term compliance than clinic-based rehab"
        ]
      },
      {
        heading: "Signs MS Rehabilitation Is Working",
        list: [
          "Less fatigue during daily activities",
          "Better walking distance and endurance",
          "Reduced stiffness and spasticity",
          "Improved sitting and standing balance",
          "Fewer falls or near-falls",
          "Greater independence in daily tasks"
        ]
      },
      {
        heading: "Red Flags — Consult Your Neurologist Immediately",
        list: [
          "Sudden new weakness or rapid worsening of existing symptoms",
          "New visual disturbance or double vision",
          "Loss of bladder or bowel control",
          "Sudden difficulty speaking or swallowing",
          "High fever with symptom worsening — may indicate Uhthoff's or infection",
          "Signs of a relapse — contact your neurologist before resuming intensive physio"
        ],
        warning: true
      },
      {
        heading: "MS Physiotherapy — Frequently Asked Questions",
        list: [
          "Can physiotherapy cure MS? — No, but it significantly improves function and quality of life",
          "Is exercise safe during a relapse? — Light passive movement is safe; intensive exercise should wait",
          "How often should MS patients do physiotherapy? — 3–5 sessions per week; consistency matters more than intensity",
          "Is home physiotherapy as effective as clinic? — Studies confirm home-based MS rehab produces comparable outcomes",
          "What is Uhthoff's phenomenon? — Temporary worsening of MS symptoms due to heat or overexertion during exercise"
        ]
      }
    ],
    ctaTitle: "Book MS Physiotherapy at Home",
    ctaDesc: "Experienced neuro physiotherapists in Delhi NCR will come to your home for personalised MS rehabilitation. Book your first session today.",
    ctaWhatsApp: "Book on WhatsApp",
    ctaCall: "Call: +91 81301 71272",
    backLink: "← View All Blogs"
  },
  hi: {
    category: "न्यूरोलॉजिकल रिहैबिलिटेशन",
    date: "2 जून 2026",
    title: "मल्टीपल स्केलेरोसिस के लिए होम फिजियोथेरेपी गाइड — दिल्ली NCR में MS रिहैबिलिटेशन",
    intro: "मल्टीपल स्केलेरोसिस (MS) एक क्रॉनिक न्यूरोलॉजिकल बीमारी है जो थकान, कमजोरी और चलने में दिक्कत पैदा करती है। सही फिजियोथेरेपी और नियमित घर पर रिहैबिलिटेशन से जीवन की गुणवत्ता में काफी सुधार और फंक्शनल गिरावट को धीमा करना संभव है।",
    sections: [
      {
        heading: "मल्टीपल स्केलेरोसिस क्या है?",
        content: "MS एक ऑटोइम्यून बीमारी है जिसमें शरीर की प्रतिरक्षा प्रणाली मस्तिष्क और रीढ़ की हड्डी में नसों के माइलिन शीथ पर हमला करती है। इससे मस्तिष्क और शरीर के बीच संदेश बाधित होते हैं। MS सबसे अधिक 20–40 वर्ष की उम्र के लोगों को प्रभावित करती है। इसका कोई स्थायी इलाज नहीं है, लेकिन फिजियोथेरेपी लक्षणों को कम करने और जीवन की गुणवत्ता सुधारने में बेहद प्रभावी है।"
      },
      {
        heading: "MS के प्रकार",
        list: [
          "रिलैप्सिंग-रिमिटिंग MS (RRMS) — सबसे सामान्य; लक्षण आते-जाते हैं",
          "प्राइमरी प्रोग्रेसिव MS (PPMS) — शुरू से धीरे-धीरे बिगड़ता है",
          "सेकेंडरी प्रोग्रेसिव MS (SPMS) — RRMS से बदलकर प्रोग्रेसिव होता है",
          "क्लिनिकली आइसोलेटेड सिंड्रोम (CIS) — पहला एपिसोड, MS बन सकता है"
        ]
      },
      {
        heading: "MS के सामान्य लक्षण",
        list: [
          "मांसपेशियों में कमजोरी — पैर, हाथ, कोर",
          "अत्यधिक थकान (MS Fatigue) — सबसे कमजोर करने वाला लक्षण",
          "संतुलन और समन्वय की समस्या",
          "स्पास्टिसिटी और जकड़न",
          "चलने में कठिनाई और गेट की समस्या",
          "कंपन और हाथों का कंट्रोल कम होना",
          "कॉग्निटिव थकान और एकाग्रता में कमी",
          "गिरने का डर"
        ]
      },
      {
        heading: "MS में फिजियोथेरेपी क्यों जरूरी है?",
        content: "ज्यादातर मरीज केवल दवाओं पर निर्भर रहते हैं — लेकिन दवाएं केवल रिलैप्स को मैनेज करती हैं, फंक्शनल गिरावट को नहीं रोकतीं। फिजियोथेरेपी सीधे चलना, ताकत, बैलेंस और थकान को टार्गेट करती है। रिसर्च यह पुष्टि करती है कि नियमित होम-बेस्ड रिहैबिलिटेशन MS वॉकिंग स्कोर, थकान और बैलेंस में सार्थक सुधार लाती है।"
      },
      {
        heading: "MS रिकवरी के लिए 5 मुख्य एक्सरसाइज",
        tips: [
          { title: "1. सीटेड लेग स्ट्रेंथनिंग", desc: "बैठकर क्वाड सेट्स और हील स्लाइड्स — बिना ज्यादा मेहनत के निचले अंगों की ताकत बढ़ाते हैं। चलने में दिक्कत वाले MS मरीजों के लिए जरूरी।" },
          { title: "2. स्टैंडिंग बैलेंस ट्रेनिंग", desc: "सपोर्ट के साथ टैंडम स्टांस और सिंगल-लेग बैलेंस — गिरने का खतरा कम करता है और चलने में आत्मविश्वास बढ़ाता है।" },
          { title: "3. कोर स्टेबिलिटी एक्सरसाइज", desc: "सुपाइन ब्रिजिंग — कोर मजबूत करता है जो पोस्चर, बैलेंस और चलने की सहनशीलता सीधे सुधारता है।" },
          { title: "4. स्पास्टिसिटी के लिए स्ट्रेचिंग", desc: "कैल्फ और हैमस्ट्रिंग की सस्टेन्ड स्ट्रेचिंग — MS से जुड़ी जकड़न कम करती है और चलने के लिए रेंज ऑफ मोशन बेहतर करती है।" },
          { title: "5. असिस्टेड वॉकिंग और गेट रिट्रेनिंग", desc: "गेट पैटर्न सुधारने, फुट ड्रॉप मैनेज करने और चलने की सहनशीलता सुरक्षित तरीके से बढ़ाने के लिए सुपरवाइज्ड वॉकिंग प्रैक्टिस।" }
        ]
      },
      {
        heading: "MS थकान प्रबंधन — रिहैब का सबसे अहम हिस्सा",
        content: "MS की थकान न्यूरोलॉजिकल होती है — सामान्य थकान नहीं। यह सबसे आम कारण है जिससे MS मरीज रिहैबिलिटेशन छोड़ देते हैं। एक प्रशिक्षित फिजियोथेरेपिस्ट पेसिंग स्ट्रेटेजी, एनर्जी कंजर्वेशन तकनीकें सिखाता है और एनर्जी पीक विंडो में एक्सरसाइज शेड्यूल करता है। Uhthoff's phenomenon — गर्मी या अत्यधिक मेहनत से लक्षणों का अस्थायी बिगड़ना — को कूलिंग तकनीकों से रोका जाता है। थकान प्रबंधन अक्सर MS में जीवन की गुणवत्ता का सबसे बड़ा सुधार होता है।"
      },
      {
        heading: "आधुनिक न्यूरो फिजियोथेरेपी तकनीकें",
        list: [
          "NDT थेरेपी — मूवमेंट री-एजुकेशन",
          "FES — फुट ड्रॉप के लिए फंक्शनल इलेक्ट्रिकल स्टिमुलेशन",
          "अनस्टेबल सरफेस पर बैलेंस रिट्रेनिंग",
          "टास्क-स्पेसिफिक गेट ट्रेनिंग",
          "TENS — दर्द और स्पास्टिसिटी प्रबंधन",
          "PNF तकनीक",
          "हाइड्रोथेरेपी — लो-इम्पैक्ट स्ट्रेंथनिंग",
          "एनर्जी कंजर्वेशन काउंसलिंग"
        ]
      },
      {
        heading: "घर पर MS फिजियोथेरेपी के फायदे",
        list: [
          "यात्रा का तनाव नहीं — जब थकान मुख्य लक्षण हो तो यह बहुत जरूरी है",
          "परिचित और सुरक्षित वातावरण में रिहैब",
          "पर्सनलाइज्ड वन-ऑन-वन सेशन",
          "घर पर रियल-लाइफ फंक्शनल ट्रेनिंग",
          "एनर्जी पीक टाइम पर फ्लेक्सिबल शेड्यूलिंग",
          "परिवार और केयरगिवर को गाइडेंस",
          "क्लिनिक की तुलना में बेहतर दीर्घकालिक कंप्लायंस"
        ]
      },
      {
        heading: "रिकवरी के अच्छे संकेत",
        list: [
          "दैनिक कार्यों में थकान कम होना",
          "चलने की दूरी और सहनशीलता बढ़ना",
          "जकड़न और स्पास्टिसिटी कम होना",
          "बैठने और खड़े होने का बैलेंस सुधरना",
          "गिरने की घटनाएं कम होना",
          "दैनिक कार्यों में स्वतंत्रता बढ़ना"
        ]
      },
      {
        heading: "रेड फ्लैग्स — तुरंत न्यूरोलॉजिस्ट से संपर्क करें",
        list: [
          "अचानक नई कमजोरी या मौजूदा लक्षणों का तेजी से बिगड़ना",
          "नज़र में अचानक बदलाव या दोहरी दृष्टि",
          "ब्लैडर या बॉवेल कंट्रोल खत्म होना",
          "अचानक बोलने या निगलने में दिक्कत",
          "तेज़ बुखार के साथ लक्षण बिगड़ना",
          "रिलैप्स के संकेत — इंटेंसिव फिजियो से पहले न्यूरोलॉजिस्ट से मिलें"
        ],
        warning: true
      },
      {
        heading: "MS फिजियोथेरेपी — अक्सर पूछे जाने वाले सवाल",
        list: [
          "क्या फिजियोथेरेपी MS ठीक कर सकती है? — नहीं, लेकिन यह फंक्शन और जीवन की गुणवत्ता में काफी सुधार करती है",
          "क्या रिलैप्स के दौरान एक्सरसाइज सुरक्षित है? — हल्की पैसिव मूवमेंट ठीक है; इंटेंसिव एक्सरसाइज रुकनी चाहिए",
          "कितनी बार फिजियोथेरेपी करनी चाहिए? — हफ्ते में 3–5 सेशन आदर्श हैं; नियमितता ज्यादा मायने रखती है",
          "क्या होम फिजियोथेरेपी क्लिनिक जितनी प्रभावी है? — हां, रिसर्च इसकी पुष्टि करती है",
          "Uhthoff's phenomenon क्या है? — गर्मी या अत्यधिक मेहनत से MS लक्षणों का अस्थायी बिगड़ना"
        ]
      }
    ],
    ctaTitle: "घर पर MS फिजियोथेरेपी बुक करें",
    ctaDesc: "दिल्ली NCR में अनुभवी न्यूरो फिजियोथेरेपिस्ट आपके घर आकर पर्सनलाइज्ड MS रिहैबिलिटेशन देंगे। आज ही अपना पहला सत्र बुक करें।",
    ctaWhatsApp: "WhatsApp पर बुक करें",
    ctaCall: "कॉल करें: +91 81301 71272",
    backLink: "← सभी ब्लॉग देखें"
  }
}

export default function MSRehabBlog() {
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
              href="https://wa.me/918130171272?text=Hi, I would like to book a physiotherapy session for MS"
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