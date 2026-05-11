import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, qualification, experience, specialization, areas, message } = body;

    if (!name || !phone || !email || !areas) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f4c81; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0; font-size: 18px;">
            New Partner Application — Delhi Physio At Home
          </h2>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 40%;">Name</td>
              <td style="padding: 8px 0; font-weight: 600; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Phone</td>
              <td style="padding: 8px 0; font-weight: 600; color: #111827;">
                <a href="tel:${phone}" style="color: #0f4c81;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Email</td>
              <td style="padding: 8px 0; font-weight: 600; color: #111827;">
                <a href="mailto:${email}" style="color: #0f4c81;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Qualification</td>
              <td style="padding: 8px 0; color: #111827;">${qualification}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Experience</td>
              <td style="padding: 8px 0; color: #111827;">${experience}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Specialization</td>
              <td style="padding: 8px 0; color: #111827;">${specialization}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Areas covered</td>
              <td style="padding: 8px 0; color: #111827;">${areas}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Additional info</td>
              <td style="padding: 8px 0; color: #111827;">${message}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 20px; padding: 12px 16px; background: #eff6ff; border-radius: 8px; border-left: 3px solid #0f4c81;">
            <p style="margin: 0; font-size: 13px; color: #374151;">
              Reply within 48 hours. Prioritize applicants covering areas you don't currently serve 
              (East Delhi, Noida Sec 50+, South Delhi, Gurgaon).
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Delhi Physio At Home" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER, // can be different from sender
      subject: `New partner application: ${name} — ${areas}`,
      html,
      replyTo: email, // so you can reply directly to the applicant
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Partner apply email error:", err);
    return NextResponse.json({ error: "Mail send failed" }, { status: 500 });
  }
}
