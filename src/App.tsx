import { useState } from 'react'
import Header from './components/Header'
import Polaroid from './components/Polaroid'
import Modal from './components/Modal'
import Stickers from './components/Stickers'
import SocialLinks from './components/SocialLinks'
import { sections } from './data/sections'
import type { Section } from './types'
import './App.css'

function App() {
  // This is the app's only state: which section's modal is open.
  // null = no modal. <Section | null> is the TypeScript type annotation.
  // Calling setActiveSection re-renders the app with the new value.
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  return (
    <>
      {/* Decorative layer first, so the polaroids paint on top of it. */}
      <Stickers variant="page" />

      {/* Social links pinned to the top-right corner. */}
      <SocialLinks />

      <Header
        title="Isabella Yu"
        subtitle="First-year Computer Science student at Aalto University"
      />

      <main className="board">
        {/* Turn the data array into Polaroids. `key` must be unique —
            React uses it to track each item efficiently. */}
        {sections.map((section, index) => (
          <Polaroid
            key={section.id}
            caption={section.caption}
            image={section.image}
            photoColor={section.photoColor}
            rotation={section.rotation}
            // stagger the intro: header plays first (~0.5s), then each
            // polaroid drops in 0.11s after the previous one
            revealDelay={0.5 + index * 0.11}
            onClick={() => setActiveSection(section)}
          />
        ))}
      </main>

      {/* One modal for the whole app; it shows whichever section is active. */}
      <Modal section={activeSection} onClose={() => setActiveSection(null)} />
    </>
  )
}

export default App
