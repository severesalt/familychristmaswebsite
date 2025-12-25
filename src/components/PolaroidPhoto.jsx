import { motion } from 'framer-motion'
import { useState } from 'react'

const PolaroidPhoto = ({ photo }) => {
  const [isHovered, setIsHovered] = useState(false)

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        rotate: photo.rotation + (Math.random() > 0.5 ? 2 : -2),
        zIndex: 1000,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ 
        transform: `rotate(${photo.rotation}deg)`,
      }}
    >
      {/* Polaroid frame */}
      <div 
        className={`
          bg-white p-2 shadow-polaroid
          ${isHovered ? 'shadow-polaroid-hover' : ''}
          transition-shadow duration-300
        `}
        style={{
          width: '280px',
          minHeight: '320px',
        }}
      >
        {/* Photo */}
        <div 
          className="bg-gray-200 overflow-hidden"
          style={{
            width: '100%',
            height: '240px',
            backgroundImage: `url(${photo.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img 
            src={photo.src}
            alt={photo.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't load
              e.target.style.display = 'none'
            }}
          />
        </div>
        
        {/* Polaroid caption area */}
        <div className="mt-2 px-2 pb-1">
          <p className="text-xs text-gray-600 font-handwriting">
            {formatDate(photo.date)}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default PolaroidPhoto

