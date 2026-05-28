import './Stickers.css'

// Pure decoration: small vintage-style flower and heart "stickers" (drawn as
// SVG, not emoji) plus a couple of coffee stains, scattered around.
// `variant` lets one component serve two places with different layouts:
//   - "page"  → spread across the whole portfolio background
//   - "modal" → tucked along the sides of the popup
type Variant = 'page' | 'modal' | 'travel'
type Shape = 'heart' | 'flower' | 'airplane'

interface StickersProps {
  variant: Variant
}

// Each sticker = a shape, a CSS class that positions/rotates it, and muted
// vintage colours. Keeping them in arrays lets us render with .map().
interface StickerItem {
  shape: Shape
  className: string
  color: string // heart body / flower petals
  center?: string // flower centre (ignored by hearts)
}

const stickerSets: Record<Variant, StickerItem[]> = {
  page: [
    { shape: 'flower', className: 'sticker sticker--p1', color: '#d9a7a0', center: '#a9794f' },
    { shape: 'heart', className: 'sticker sticker--p2', color: '#b8675c' },
    { shape: 'flower', className: 'sticker sticker--p3', color: '#cdbb86', center: '#9c7b46' },
    { shape: 'flower', className: 'sticker sticker--p4', color: '#a9bda0', center: '#8a6b3f' },
    { shape: 'heart', className: 'sticker sticker--p5', color: '#c98a82' },
    { shape: 'heart', className: 'sticker sticker--p6', color: '#b8675c' },
    { shape: 'flower', className: 'sticker sticker--p7', color: '#b6a7c4', center: '#8a6b3f' },
    { shape: 'heart', className: 'sticker sticker--p8', color: '#c98a82' },
  ],
  modal: [
    { shape: 'flower', className: 'sticker sticker--m1', color: '#d9a7a0', center: '#a9794f' },
    { shape: 'heart', className: 'sticker sticker--m2', color: '#b8675c' },
    { shape: 'flower', className: 'sticker sticker--m3', color: '#cdbb86', center: '#9c7b46' },
    { shape: 'heart', className: 'sticker sticker--m4', color: '#c98a82' },
  ],
  travel: [
    { shape: 'flower', className: 'sticker sticker--t1', color: '#d9a7a0', center: '#a9794f' },
    { shape: 'airplane', className: 'sticker sticker--t2', color: '#7d6f5c' },
    { shape: 'heart', className: 'sticker sticker--t3', color: '#b8675c' },
    { shape: 'airplane', className: 'sticker sticker--t4', color: '#8a7a66' },
    { shape: 'flower', className: 'sticker sticker--t5', color: '#a9bda0', center: '#8a6b3f' },
    { shape: 'airplane', className: 'sticker sticker--t6', color: '#7d6f5c' },
    { shape: 'heart', className: 'sticker sticker--t7', color: '#c98a82' },
  ],
}

// Coffee stains are drawn purely in CSS (see Stickers.css).
const coffeeStains: Record<Variant, string[]> = {
  page: [
    'coffee coffee--p1',
    'coffee coffee--p2',
    'coffee coffee--p3',
    'coffee coffee--p4',
    'coffee coffee--p5',
  ],
  modal: ['coffee coffee--m1', 'coffee coffee--m2', 'coffee coffee--m3'],
  travel: [
    'coffee coffee--t1',
    'coffee coffee--t2',
    'coffee coffee--t3',
    'coffee coffee--t4',
  ],
}

// The actual drawing. A cream stroke gives each shape a die-cut "sticker" edge.
function StickerShape({ shape, color, center }: Omit<StickerItem, 'className'>) {
  if (shape === 'heart') {
    return (
      <svg className="sticker__svg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21s-7.5-4.7-9.6-9.3C1.2 8.4 2.6 5 6 5c2 0 3.3 1.1 4 2.3C10.7 6.1 12 5 14 5c3.4 0 4.8 3.4 3.6 6.7C19.5 16.3 12 21 12 21z"
          fill={color}
          stroke="#fbf3df"
          strokeWidth="1.1"
        />
      </svg>
    )
  }

  if (shape === 'airplane') {
    return (
      <svg className="sticker__svg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"
          fill={color}
          stroke="#fbf3df"
          strokeWidth="0.7"
        />
      </svg>
    )
  }
  // a simple daisy: five petals around a centre
  return (
    <svg className="sticker__svg" viewBox="0 0 40 40" aria-hidden="true">
      <g fill={color} stroke="#fbf3df" strokeWidth="1">
        <circle cx="20" cy="9" r="7.5" />
        <circle cx="31" cy="16" r="7.5" />
        <circle cx="27" cy="30" r="7.5" />
        <circle cx="13" cy="30" r="7.5" />
        <circle cx="9" cy="16" r="7.5" />
      </g>
      <circle cx="20" cy="20" r="6" fill={center} />
    </svg>
  )
}

function Stickers({ variant }: StickersProps) {
  return (
    // aria-hidden hides this purely visual layer from screen readers.
    <div className={`stickers stickers--${variant}`} aria-hidden="true">
      {coffeeStains[variant].map((className, index) => (
        <span key={`coffee-${index}`} className={className} />
      ))}
      {stickerSets[variant].map((item, index) => (
        <span key={`sticker-${index}`} className={item.className}>
          <StickerShape shape={item.shape} color={item.color} center={item.center} />
        </span>
      ))}
    </div>
  )
}

export default Stickers
