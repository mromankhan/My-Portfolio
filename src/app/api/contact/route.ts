import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ── Email to Roman ────────────────────────────────────────────────────────────
function notificationEmail(name: string, email: string, message: string) {
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
  <body style="margin:0;padding:0;background:#0a0f1e;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr><td style="background:linear-gradient(135deg,#1e40af,#3b82f6);padding:36px 40px;border-radius:16px 16px 0 0;text-align:center;">
            <p style="margin:0 0 8px;color:#93c5fd;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;">Portfolio</p>
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;">New Message Received 📬</h1>
            <p style="margin:10px 0 0;color:#bfdbfe;font-size:14px;">Someone reached out via your portfolio</p>
          </td></tr>

          <!-- Body -->
          <tr><td style="background:#0f172a;padding:36px 40px;">

            <!-- Sender Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:12px;padding:20px;margin-bottom:24px;">
              <tr>
                <td style="padding:8px 16px;">
                  <p style="margin:0;color:#64748b;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">From</p>
                  <p style="margin:4px 0 0;color:#f1f5f9;font-size:16px;font-weight:600;">${name}</p>
                </td>
              </tr>
              <tr><td style="padding:0 16px;"><div style="height:1px;background:#334155;margin:8px 0;"></div></td></tr>
              <tr>
                <td style="padding:8px 16px;">
                  <p style="margin:0;color:#64748b;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Email</p>
                  <a href="mailto:${email}" style="display:inline-block;margin:4px 0 0;color:#3b82f6;font-size:15px;text-decoration:none;">${email}</a>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <p style="margin:0 0 12px;color:#64748b;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Message</p>
            <div style="background:#1e293b;border-left:4px solid #3b82f6;border-radius:0 12px 12px 0;padding:20px 24px;margin-bottom:28px;">
              <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.8;">${message.replace(/\n/g, "<br/>")}</p>
            </div>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="mailto:${email}?subject=Re: Your message to Muhammad Roman" style="display:inline-block;background:linear-gradient(135deg,#1e40af,#3b82f6);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;">
                  Reply to ${name} →
                </a>
              </td></tr>
            </table>

          </td></tr>

          <!-- Footer -->
          <tr><td style="background:#080d1a;padding:20px 40px;border-radius:0 0 16px 16px;text-align:center;">
            <p style="margin:0;color:#334155;font-size:12px;">mromankhan.vercel.app · Portfolio Contact System</p>
          </td></tr>

        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
}

// ── Confirmation email to visitor (light mode) ────────────────────────────────
function confirmationEmail(name: string, message: string) {
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
  <body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr><td style="background:linear-gradient(135deg,#1e40af,#3b82f6);padding:40px;border-radius:16px 16px 0 0;text-align:center;">
            <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 16px;font-size:28px;line-height:64px;text-align:center;">✅</div>
            <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:700;">Message Received!</h1>
            <p style="margin:0;color:#bfdbfe;font-size:15px;">Thanks for reaching out, ${name} 👋</p>
          </td></tr>

          <!-- Body -->
          <tr><td style="background:#ffffff;padding:36px 40px;">

            <p style="margin:0 0 24px;color:#475569;font-size:15px;line-height:1.8;">
              Hey <strong style="color:#1e293b;">${name}</strong>, I've received your message and will get back to you as soon as possible — usually within <strong style="color:#2563eb;">24–48 hours</strong>.
            </p>

            <!-- Message recap -->
            <p style="margin:0 0 10px;color:#94a3b8;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Your Message</p>
            <div style="background:#f8fafc;border-left:4px solid #3b82f6;border-radius:0 10px 10px 0;padding:18px 22px;margin-bottom:28px;">
              <p style="margin:0;color:#64748b;font-size:14px;line-height:1.8;font-style:italic;">${message.replace(/\n/g, "<br/>")}</p>
            </div>

            <!-- Info cards -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td width="48%" style="background:#eff6ff;border:1px solid #dbeafe;border-radius:12px;padding:16px;text-align:center;">
                  <p style="margin:0;font-size:22px;">⚡</p>
                  <p style="margin:6px 0 0;color:#1e293b;font-size:13px;font-weight:600;">Fast Response</p>
                  <p style="margin:4px 0 0;color:#64748b;font-size:12px;">Within 24–48 hrs</p>
                </td>
                <td width="4%"></td>
                <td width="48%" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:16px;text-align:center;">
                  <p style="margin:0;font-size:22px;">🤝</p>
                  <p style="margin:6px 0 0;color:#1e293b;font-size:13px;font-weight:600;">Open to Work</p>
                  <p style="margin:4px 0 0;color:#64748b;font-size:12px;">Freelance & Full-time</p>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <div style="height:1px;background:#e2e8f0;margin-bottom:24px;"></div>

            <!-- Social links -->
            <p style="margin:0 0 12px;color:#94a3b8;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Connect with me</p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:10px;">
                  <a href="https://github.com/mromankhan" style="display:inline-block;background:#f1f5f9;border:1px solid #e2e8f0;color:#475569;text-decoration:none;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:500;">GitHub</a>
                </td>
                <td style="padding-right:10px;">
                  <a href="https://www.linkedin.com/in/mromankhan" style="display:inline-block;background:#f1f5f9;border:1px solid #e2e8f0;color:#475569;text-decoration:none;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:500;">LinkedIn</a>
                </td>
                <td>
                  <a href="https://mromankhan.vercel.app" style="display:inline-block;background:#eff6ff;border:1px solid #bfdbfe;color:#2563eb;text-decoration:none;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:500;">Portfolio</a>
                </td>
              </tr>
            </table>

          </td></tr>

          <!-- Footer -->
          <tr><td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;border-radius:0 0 16px 16px;text-align:center;">
            <p style="margin:0 0 4px;color:#1e40af;font-size:16px;font-weight:700;">Muhammad Roman</p>
            <p style="margin:0;color:#94a3b8;font-size:12px;">Full Stack Developer & Agentic AI Engineer · Karachi, Pakistan</p>
          </td></tr>

        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Send both emails in parallel
    await Promise.all([
      // 1. Notification to Roman
      transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `📬 New message from ${name} — Portfolio`,
        html: notificationEmail(name, email, message),
      }),
      // 2. Confirmation to visitor
      transporter.sendMail({
        from: `"Muhammad Roman" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Got your message, ${name}! ✅`,
        html: confirmationEmail(name, message),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
