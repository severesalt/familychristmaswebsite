import { motion } from 'framer-motion'

const WashiTape = ({ position = 'top-left' }) => {
  const getPositionStyles = () => {
    switch (position) {
      case 'top-left':
        return { top: '-8px', left: '10px', width: '60px', height: '20px', transform: 'rotate(-20deg)' }
      case 'top-right':
        return { top: '-8px', right: '10px', width: '60px', height: '20px', transform: 'rotate(20deg)' }
      case 'bottom-left':
        return { bottom: '-8px', left: '10px', width: '60px', height: '20px', transform: 'rotate(20deg)' }
      case 'bottom-right':
        return { bottom: '-8px', right: '10px', width: '60px', height: '20px', transform: 'rotate(-20deg)' }
      default:
        return { top: '-8px', left: '10px', width: '60px', height: '20px', transform: 'rotate(-20deg)' }
    }
  }

  const colors = [
    'rgba(255, 182, 193, 0.6)', // Pink
    'rgba(173, 216, 230, 0.6)', // Light blue
    'rgba(255, 255, 224, 0.6)', // Light yellow
    'rgba(221, 160, 221, 0.6)', // Plum
  ]

  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <motion.div
      className="absolute washi-tape"
      style={{
        ...getPositionStyles(),
        backgroundColor: color,
        zIndex: 50,
        borderRadius: '2px',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Washi tape texture pattern */}
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.3) 2px,
              rgba(255, 255, 255, 0.3) 4px
            )
          `,
        }}
      />
    </motion.div>
  )
}

export default WashiTape

