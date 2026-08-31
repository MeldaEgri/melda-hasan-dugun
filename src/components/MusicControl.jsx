import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ASSETS } from '../constants'

export default function MusicControl({ introOpen, introClosed }) {
  const audioRef = useRef(null)
  const userPausedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioAvailable, setAudioAvailable] = useState(true)
  const [userPaused, setUserPaused] = useState(false)

  userPausedRef.current = userPaused

  const startMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio || userPausedRef.current) return

    audio.volume = 0.4
    const playPromise = audio.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleError = () => setAudioAvailable(false)
    const handleCanPlay = () => {
      setAudioAvailable(true)
      if (!introOpen && introClosed && !userPausedRef.current) {
        startMusic()
      }
    }

    audio.addEventListener('error', handleError)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('canplay', handleCanPlay)
    }
  }, [introOpen, introClosed])

  useEffect(() => {
    const isCloseTarget = (target) => {
      if (!(target instanceof Element)) return false
      return Boolean(
        target.closest('.intro-modal__close') ||
          target.classList.contains('intro-overlay'),
      )
    }

    const handleGestureClose = (event) => {
      if (!introOpen) return
      if (!isCloseTarget(event.target)) return
      startMusic()
    }

    document.addEventListener('pointerup', handleGestureClose, true)
    document.addEventListener('click', handleGestureClose, true)

    return () => {
      document.removeEventListener('pointerup', handleGestureClose, true)
      document.removeEventListener('click', handleGestureClose, true)
    }
  }, [introOpen])

  useLayoutEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (introOpen) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    if (introClosed && !userPaused) {
      startMusic()
    }
  }, [introOpen, introClosed, userPaused])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio || !audioAvailable) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      setUserPaused(true)
    } else {
      audio.volume = 0.4
      try {
        await audio.play()
        setIsPlaying(true)
        setUserPaused(false)
      } catch {
        setIsPlaying(false)
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={ASSETS.music}
        loop
        preload="auto"
        onCanPlay={() => setAudioAvailable(true)}
        onError={() => setAudioAvailable(false)}
      />
      <button
        type="button"
        className={`music-control ${!audioAvailable ? 'music-control--unavailable' : ''}`}
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? 'Müziği kapatmak için dokunun'
            : 'Müziği çalmaya devam etmek için tıklayın'
        }
      >
        <span className="music-control__icon" aria-hidden="true">
          {isPlaying ? '♪' : '♫'}
        </span>

        {introClosed && !introOpen && audioAvailable && (
          <span className="music-control__text">
            {isPlaying
              ? 'Müziği kapatmak için dokunun'
              : 'Müziği çalmaya devam etmek için tıklayın'}
          </span>
        )}
      </button>
    </>
  )
}
