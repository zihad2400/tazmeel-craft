import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function GET() {
  try {
    // Verify connection
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    // Send test email
    const info = await transporter.sendMail({
      from: `"Tazmeel Test" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🎯 Test Email from Tazmeel Craft Website",
      html: `
        <div style="font-family:Arial; max-width:600px; margin:auto; padding:30px; background:#F5F1E8; border-radius:12px;">
          <h1 style="color:#0F3D2E; border-bottom:2px solid #C9A227; padding-bottom:15px;">
            ✅ Email Working!
          </h1>
          <p style="color:#0F3D2E; font-size:16px; line-height:1.6;">
            এই test email টি Tazmeel Craft website থেকে পাঠানো হয়েছে।
          </p>
          <p style="color:#0F3D2E; font-size:16px; line-height:1.6;">
            এখন থেকে user/client এর message সরাসরি <strong>${process.env.ADMIN_EMAIL}</strong> এ আসবে।
          </p>
          <div style="background:#0F3D2E; color:#C9A227; padding:15px; border-radius:8px; margin-top:20px;">
            <p style="margin:0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    console.log("✅ Test email sent:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully!",
      messageId: info.messageId,
      to: process.env.ADMIN_EMAIL,
    });
  } catch (error) {
    console.error("❌ Email test failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        hint: "Check Gmail App Password in .env.local",
      },
      { status: 500 }
    );
  }
}
