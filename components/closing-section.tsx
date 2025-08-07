import { Heart } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function ClosingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-pulse" />
          </div>
          
          <h2 className="font-dancing text-3xl md:text-6xl text-pink-600 mb-8 leading-tight">
            Love You Always & Forever
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100 max-w-2xl mx-auto">
            <p className="font-poppins text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              No matter where life takes us, no matter how far apart we may be, you'll always have a special place in my heart. 
              You're not just my sister, you're my best friend, my confidant, and my greatest blessing.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-pink-500">
              <Heart className="w-5 h-5 fill-current" />
              <Heart className="w-6 h-6 fill-current" />
              <Heart className="w-5 h-5 fill-current" />
            </div>
          </div>
          
          <div className="mt-12">
            <p className="font-dancing text-2xl md:text-3xl text-pink-600 mb-2">
              — Your Loving Brother
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
