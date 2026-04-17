"use client"
import { useEffect, useState } from "react"
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react"

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/"
      return
    }
    const timer = setInterval(() => setCountdown(prev => prev - 1), 1000)
    return () => clearInterval(timer)
  }, [countdown])

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      <div style={{ backgroundColor: "white", borderRadius: "35px", padding: "50px", textAlign: "center", boxShadow: "0 40px 70px -15px rgba(0,0,0,0.1)", maxWidth: "500px" }}>
        <div style={{ backgroundColor: "#f0fdf4", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 25px" }}>
          <CheckCircle size={45} color="#1a4731" />
        </div>
        <h2 style={{ fontSize: "28px", fontWeight: "900", color: "#1a4731", marginBottom: "15px" }}>Booking Received!</h2>
        <p style={{ color: "#64748b", marginBottom: "30px" }}>Thank you! Your payment was successful. One of our Expert Physiotherapist will be connecting with you shortly.</p>
        <div style={{ backgroundColor: "#f8fafc", padding: "15px", borderRadius: "20px", color: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          Redirecting in <span style={{ color: "#1a4731", fontWeight: "bold" }}>{countdown}s</span> 
          <Loader2 size={16} className="animate-spin" />
        </div>
      </div>
    </div>
  )
}
