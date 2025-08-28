import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Marissa Conter - Journalist Portfolio",
  description: "Digital portfolio of Marissa Conter, journalist based in Seattle",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/gonzaga-bulletin-logo.jpg" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
