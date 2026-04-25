import { type Project } from '@/components/project-card'

export const projects: Project[] = [
  {
    slug: 'industrial-telemetry-platform',
    title: 'Industrial Telemetry Platform',
    description:
      'Real-time monitoring and analytics platform for industrial equipment. Built with Ignition Perspective, OPC-UA, and custom historian integrations for a large-scale manufacturing environment.',
    category: 'industrial',
    technologies: ['Ignition', 'OPC-UA', 'SQL Server', 'Python', 'React'],
    featured: true,
    year: '2024',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
  },
  {
    slug: 'midi-visualizer',
    title: 'MIDI Visualizer',
    description:
      'Real-time audio-reactive visual system that responds to MIDI input. Creates generative visuals synced to music for live performances and studio sessions.',
    category: 'creative',
    technologies: ['TypeScript', 'WebGL', 'Web MIDI API', 'Canvas'],
    featured: true,
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
  },
  {
    slug: 'scada-dashboard-framework',
    title: 'SCADA Dashboard Framework',
    description:
      'Reusable component library and design system for industrial HMI dashboards. Standardized visualization patterns for process control and monitoring.',
    category: 'industrial',
    technologies: ['Ignition Perspective', 'Python', 'CSS', 'SVG'],
    featured: true,
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    slug: 'electron-wallpaper-engine',
    title: 'Dynamic Wallpaper Engine',
    description:
      'Cross-platform desktop application that renders interactive, audio-reactive wallpapers. Supports WebGL shaders and real-time audio analysis.',
    category: 'creative',
    technologies: ['Electron', 'TypeScript', 'WebGL', 'Web Audio API'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop',
  },
  {
    slug: 'youtube-analytics-dashboard',
    title: 'YouTube Analytics Dashboard',
    description:
      'Custom analytics platform for tracking channel performance, audience insights, and content optimization metrics across multiple YouTube channels.',
    category: 'software',
    technologies: ['Next.js', 'TypeScript', 'YouTube API', 'Charts'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
  },
  {
    slug: 'opc-ua-historian-bridge',
    title: 'OPC-UA Historian Bridge',
    description:
      'Custom integration layer connecting OPC-UA servers to SQL-based historian databases with configurable data aggregation and retention policies.',
    category: 'industrial',
    technologies: ['Python', 'OPC-UA', 'SQL Server', 'Docker'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
  },
  {
    slug: 'generative-art-system',
    title: 'Generative Art System',
    description:
      'Algorithmic art generation framework exploring mathematical patterns, noise fields, and emergent behaviors. Outputs high-resolution prints and animations.',
    category: 'experiments',
    technologies: ['p5.js', 'TypeScript', 'Canvas', 'SVG'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c3d?w=800&h=500&fit=crop',
  },
  {
    slug: 'ai-assisted-code-review',
    title: 'AI-Assisted Code Review Tool',
    description:
      'Internal tooling that leverages LLMs to provide automated code review suggestions, documentation generation, and refactoring recommendations.',
    category: 'software',
    technologies: ['Python', 'OpenAI API', 'Git', 'CLI'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category)
}
