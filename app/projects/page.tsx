import { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui/section'
import { ProjectCard } from '@/components/project-card'
import { FadeIn } from '@/components/animated'
import { projects, getProjectsByCategory } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of software engineering, industrial automation, and creative technology projects.',
}

const categories = [
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'Web applications, APIs, and developer tools.',
  },
  {
    id: 'industrial',
    title: 'Industrial Systems',
    description: 'SCADA dashboards, telemetry platforms, and automation interfaces.',
  },
  {
    id: 'creative',
    title: 'Creative Technology',
    description: 'Audio-visual experiments, generative art, and interactive installations.',
  },
  {
    id: 'experiments',
    title: 'Experiments',
    description: 'Side projects, prototypes, and explorations.',
  },
] as const

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-16">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl text-pretty">
            Things I&apos;ve built - from industrial control systems at my day job to 
            late-night creative coding experiments. Always looking for interesting 
            problems to solve.
          </p>
        </FadeIn>
      </Section>

      {/* All Projects */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Categories */}
      {categories.map((category) => {
        const categoryProjects = getProjectsByCategory(category.id)
        if (categoryProjects.length === 0) return null

        return (
          <Section key={category.id} id={category.id} className="border-t border-border">
            <SectionHeader title={category.title} description={category.description} />
            <div className="grid md:grid-cols-2 gap-4">
              {categoryProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </Section>
        )
      })}
    </>
  )
}
