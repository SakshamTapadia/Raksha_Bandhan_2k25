'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Palette, Download, RotateCcw } from 'lucide-react'

export default function RakhiDesigner() {
  const { ref, isVisible } = useScrollAnimation()
  const [isDesignerOpen, setIsDesignerOpen] = useState(false)
  const [selectedColors, setSelectedColors] = useState({
    base: '#ff6b9d',
    accent: '#4ecdc4',
    center: '#45b7d1',
    thread: '#f9ca24'
  })
  const [selectedShape, setSelectedShape] = useState('Classic Circle')
  const [selectedPattern, setSelectedPattern] = useState('Hearts')
  const [selectedSize, setSelectedSize] = useState('Classic')
  const [selectedStyle, setSelectedStyle] = useState('Modern Minimal')

  // Add this after the state declarations for debugging
  const handleShapeChange = (shape: string) => {
    console.log('Shape changed to:', shape)
    setSelectedShape(shape)
  }

  const handlePatternChange = (pattern: string) => {
    console.log('Pattern changed to:', pattern)
    setSelectedPattern(pattern)
  }

  const handleSizeChange = (size: string) => {
    console.log('Size changed to:', size)
    setSelectedSize(size)
  }

  const handleStyleChange = (style: string) => {
    console.log('Style changed to:', style)
    setSelectedStyle(style)
  }

  const colorPalettes = [
    { name: 'Sunset', colors: ['#ff6b9d', '#ff8e53', '#ff6b35', '#c44569'] },
    { name: 'Ocean', colors: ['#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'] },
    { name: 'Royal', colors: ['#a55eea', '#8e44ad', '#3742fa', '#2f3542'] },
    { name: 'Earth', colors: ['#8d6e63', '#a1887f', '#bcaaa4', '#d7ccc8'] },
    { name: 'Fire', colors: ['#ff5722', '#ff9800', '#ffc107', '#ffeb3b'] },
    { name: 'Garden', colors: ['#4caf50', '#8bc34a', '#cddc39', '#ffeb3b'] }
  ]

  const shapes = ['Classic Circle', 'Flower Petals', 'Hexagon', 'Star Shape']
  const patterns = ['Hearts', 'Stars', 'Sparkles', 'Dots']
  const sizes = ['Delicate', 'Classic', 'Bold']
  const styles = ['Modern Minimal', 'Traditional Rich', 'Elegant Luxury', 'Playful Fun']

  const resetDesign = () => {
    setSelectedColors({
      base: '#ff6b9d',
      accent: '#4ecdc4', 
      center: '#45b7d1',
      thread: '#f9ca24'
    })
    setSelectedShape('Classic Circle')
    setSelectedPattern('Hearts')
    setSelectedSize('Classic')
    setSelectedStyle('Modern Minimal')
  }

  const applyPalette = (palette: any) => {
    setSelectedColors({
      base: palette.colors[0],
      accent: palette.colors[1],
      center: palette.colors[2],
      thread: palette.colors[3]
    })
  }

  const downloadRakhi = () => {
    // Create a simple download functionality
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (ctx) {
      canvas.width = 200
      canvas.height = 200
      
      // Draw rakhi design
      ctx.fillStyle = selectedColors.base
      ctx.beginPath()
      ctx.arc(100, 100, 80, 0, 2 * Math.PI)
      ctx.fill()
      
      ctx.fillStyle = selectedColors.center
      ctx.beginPath()
      ctx.arc(100, 100, 40, 0, 2 * Math.PI)
      ctx.fill()
      
      // Download
      const link = document.createElement('a')
      link.download = 'my-rakhi-design.png'
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-dancing text-3xl md:text-5xl text-pink-600 mb-6">
            Design Your Special Rakhi
          </h2>
          <p className="font-poppins text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Create a unique, personalized rakhi for me and make this Raksha Bandhan even more special
          </p>
          
          <button
            onClick={() => setIsDesignerOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-poppins font-medium text-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Palette className="w-6 h-6" />
            <span>Design Your Rakhi</span>
          </button>
        </div>
      </div>

      {/* Rakhi Designer Modal */}
      {isDesignerOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-dancing text-2xl md:text-3xl text-purple-600">
                  Design your rakhi
                </h3>
                <button
                  onClick={() => setIsDesignerOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-600 text-center mb-8 font-poppins">
                Create a unique, personalised rakhi for me and send it to me.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Rakhi Preview */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-6 text-center sticky top-4">
                    <h4 className="font-poppins font-medium mb-4">Your Rakhi</h4>
                    <div className="relative mx-auto w-32 h-32 mb-4">
                      {/* Dynamic rakhi based on selections */}
                      {selectedShape === 'Classic Circle' && (
                        <div 
                          className="w-full h-full rounded-full border-4 flex items-center justify-center transition-all duration-300"
                          style={{ 
                            backgroundColor: selectedColors.base,
                            borderColor: selectedColors.thread,
                            borderWidth: selectedSize === 'Bold' ? '6px' : selectedSize === 'Delicate' ? '2px' : '4px'
                          }}
                        >
                          <div 
                            className="rounded-full flex items-center justify-center transition-all duration-300"
                            style={{ 
                              backgroundColor: selectedColors.center,
                              width: selectedSize === 'Bold' ? '70px' : selectedSize === 'Delicate' ? '50px' : '60px',
                              height: selectedSize === 'Bold' ? '70px' : selectedSize === 'Delicate' ? '50px' : '60px'
                            }}
                          >
                            {selectedPattern === 'Hearts' && (
                              <div className="grid grid-cols-2 gap-1">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="text-xs">💖</div>
                                ))}
                              </div>
                            )}
                            {selectedPattern === 'Stars' && (
                              <div className="grid grid-cols-2 gap-1">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="text-xs">⭐</div>
                                ))}
                              </div>
                            )}
                            {selectedPattern === 'Sparkles' && (
                              <div className="grid grid-cols-2 gap-1">
                                {[...Array(4)].map((_, i) => (
                                  <div key={i} className="text-xs">✨</div>
                                ))}
                              </div>
                            )}
                            {selectedPattern === 'Dots' && (
                              <div className="grid grid-cols-2 gap-1">
                                {[...Array(4)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-2 h-2 rounded-full transition-all duration-300"
                                    style={{ backgroundColor: selectedColors.accent }}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {selectedShape === 'Flower Petals' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div 
                            className="w-full h-full rounded-full border-4 flex items-center justify-center transition-all duration-300"
                            style={{ 
                              backgroundColor: selectedColors.base,
                              borderColor: selectedColors.thread,
                              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                            }}
                          >
                            <div 
                              className="w-12 h-12 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: selectedColors.center }}
                            >
                              <div className="text-xs">🌸</div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {selectedShape === 'Hexagon' && (
                        <div 
                          className="w-full h-full border-4 flex items-center justify-center transition-all duration-300"
                          style={{ 
                            backgroundColor: selectedColors.base,
                            borderColor: selectedColors.thread,
                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                          }}
                        >
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: selectedColors.center }}
                          >
                            <div className="text-xs">⬡</div>
                          </div>
                        </div>
                      )}
                      
                      {selectedShape === 'Star Shape' && (
                        <div 
                          className="w-full h-full border-4 flex items-center justify-center transition-all duration-300"
                          style={{ 
                            backgroundColor: selectedColors.base,
                            borderColor: selectedColors.thread,
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                          }}
                        >
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: selectedColors.center }}
                          >
                            <div className="text-lg">⭐</div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Style indicator */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-poppins mb-1">Style: {selectedStyle}</p>
                      <p className="text-xs text-gray-500 font-poppins">Size: {selectedSize}</p>
                    </div>
                    
                    <button 
                      onClick={downloadRakhi}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-poppins text-sm transition-colors flex items-center space-x-2 mx-auto"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Rakhi</span>
                    </button>
                  </div>
                </div>

                {/* Design Options */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Color Palettes */}
                  <div>
                    <h4 className="font-poppins font-medium mb-4 flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                      <span>Color Palettes</span>
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {colorPalettes.map((palette) => (
                        <button
                          key={palette.name}
                          onClick={() => applyPalette(palette)}
                          className="text-center p-3 rounded-lg border hover:border-purple-300 hover:bg-purple-50 transition-colors"
                        >
                          <div className="flex space-x-1 mb-2 justify-center">
                            {palette.colors.map((color, i) => (
                              <div
                                key={i}
                                className="w-4 h-4 rounded-full border border-gray-200"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 font-poppins">{palette.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Individual Colors */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(selectedColors).map(([key, color]) => (
                      <div key={key}>
                        <label className="block text-sm font-poppins text-gray-700 mb-2 capitalize">
                          {key} Color
                        </label>
                        <input
                          type="color"
                          value={color}
                          onChange={(e) => setSelectedColors(prev => ({
                            ...prev,
                            [key]: e.target.value
                          }))}
                          className="w-full h-10 rounded-lg border border-gray-200 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Shape and Pattern */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-poppins font-medium mb-3">Shape</h4>
                      <div className="space-y-2">
                        {shapes.map((shape) => (
                          <button
                            key={shape}
                            onClick={() => handleShapeChange(shape)}
                            className={`w-full p-3 rounded-lg border text-left font-poppins text-sm transition-colors ${
                              selectedShape === shape
                                ? 'bg-purple-100 border-purple-300 text-purple-700'
                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {shape}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-poppins font-medium mb-3">Pattern</h4>
                      <div className="space-y-2">
                        {patterns.map((pattern) => (
                          <button
                            key={pattern}
                            onClick={() => handlePatternChange(pattern)}
                            className={`w-full p-3 rounded-lg border text-left font-poppins text-sm transition-colors ${
                              selectedPattern === pattern
                                ? 'bg-purple-100 border-purple-300 text-purple-700'
                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {pattern}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Size and Style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-poppins font-medium mb-3">Size</h4>
                      <div className="space-y-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            className={`w-full p-3 rounded-lg border text-left font-poppins text-sm transition-colors ${
                              selectedSize === size
                                ? 'bg-purple-100 border-purple-300 text-purple-700'
                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-poppins font-medium mb-3">Style</h4>
                      <div className="space-y-2">
                        {styles.map((style) => (
                          <button
                            key={style}
                            onClick={() => handleStyleChange(style)}
                            className={`w-full p-3 rounded-lg border text-left font-poppins text-sm transition-colors ${
                              selectedStyle === style
                                ? 'bg-purple-100 border-purple-300 text-purple-700'
                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={resetDesign}
                      className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-poppins"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </button>
                    <button 
                      onClick={() => setIsDesignerOpen(false)}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-poppins font-medium transition-all duration-300"
                    >
                      View Gallery →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
