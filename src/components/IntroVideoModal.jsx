import { useEffect, useRef, useState } from 'react'
import { ASSETS } from '../constants'

export default function IntroVideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null)
  const [videoAvailable, setVideoAvailable] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !videoRef.current || !videoAvailable) return

    const video = videoRef.current
    video.muted = true
    video.currentTime = 0

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* autoplay blocked — user can tap to play */
      })
    }
  }, [isOpen, videoAvailable])

  const handleVideoError = () => {
    setVideoAvailable(false)
  }

  const handleVideoEnded = () => {
    onClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="intro-overlay" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label="Düğün filmi">
      <div className="intro-modal">
        <button
          type="button"
          className="intro-modal__close"
          onClick={onClose}
          aria-label="Videoyu kapat"
        >
          ×
        </button>

        <div className="intro-modal__video-wrap">
          {videoAvailable ? (
            <>
              <video
                ref={videoRef}
                className="intro-modal__video"
                src={ASSETS.introVideo}
                playsInline
                muted
                onLoadedData={() => setVideoLoaded(true)}
                onError={handleVideoError}
                onEnded={handleVideoEnded}
              />
              {!videoLoaded && (
                <div className="intro-modal__placeholder">
                  <div className="intro-modal__placeholder-inner">
                    <span className="intro-modal__rec">REC ●</span>
                    <p>Film yükleniyor…</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="intro-modal__placeholder intro-modal__placeholder--fallback">
              <div className="intro-modal__placeholder-inner">
                <span className="intro-modal__rec">REC ●</span>
                <p className="intro-modal__placeholder-title">Düğün Filmi</p>
                <p className="intro-modal__placeholder-hint">
                  Video dosyası henüz eklenmedi.
                  <br />
                  <code>public/assets/wedding-intro.mp4</code>
                </p>
                <button type="button" className="btn btn--ghost" onClick={onClose}>
                  Davetiyeye Geç
                </button>
              </div>
            </div>
          )}

          <div className="camera-frame" aria-hidden="true">
            <span className="camera-frame__corner camera-frame__corner--tl" />
            <span className="camera-frame__corner camera-frame__corner--tr" />
            <span className="camera-frame__corner camera-frame__corner--bl" />
            <span className="camera-frame__corner camera-frame__corner--br" />
          </div>
        </div>
      </div>
    </div>
  )
}
