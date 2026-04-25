export interface Release {
  slug: string
  title: string
  type: 'single' | 'ep' | 'album' | 'remix'
  releaseDate: string
  description: string
  tracks?: string[]
  image?: string
  links?: {
    spotify?: string
    soundcloud?: string
    bandcamp?: string
    apple?: string
  }
}

export interface Gig {
  date: string
  venue: string
  city: string
  description?: string
  upcoming: boolean
}

export const releases: Release[] = [
  {
    slug: 'distant-signals',
    title: 'Distant Signals',
    type: 'ep',
    releaseDate: '2024-02-15',
    description:
      'Four-track EP exploring themes of isolation and connection through ambient textures and glitchy percussion.',
    tracks: ['Static', 'Wavelength', 'Distant Signals', 'Return'],
    image: 'https://images.unsplash.com/photo-1571974599782-87624638275e?w=500&h=500&fit=crop',
    links: {
      spotify: '#',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    slug: 'late-night-processing',
    title: 'Late Night Processing',
    type: 'single',
    releaseDate: '2023-11-20',
    description:
      'A contemplative piece built around field recordings and granular synthesis.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    links: {
      soundcloud: '#',
    },
  },
  {
    slug: 'system-states',
    title: 'System States',
    type: 'ep',
    releaseDate: '2023-06-10',
    description:
      'Exploring the intersection of industrial sounds and electronic music. Inspired by factory environments and automated systems.',
    tracks: ['Boot Sequence', 'Steady State', 'Error Handling', 'Shutdown'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=500&fit=crop',
    links: {
      spotify: '#',
      bandcamp: '#',
    },
  },
]

export const gigs: Gig[] = [
  {
    date: '2024-04-20',
    venue: 'The Wunderbar',
    city: 'Lyttelton',
    description: 'Live ambient set',
    upcoming: true,
  },
  {
    date: '2024-03-15',
    venue: 'Dark Room',
    city: 'Christchurch',
    description: 'DJ set - electronic / ambient',
    upcoming: false,
  },
  {
    date: '2024-01-28',
    venue: 'Space Academy',
    city: 'Wellington',
    description: 'Live performance with visuals',
    upcoming: false,
  },
]

export const gear = {
  hardware: [
    'Elektron Digitakt',
    'Elektron Digitone',
    'Arturia MicroFreak',
    'Zoom H6 Field Recorder',
    'Audio-Technica AT2020',
  ],
  software: [
    'Ableton Live 12',
    'Max for Live',
    'Vital',
    'Valhalla plugins',
    'Izotope RX',
  ],
  tools: [
    'TouchDesigner',
    'Processing',
    'p5.js',
    'Resolume Arena',
  ],
}

export const songOfTheWeek = {
  title: 'Xtal',
  artist: 'Aphex Twin',
  album: 'Selected Ambient Works 85-92',
  note: 'Timeless. Still discovering new details in this track decades later.',
}

export const upcomingGigs = gigs.filter((g) => g.upcoming)
export const pastGigs = gigs.filter((g) => !g.upcoming)
