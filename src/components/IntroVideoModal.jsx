import { useEffect, useState } from 'react'

export default function IntroVideoModal({ isOpen, onClose }) {
  const [opening, setOpening] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setOpening(false)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleOpen = () => {
    // Önce kapakları aç
    setOpening(true)

    // Animasyon bitince davetiyeye geç
    setTimeout(() => {
      onClose()
    }, 1600)
  }

  if (!isOpen) return null

  return (
    <div className={`intro-overlay ${opening ? 'intro-overlay--opening' : ''}`}>

      {/* SOL KAPAK */}
      <div className="intro-door intro-door--left">
        <div className="intro-door__line intro-door__line--top" />
        <div className="intro-door__line intro-door__line--bottom" />
      </div>

      {/* SAĞ KAPAK */}
      <div className="intro-door intro-door--right">
        <div className="intro-door__line intro-door__line--top" />
        <div className="intro-door__line intro-door__line--bottom" />
      </div>

      {/* ORTADAKİ YAZI */}
      <div className="intro-welcome">

        <div className="intro-welcome__heart">♡</div>

        <h1>Melda & Hasan</h1>

        <p>
          Sevgiyle hazırladığımız<br />
          bu özel günümüze hoş geldiniz
        </p>

        <button
          type="button"
          className="intro-welcome__button"
          onClick={handleOpen}
        >
          Daveti Aç ✦
        </button>

        <span className="intro-welcome__music">
          ♫ Daveti açmak için dokunun ♫
        </span>

      </div>

    </div>
  )
}