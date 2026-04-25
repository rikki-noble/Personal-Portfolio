import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Target, Sparkles, Music, Code, Cpu } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/animated'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Software Engineer and Creative Technologist from Aotearoa New Zealand.',
}

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

const experience = [
  {
    role: 'Software Engineer',
    company: 'Industrial Systems Co.',
    period: '2023 - Present',
    description:
      'Building monitoring and control systems for manufacturing environments. Focus on real-time data visualization, SCADA interfaces, and system integration.',
  },
  {
    role: 'Graduate Developer',
    company: 'Tech Startup',
    period: '2022 - 2023',
    description:
      'Full-stack development on web applications. Learned fast, shipped features, and discovered my passion for creative coding on the side.',
  },
  {
    role: 'Freelance Creative Tech',
    company: 'Self-employed',
    period: '2021 - Present',
    description:
      'Audio-visual experiments, generative art commissions, and creative tooling for artists and musicians.',
  },
]

const skills = {
  'Languages': ['TypeScript', 'Python', 'SQL', 'Rust (learning)'],
  'Frontend': ['React', 'Next.js', 'WebGL', 'Canvas'],
  'Industrial': ['Ignition', 'OPC-UA', 'Modbus', 'PLCs'],
  'Audio/Visual': ['Ableton', 'Max/MSP', 'TouchDesigner', 'p5.js'],
  'Infrastructure': ['Docker', 'PostgreSQL', 'Linux', 'Git'],
}

const goals = [
  {
    icon: Code,
    title: 'Ship 3 open source projects',
    description: 'Contribute meaningful tools to the creative coding community.',
    progress: 33,
  },
  {
    icon: Music,
    title: 'Release an EP',
    description: 'Finish and release a cohesive body of work by end of year.',
    progress: 60,
  },
  {
    icon: Cpu,
    title: 'Learn Rust properly',
    description: 'Build something real with it - thinking audio DSP or a CLI tool.',
    progress: 20,
  },
  {
    icon: Sparkles,
    title: 'Live AV performance',
    description: 'Perform a live audio-visual set at a local venue or event.',
    progress: 10,
  },
]

const interests = [
  'Creative coding & generative art',
  'Electronic music production',
  'Industrial automation systems',
  'Audio-visual experimentation',
  'Open source software',
  'Mechanical keyboards',
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-8">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">About</h1>
        </FadeIn>
      </Section>

      {/* Bio with Photo */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <FadeIn>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-foreground text-xl font-medium">
                  I&apos;m a 22-year-old Software Engineer and Creative Technologist 
                  based in Christchurch, Aotearoa New Zealand.
                </p>
                
                <p>
                  I recently graduated and have been working in industrial automation, 
                  building monitoring systems and dashboards for manufacturing environments. 
                  It&apos;s surprisingly satisfying work - there&apos;s something cool about 
                  seeing physical machines respond to code you&apos;ve written.
                </p>
                
                <p>
                  Outside of work, I make electronic music and experiment with audio-visual 
                  tools. I&apos;m obsessed with generative systems - software that creates 
                  something different each time it runs. There&apos;s a lot of overlap 
                  between industrial control systems and creative coding when you think 
                  about it: both are about feedback loops, real-time performance, and 
                  making complex processes visible.
                </p>
                
                <p>
                  I&apos;m still figuring out exactly where I want to focus, but I know 
                  I want to work at the intersection of technology and creativity. 
                  Whether that&apos;s building tools for other artists, creating 
                  immersive experiences, or just making weird stuff that makes people 
                  go &quot;huh, that&apos;s cool&quot; - I&apos;m here for it.
                </p>
              </div>
            </FadeIn>
            
            {/* Photo Grid */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop"
                    alt="Workspace setup"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&h=450&fit=crop"
                    alt="Music production"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Rikki Noble"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Location
                </h2>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>Christchurch, New Zealand</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  Connect
                </h2>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Personal Goals */}
      <Section className="border-t border-border">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-medium tracking-tight">2024 Goals</h2>
          </div>
        </FadeIn>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <FadeIn key={goal.title} delay={index * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <goal.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-medium">{goal.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section className="border-t border-border">
        <FadeIn>
          <h2 className="text-xl font-medium tracking-tight mb-8">Experience</h2>
        </FadeIn>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <FadeIn key={job.role} delay={index * 0.1}>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-medium">{job.role}</h3>
                  <p className="text-muted-foreground text-sm">{job.company}</p>
                  <p className="mt-2 text-muted-foreground text-pretty">
                    {job.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section className="border-t border-border">
        <FadeIn>
          <h2 className="text-xl font-medium tracking-tight mb-8">Skills & Tools</h2>
        </FadeIn>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <FadeIn key={category} delay={index * 0.1}>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  {category}
                </h3>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Interests */}
      <Section className="border-t border-border">
        <FadeIn>
          <h2 className="text-xl font-medium tracking-tight mb-8">Currently Into</h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span 
                key={interest} 
                className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-primary/30 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Contact CTA */}
      <Section className="border-t border-border">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium tracking-tight">Let&apos;s chat</h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              I&apos;m always down to talk about creative coding, music production, 
              interesting projects, or just share cool things we&apos;ve found on the internet. 
              Don&apos;t be a stranger.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@rikkinoble.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@rikkinoble.com
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
