'use client'

import HeroSection from '@/components/hero-section'
import MessageBox from '@/components/message-box'
import Gallery from '@/components/gallery'
import VideoSection from '@/components/video-section'
import Quote from '@/components/quote'
import RakhiDesigner from '@/components/rakhi-designer'
import ClosingSection from '@/components/closing-section'
import Footer from '@/components/footer'
import AudioPlayer from '@/components/audio-player'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <AudioPlayer />
      <HeroSection />
      <MessageBox />
      <Gallery />
      <VideoSection />
      <Quote />
      <RakhiDesigner />
      <ClosingSection />
      <Footer />
    </main>
  )
}
