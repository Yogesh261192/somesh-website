const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: "info@delhiphysioathome.com",
    pass: "Mbdio@2611",
  },
});

// delay function
const delay = (ms) => new Promise(res => setTimeout(res, ms));

// 🔥 UPDATED EMAIL TEMPLATE (HTML)
const emailTemplate = () => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">

  <!-- Header -->
  <div style="background: #0f766e; color: white; padding: 20px; text-align: center;">
    <h2 style="margin: 0;">Delhi Physio at Home</h2>
    <p style="margin: 5px 0 0;">Expert Physiotherapy at Your Doorstep</p>
  </div>

  <!-- Body -->
  <div style="padding: 20px; color: #333;">

    <h3 style="margin-top: 0;">Dealing with Pain or Recovery Issues?</h3>

    <p>
      If you're facing <b>back pain, knee pain, stiffness, or post-surgery recovery challenges</b>, 
      physiotherapy at the right time can make a huge difference.
    </p>

    <p>
      With <b>Delhi Physio at Home</b>, you don’t need to visit a clinic — 
      we bring <b>professional physiotherapy sessions to your home</b>.
    </p>

    <ul style="padding-left: 20px;">
      <li>✔ Experienced Physiotherapists (8+ years)</li>
      <li>✔ Personalized Treatment Plans</li>
      <li>✔ Ideal for Elderly & Post-Surgery Care</li>
      <li>✔ No Travel – Home Visits Available</li>
    </ul>

    <!-- Website Button -->
    <div style="text-align: center; margin: 25px 0;">
      <a href="https://www.delhiphysioathome.com" 
         style="background: #0f766e; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        🌐 Visit Website & Book
      </a>
    </div>

    <!-- WhatsApp Button -->
    <div style="text-align: center; margin-bottom: 20px;">
      <a href="https://wa.me/918130171272" 
         style="background: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
        💬 Chat on WhatsApp
      </a>
    </div>

    <p style="font-size: 14px; color: #555;">
      Not sure if physiotherapy is right for your condition?  
      Just reply to this email or message us — we’ll guide you honestly.
    </p>

  </div>

  <!-- Footer -->
  <div style="background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #777;">
    © Delhi Physio at Home | Delhi NCR  
  </div>

</div>
`;

// emails list
const emails = [
  "Kamal.kundan@gmail.com",
];

// subject rotation 🔥
const subjects = [
  "🏠 Back/Knee Pain? Get Physiotherapy at Home",
  "💪 Recover Faster at Home – Expert Physio",
  "🦵 Pain or Recovery Issues? We Come to You"
];

async function sendEmails() {
  for (let email of emails) {
    try {
      await transporter.sendMail({
        from: '"Delhi Physio at Home" <info@delhiphysioathome.com>',
        to: email,
        subject: subjects[Math.floor(Math.random() * subjects.length)],
        html: emailTemplate(),
      });

      console.log(`✅ Sent to: ${email}`);

      await delay(7000);
    } catch (err) {
      console.log(`❌ Failed: ${email}`, err.message);
    }
  }
}

sendEmails();