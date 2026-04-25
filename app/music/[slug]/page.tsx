import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Play } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animated'
import { releases } from '@/lib/data/music'

interface ReleasePageProps {
  params: Promise<{ slug: string }>
}

function getReleaseBySlug(slug: string) {
  return releases.find((r) => r.slug === slug)
}

export async function generateMetadata({
  params,
}: ReleasePageProps): Promise<Metadata> {
  const { slug } = await params
  const release = getReleaseBySlug(slug)

  if (!release) {
    return { title: 'Release Not Found' }
  }

  return {
    title: release.title,
    description: release.description,
  }
}

export function generateStaticParams() {
  return releases.map((release) => ({
    slug: release.slug,
  }))
}

const releaseTypeLabels = {
  single: 'Single',
  ep: 'EP',
  album: 'Album',
  remix: 'Remix',
}

export default async function ReleasePage({ params }: ReleasePageProps) {
  const { slug } = await params
  const release = getReleaseBySlug(slug)

  if (!release) {
    notFound()
  }

  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-8">
        <FadeIn>
          <Link
            href="/music"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to music
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
              {releaseTypeLabels[release.type]}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(release.releaseDate).toLocaleDateString('en-NZ', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            {release.title}
          </h1>
          
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl text-pretty">
            {release.description}
          </p>
        </FadeIn>
      </Section>

      {/* Artwork Placeholder */}
      <Section className="pt-0 pb-8">
        <FadeIn delay={0.1}>
          <div className="aspect-square max-w-md rounded-xl bg-muted border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Album Artwork</span>
          </div>
        </FadeIn>
      </Section>

      {/* Tracklist */}
      {release.tracks && (
        <Section className="pt-8">
          <FadeIn>
            <h2 className="text-xl font-medium tracking-tight mb-6">Tracklist</h2>
            <div className="space-y-2">
              {release.tracks.map((track, index) => (
                <div
                  key={track}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:hidden">{index + 1}</span>
                  </span>
                  <span className="font-medium">{track}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>
      )}

      {/* Streaming Links */}
      {release.links && (
        <Section className="pt-8">
          <FadeIn>
            <h2 className="text-xl font-medium tracking-tight mb-6">Listen</h2>
            <div className="flex flex-wrap gap-4">
              {release.links.spotify && (
                <a
                  href={release.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1DB954] text-white hover:bg-[#1DB954]/90 transition-colors text-sm font-medium"
                >
                  Spotify
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {release.links.soundcloud && (
                <a
                  href={release.links.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF5500] text-white hover:bg-[#FF5500]/90 transition-colors text-sm font-medium"
                >
                  SoundCloud
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {release.links.bandcamp && (
                <a
                  href={release.links.bandcamp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#629aa9] text-white hover:bg-[#629aa9]/90 transition-colors text-sm font-medium"
                >
                  Bandcamp
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {release.links.apple && (
                <a
                  href={release.links.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium"
                >
                  Apple Music
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </FadeIn>
        </Section>
      )}

      {/* Navigation */}
      <Section className="border-t border-border">
        <FadeIn>
          <Link
            href="/music"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all music
          </Link>
        </FadeIn>
      </Section>
    </>
  )
}
