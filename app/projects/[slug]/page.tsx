import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animated'
import { projects, getProjectBySlug } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const categoryColors = {
  software: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  industrial: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  creative: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  experiments: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

const categoryLabels = {
  software: 'Software Engineering',
  industrial: 'Industrial Systems',
  creative: 'Creative Technology',
  experiments: 'Experiments',
}

// Extended project details (in a real app, this would come from MDX or a CMS)
const projectDetails: Record<string, {
  overview: string
  challenges: string[]
  outcomes: string[]
  architecture?: string
}> = {
  'industrial-telemetry-platform': {
    overview: `This platform serves as the central monitoring hub for a large-scale manufacturing facility, 
    processing thousands of data points per second from PLCs, sensors, and industrial equipment. 
    The system provides real-time visualization, historical analysis, and automated alerting capabilities.`,
    challenges: [
      'Handling high-frequency data from multiple OPC-UA servers with minimal latency',
      'Designing intuitive dashboards for operators with varying technical backgrounds',
      'Ensuring system reliability in a 24/7 production environment',
      'Integrating with legacy equipment using proprietary protocols',
    ],
    outcomes: [
      'Reduced mean time to detect equipment issues by 60%',
      'Enabled data-driven maintenance scheduling',
      'Standardized visualization patterns across the organization',
      'Achieved 99.9% uptime over 18 months of operation',
    ],
    architecture: 'Ignition Gateway → OPC-UA Servers → SQL Server Historian → React Dashboard',
  },
  'midi-visualizer': {
    overview: `A real-time visual system that creates generative graphics synchronized to MIDI input. 
    Built for live performances, it transforms musical performances into immersive visual experiences.`,
    challenges: [
      'Achieving sub-10ms latency between MIDI input and visual response',
      'Designing a flexible parameter mapping system for different visual modes',
      'Optimizing WebGL rendering for consistent 60fps performance',
      'Creating visuals that enhance rather than distract from the music',
    ],
    outcomes: [
      'Successfully used in multiple live performances',
      'Open-sourced with active community contributions',
      'Featured in creative coding showcases',
    ],
  },
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const details = projectDetails[slug]

  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-8">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="outline"
              className={cn('text-[10px] uppercase tracking-wider', categoryColors[project.category])}
            >
              {categoryLabels[project.category]}
            </Badge>
            {project.year && (
              <span className="text-sm text-muted-foreground">{project.year}</span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance">
            {project.title}
          </h1>
          
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl text-pretty">
            {project.description}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                View source
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live demo
              </a>
            )}
          </div>
        </FadeIn>
      </Section>

      {/* Project Image Placeholder */}
      <Section className="pt-0 pb-8">
        <FadeIn delay={0.1}>
          <div className="aspect-video rounded-xl bg-muted border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Project Screenshot</span>
          </div>
        </FadeIn>
      </Section>

      {/* Project Details */}
      {details && (
        <>
          {/* Overview */}
          <Section className="pt-8">
            <FadeIn>
              <h2 className="text-xl font-medium tracking-tight mb-4">Overview</h2>
              <p className="text-muted-foreground max-w-3xl text-pretty leading-relaxed">
                {details.overview}
              </p>
            </FadeIn>
          </Section>

          {/* Architecture */}
          {details.architecture && (
            <Section className="pt-8">
              <FadeIn>
                <h2 className="text-xl font-medium tracking-tight mb-4">Architecture</h2>
                <div className="inline-block px-4 py-3 rounded-lg bg-muted font-mono text-sm">
                  {details.architecture}
                </div>
              </FadeIn>
            </Section>
          )}

          {/* Challenges */}
          <Section className="pt-8">
            <FadeIn>
              <h2 className="text-xl font-medium tracking-tight mb-4">Technical Challenges</h2>
              <ul className="space-y-3">
                {details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                    <span className="text-pretty">{challenge}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </Section>

          {/* Outcomes */}
          <Section className="pt-8 pb-16">
            <FadeIn>
              <h2 className="text-xl font-medium tracking-tight mb-4">Outcomes</h2>
              <ul className="space-y-2">
                {details.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="shrink-0 text-primary">•</span>
                    <span className="text-pretty">{outcome}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </Section>
        </>
      )}

      {/* Navigation */}
      <Section className="border-t border-border">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </FadeIn>
      </Section>
    </>
  )
}
