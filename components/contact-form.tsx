"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/actions/email"

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatusMessage(null)
    setErrorMessage(null)
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await sendContactEmail(formData)
      setStatusMessage("Your message was sent successfully. I’ve received it and will reply as soon as possible.")
      form.reset()
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong while sending your message."
      setErrorMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      {statusMessage ? (
        <div className="rounded border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          {statusMessage}
        </div>
      ) : null}
      {errorMessage ? (
        <div className="rounded border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
          {errorMessage}
        </div>
      ) : null}

      <label className="grid gap-2 text-sm text-muted-foreground">
        Your name
        <input
          name="name"
          type="text"
          placeholder="Your name"
          className="w-full rounded border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-foreground"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted-foreground">
        Your email
        <input
          name="email"
          type="email"
          placeholder="email@example.com"
          className="w-full rounded border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-foreground"
          required
        />
      </label>
      <label className="grid gap-2 text-sm text-muted-foreground">
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full rounded border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-foreground"
          required
        />
      </label>
      <Button type="submit" disabled={isSubmitting} className="p-4">
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  )
}
