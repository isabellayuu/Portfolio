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
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  return (
    <>
      <Stickers variant="page" />

      <SocialLinks />

      <Header
        title="Isabella Yu"
        subtitle="First-year Computer Science student at Aalto University"
      />

      <main className="board">
        {sections.map((section, index) => (
          <Polaroid
            key={section.id}
            caption={section.caption}
            image={section.image}
            photoColor={section.photoColor}
            rotation={section.rotation}
            // stagger the intro
            revealDelay={0.5 + index * 0.11}
            onClick={() => setActiveSection(section)}
          />
        ))}
      </main>

      <Modal section={activeSection} onClose={() => setActiveSection(null)} />
    </>
  )
}

export default App
