import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NVTMRE",
    template: "%s | NVTMRE",
  },
  icons: {
    icon: "/logo_light.png",
  },
  description: "Welcome to my portfolio. I am a passionate web developer showcasing my projects, skills, and experience in modern web technologies.",
  keywords: [
    "web developer",
    "portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "frontend",
    "backend",
    "fullstack",
    "programmer",
    "software engineer",
    "projects",
    "modern web",
    "NVTMRE"
  ],
  authors: [{ name: "NVTMRE", url: "https://nvtmre.com" }],
  creator: "NVTMRE",
  openGraph: {
    title: "NVTMRE Portfolio",
    description: "Explore my web development projects, skills, and experience.",
    url: "https://nvtmre.com",
    siteName: "NVTMRE Portfolio",
    images: [
      {
        url: "https://nvtmre.com/logo_light.png",
        width: 1200,
        height: 630,
        alt: "NVTMRE Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
