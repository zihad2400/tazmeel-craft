import nodemailer from "nodemailer";
import { SITE_CONFIG } from "./siteConfig";

// ⭐ Transporter
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ⭐ Verify
export async function verifyEmailConfig() {
  try {
    await transporter.verify();
    console.log("✅ Email server ready");
    return true;
  } catch (error) {
    console.error("❌ Email config error:", error.message);
    return false;
  }
}

// ⭐ Admin Notification Email
export async function sendContactNotification(data) {
  const { name, email, phone, company, subject, message } = data;

  // Build rows as array then join (avoid nested quotes conflict)
  const rows = [
    { label: "Name", value: name, icon: "👤" },
    { label: "Email", value: email, icon: "📧", isLink: `mailto:${email}` },
    { label: "Phone", value: phone || "N/A", icon: "📞" },
    { label: "Company", value: company || "N/A", icon: "🏢" },
    { label: "Subject", value: subject || "General Inquiry", icon: "📋" },
  ];

  const rowsHtml = rows
    .map((row) => {
      const valueHtml = row.isLink
        ? `<a href="${row.isLink}" style="color:#0F3D2E;text-decoration:none;font-size:16px;">${row.value}</a>`
        : `<span style="color:#0F3D2E;font-size:16px;">${row.value}</span>`;

      return `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #EAE3D2;">
            <div style="color:#C9A227;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:600;margin-bottom:6px;">
              ${row.icon} ${row.label}
            </div>
            ${valueHtml}
          </td>
        </tr>
      `;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>New Contact</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#F5F1E8;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F1E8;padding:20px 0;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(15,61,46,0.1);">
<tr>
<td style="background:#0F3D2E;padding:30px 20px;text-align:center;">
<h1 style="margin:0;color:#C9A227;font-size:22px;font-weight:bold;letter-spacing:1px;">🎯 NEW CONTACT MESSAGE</h1>
<p style="margin:8px 0 0;color:#F5F1E8;font-size:13px;">Tazmeel Craft — Business Inquiry</p>
</td>
</tr>
<tr>
<td style="padding:30px 25px;">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
${rowsHtml}
</table>
<div style="background:#F5F1E8;border-left:4px solid #C9A227;padding:20px;border-radius:8px;margin:20px 0;">
<div style="color:#C9A227;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:600;margin-bottom:8px;">💬 Message</div>
<div style="color:#0F3D2E;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</div>
</div>
<div style="text-align:center;margin-top:25px;">
<a href="mailto:${email}?subject=Re: ${subject || "Your Inquiry"}" style="display:inline-block;background:#0F3D2E;color:#F5F1E8;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:14px;">📩 Reply by Email</a>
</div>
</td>
</tr>
<tr>
<td style="background:#082A1F;padding:18px;text-align:center;">
<p style="margin:0;color:#C9A227;font-size:11px;">Received: ${new Date().toLocaleString("en-US")}</p>
<p style="margin:6px 0 0;color:#C9A227;font-size:10px;opacity:0.7;">Tazmeel Craft — West Agargaon, Dhaka</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;

  const text = `NEW CONTACT MESSAGE — Tazmeel Craft

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Subject: ${subject || "General Inquiry"}

Message:
${message}

---
Received: ${new Date().toLocaleString()}`;

  return transporter.sendMail({
    from: `"Tazmeel Craft" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    replyTo: email,
    subject: `🎯 New Contact: ${subject || "Inquiry"} — ${name}`,
    text: text,
    html: html,
  });
}

// ⭐ Auto-Reply to Client
export async function sendAutoReply(to, name) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Thank You</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#F5F1E8;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F1E8;padding:20px 0;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(15,61,46,0.1);">
<tr>
<td style="background:#0F3D2E;padding:40px 20px;text-align:center;">
<h1 style="margin:0;color:#C9A227;font-size:24px;font-weight:bold;">✨ Thank You, ${name}!</h1>
<p style="margin:10px 0 0;color:#F5F1E8;font-size:14px;">We've received your message</p>
</td>
</tr>
<tr>
<td style="padding:35px 30px;color:#0F3D2E;">
<p style="font-size:16px;line-height:1.7;margin:0 0 20px;">Dear <strong style="color:#C9A227;">${name}</strong>,</p>
<p style="font-size:15px;line-height:1.7;margin:0 0 20px;">Thank you for contacting <strong>Tazmeel Craft</strong>. We've received your inquiry and our team will get back to you within <strong style="color:#C9A227;">24 hours</strong>.</p>
<div style="background:#F5F1E8;padding:20px;border-radius:8px;border-left:4px solid #C9A227;margin:25px 0;">
<p style="margin:0 0 12px;color:#0F3D2E;font-size:13px;font-weight:bold;letter-spacing:1px;">📞 NEED IMMEDIATE HELP?</p>
<p style="margin:6px 0;font-size:14px;color:#0F3D2E;"><strong>📱 Phone:</strong> <a href="tel:+8801911548979" style="color:#C9A227;text-decoration:none;">01911548979</a></p>
<p style="margin:6px 0;font-size:14px;color:#0F3D2E;"><strong>✉️ Email:</strong> <a href="mailto:tazmeelcraft@gmail.com" style="color:#C9A227;text-decoration:none;">tazmeelcraft@gmail.com</a></p>
<p style="margin:6px 0;font-size:14px;color:#0F3D2E;"><strong>🕐 Hours:</strong> 9AM - 9PM (Sat - Fri)</p>
</div>
<div style="text-align:center;margin:30px 0 20px;">
<a href="https://wa.me/8801911548979" style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 32px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:15px;">💬 Chat on WhatsApp</a>
</div>
<p style="font-size:14px;line-height:1.7;margin:25px 0 0;text-align:center;">Best regards,<br><strong style="color:#C9A227;font-size:16px;">Tazmeel Craft Team</strong></p>
</td>
</tr>
<tr>
<td style="background:#082A1F;padding:25px 20px;text-align:center;">
<p style="margin:0 0 8px;color:#C9A227;font-size:16px;font-weight:bold;letter-spacing:2px;">TAZMEEL CRAFT</p>
<p style="margin:0;color:#C9A227;font-size:12px;opacity:0.8;">Crafting Style With Tazmeel · Since 2020</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;

  const text = `Thank You, ${name}!

We received your message at Tazmeel Craft. Our team will get back to you within 24 hours.

For urgent inquiries:
📱 Phone: 01911548979
✉️ Email: tazmeelcraft@gmail.com
🕐 Hours: 9AM - 9PM (Sat - Fri)

Chat on WhatsApp: https://wa.me/8801911548979

Best regards,
Tazmeel Craft Team`;

  return transporter.sendMail({
    from: `"Tazmeel Craft" <${process.env.EMAIL_USER}>`,
    to,
    subject: "✨ Thank you for contacting Tazmeel Craft",
    text: text,
    html: html,
  });
}
