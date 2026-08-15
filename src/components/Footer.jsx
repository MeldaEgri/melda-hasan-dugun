import { COUPLE } from '../constants'
import ScrollReveal from './ScrollReveal'
import { LeafCorner } from './BotanicalDecor'

export default function Footer() {
  return (
    <footer className="footer">
      <LeafCorner className="footer__leaf footer__leaf--tl" />
      <LeafCorner className="footer__leaf footer__leaf--br" flip />

      <ScrollReveal>
        <p className="footer__names">
          {COUPLE.bride} <span aria-hidden="true">♡</span> {COUPLE.groom}
        </p>
        <p className="footer__date">18.09.2026</p>
        <p className="footer__tagline">Sizinle daha güzel olacak.</p>
      </ScrollReveal>
    </footer>
  )
}
