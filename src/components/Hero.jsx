import { COUPLE } from '../constants'
import { LeafCorner } from './BotanicalDecor'

export default function Hero() {
  return (
    <section className="hero">
      <LeafCorner className="hero__leaf hero__leaf--tl" />
      <LeafCorner className="hero__leaf hero__leaf--br" flip />

      <div className="hero__film-detail" aria-hidden="true">
        <span className="hero__rec">REC ●</span>
      </div>

      <div className="hero__content">
        <div className="hero__names">
          <span className="hero__name hero__name--script">{COUPLE.bride}</span>
          <span className="hero__heart" aria-hidden="true">♡</span>
          <span className="hero__name hero__name--script">{COUPLE.groom}</span>
        </div>

        <p className="hero__date">18 Eylül 2026</p>

        <div className="camera-frame camera-frame--subtle" aria-hidden="true">
          <span className="camera-frame__corner camera-frame__corner--tl" />
          <span className="camera-frame__corner camera-frame__corner--tr" />
          <span className="camera-frame__corner camera-frame__corner--bl" />
          <span className="camera-frame__corner camera-frame__corner--br" />
        </div>
      </div>
    </section>
  )
}
