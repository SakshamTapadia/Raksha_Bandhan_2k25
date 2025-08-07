'use client'

import { useState, useRef, useCallback } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Video, Square, Download, RotateCcw, Share2, Check } from 'lucide-react'

export default function VideoSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [isRecording, setIsRecording] = useState(false)
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null)
  const [showRecorder, setShowRecorder] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const [senderName, setSenderName] = useState('')
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const recordedChunks = useRef<Blob[]>([])

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720 }, 
        audio: true 
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9'
      })
      mediaRecorderRef.current = mediaRecorder
      recordedChunks.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks.current, { type: 'video/webm' })
        const url = URL.createObjectURL(blob)
        setRecordedVideo(url)
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Unable to access camera. Please make sure you have given permission.')
    }
  }, [])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }, [isRecording])

  const resetRecording = () => {
    setRecordedVideo(null)
    setIsRecording(false)
    setIsSuccess(false)
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const downloadAndShare = async () => {
    if (!recordedVideo || !senderName.trim()) {
      alert('Please record a video and enter your name!')
      return
    }

    try {
      // Download the video
      const a = document.createElement('a')
      a.href = recordedVideo
      a.download = `${senderName}-rakhi-reaction-for-saksham.webm`
      a.click()
      
      // Show success state
      setIsSuccess(true)
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowRecorder(false)
        setIsSuccess(false)
        resetRecording()
        setSenderName('')
        setMessage('')
      }, 5000)
      
    } catch (error) {
      console.error('Error downloading video:', error)
      alert('There was an error downloading the video. Please try again.')
    }
  }

  const shareViaWhatsApp = () => {
    if (!senderName.trim()) {
      alert('Please enter your name first!')
      return
    }
    
    const whatsappMessage = `Hi Saksham! 🎉

${senderName} here! I just recorded a video reaction to your beautiful Raksha Bandhan website! 

${message ? `Message: ${message}` : 'I loved the website! 💕'}

I've downloaded the video file "${senderName}-rakhi-reaction-for-saksham.webm" - sending it to you now!

The website is absolutely amazing! 🌟`

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-purple-50 to-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-dancing text-3xl md:text-5xl text-pink-600 mb-4">
            Share Your Reaction!
          </h2>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            Record a video message telling me how you liked this website! Your reaction will make my day 💕
          </p>
        </div>

        {!showRecorder ? (
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <button
              onClick={() => setShowRecorder(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-poppins font-medium text-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <Video className="w-6 h-6" />
              <span>Record Your Reaction</span>
            </button>
          </div>
        ) : (
          <div className={`bg-white rounded-3xl shadow-2xl p-6 md:p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            {isSuccess ? (
              // Success State
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-dancing text-3xl text-green-600 mb-4">
                  Video Downloaded Successfully! 🎉
                </h3>
                <p className="font-poppins text-gray-600 mb-6">
                  Thank you {senderName}! Your video "{senderName}-rakhi-reaction-for-saksham.webm" has been downloaded.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                  <h4 className="font-poppins font-semibold text-blue-800 mb-3">
                    📱 Send it to Saksham:
                  </h4>
                  <div className="space-y-3">
                    <button
                      onClick={shareViaWhatsApp}
                      className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-poppins font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share via WhatsApp</span>
                    </button>
                    <p className="text-sm text-gray-600 font-poppins">
                      Or send the downloaded video file through any messaging app!
                    </p>
                  </div>
                </div>
                
                <p className="font-poppins text-sm text-gray-500">
                  This window will close automatically in a few seconds...
                </p>
              </div>
            ) : (
              <>
                {/* Video Recording Area */}
                <div className="mb-6">
                  <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4">
                    {!recordedVideo ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="w-full h-full object-cover"
                        style={{ transform: 'scaleX(-1)' }}
                      />
                    ) : (
                      <video
                        src={recordedVideo}
                        controls
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                    {!recordedVideo && !isRecording && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <div className="text-center">
                          <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500 font-poppins">Click "Start Recording" to begin</p>
                        </div>
                      </div>
                    )}
                    
                    {isRecording && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-2 animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm font-poppins">Recording...</span>
                      </div>
                    )}
                  </div>

                  {/* Recording Controls */}
                  <div className="flex justify-center space-x-4 mb-6">
                    {!recordedVideo && !isRecording && (
                      <button
                        onClick={startRecording}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-poppins font-medium transition-colors flex items-center space-x-2"
                      >
                        <Video className="w-5 h-5" />
                        <span>Start Recording</span>
                      </button>
                    )}
                    
                    {isRecording && (
                      <button
                        onClick={stopRecording}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-poppins font-medium transition-colors flex items-center space-x-2"
                      >
                        <Square className="w-5 h-5" />
                        <span>Stop Recording</span>
                      </button>
                    )}
                    
                    {recordedVideo && (
                      <button
                        onClick={resetRecording}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-poppins font-medium transition-colors flex items-center space-x-2"
                      >
                        <RotateCcw className="w-5 h-5" />
                        <span>Record Again</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Message Form */}
                {recordedVideo && (
                  <div className="border-t pt-6">
                    <h3 className="font-dancing text-2xl text-pink-600 mb-4">Ready to Share!</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-poppins text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-poppins text-gray-700 mb-2">Message (Optional)</label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell Saksham what you thought about the website..."
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={downloadAndShare}
                        disabled={!senderName.trim()}
                        className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-poppins font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download & Share</span>
                      </button>
                      
                      <button
                        onClick={() => setShowRecorder(false)}
                        className="px-6 py-3 border border-gray-300 rounded-xl font-poppins font-medium hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <p className="text-sm text-yellow-800 font-poppins text-center">
                        💡 <strong>How it works:</strong> Click "Download & Share" to save your video, then send it to Saksham via WhatsApp, Telegram, or any messaging app!
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
