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

export default function App() {
  const [introOpen, setIntroOpen] = useState(true)
  const [introClosed, setIntroClosed] = useState(false)

  const handleIntroClose = () => {
    setIntroOpen(false)
    setIntroClosed(true)
  }

  return (
    <>
      <IntroVideoModal isOpen={introOpen} onClose={handleIntroClose} />
      <MusicControl introOpen={introOpen} introClosed={introClosed} />

      <main className={`site ${introOpen ? 'site--hidden' : 'site--visible'}`}>
        <Hero />
        <InvitationText />
        <DateTimeSection />
        <Countdown />
        <EventDetails />
        <FamilySection />
        <Footer />
      </main>
    </>
  )
}
