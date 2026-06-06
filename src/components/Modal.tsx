import { useEffect, type ReactNode } from 'react'
import type { Section } from '../types'
import Stickers from './Stickers'
import TravelPage from './TravelPage'
import './Modal.css'

interface ModalProps {
  section: Section | null
  onClose: () => void
}

function Modal({ section, onClose }: ModalProps) {
  useEffect(() => {
    if (!section) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [section, onClose])

  if (!section) return null

  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div className={`modal__stage${section.gallery ? ' modal__stage--wide' : ''}`}>
        <Stickers variant="modal" />
        <div
          className={`modal__card${section.gallery ? ' modal__card--gallery' : ''}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button className="modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>

          {section.link && (
            <a
              className="modal__link"
              href={section.link.url}
              target="_blank"
              rel="noreferrer"
            >
              more on {section.link.label}
              <svg className="modal__link-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}

          <h2 id="modal-title" className="modal__title">
            {section.modalTitle}
          </h2>

          {section.gallery ? (
            <TravelPage items={section.gallery} />
          ) : (
            <div className="modal__body">
              {section.timeline ? (
                section.timeline.map((entry, index) => (
                  <div key={index} className="modal__entry">
                    <p className="modal__entry-title">{entry.title}</p>
                    {entry.years && (
                      <p className="modal__entry-years">{entry.years}</p>
                    )}
                    <p className="modal__entry-desc">{entry.description}</p>
                  </div>
                ))
              ) : section.fields ? (
                section.fields.map((field, index) => (
                  <div key={index} className="modal__field">
                    <p className="modal__field-label">{field.label}</p>
                    {field.href ? (
                      <a
                        className="modal__field-value modal__field-link"
                        href={field.href}
                        {...(field.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {field.value}
                      </a>
                    ) : (
                      <p className="modal__field-value">{field.value}</p>
                    )}
                  </div>
                ))
              ) : section.bulleted ? (
                <ul className="modal__list">
                  {section.body?.map((item, index) => (
                    <li key={index} className="modal__list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                section.body && renderBody(section.body)
              )}
            </div>
          )}

          {section.video && (
            <div className="modal__video-frame">
              <video
                className="modal__video"
                src={section.video}
                controls
                preload="metadata"
                playsInline
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function renderBody(body: string[]): ReactNode[] {
  const elements: ReactNode[] = []
  let bullets: string[] = []

  const flushBullets = () => {
    if (bullets.length === 0) return
    const items = bullets
    elements.push(
      <ul key={`list-${elements.length}`} className="modal__list">
        {items.map((item, i) => (
          <li key={i} className="modal__list-item">
            {item}
          </li>
        ))}
      </ul>,
    )
    bullets = []
  }

  body.forEach((line, index) => {
    if (line.startsWith('- ')) {
      bullets.push(line.slice(2)) // drop the "- " marker
    } else {
      flushBullets()
      
      const leadsIntoList = body[index + 1]?.startsWith('- ')
      const className = leadsIntoList ? 'modal__text modal__text--tight' : 'modal__text'
      elements.push(
        <p key={index} className={className}>
          {line}
        </p>,
      )
    }
  })
  flushBullets()

  return elements
}

export default Modal
