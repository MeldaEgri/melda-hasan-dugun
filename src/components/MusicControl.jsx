
import { useEffect, useRef, useState } from 'react'
import { ASSETS } from '../constants'

export default function MusicControl({ introOpen, introClosed }) {
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [audioAvailable, setAudioAvailable] = useState(true)
  const [userPaused, setUserPaused] = useState(false)

  // Intro açıkken false olduğu için yazı kesinlikle görünmez.
  const showMusicText = !introOpen && introClosed && audioAvailable

  // Ses dosyasının yüklenme durumunu kontrol et
  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    const handleError = () => {
      setAudioAvailable(false)
      setIsPlaying(false)
    }

    const handleCanPlay = () => {
      setAudioAvailable(true)
    }

    const handlePlay = () => {
      setIsPlaying(true)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    audio.addEventListener('error', handleError)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  // Intro videosu açıkken müziği durdur.
  // Intro kapandıktan sonra müziği başlatmayı dene.
  useEffect(() => {
    const audio = audioRef.current

    if (!audio || !audioAvailable) return

    if (introOpen) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
      return
    }

    // Kullanıcı daha önce müziği kapatmadıysa
    // intro kapandığında otomatik başlatmayı dene.
    if (introClosed && !userPaused) {
      audio.volume = 0.4

      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            // Tarayıcı autoplay'i engellerse
            // kullanıcı müzik butonuna basarak başlatabilir.
            setIsPlaying(false)
          })
      }
    }
  }, [introOpen, introClosed, audioAvailable, userPaused])

  // Müzik aç/kapat
  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio || !audioAvailable) return

    if (isPlaying) {
      // Müziği kapat
      audio.pause()
      setIsPlaying(false)
      setUserPaused(true)
    } else {
      // Müziği tekrar aç
      audio.volume = 0.4

      try {
        await audio.play()

        setIsPlaying(true)
        setUserPaused(false)
      } catch (error) {
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
        onError={() => {
          setAudioAvailable(false)
          setIsPlaying(false)
        }}
      />

      <button
        type="button"
        className={`music-control ${
          !audioAvailable ? 'music-control--unavailable' : ''
        }`}
        onClick={toggleMusic}
        disabled={!audioAvailable}
        aria-label={
          isPlaying
            ? 'Müziği kapatmak için tıklayın'
            : 'Müziği çalmaya devam etmek için tıklayın'
        }
        title={
          !audioAvailable
            ? 'Müzik dosyası bulunamadı'
            : isPlaying
              ? 'Müziği kapatmak için tıklayın'
              : 'Müziği çalmaya devam etmek için tıklayın'
        }
      >
        <span className="music-control__icon" aria-hidden="true">
          {isPlaying ? '♪' : '♫'}
        </span>

        {showMusicText && (
          <span className="music-control__text">
            {isPlaying
              ? 'Müziği kapatmak için tıklayın'
              : 'Müziği çalmaya devam etmek için tıklayın'}
          </span>
        )}
      </button>
    </>
  )
}

