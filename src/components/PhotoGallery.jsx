import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import PolaroidPhoto from './PolaroidPhoto'
import StickyNote from './StickyNote'
import WashiTape from './WashiTape'

const PhotoGallery = ({ photos }) => {
  const [windowHeight, setWindowHeight] = useState(800)
  
  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Calculate proper spacing to prevent overlap
  const photosPerRow = 3
  const rowHeight = 400 // pixels per row
  const colWidth = 30 // percentage per column
  
  // Calculate total height needed
  const totalRows = Math.ceil(photos.length / photosPerRow)
  const containerHeight = Math.max(totalRows * rowHeight, windowHeight * 2)
  
  return (
    <div className="relative min-h-screen pb-40 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto relative">
        {/* Container for scattered photos */}
        <div className="relative" style={{ minHeight: `${containerHeight}px` }}>
          {photos.map((photo, index) => {
            // Calculate grid position with proper spacing
            const row = Math.floor(index / photosPerRow)
            const col = index % photosPerRow
            
            // Base position in grid
            const baseX = 10 + (col * colWidth) + (photo.x % 15 - 7.5) // Add variation but keep in bounds
            const baseY = 100 + (row * rowHeight) + (photo.y % 50 - 25) // Add variation but keep spacing
            
            return (
              <motion.div
                key={photo.id}
                className="absolute"
                style={{
                  left: `${Math.min(Math.max(baseX, 5), 70)}%`, // Clamp between 5% and 70%
                  top: `${baseY}px`, // Use pixels for vertical spacing
                  zIndex: index,
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: photo.rotation,
                }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.03,
                }}
              >
                {/* Washi tape decorations */}
                <WashiTape position="top-left" />
                <WashiTape position="top-right" />
                
                {/* Polaroid Photo */}
                <PolaroidPhoto photo={photo} />
                
                {/* Sticky Note */}
                <StickyNote 
                  photo={photo}
                  position={index % 3 === 0 ? 'top' : index % 3 === 1 ? 'bottom' : 'right'}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery

