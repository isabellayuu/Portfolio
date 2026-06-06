const files = import.meta.glob<string>('./pictures/*.jpg', {
  eager: true,
  import: 'default',
})

// Re-key the map by file name
const byName: Record<string, string> = {}
for (const path in files) {
  const name = path.split('/').pop()!
  byName[name] = files[path]
}

// Returns the URL for a picture in src/pictures/.
export function picture(name: string): string {
  const url = byName[name]
  if (!url) throw new Error(`Unknown picture: ${name}`)
  return url
}
