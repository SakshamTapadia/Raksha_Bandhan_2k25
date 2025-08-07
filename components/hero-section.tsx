'use client'

import { useEffect, useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function HeroSection() {
  const [showConfetti, setShowConfetti] = useState(false)
  const { ref: heroRef, isVisible } = useScrollAnimation()

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Heart className="w-4 h-4 text-pink-300 opacity-60" />
          </div>
        ))}
        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-yellow-400 opacity-70" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-dancing text-4xl md:text-6xl lg:text-8xl text-pink-600 mb-6 leading-tight">
            Happy Raksha Bandhan
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins text-lg md:text-xl text-pink-500 mb-8 max-w-2xl mx-auto">
            To the most amazing sister in the world, who fills my life with love, laughter, and endless joy
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-pink-200 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-pink-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
