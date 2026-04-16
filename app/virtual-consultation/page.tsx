"use client"

import { useState } from "react"
import { CheckCircle, Video, ShieldCheck, CreditCard, Activity, Zap, Star, Lock } from "lucide-react"

export default function VirtualConsultationPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "", age: "", phone: "", city: "", condition: "", description: "", timeSlot: ""
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.condition || !form.timeSlot) {
      alert("Please fill all required fields (*)")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/virtual-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (res.ok) setStep(2)
      else alert("Error sending request")
    } catch (err) {
      alert("Connection error")
    }
    setLoading(false)
  }

  // कॉमन स्टाइल ताकि कोई भी एलिमेंट स्क्रीन से बाहर न जाए
  const inputStyle = { 
    width: "100%", 
    padding: "16px", 
    borderRadius: "16px", 
    border: "2px solid #f1f5f9", 
    outline: "none", 
    fontSize: "15px", 
    backgroundColor: "#fbfcfd",
    boxSizing: "border-box" 
  }

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b", overflowX: "hidden" }}>
      
      {/* PREMIUM HERO SECTION (Pura Content Jo Pehle Tha) */}
      <div style={{ backgroundColor: "#1a4731", color: "white", padding: "70px 20px 140px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span style={{ border: "1px solid #fbbf24", color: "#fbbf24", padding: "6px 16px", borderRadius: "20px", fontSize: "11px", fontWeight: "bold", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            India's Leading Virtual Physio
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: "900", marginTop: "25px", lineHeight: "1.1", letterSpacing: "-1.5px" }}>
            Expert Physiotherapy <br />
            <span style={{ color: "#fbbf24" }}>From Home Comfort</span>
          </h1>

          {/* BENEFIT CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginTop: "60px" }}>
            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "35px", borderRadius: "24px", textAlign: "left", backdropFilter: "blur(12px)" }}>
              <Zap style={{ color: "#fbbf24", marginBottom: "18px" }} size={30} />
              <h3 style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "20px", marginBottom: "12px" }}>Instant Access</h3>
              <p style={{ fontSize: "15px", color: "#e2e8f0", lineHeight: "1.6", opacity: 0.9 }}>No more travel or waiting rooms. Connect with elite clinical specialists immediately from wherever you are.</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "35px", borderRadius: "24px", textAlign: "left", backdropFilter: "blur(12px)" }}>
              <Video style={{ color: "#fbbf24", marginBottom: "18px" }} size={30} />
              <h3 style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "20px", marginBottom: "12px" }}>Detailed Video Assessment</h3>
              <p style={{ fontSize: "15px", color: "#e2e8f0", lineHeight: "1.6", opacity: 0.9 }}>1-on-1 sessions focused on postural analysis, movement correction, and personalized exercise protocols tailored for you.</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "35px", borderRadius: "24px", textAlign: "left", backdropFilter: "blur(12px)" }}>
              <Star style={{ color: "#fbbf24", marginBottom: "18px" }} size={30} />
              <h3 style={{ color: "#fbbf24", fontWeight: "bold", fontSize: "20px", marginBottom: "12px" }}>Trusted Clinical Results</h3>
              <p style={{ fontSize: "15px", color: "#e2e8f0", lineHeight: "1.6", opacity: 0.9 }}>Expert care for Slip Disc, Cervical, and Sports Injuries using evidence-based recovery methods for lasting relief.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING FORM SECTION (Aligned and contained) */}
      <div style={{ maxWidth: "600px", margin: "-100px auto 0", padding: "0 20px", position: "relative", zIndex: "50", boxSizing: "border-box" }}>
        
        {step === 1 && (
          <div style={{ backgroundColor: "white", borderRadius: "35px", boxShadow: "0 40px 70px -15px rgba(0,0,0,0.25)", padding: "40px", border: "1px solid #f1f5f9", boxSizing: "border-box" }}>
            
            {/* PRICING HEADER */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "35px", borderBottom: "2px solid #f8fafc", paddingBottom: "25px", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h2 style={{ fontSize: "26px", fontWeight: "900", color: "#0f172a", letterSpacing: "-0.5px", margin: 0 }}>Book Slot</h2>
                <p style={{ fontSize: "13px", color: "#64748b", display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                  <Activity size={15} color="#1a4731" /> Certified Specialists Only
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "16px", color: "#94a3b8", textDecoration: "line-through", marginRight: "8px", fontWeight: "600" }}>₹600</span>
                <span style={{ fontSize: "36px", fontWeight: "900", color: "#1a4731", lineHeight: "1" }}>₹399</span>
                <p style={{ fontSize: "11px", color: "#dc2626", fontWeight: "800", textTransform: "uppercase", marginTop: "5px", letterSpacing: "0.5px" }}>
                  🔥 Limited time offer
                </p>
              </div>
            </div>

            {/* FORM FIELDS (Grid fix for horizontal alignment) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
                <input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} style={inputStyle} />
                <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} style={inputStyle} />
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
                <input name="age" placeholder="Age" value={form.age} onChange={handleChange} style={inputStyle} />
                <input name="city" placeholder="City" value={form.city} onChange={handleChange} style={inputStyle} />
              </div>

              <select name="condition" value={form.condition} onChange={handleChange} style={inputStyle}>
                <option value="">Select Your Condition *</option>
                <option value="Back Pain">Back Pain / Slip Disc</option>
                <option value="Neck Pain">Neck / Cervical Pain</option>
                <option value="Knee Pain">Knee / Joint Pain</option>
                <option value="Sports Injury">Sports / Muscle Injury</option>
                <option value="Other">Other Issues</option>
              </select>

              <select name="timeSlot" value={form.timeSlot} onChange={handleChange} style={inputStyle}>
                <option value="">Preferred Consultation Time *</option>
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
              </select>

              <button 
                onClick={handleSubmit} 
                disabled={loading}
                style={{ backgroundColor: "#1a4731", color: "white", padding: "18px", borderRadius: "20px", fontSize: "18px", fontWeight: "bold", border: "none", cursor: "pointer", transition: "all 0.3s" }}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              <p style={{ fontSize: "12px", color: "#64748b", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "10px" }}>
                <Lock size={14} /> Your medical data is 100% secure & confidential
              </p>
            </div>
          </div>
        )}
        
        {/* Success State */}
        {step === 2 && (
          <div style={{ backgroundColor: "white", borderRadius: "35px", padding: "60px 40px", textAlign: "center", boxShadow: "0 40px 70px -15px rgba(0,0,0,0.25)" }}>
            <CheckCircle size={60} color="#1a4731" style={{ marginBottom: "20px" }} />
            <h2 style={{ fontSize: "28px", fontWeight: "900" }}>Booking Received!</h2>
            <p>Our team will contact you shortly to confirm your slot.</p>
          </div>
        )}
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  )
}
