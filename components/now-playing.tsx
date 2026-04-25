'use client'

import { motion } from 'framer-motion'
import { Music, Disc3 } from 'lucide-react'

interface SongOfTheWeekProps {
  title: string
  artist: string
  album?: string
  note?: string
}

export function SongOfTheWeek({ title, artist, album, note }: SongOfTheWeekProps) {
  return (
    <div className="relative rounded-xl border border-border bg-card p-6 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="relative flex items-start gap-4">
        <div className="shrink-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 rounded-full bg-muted flex items-center justify-center"
          >
            <Disc3 className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Music className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Song of the Week
            </span>
          </div>
          
          <h4 className="font-medium tracking-tight truncate">{title}</h4>
          <p className="text-sm text-muted-foreground truncate">{artist}</p>
          {album && (
            <p className="text-xs text-muted-foreground/70 truncate mt-1">{album}</p>
          )}
          
          {note && (
            <p className="mt-3 text-sm text-muted-foreground text-pretty italic">
              &ldquo;{note}&rdquo;
            </p>
          )}
        </div>
      </div>
      
      {/* Sound wave animation */}
      <div className="absolute bottom-4 right-4 flex items-end gap-0.5 h-4">
        {[0.3, 0.5, 0.7, 0.4, 0.6].map((height, i) => (
          <motion.div
            key={i}
            className="w-0.5 bg-primary/40 rounded-full"
            animate={{
              height: ['30%', `${height * 100}%`, '30%'],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

interface CurrentlyWorkingOnProps {
  title: string
  description: string
  type: 'project' | 'music' | 'learning' | 'other'
}

export function CurrentlyWorkingOn({ title, description, type }: CurrentlyWorkingOnProps) {
  const typeColors = {
    project: 'bg-blue-500/10 border-blue-500/20',
    music: 'bg-purple-500/10 border-purple-500/20',
    learning: 'bg-amber-500/10 border-amber-500/20',
    other: 'bg-muted',
  }

  const typeLabels = {
    project: 'Project',
    music: 'Music',
    learning: 'Learning',
    other: 'Other',
  }

  return (
    <div className={`rounded-xl border p-6 ${typeColors[type]}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Currently {typeLabels[type]}
        </span>
      </div>
      
      <h4 className="font-medium tracking-tight">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground text-pretty">{description}</p>
    </div>
  )
}
