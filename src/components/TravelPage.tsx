import { Fragment } from 'react'
import type { GalleryItem } from '../types'
import Polaroid from './Polaroid'
import Stickers from './Stickers'
import './TravelPage.css'

interface TravelPageProps {
  items: GalleryItem[]
}

// A vintage boarding pass — a small stub on the left, flight info on the right.
function BoardingPass({ from, to, flight }: { from: string; to: string; flight: string }) {
  return (
    <div className="ticket ticket--air">
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
function ColdplayTicket() {
  return (
    <div className="ticket ticket--coldplay">
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
  return (
    <div className="travel">
      {/* decorations sit behind the polaroids (rendered first in the DOM) */}
      <Stickers variant="travel" />

      <div className="travel__board">
        {items.map((item) => (
          <Fragment key={item.name}>
            <Polaroid
              caption={item.name}
              image={item.image}
              photoColor={item.photoColor}
              rotation={item.rotation}
            />
            {/* tuck a couple of boarding passes and the Coldplay ticket into
                the flow at specific spots */}
            {item.name === 'England' && (
              <BoardingPass from="HEL" to="LHR" flight="AY1331" />
            )}
            {item.name === 'Finland' && <ColdplayTicket />}
            {item.name === 'Poland' && (
              <BoardingPass from="WAW" to="HEL" flight="AY1146" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default TravelPage
