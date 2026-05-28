import type { CSSProperties } from 'react'
import './Polaroid.css'

// The inputs this component needs.
// - `image` is optional: with it we show a photo, without it a vintage fill.
// - `onClick` is optional too: if given, the polaroid is a clickable button
//   (opens a modal); if not, it's just a static picture (the travel gallery).
interface PolaroidProps {
  caption: string
  image?: string
  photoColor: string
  rotation: number
  onClick?: () => void
}

function Polaroid({ caption, image, photoColor, rotation, onClick }: PolaroidProps) {
  // Dynamic values are passed to CSS as custom properties (the --names),
  // so hover effects in Polaroid.css can layer on top of the rotation.
  const style = {
    '--rot': `${rotation}deg`,
    '--photo': photoColor,
  } as CSSProperties

  // The photo area is the same whether we're a button or a static div.
  const photo = (
    <div className={`polaroid__photo${image ? '' : ' polaroid__photo--vintage'}`}>
      {image && <img className="polaroid__img" src={image} alt={caption} />}
    </div>
  )

  const label = <p className="polaroid__caption">{caption}</p>

  // Clickable → render a <button> (free keyboard + focus support).
  // Not clickable → a plain <div> so it isn't announced as a button.
  if (onClick) {
    return (
      <button type="button" className="polaroid" style={style} onClick={onClick}>
        {photo}
        {label}
      </button>
    )
  }

  return (
    <div className="polaroid polaroid--static" style={style}>
      {photo}
      {label}
    </div>
  )
}

export default Polaroid
