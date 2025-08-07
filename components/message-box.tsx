'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function MessageBox() {
  const [displayedText, setDisplayedText] = useState('')
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  
  const fullMessage = `Dear Sister,

On this special day of Raksha Bandhan, I want you to know how grateful I am to have you in my life. You've been my partner in crime, my biggest supporter, and my dearest friend.

From childhood memories of sharing secrets to being there for each other through thick and thin, you've made every moment special. Your smile lights up my world, and your laughter is music to my ears.

Thank you for being the incredible person you are. Thank you for your endless love, your caring heart, and for always believing in me.

This rakhi is not just a thread, it's a promise that I'll always be there for you, just as you've always been there for me.

Happy Raksha Bandhan, my dear sister! 💕`

  useEffect(() => {
    if (!isVisible) return

    let index = 0
    const timer = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40) // Slightly slower, more readable speed

    return () => clearInterval(timer)
  }, [isVisible, fullMessage])

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100`}>
          <div className="mb-8 text-center">
            <h2 className="font-dancing text-3xl md:text-5xl text-pink-600 mb-4">
              A Letter From My Heart
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-pink-200 font-serif">"</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-pink-200 font-serif">"</div>
            
            <div className="font-poppins text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line min-h-[400px]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
