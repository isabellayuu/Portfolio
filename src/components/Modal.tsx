import { useEffect } from 'react'
import type { Section } from '../types'
import Stickers from './Stickers'
import TravelPage from './TravelPage'
import './Modal.css'

// `section` is either a Section (modal open, showing that content)
// or null (modal closed). This "value or null" pattern is a common,
// type-safe way to model open/closed in React + TypeScript.
interface ModalProps {
  section: Section | null
  onClose: () => void
}

function Modal({ section, onClose }: ModalProps) {
  // Listen for the Escape key while the modal is open.
  // The returned function "cleans up" the listener so we don't
  // stack a new one every time the modal re-renders.
  useEffect(() => {
    if (!section) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [section, onClose])

  // Nothing to show when closed — render nothing.
  if (!section) return null

  return (
    // Clicking the dark backdrop closes the modal...
    <div className="modal__backdrop" onClick={onClose}>
      {/* The stage wraps the card so stickers can sit just outside its edges.
          Gallery sections (Travel) use a wider stage and card. */}
      <div className={`modal__stage${section.gallery ? ' modal__stage--wide' : ''}`}>
        <Stickers variant="modal" />
        {/* ...but stopPropagation keeps clicks *inside* the card from
            bubbling up to the backdrop and closing it accidentally. */}
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

          {/* optional external link in the top-right corner (e.g. GitHub) */}
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

          {/* Each section picks one content style. We check them in turn:
              gallery → timeline → contact fields → bulleted list → paragraphs. */}
          {section.gallery ? (
            <TravelPage items={section.gallery} />
          ) : section.timeline ? (
            section.timeline.map((entry, index) => (
              <div key={index} className="modal__entry">
                <p className="modal__entry-title">{entry.title}</p>
                {/* only show the years line if this entry has one */}
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
                <p className="modal__field-value">{field.value}</p>
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
            section.body?.map((paragraph, index) => (
              <p key={index} className="modal__text">
                {paragraph}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
