import { NextResponse } from "next/server";

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

    // The submission is validated here. To deliver it, integrate an email or
    // CRM service (e.g. Resend, Postmark, a database, or a Slack webhook):
    //
    //   await resend.emails.send({ ... });
    //
    // For now we log on the server so the flow works end to end.
    console.log("New opportunity submission:", {
      name,
      email,
      phone: data.phone ?? "",
      type: data.type ?? "",
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
