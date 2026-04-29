"use server"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name")?.toString().trim() || "Anonymous"
  const email = formData.get("email")?.toString().trim()
  const message = formData.get("message")?.toString().trim()

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL
  const RESEND_OWNER_EMAIL = process.env.RESEND_OWNER_EMAIL

  if (!email || !message) {
    throw new Error("Email and message are required.")
  }

  if (!RESEND_API_KEY) {
    throw new Error("Resend API key is not configured.")
  }

  if (!RESEND_FROM_EMAIL) {
    throw new Error("Resend sender email is not configured.")
  }

  if (!RESEND_OWNER_EMAIL) {
    throw new Error("Resend owner email is not configured.")
  }

  const ownerHtml = `
    <div style="font-family:system-ui, sans-serif; color:#111; line-height:1.6; padding:24px;">
      <header style="margin-bottom:24px;">
        <p style="color:#0f766e; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.18em;">New contact request</p>
        <h1 style="margin:0; font-size:1.8rem; color:#111;">You received a new message</h1>
      </header>
      <section style="background:#f8fafc; border-radius:16px; padding:20px;">
        <p style="margin:0 0 12px;"><strong>Name:</strong> ${name}</p>
        <p style="margin:0 0 12px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#0f766e; text-decoration:none;">${email}</a></p>
        <p style="margin:0 0 12px;"><strong>Message:</strong></p>
        <div style="color:#334155; white-space:pre-wrap;">${message.replace(/\n/g, "<br />")}</div>
      </section>
      <footer style="margin-top:24px; font-size:0.95rem; color:#64748b;">
        <p>Reply directly to the sender by using the reply function.</p>
      </footer>
    </div>
  `

  const clientHtml = `
    <div style="font-family:system-ui, sans-serif; color:#111; line-height:1.6; padding:24px;">
      <header style="margin-bottom:24px;">
        <p style="color:#0f766e; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.18em;">Message received</p>
        <h1 style="margin:0; font-size:1.8rem; color:#111;">Thanks for reaching out!</h1>
      </header>
      <section style="background:#f8fafc; border-radius:16px; padding:20px;">
        <p style="margin:0 0 12px;">Hi ${name},</p>
        <p style="margin:0 0 12px;">I received your message and will get back to you as soon as possible.</p>
        <p style="margin:0 0 12px;"><strong>Your message:</strong></p>
        <div style="color:#334155; white-space:pre-wrap;">${message.replace(/\n/g, "<br />")}</div>
      </section>
      <footer style="margin-top:24px; font-size:0.95rem; color:#64748b;">
        <p>If you need to update your message, just reply to this email.</p>
      </footer>
    </div>
  `

  async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
    const payload: Record<string, any> = {
      from: RESEND_FROM_EMAIL,
      to: [to],
      subject,
      html,
    }

    if (replyTo) {
      payload.reply_to = replyTo
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const body = await response.text().catch(() => "")
      throw new Error(`Resend send failed: ${response.status} ${response.statusText} ${body}`)
    }
  }

  try {
    await sendEmail(RESEND_OWNER_EMAIL, `New website message from ${name}`, ownerHtml, email)
    await sendEmail(email, "Thanks for your message", clientHtml)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error("Unexpected error while sending email.")
  }
}
