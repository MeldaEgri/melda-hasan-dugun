import { useState } from 'react'
import IntroVideoModal from './components/IntroVideoModal'
import MusicControl from './components/MusicControl'
import Hero from './components/Hero'
import InvitationText from './components/InvitationText'
import DateTimeSection from './components/DateTimeSection'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import FamilySection from './components/FamilySection'
import Footer from './components/Footer'
import PhotoUploadQR from './components/PhotoUploadQR'
export default function App() {
  const [introOpen, setIntroOpen] = useState(true)
  const [introClosed, setIntroClosed] = useState(false)

  const handleIntroClose = () => {
    setIntroOpen(false)
    setIntroClosed(true)
  }

  return (
    <>
      <IntroVideoModal
        isOpen={introOpen}
        onClose={handleIntroClose}
      />

      <MusicControl
        introOpen={introOpen}
        introClosed={introClosed}
      />

      {/* ÜST MENÜ */}
      {!introOpen && (
        <nav className="wedding-nav">
          <span className="wedding-nav__heart">♡</span>

          <a href="#davet">Davet</a>
          <a href="#aileler">Aileler</a>
          <a href="#tarih">Tarih</a>
          <a href="#mekan">Mekân</a>
        </nav>
      )}

      <main
        className={`site ${
          introOpen ? 'site--hidden' : 'site--visible'
        }`}
      >
        <Hero />
      
        <div id="davet">
          <InvitationText />
        </div>
        <div id="aileler">
          <FamilySection />
        </div>
        <div id="tarih">
          <DateTimeSection />
        </div>
        
        <Countdown />

        <div id="mekan">
          <EventDetails />
        </div>
        <div id="photo-upload">
          <PhotoUploadQR />
        </div>
        

        <Footer />
      </main>
    </>
  )
}