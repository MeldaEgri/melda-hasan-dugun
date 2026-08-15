import { VENUE } from '../constants'
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar'
import ScrollReveal from './ScrollReveal'

export default function EventDetails() {
  const handleMapsClick = () => {
    window.open(VENUE.mapsUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCalendarClick = () => {
    window.open(getGoogleCalendarUrl(), '_blank', 'noopener,noreferrer')
  }

  const handleIcsClick = () => {
    downloadIcsFile()
  }

  return (
    <section className="event-details">
      <ScrollReveal>
        <div className="event-card">
          <p className="event-card__label">Düğün Mekânı</p>
          <h2 className="event-card__venue">{VENUE.name}</h2>
          <div className="event-card__datetime">
            <p>18 Eylül 2026</p>
            <p>19.00</p>
          </div>

          <div className="event-card__actions">
            <button type="button" className="btn btn--primary" onClick={handleMapsClick}>
              Konumu Gör
            </button>
            <button type="button" className="btn btn--secondary" onClick={handleCalendarClick}>
              Takvime Ekle
            </button>
            <button type="button" className="btn btn--ghost" onClick={handleIcsClick}>
              .ics İndir
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
