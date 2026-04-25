'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface Project {
  slug: string
  title: string
  description: string
  category: 'software' | 'industrial' | 'creative' | 'experiments'
  technologies: string[]
  featured?: boolean
  year?: string
  link?: string
  github?: string
  image?: string
}

interface ProjectCardProps {
  project: Project
  index?: number
  compact?: boolean
}

const categoryColors = {
  software: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  industrial: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  creative: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  experiments: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

const categoryLabels = {
  software: 'Software',
  industrial: 'Industrial',
  creative: 'Creative Tech',
  experiments: 'Experiments',
}

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          'group block rounded-lg border border-border bg-card overflow-hidden transition-all duration-300',
          'hover:border-primary/30 hover:bg-card/80',
        )}
      >
        {project.image && !compact && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          </div>
        )}
        
        <div className={cn(compact ? 'p-4' : 'p-6')}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <Badge
                  variant="outline"
                  className={cn('text-[10px] uppercase tracking-wider', categoryColors[project.category])}
                >
                  {categoryLabels[project.category]}
                </Badge>
                {project.year && (
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                )}
              </div>
              
              <h3 className={cn(
                'font-medium tracking-tight text-balance group-hover:text-primary transition-colors',
                compact ? 'text-base' : 'text-lg'
              )}>
                {project.title}
              </h3>
              
              <p className={cn(
                'mt-2 text-muted-foreground text-pretty line-clamp-2',
                compact ? 'text-sm' : 'text-sm'
              )}>
                {project.description}
              </p>
              
              {!compact && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <div className="shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

interface FeaturedProjectCardProps {
  project: Project
  index?: number
}

export function FeaturedProjectCard({ project, index = 0 }: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30"
      >
        <div className="flex flex-col md:flex-row">
          {project.image && (
            <div className="relative w-full md:w-80 aspect-video md:aspect-auto shrink-0 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
            </div>
          )}
          
          <div className="relative p-6 md:p-8 flex-1">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="outline"
                  className={cn('text-[10px] uppercase tracking-wider', categoryColors[project.category])}
                >
                  {categoryLabels[project.category]}
                </Badge>
                {project.year && (
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                )}
              </div>
              
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-balance group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="mt-3 text-muted-foreground text-pretty max-w-xl">
                {project.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-primary">
                <span>View project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
