const nodemailer = require("nodemailer");

// 1. Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendBookingEmails = async (bookingData) => {
  const { name, email, eventType, date, details } = bookingData;

  // 2. Email template for the user (Receipt)
  const userMailOptions = {
    from: `"Event Production Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Consultation Request Received!",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2>Thank you, ${name}!</h2>
        <p>We have received your consultation request for a <strong>${eventType}</strong> on <strong>${date}</strong>.</p>
        <p>Our team is reviewing your details and will get back to you within 24 hours.</p>
        <br/>
        <p>Best regards,<br/>Event Production Team</p>
      </div>
    `,
  };

  await Promise.all([
    transporter.sendMail(userMailOptions)
  ]);
};

module.exports = sendBookingEmails;