import type { CSSProperties } from 'react'
import './Polaroid.css'

interface PolaroidProps {
  caption: string
  image: string
  photoColor: string
  rotation: number
  onClick?: () => void
  revealDelay?: number // seconds before this polaroid drops in
}

function Polaroid({
  caption,
  image,
  photoColor,
  rotation,
  onClick,
  revealDelay,
}: PolaroidProps) {

  const style = {
    '--rot': `${rotation}deg`,
    '--photo': photoColor,
    ...(revealDelay !== undefined ? { '--delay': `${revealDelay}s` } : {}),
  } as CSSProperties

  const photo = (
    <div className="polaroid__photo">
      <img className="polaroid__img" src={image} alt={caption} />
    </div>
  )

  const label = <p className="polaroid__caption">{caption}</p>

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
