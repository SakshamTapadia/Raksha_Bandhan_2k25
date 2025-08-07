import { Heart, Github } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <footer ref={ref} className="py-12 px-4 bg-gradient-to-r from-pink-100 to-orange-100 border-t border-pink-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="font-poppins text-gray-600">Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
            <span className="font-poppins text-gray-600">by Saksham for my sister!</span>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-6">
            <a 
              href="#" 
              className="text-gray-500 hover:text-pink-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            <p className="font-dancing text-pink-600 text-lg">Happy Raksha Bandhan! 🎀</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
