import { motion } from 'framer-motion'

const StickyNote = ({ photo, position = 'top' }) => {
  const colors = ['#fef08a', '#fecdd3', '#bfdbfe'] // Yellow, Pink, Blue
  const color = colors[photo.id % colors.length]
  
  const memories = [
    "Such a beautiful day!",
    "Precious moments",
    "Love this memory",
    "Best day ever",
    "Family time",
    "Cherished memory",
    "So much fun!",
    "Perfect day",
  ]
  
  const memory = memories[photo.id % memories.length]
  
  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return { top: '-40px', left: '20px' }
      case 'bottom':
        return { bottom: '-40px', right: '20px' }
      case 'right':
        return { top: '50%', right: '-60px', transform: 'translateY(-50%)' }
      default:
        return { top: '-40px', left: '20px' }
    }
  }

  return (
    <motion.div
      className="absolute"
      style={{
        ...getPositionStyles(),
        zIndex: photo.id + 100,
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: -2 + (Math.random() * 4 - 2) }}
      transition={{ 
        duration: 0.4,
        delay: photo.id * 0.05 + 0.2,
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 0,
        zIndex: 2000,
      }}
    >
      <div
        className="shadow-sticky p-2 font-handwriting text-sm"
        style={{
          backgroundColor: color,
          width: '120px',
          minHeight: '80px',
          transform: `rotate(${-2 + (photo.id % 4)}deg)`,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="text-xs text-gray-800 leading-tight">
          {memory}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          {photo.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </p>
      </div>
    </motion.div>
  )
}

export default StickyNote

