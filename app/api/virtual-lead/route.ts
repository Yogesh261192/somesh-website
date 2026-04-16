import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, age, city, condition, timeSlot, description } = body;

    // Direct Credentials for Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", 
      port: 465,
      secure: true, 
      auth: {
        user: "info@delhiphysioathome.com",
        pass: "u0MRc1n1kXCW", // Aapka diya hua App Password
      },
    });

    const mailOptions = {
      from: "info@delhiphysioathome.com", // Zoho mein 'from' hamesha login email hi hota hai
      to: "info@delhiphysioathome.com",   // Jahan aapko lead receive karni hai
      subject: `[FINAL LEAD] Virtual Consult: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #1a4731; border-radius: 15px; overflow: hidden;">
          <div style="background-color: #1a4731; color: white; padding: 20px; text-align: center;">
            <h2 style="margin:0;">New Consultation Request</h2>
          </div>
          <div style="padding: 25px; line-height: 1.6; color: #333;">
            <p><strong>Patient Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${phone}</p>
            <p><strong>Age/City:</strong> ${age || 'N/A'}, ${city || 'N/A'}</p>
            <p><strong>Problem:</strong> ${condition}</p>
            <p style="background: #f0fdf4; padding: 10px; border-radius: 8px; border: 1px solid #dcfce7;">
              <strong>Preferred Slot:</strong> ${timeSlot}
            </p>
            <p><strong>Message:</strong> ${description || "No additional notes"}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    console.log("✅ Mail Sent Successfully to info@delhiphysioathome.com");
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Zoho SMTP Error:", error.message);
    return NextResponse.json({ error: "Email failed to send", details: error.message }, { status: 500 });
  }
}
