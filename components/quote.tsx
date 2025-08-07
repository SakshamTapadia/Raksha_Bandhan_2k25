import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Quote() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-pink-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-yellow-300 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <div className="text-6xl text-pink-300 mb-4">"</div>
            <blockquote className="font-dancing text-2xl md:text-4xl text-pink-700 leading-relaxed mb-6">
              A sister is both your mirror and your opposite. She's the person who knows you best and loves you anyway.
            </blockquote>
            <div className="text-6xl text-pink-300 rotate-180">"</div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto rounded-full mb-6"></div>
          
          <p className="font-poppins text-gray-600 italic">
            This perfectly describes our beautiful relationship
          </p>
        </div>
      </div>
    </section>
  )
}
