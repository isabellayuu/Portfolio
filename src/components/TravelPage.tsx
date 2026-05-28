import type { CSSProperties, ReactNode } from 'react'
import type { GalleryItem } from '../types'
import Polaroid from './Polaroid'
import Stickers from './Stickers'
import './TravelPage.css'

interface TravelPageProps {
  items: GalleryItem[]
}

// A vintage boarding pass — a small stub on the left, flight info on the right.
// `delay` staggers its drop-in animation (set as the --delay CSS variable).
function BoardingPass({
  from,
  to,
  flight,
  delay,
}: {
  from: string
  to: string
  flight: string
  delay: number
}) {
  return (
    <div
      className="ticket ticket--air"
      style={{ '--delay': `${delay}s` } as CSSProperties}
    >
      <div className="ticket__stub">
        <span className="ticket__air-label">BOARDING PASS</span>
        <svg className="ticket__plane" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"
            fill="#6f6253"
          />
        </svg>
      </div>
      <div className="ticket__body">
        <span className="ticket__route">
          {from} <span className="ticket__arrow">✈</span> {to}
        </span>
        <span className="ticket__meta">FLIGHT {flight} · SEAT 14A · GATE 22</span>
      </div>
    </div>
  )
}

// A vintage pink Coldplay concert ticket.
function ColdplayTicket({ delay }: { delay: number }) {
  return (
    <div
      className="ticket ticket--coldplay"
      style={{ '--delay': `${delay}s` } as CSSProperties}
    >
      <div className="ticket__body">
        <span className="ticket__brand">COLDPLAY</span>
        <span className="ticket__tour">Music of the Spheres · World Tour</span>
        <span className="ticket__meta">ADMIT ONE · GENERAL ADMISSION</span>
      </div>
      <div className="ticket__stub ticket__stub--coldplay">
        <span className="ticket__admit">ADMIT ONE</span>
      </div>
    </div>
  )
}

function TravelPage({ items }: TravelPageProps) {
  // Stagger the drop-in: each polaroid/ticket falls a little after the previous
  // one, so the whole board assembles itself — like the home page on refresh.
  const baseDelay = 0.15
  const step = 0.08
  let slot = 0
  const nextDelay = () => baseDelay + slot++ * step

  // Build the board in order: country polaroids with tickets tucked in at
  // specific spots (the Coldplay ticket lands between Finland and Sweden).
  const board: ReactNode[] = []
  items.forEach((item) => {
    board.push(
      <Polaroid
        key={item.name}
        caption={item.name}
        image={item.image}
        photoColor={item.photoColor}
        rotation={item.rotation}
        revealDelay={nextDelay()}
      />,
    )
    if (item.name === 'England') {
      board.push(
        <BoardingPass key="bp-1" from="HEL" to="LHR" flight="AY1331" delay={nextDelay()} />,
      )
    }
    if (item.name === 'Finland') {
      board.push(<ColdplayTicket key="coldplay" delay={nextDelay()} />)
    }
    if (item.name === 'Poland') {
      board.push(
        <BoardingPass key="bp-2" from="WAW" to="HEL" flight="AY1146" delay={nextDelay()} />,
      )
    }
  })

  return (
    <div className="travel">
      {/* decorations sit behind the polaroids (rendered first in the DOM) */}
      <Stickers variant="travel" />
      <div className="travel__board">{board}</div>
    </div>
  )
}

export default TravelPage
