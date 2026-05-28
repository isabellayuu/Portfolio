// One entry in a timeline-style section (Education, Experience, Projects).
// Rendered with special styling in the modal: title bold + red,
// years smaller, description in the handwritten scrapbook font.
export interface TimelineEntry {
  title: string // e.g. school, organisation, or project name
  years?: string // e.g. "2025–2030" — optional (omit to hide the line)
  description: string // a short line about it
}

// One label + value pair in the Contact section.
export interface ContactField {
  label: string // e.g. "Email"
  value: string // e.g. "name@example.com"
  href?: string // when set, the value becomes a clickable link (mailto: or https)
}

// One polaroid inside a gallery section (e.g. the Travel page).
export interface GalleryItem {
  name: string // caption under the polaroid
  image?: string // photo URL; omit for a vintage textured fill
  photoColor: string // fill tint behind / instead of the photo
  rotation: number // tilt in degrees
}

// An external link shown in the modal's top-right corner (e.g. GitHub).
export interface SectionLink {
  label: string // visible text after "more on", e.g. "github.com/isabellayuu"
  url: string // where the link actually points
}

// The "shape" of one scrapbook section.
// Every entry in src/data/sections.ts must match this exactly,
// so TypeScript warns you if a field is missing or misspelled.
export interface Section {
  id: string // unique key, used by React when rendering the list
  caption: string // handwritten label shown under the polaroid
  image?: string // photo URL for the polaroid (omit → vintage fill)
  photoColor: string // background tint of the photo area (any CSS colour)
  rotation: number // tilt in degrees — negative leans left, positive right
  modalTitle: string // heading shown inside the popup
  // A section picks ONE content style below (all optional, hence the `?`):
  body?: string[] // plain paragraphs — one string each
  bulleted?: boolean // when true, render `body` as a bulleted list
  timeline?: TimelineEntry[] // title/years/description entries
  fields?: ContactField[] // label + value pairs (Contact)
  gallery?: GalleryItem[] // when set, the modal shows a board of polaroids
  link?: SectionLink // optional external link in the modal's top-right corner
}
