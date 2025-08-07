'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Try to autoplay (might be blocked by browser)
    const playAudio = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Autoplay blocked by browser')
        setIsPlaying(false)
      }
    }

    playAudio()

    // Handle audio events
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      audio.currentTime = 0
      audio.play()
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.muted = false
      setIsMuted(false)
      if (!isPlaying) {
        audio.play()
        setIsPlaying(true)
      }
    } else {
      audio.muted = true
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        {/* Fixed path - remove /public/ prefix */}
        <source src="/itni-si-khushi.mp3" type="audio/mpeg" />
        <source src="/placeholder-audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Music Control Button */}
      <button
        onClick={toggleMute}
        className="fixed top-6 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>

      {/* Music Info Tooltip */}
      <div className="fixed top-20 right-6 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-xs text-gray-600 font-poppins whitespace-nowrap">
          🎵 Itni Si Khushi Itni Si Hasi
        </p>
      </div>
    </>
  )
}
