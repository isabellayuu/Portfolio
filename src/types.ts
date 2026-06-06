export interface TimelineEntry {
  title: string
  years?: string
  description: string
}

export interface ContactField {
  label: string
  value: string
  href?: string
}

// One polaroid inside a gallery section
export interface GalleryItem {
  name: string
  image: string
  photoColor: string
  rotation: number
}

// An external link shown in the modal's top-right corner
export interface SectionLink {
  label: string 
  url: string
}

export interface Section {
  id: string
  caption: string
  image: string
  photoColor: string
  rotation: number
  modalTitle: string

  body?: string[]
  bulleted?: boolean
  timeline?: TimelineEntry[]
  fields?: ContactField[]
  gallery?: GalleryItem[]
  link?: SectionLink
  video?: string
}
