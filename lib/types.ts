// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Exhibition
export interface DrupalExhibition extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  startDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  exhibitionType?: DrupalTerm[]
  curator?: string
  admission?: string
  image?: DrupalImage
}

export interface ExhibitionsData {
  nodeExhibitions: {
    nodes: DrupalExhibition[]
  }
}

// Artist
export interface DrupalArtist extends DrupalNode {
  body?: {
    processed: string
  }
  medium?: DrupalTerm[]
  websiteUrl?: string
  artistType?: string
  residencyDates?: string
  photo?: DrupalImage
}

export interface ArtistsData {
  nodeArtists: {
    nodes: DrupalArtist[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endTime?: {
    timestamp: number
  }
  location?: string
  eventType?: DrupalTerm[]
  admission?: string
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
