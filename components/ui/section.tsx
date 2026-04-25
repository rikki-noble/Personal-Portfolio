import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)}>
      <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted-foreground max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
