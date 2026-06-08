import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs Node APIs — pin this route to the Node.js runtime (not edge).
export const runtime = "nodejs";

/**
 * Lead delivery for every form (/investors, /careers).
 *
 * Sends each validated submission to jw@capitalwayne.com over our own Google
 * Workspace mailbox via Gmail SMTP — no third-party service.
 *
 * The ONLY secret is the Gmail app password, read from GMAIL_APP_PASSWORD.
 * Add it in Vercel → Settings → Environment Variables (Production):
 *   GMAIL_APP_PASSWORD = <the 16-char Google app password for jw@capitalwayne.com>
 *
 * Fail-safe: if the password is missing or the send fails, we log server-side
 * and STILL return success so the visitor's on-page success state shows and a
 * lead is never lost on screen. The route never crashes on submit.
 */

const MAILBOX = "jw@capitalwayne.com";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data ?? {};

    // Existing validation — unchanged.
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const source = data.source || "Website";
    const phone = data.phone ?? "";
    const type = data.type ?? "";
    const role = data.role ?? "";
    const receivedAt = new Date().toISOString();

    const subject = `New ${source} lead — ${name}`;
    const body = [
      `Source:  ${source}`,
      `Name:    ${name}`,
      `Email:   ${email}`,
      phone ? `Phone:   ${phone}` : null,
      type ? `Type:    ${type}` : null,
      role ? `Role:    ${role}` : null,
      `When:    ${receivedAt}`,
      "",
      "Message:",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const pass = process.env.GMAIL_APP_PASSWORD;

    if (pass) {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: { user: MAILBOX, pass },
        });

        await transporter.sendMail({
          from: `"Wayne Capital — Website" <${MAILBOX}>`,
          to: MAILBOX,
          replyTo: email,
          subject,
          text: body,
        });
      } catch (err) {
        // Never crash the submit; log loudly so it's diagnosable.
        console.error("Lead email send FAILED:", err);
        console.log("Lead (not delivered):\n" + body);
      }
    } else {
      console.warn(
        "GMAIL_APP_PASSWORD not set — email NOT sent. Lead logged below."
      );
      console.log("Lead:\n" + body);
    }

    // Always acknowledge — keep the on-page success state.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
