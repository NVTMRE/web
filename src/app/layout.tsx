import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NVTMRE - Home",
    description: "My personal website check if you want read information about me ~ NVTMRE",
    icons: {
        icon: "/logo.png"
    },
    keywords: [
        "programmer",
        "code",
        "react",
        "next",
        "js",
        "tailwindcss",
        "website"
    ],
    openGraph: {
        siteName: "NVTMRE",
    }
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
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
          >
              <div className={'flex flex-col'}>
                  <Header/>
                  <div className={'w-screen px-[5rem]'}>
                      <div className={'min-h-[calc(100vh-3.5rem)] px-8 w-full border-x-1 border-dashed border-border'}>
                          {children}
                      </div>
                  </div>
              </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
