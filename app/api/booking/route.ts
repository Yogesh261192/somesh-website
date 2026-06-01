import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, city, problem, description } = await request.json()

    if (!name || !phone || !city || !problem) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: 'info@delhiphysioathome.com',
        pass: 'u0MRc1n1kXCW',
      },
    })

    await transporter.sendMail({
      from: 'info@delhiphysioathome.com',
      to: 'info@delhiphysioathome.com',
      subject: `[BOOKING] New Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #1a4731; border-radius: 15px; overflow: hidden;">
          <div style="background-color: #1a4731; color: white; padding: 20px; text-align: center;">
            <h2 style="margin:0;">New Booking Request</h2>
          </div>
          <div style="padding: 25px; line-height: 1.6; color: #333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>City/Area:</strong> ${city}</p>
            <p><strong>Problem Type:</strong> ${problem}</p>
            <p><strong>Description:</strong> ${description || 'N/A'}</p>
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            This is a booking request from delhiphysioathome.com
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Booking request submitted successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Email sending error:', error.message)
    return NextResponse.json(
      { error: 'Failed to submit booking request', details: error.message },
      { status: 500 }
    )
  }
}