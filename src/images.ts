// Vite can't serve images from a plain string path, so we let it import them.
// `import.meta.glob` is a Vite helper that imports many matching files at once.
// `eager: true` pulls them in immediately and `import: 'default'` grabs each
// file's final URL. Result: { './pictures/china.jpg': '/assets/china-abc.jpg', … }
const files = import.meta.glob<string>('./pictures/*.jpg', {
  eager: true,
  import: 'default',
})

// Re-key the map by file name so we can look images up as picture('china.jpg').
const byName: Record<string, string> = {}
for (const path in files) {
  const name = path.split('/').pop()!
  byName[name] = files[path]
}

// Returns the URL for a picture in src/pictures/, or undefined if it's missing
// (in which case the Polaroid falls back to a vintage textured fill).
export function picture(name: string): string | undefined {
  return byName[name]
}
