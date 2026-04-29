import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { LightRays } from "@/components/ui/light-rays";
import Footer from "@/components/footer";
import { Metadata } from "next";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    template: "NVTMRE | %s",
    default: "NVTMRE | Home"
  },
  icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <LightRays className="fixed inset-0 -z-10 overflow-hidden" color="oklch(0.432 0.232 292.759)" speed={10} count={8} length="35vh" />
          <Header />
          <div className="relative md:border-x md:mx-[18%] bg-background/75 backdrop-blur-md z-40 overflow-y-auto">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
