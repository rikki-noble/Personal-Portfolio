import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, MapPin, ExternalLink, Play } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { SongOfTheWeek } from '@/components/now-playing'
import { FadeIn } from '@/components/animated'
import { releases, gear, songOfTheWeek, upcomingGigs, pastGigs } from '@/lib/data/music'

export const metadata: Metadata = {
  title: 'Music',
  description:
    'Music production, releases, and live performances. Exploring electronic music, ambient textures, and audio-visual experiments.',
}

const releaseTypeLabels = {
  single: 'Single',
  ep: 'EP',
  album: 'Album',
  remix: 'Remix',
}

export default function MusicPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-16">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Music</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl text-pretty">
            Electronic music production, ambient soundscapes, and audio-visual experiments. 
            Making sounds that feel like late nights and early mornings.
          </p>
        </FadeIn>
      </Section>

      {/* Song of the Week */}
      <Section className="pt-0 pb-8">
        <div className="max-w-md">
          <FadeIn>
            <SongOfTheWeek {...songOfTheWeek} />
          </FadeIn>
        </div>
      </Section>

      {/* Releases */}
      <Section>
        <SectionHeader
          title="Releases"
          description="Original productions and experiments."
        />
        
        <div className="space-y-6">
          {releases.map((release, index) => (
            <FadeIn key={release.slug} delay={index * 0.1}>
              <Link
                href={`/music/${release.slug}`}
                className="group block rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex flex-col md:flex-row">
                  {release.image && (
                    <div className="relative w-full md:w-48 aspect-square md:aspect-auto shrink-0">
                      <Image
                        src={release.image}
                        alt={release.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                          <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                        {releaseTypeLabels[release.type]}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(release.releaseDate).toLocaleDateString('en-NZ', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                      {release.title}
                    </h3>
                    
                    <p className="mt-2 text-muted-foreground text-pretty">
                      {release.description}
                    </p>
                    
                    {release.tracks && (
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        {release.tracks.map((track, i) => (
                          <span key={track}>
                            {i + 1}. {track}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <span>Listen</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Upcoming Shows */}
      {upcomingGigs.length > 0 && (
        <Section className="border-t border-border">
          <SectionHeader
            title="Upcoming"
            description="Live performances and DJ sets."
          />
          
          <div className="space-y-4">
            {upcomingGigs.map((gig, index) => (
              <FadeIn key={`${gig.date}-${gig.venue}`} delay={index * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl border border-primary/30 bg-primary/5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">
                        {new Date(gig.date).toLocaleDateString('en-NZ', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight">{gig.venue}</h3>
                    <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span className="text-sm">{gig.city}</span>
                    </div>
                    {gig.description && (
                      <p className="mt-2 text-sm text-muted-foreground">{gig.description}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      {/* Past Shows */}
      {pastGigs.length > 0 && (
        <Section className="border-t border-border">
          <SectionHeader title="Past Shows" />
          
          <div className="grid sm:grid-cols-2 gap-4">
            {pastGigs.map((gig, index) => (
              <FadeIn key={`${gig.date}-${gig.venue}`} delay={index * 0.1}>
                <div className="p-4 rounded-lg border border-border bg-card/50">
                  <span className="text-xs text-muted-foreground">
                    {new Date(gig.date).toLocaleDateString('en-NZ', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <h4 className="font-medium mt-1">{gig.venue}</h4>
                  <span className="text-sm text-muted-foreground">{gig.city}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      {/* Gear & Software */}
      <Section className="border-t border-border">
        <SectionHeader
          title="Studio Setup"
          description="Hardware and software used for production and performance."
        />
        
        <FadeIn>
          <div className="relative rounded-xl overflow-hidden mb-8 aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1200&h=500&fit=crop"
              alt="Studio setup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Hardware
              </h3>
              <ul className="space-y-2">
                {gear.hardware.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Software
              </h3>
              <ul className="space-y-2">
                {gear.software.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Visual Tools
              </h3>
              <ul className="space-y-2">
                {gear.tools.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Links */}
      <Section className="border-t border-border">
        <FadeIn>
          <h2 className="text-xl font-medium tracking-tight mb-6">Listen & Follow</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'SoundCloud', href: '#' },
              { label: 'Bandcamp', href: '#' },
              { label: 'Spotify', href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
