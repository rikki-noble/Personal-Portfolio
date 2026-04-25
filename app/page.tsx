import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Play, Music } from 'lucide-react'
import { Hero } from '@/components/hero'
import { Section, SectionHeader } from '@/components/ui/section'
import { FeaturedProjectCard, ProjectCard } from '@/components/project-card'
import { SongOfTheWeek, CurrentlyWorkingOn } from '@/components/now-playing'
import { FadeIn } from '@/components/animated'
import { featuredProjects, projects } from '@/lib/data/projects'
import { songOfTheWeek, releases } from '@/lib/data/music'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <Section id="projects">
        <SectionHeader
          title="Featured Projects"
          description="A mix of professional work and personal experiments."
        />
        
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        
        <FadeIn delay={0.3}>
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* Currently Working On & Song of the Week */}
      <Section className="bg-card/50">
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn>
            <CurrentlyWorkingOn
              title="Generative Visual System"
              description="Building a real-time visual engine that responds to audio input. Exploring WebGL shaders and audio analysis for live performances."
              type="project"
            />
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <SongOfTheWeek {...songOfTheWeek} />
          </FadeIn>
        </div>
      </Section>

      {/* Visual Gallery Teaser */}
      <Section>
        <SectionHeader
          title="Recent Work"
          description="Snapshots from recent projects and experiments."
        />
        
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
                alt="Project visual - audio waveforms"
                width={400}
                height={400}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-border overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop"
                alt="Project visual - tech setup"
                width={400}
                height={400}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-border overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
                alt="Project visual - code on screen"
                width={400}
                height={400}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-border overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop"
                alt="Project visual - studio equipment"
                width={400}
                height={400}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </FadeIn>
        
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Latest Music */}
      <Section className="border-t border-border">
        <SectionHeader
          title="Latest Release"
          description="Music production and sound experiments."
        />
        
        <FadeIn>
          <Link
            href={`/music/${releases[0].slug}`}
            className="group block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-64 aspect-square md:aspect-auto shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1571974599782-87624638275e?w=500&h=500&fit=crop"
                  alt={releases[0].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:block hidden" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <Music className="w-3 h-3" />
                  {releases[0].type} · {new Date(releases[0].releaseDate).toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' })}
                </span>
                <h3 className="mt-2 text-xl md:text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">
                  {releases[0].title}
                </h3>
                <p className="mt-2 text-muted-foreground max-w-md text-pretty">
                  {releases[0].description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <span>Listen now</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="mt-6">
            <Link
              href="/music"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              All music
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* Contact CTA */}
      <Section className="border-t border-border">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Let&apos;s connect
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              I&apos;m always open to interesting conversations and collaborations, 
              whether it&apos;s a creative project, technical challenge, or just 
              geeking out about music production and code.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <a
                href="mailto:hello@rikkinoble.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get in touch
              </a>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                More about me
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
