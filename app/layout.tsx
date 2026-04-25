import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Rikki Noble | Software Engineer & Creative Technologist',
    template: '%s | Rikki Noble',
  },
  description:
    'Software Engineer and Creative Technologist from Aotearoa New Zealand. Building industrial systems, creative tools, interactive visuals, and whatever else keeps me curious.',
  keywords: [
    'software engineer',
    'creative technologist',
    'industrial automation',
    'music producer',
    'creative coding',
    'New Zealand',
  ],
  authors: [{ name: 'Rikki Noble' }],
  creator: 'Rikki Noble',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Rikki Noble',
    title: 'Rikki Noble | Software Engineer & Creative Technologist',
    description:
      'Building industrial systems, creative tools, interactive visuals, and whatever else keeps me curious.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rikki Noble | Software Engineer & Creative Technologist',
    description:
      'Building industrial systems, creative tools, interactive visuals, and whatever else keeps me curious.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
