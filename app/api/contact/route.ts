import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Node runtime (nodemailer needs Node APIs, not the edge runtime).
export const runtime = "nodejs";

/**
 * Contact / lead delivery.
 *
 * Sends every form submission (homepage was removed; used by /investors and
 * /careers) to your inbox over SMTP. Configure these environment variables
 * (Vercel → Project → Settings → Environment Variables, and a local
 * .env.local). See .env.example.
 *
 *   SMTP_HOST       e.g. smtp.gmail.com  /  smtp.office365.com
 *   SMTP_PORT       587 (STARTTLS) or 465 (SSL)        — default 587
 *   SMTP_SECURE     "true" for port 465, otherwise omit
 *   SMTP_USER       the mailbox login
 *   SMTP_PASS       an app password (NOT your normal password)
 *   CONTACT_TO      where leads are delivered           — default jw@capitalwayne.com
 *   CONTACT_FROM    the From address                    — default = SMTP_USER
 *
 * Until SMTP_* are set, submissions are validated and logged on the server
 * (the form still succeeds) — so nothing breaks before you add the secret.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const phone = data.phone ?? "";
    const type = data.type ?? "";
    const source = data.source ?? "website";
    const role = data.role ?? "";
    const receivedAt = new Date().toISOString();

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
    const to = process.env.CONTACT_TO || "jw@capitalwayne.com";
    const from = process.env.CONTACT_FROM || SMTP_USER;

    const lines = [
      `Name:    ${name}`,
      `Email:   ${email}`,
      phone ? `Phone:   ${phone}` : null,
      type ? `Type:    ${type}` : null,
      role ? `Role:    ${role}` : null,
      `Source:  ${source}`,
      `When:    ${receivedAt}`,
      "",
      "Message:",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        const port = Number(SMTP_PORT) || 587;
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port,
          secure: SMTP_SECURE === "true" || port === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        await transporter.sendMail({
          from: `"Wayne Capital — Website" <${from}>`,
          to,
          replyTo: email,
          subject: `New ${source} submission${type ? ` · ${type}` : ""} — ${name}`,
          text: lines,
        });

        return NextResponse.json({ ok: true });
      } catch (err) {
        // Don't lose the lead or surface a confusing error to the visitor:
        // log loudly so it's diagnosable, and still acknowledge the submission.
        console.error("Contact email send FAILED:", err);
        console.log("Submission (email not delivered):", lines);
        return NextResponse.json({ ok: true });
      }
    }

    // SMTP not configured yet — log so the lead isn't lost.
    console.warn(
      "SMTP_* env vars not set — email NOT sent. Submission logged below."
    );
    console.log("New submission:", lines);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
