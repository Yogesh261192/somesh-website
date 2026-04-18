import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // सिर्फ वही डेटा जो आपके नए फॉर्म में है
const { name, phone, email, condition, preferredSlot, currentConcern } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "info@delhiphysioathome.com",
        pass: "u0MRc1n1kXCW", 
      },
    });

    const mailOptions = {
      from: "info@delhiphysioathome.com",
      to: "info@delhiphysioathome.com",
      subject: `[VIRTUAL LEAD] ${condition}: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #1a4731; border-radius: 15px; overflow: hidden;">
          <div style="background-color: #1a4731; color: white; padding: 20px; text-align: center;">
            <h2 style="margin:0;">Virtual Consultation Request</h2>
          </div>
          <div style="padding: 25px; line-height: 1.6; color: #333;">
            <p><strong>Patient Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Selected Condition:</strong> ${condition}</p>
            <p style="background: #f0fdf4; padding: 10px; border-radius: 8px; border: 1px solid #dcfce7;">
              <strong>Preferred Slot:</strong> ${preferredSlot}
            </p>
            <p><strong>Concern/Message:</strong> ${description || "No additional notes"}</p>
          </div>
          <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            This is a virtual consultation lead from the website booking page.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Zoho SMTP Error:", error.message);
    return NextResponse.json({ error: "Email failed", details: error.message }, { status: 500 });
  }
}
