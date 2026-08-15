import { useEffect, useState } from 'react'
import { WEDDING_DATE } from '../constants'
import ScrollReveal from './ScrollReveal'

function getTimeRemaining(targetDate) {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    return null
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  const [remaining, setRemaining] = useState(() => getTimeRemaining(WEDDING_DATE))

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getTimeRemaining(WEDDING_DATE))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="countdown">
      <ScrollReveal>
        {remaining ? (
          <div className="countdown__grid">
            <div className="countdown__item">
              <span className="countdown__value">{remaining.days}</span>
              <span className="countdown__label">Gün</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__value">{remaining.hours}</span>
              <span className="countdown__label">Saat</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__value">{remaining.minutes}</span>
              <span className="countdown__label">Dakika</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__value">{remaining.seconds}</span>
              <span className="countdown__label">Saniye</span>
            </div>
          </div>
        ) : (
          <p className="countdown__celebration">Bugün bizim günümüz. ♡</p>
        )}
      </ScrollReveal>
    </section>
  )
}
