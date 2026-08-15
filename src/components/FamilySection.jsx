import { FAMILIES } from '../constants'
import ScrollReveal from './ScrollReveal'
import { LeafDivider } from './BotanicalDecor'

export default function FamilySection() {
  return (
    <section className="families">
      <ScrollReveal>
        <h2 className="families__title">Ailelerimiz</h2>
        <LeafDivider />

        <div className="families__grid">
          <div className="families__card">
            <h3 className="families__family-name">{FAMILIES.bride.title}</h3>
            <p className="families__parents">{FAMILIES.bride.parents}</p>
          </div>

          <div className="families__divider" aria-hidden="true" />

          <div className="families__card">
            <h3 className="families__family-name">{FAMILIES.groom.title}</h3>
            <p className="families__parents">{FAMILIES.groom.parents}</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
