import { INVITATION_TEXT } from '../constants'
import ScrollReveal from './ScrollReveal'
import { LeafDivider } from './BotanicalDecor'

export default function InvitationText() {
  const paragraphs = INVITATION_TEXT.split('\n\n')

  return (
    <section className="invitation">
      <ScrollReveal>
        <LeafDivider />
        <div className="invitation__text">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <LeafDivider />
      </ScrollReveal>
    </section>
  )
}
