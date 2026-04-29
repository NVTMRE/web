import Link from "next/link"
import { Mail } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { SlSocialLinkedin } from "react-icons/sl"
import ContactForm from "@/components/contact-form"

const EMAIL = "nvtmre@gmail.com"
const GITHUB_URL = "https://github.com/nvtmre"
const LINKEDIN_URL = "https://linkedin.com/in/nvtmre"

export default function ContactPage() {
  return (
    <main className="grid [&>section]:border-b">
      <section className="p-8">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-green-500">Contact</p>
          <h1 className="text-4xl font-semibold">Have a project in mind? Let's talk.</h1>
          <p className="text-muted-foreground">
            Reach out by email or jump directly to GitHub and LinkedIn. I'm available for product work,
            collaborations and technical consulting.
          </p>
        </div>
      </section>

      <section className="p-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded border border-border bg-background/50 p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Email</p>
            <Link href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-green-500 transition-colors">
              <Mail size={18} className="inline-block" />
              {EMAIL}
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">GitHub</p>
            <Link href={GITHUB_URL} target="_blank" className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-green-500 transition-colors">
              <SiGithub />
              Github
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">LinkedIn</p>
            <Link href={LINKEDIN_URL} target="_blank" className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-green-500 transition-colors">
              <SlSocialLinkedin />
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="rounded border border-border bg-background/50 p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Optional contact form</p>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
