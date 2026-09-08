import { FAMILIES } from '../constants'

import ScrollReveal from './ScrollReveal'

import { LeafDivider } from './BotanicalDecor'

export default function FamilySection() {
  return (
    <section id="aileler" className="families">
      <ScrollReveal>

        <h2 className="families__title">Ailelerimiz</h2>

        <LeafDivider />

        <div className="families__grid">

          {/* GELİN TARAFI */}
          <div className="families__card">
            <h3 className="families__family-name">
              {FAMILIES.bride.title}
            </h3>

            <p className="families__parents">
              {FAMILIES.bride.parents}
            </p>

            <a
              href="https://maps.app.goo.gl/vvmRDpY2nS2ADZNu8"
              target="_blank"
              rel="noopener noreferrer"
              className="family-direction"
            >
              📍 Gelin evine gitmek için tıklayın
            </a>
          </div>

          <div
            className="families__divider"
            aria-hidden="true"
          />

          {/* DAMAT TARAFI */}
          <div className="families__card">
            <h3 className="families__family-name">
              {FAMILIES.groom.title}
            </h3>

            <p className="families__parents">
              {FAMILIES.groom.parents}
            </p>

            <a
              href="https://maps.app.goo.gl/akauhiyCDnyosvMV6"
              target="_blank"
              rel="noopener noreferrer"
              className="family-direction"
            >
              📍 Damat evine gitmek için tıklayın
            </a>
          </div>

        </div>

      </ScrollReveal>
    </section>
  )
}