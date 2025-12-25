import { motion } from 'framer-motion'
import PolaroidPhoto from './PolaroidPhoto'
import StickyNote from './StickyNote'
import WashiTape from './WashiTape'

const PhotoGallery = ({ photos }) => {
  return (
    <div className="relative min-h-screen pb-32 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto relative">
        {/* Container for scattered photos */}
        <div className="relative" style={{ minHeight: '200vh' }}>
          {photos.map((photo, index) => {
            // Use pre-calculated positions with some variation for overlap
            const baseX = (index % 4) * 25 + 5 + (photo.x % 10 - 5)
            const baseY = Math.floor(index / 4) * 30 + 5 + (photo.y % 10 - 5)
            
            return (
              <motion.div
                key={photo.id}
                className="absolute"
                style={{
                  left: `${Math.min(Math.max(baseX, 2), 75)}%`, // Clamp between 2% and 75%
                  top: `${Math.min(Math.max(baseY, 2), 95)}%`, // Clamp between 2% and 95%
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
                  delay: index * 0.05,
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

