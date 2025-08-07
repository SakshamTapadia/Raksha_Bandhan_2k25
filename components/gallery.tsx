'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  const images = [
    {
      src: '/animated-rakhi-1.png',
      alt: 'Animated sister tying rakhi'
    },
    {
      src: '/animated-rakhi-2.png', 
      alt: 'Cartoon rakhi celebration'
    },
    {
      src: '/animated-rakhi-3.png',
      alt: 'Animated brother sister bond'
    },
    {
      src: '/animated-rakhi-4.png',
      alt: 'Cute rakhi festival scene'
    }
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-dancing text-3xl md:text-5xl text-pink-600 mb-4">
            Our Beautiful Bond
          </h2>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            Celebrating the eternal bond between siblings with love, joy, and endless memories
          </p>
        </div>

        {/* Gallery Layout - 4 images around center photo */}
        <div className="relative max-w-5xl mx-auto">
          {/* Mobile Layout */}
          <div className="block md:hidden space-y-6">
            {/* Center Photo */}
            <div className={`flex flex-col items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e6tEx98YV2fqdMrujTwapaOnnz9aDq.png"
                  alt="Saksham and brother"
                  className="w-56 h-72 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="text-center">
                <p className="font-dancing text-xl text-pink-600 mb-1">
                  💕 Wishing our sister Happy Raksha Bandhan 💕
                </p>
                <p className="font-poppins text-sm text-gray-600">
                  From both of us with lots of love
                </p>
              </div>
            </div>
            
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative w-full h-[500px]">
              {/* Center Photo */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e6tEx98YV2fqdMrujTwapaOnnz9aDq.png"
                      alt="Saksham and brother"
                      className="w-64 h-80 object-cover rounded-2xl shadow-2xl mx-auto"
                    />
                  </div>
                  <div className="max-w-xs">
                    <p className="font-dancing text-2xl text-pink-600 mb-2">
                      💕 Wishing our sister Happy Raksha Bandhan 💕
                    </p>
                    <p className="font-poppins text-sm text-gray-600">
                      From both of us with lots of love
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Left */}
              <div 
                className={`absolute top-0 left-8 group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '300ms' }}
                onClick={() => setSelectedImage(0)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <img
                    src={images[0].src || "/placeholder.svg"}
                    alt={images[0].alt}
                    className="w-36 h-36 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Top Right */}
              <div 
                className={`absolute top-0 right-8 group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '400ms' }}
                onClick={() => setSelectedImage(1)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <img
                    src={images[1].src || "/placeholder.svg"}
                    alt={images[1].alt}
                    className="w-36 h-36 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Bottom Left */}
              <div 
                className={`absolute bottom-0 left-8 group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '500ms' }}
                onClick={() => setSelectedImage(2)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <img
                    src={images[2].src || "/placeholder.svg"}
                    alt={images[2].alt}
                    className="w-36 h-36 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Bottom Right */}
              <div 
                className={`absolute bottom-0 right-8 group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '600ms' }}
                onClick={() => setSelectedImage(3)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <img
                    src={images[3].src || "/placeholder.svg"}
                    alt={images[3].alt}
                    className="w-36 h-36 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage].src || "/placeholder.svg"}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  )
}
