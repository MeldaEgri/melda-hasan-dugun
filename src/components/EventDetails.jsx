
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
<section id="mekan" className="event-details">      <ScrollReveal>
        <div className="event-card">
          <p className="event-card__label">Düğün Mekânı</p>

          <h2 className="event-card__venue">
            {VENUE.name}
          </h2>

          <div className="event-card__datetime">
            <p>18 Eylül 2026</p>
            <p>19.00</p>
          </div>

          {/* Google Maps */}
          <div className="event-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4331041325268!2d32.427808175843005!3d37.80332321051498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0819c0642b7bd%3A0x2f69b881f69b3c43!2sUMMAN%20SADEM%20USTA!5e0!3m2!1str!2str!4v1786823462019!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Umman Sadem Usta konumu"
            />
          </div>

          <div className="event-card__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={handleMapsClick}
            >
              📍 Yol Tarifi Al
            </button>

            <button
              type="button"
              className="btn btn--secondary"
              onClick={handleCalendarClick}
            >
              📅 Takvime Ekle
            </button>

            <button
              type="button"
              className="btn btn--ghost"
              onClick={handleIcsClick}
            >
              Manuel Takvimine Ekle
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

