import Link from "next/link"
import { Mail } from "lucide-react"
import Logo from "@/components/logo"
import { SiGithub } from "react-icons/si"
import { SlSocialLinkedin } from "react-icons/sl"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="md:max-w-screen-xl md:mx-auto px-4 md:px-[5%] py-12">
        <div className="grid gap-8 md:grid-cols-[1.8fr_1.2fr] items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Logo size={48} />
              <div>
                <p className="text-lg font-semibold tracking-[0.08em]">NVTMRE</p>
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Web / Desktop / Automation</p>
              </div>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              Clean interfaces, performant apps and real deployment-ready solutions — all built with modern web and desktop tooling.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium">Connect</h4>
              <div className="mt-4 grid gap-3 text-sm">
                <Link href={"mailto:nvtmre@gmail.com"} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} />
                  nvtmre@gmail.com
                </Link>
                <Link href={"https://github.com/nvtmre"} target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <SiGithub size={16} />
                  GitHub
                </Link>
                <Link href={"https://www.linkedin.com/in/ksawier-malkiewicz-6704a6189"} target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <SlSocialLinkedin size={16} />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NVTMRE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}