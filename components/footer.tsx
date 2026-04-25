import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://github.com/rikkinoble',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/rikkinoble',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:hello@rikkinoble.com',
    label: 'Email',
    icon: Mail,
  },
]

const footerLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/music', label: 'Music' },
  { href: '/about', label: 'About' },
]

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left side */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-lg font-medium tracking-tight hover:text-primary transition-colors"
            >
              rikki.
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Software Engineer & Creative Technologist based in Aotearoa New Zealand.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Rikki Noble. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  )
}
