import ScrollReveal from './ScrollReveal'
import { SmallSprig } from './BotanicalDecor'

export default function DateTimeSection() {
  return (
    <section className="datetime">
      <ScrollReveal>
        <SmallSprig className="datetime__sprig datetime__sprig--left" />
        <SmallSprig className="datetime__sprig datetime__sprig--right" />

        <div className="datetime__inner">
          <p className="datetime__date">18 EYLÜL 2026</p>
          <p className="datetime__day">CUMA</p>
          <p className="datetime__time">19.00</p>
        </div>
      </ScrollReveal>
    </section>
  )
}
