import { motion } from 'framer-motion'
import { useState } from 'react'

const TimelineSlider = ({ years, selectedYear, onYearChange, photos = [] }) => {
  const [isDragging, setIsDragging] = useState(false)

  if (years.length === 0) return null

  const currentIndex = years.indexOf(selectedYear)
  const progress = years.length > 1 ? (currentIndex / (years.length - 1)) * 100 : 50

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value)
    if (years.length === 1) {
      onYearChange(years[0])
      return
    }
    const yearIndex = Math.round((value / 100) * (years.length - 1))
    const clampedIndex = Math.max(0, Math.min(yearIndex, years.length - 1))
    onYearChange(years[clampedIndex])
  }
  
  // Count photos for selected year
  const photoCount = photos.filter(p => p.year === selectedYear).length

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-amber-100/90 backdrop-blur-sm border-t-2 border-amber-300 shadow-lg z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-8 py-6">
        {/* Vintage ruler design */}
        <div className="relative">
          {/* Ruler markings */}
          <div className="absolute top-0 left-0 right-0 h-8 border-b border-amber-400">
            {years.map((year, index) => {
              const position = (index / (years.length - 1)) * 100
              return (
                <div
                  key={year}
                  className="absolute"
                  style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-px h-4 bg-amber-500"></div>
                  <div className="text-xs text-amber-800 font-serif mt-1 whitespace-nowrap">
                    {year}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Slider track - styled like a ribbon */}
          <div className="mt-12 relative">
            <div className="h-3 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 rounded-full shadow-inner border border-amber-400">
              {/* Ribbon texture */}
              <div 
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 10px,
                      rgba(139, 69, 19, 0.1) 10px,
                      rgba(139, 69, 19, 0.1) 11px
                    )
                  `,
                }}
              />
            </div>

            {/* Slider input */}
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleSliderChange}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="absolute top-0 w-full h-3 opacity-0 cursor-pointer z-10"
              style={{ 
                WebkitAppearance: 'none',
                appearance: 'none',
                pointerEvents: 'auto'
              }}
            />

            {/* Slider thumb - styled like a vintage marker */}
            <motion.div
              className="absolute top-1/2 w-6 h-6 bg-amber-600 rounded-full shadow-lg border-2 border-amber-800 z-20"
              style={{ 
                left: `${progress}%`, 
                transform: 'translate(-50%, -50%)',
                top: '50%'
              }}
              animate={{
                scale: isDragging ? 1.2 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-amber-400 rounded-full opacity-50"></div>
            </motion.div>
          </div>

          {/* Current year display */}
          <motion.div
            className="mt-6 text-center"
            key={selectedYear}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl font-serif text-amber-900">
              {selectedYear}
            </span>
            <span className="text-sm text-amber-700 ml-2 font-handwriting">
              {photoCount} {photoCount === 1 ? 'memory' : 'memories'}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default TimelineSlider

