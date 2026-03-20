import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

// Configure your email transport (Gmail example shown below)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, phone, city, problem, description } = await request.json()

    // Validate inputs
    if (!name || !phone || !city || !problem) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const adminEmail = process.env.ADMIN_EMAIL
    const userEmail = process.env.USER_EMAIL_FROM // The email sending from

    // Email to admin (you)
    const adminMailOptions = {
      from: userEmail,
      to: adminEmail,
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City/Area:</strong> ${city}</p>
        <p><strong>Problem Type:</strong> ${problem}</p>
        <p><strong>Description:</strong> ${description || 'N/A'}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: userEmail,
      to: phone, // You might want to collect email from user instead of phone
      subject: 'Booking Appointment Request Received',
      html: `
        <h2>Thank You for Your Request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your booking request for <strong>${problem}</strong>.</p>
        <p>Our team will contact you at <strong>${phone}</strong> within 24 hours to confirm your appointment.</p>
        <p>Thank you for choosing us!</p>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    // Note: Only send to user if they provided an email
    // await transporter.sendMail(userMailOptions)

    return NextResponse.json(
      { success: true, message: 'Booking request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking request' },
      { status: 500 }
    )
  }
}
