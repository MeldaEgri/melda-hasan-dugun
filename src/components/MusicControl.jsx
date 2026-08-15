import { useEffect, useRef, useState } from 'react'
import { ASSETS } from '../constants'

export default function MusicControl({ introOpen, introClosed }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioAvailable, setAudioAvailable] = useState(true)
  const [userPaused, setUserPaused] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleError = () => setAudioAvailable(false)
    const handleCanPlay = () => setAudioAvailable(true)
    
    audio.addEventListener('error', handleError)
    audio.addEventListener('canplay', handleCanPlay)
    
    return () => {
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !audioAvailable) return

    if (introOpen) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    if (introClosed && !userPaused) {
      audio.volume = 0.4
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    }
  }, [introOpen, introClosed, audioAvailable, userPaused])

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
/>      <button
        type="button"
        className={`music-control ${!audioAvailable ? 'music-control--unavailable' : ''}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Müziği durdur' : 'Müziği başlat'}
        title={
          !audioAvailable
            ? 'Müzik dosyası henüz eklenmedi'
            : isPlaying
              ? 'Müziği durdur'
              : 'Müziği başlat'
        }
      >
        <span className="music-control__icon" aria-hidden="true">
          {isPlaying ? '♪' : '♫'}
        </span>
      </button>
    </>
  )
}
