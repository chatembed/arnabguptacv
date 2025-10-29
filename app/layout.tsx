import type React from "react"
import type { Metadata } from "next"
import { Raleway, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _raleway = Raleway({ subsets: ["latin"], variable: "--font-heading" })
const _nunito = Nunito({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: "Full Stack Gen AI Developer | MERN, Python, LangChain & AWS",
    template: '%s | Full Stack Gen AI Developer'
  },
  description: "Full Stack AI Developer specializing in MERN stack, Python, LangChain, and AWS. Building intelligent applications and end-to-end AI solutions.",
  keywords: ['Full Stack Developer', 'AI Developer', 'MERN Stack', 'Python', 'LangChain', 'AWS', 'Machine Learning', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Arnab Gupta' }],
  creator: 'Arnab Gupta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Full Stack Gen AI Developer | MERN, Python, LangChain & AWS',
    description: 'Full Stack AI Developer specializing in MERN stack, Python, LangChain, and AWS. Building intelligent applications and end-to-end AI solutions.',
    siteName: 'Arnab Gupta - Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Name - Full Stack Gen AI Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Gen AI Developer | MERN, Python, LangChain & AWS',
    description: 'Full Stack AI Developer specializing in MERN stack, Python, LangChain, and AWS. Building intelligent applications and end-to-end AI solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_raleway.variable} ${_nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
