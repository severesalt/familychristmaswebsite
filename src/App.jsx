import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PhotoGallery from './components/PhotoGallery'
import TimelineSlider from './components/TimelineSlider'
import './App.css'

function App() {
  const [photos, setPhotos] = useState([])
  const [selectedYear, setSelectedYear] = useState(null)
  const [years, setYears] = useState([])

  useEffect(() => {
    // Load photos from the FamilyChristmas directory
    const loadPhotos = async () => {
      try {
        // Try to load photos dynamically
        // First, try to fetch a list from the public directory
        // For now, we'll use a hardcoded list but structure it to be easily updatable
        
        // Photo names - update this list or use a build script to generate it
        const photoNames = [
          'IMG_5448.JPG', 'IMG_5449.JPG', 'IMG_5450.JPG', 'IMG_5451.JPG', 'IMG_5452.JPG',
          'IMG_5453.JPG', 'IMG_5454.JPG', 'IMG_5455.JPG', 'IMG_5456.JPG', 'IMG_5457.JPG',
          'IMG_5458.JPG', 'IMG_5459.JPG', 'IMG_5460.JPG', 'IMG_5461.JPG', 'IMG_5462.JPG',
          'IMG_5463.JPG', 'IMG_5464.JPG', 'IMG_5465.JPG', 'IMG_5466.JPG', 'IMG_5467.JPG',
          'IMG_5468.JPG', 'IMG_5469.JPG', 'IMG_5470.JPG', 'IMG_5471.JPG', 'IMG_5472.JPG',
          'IMG_5473.JPG', 'IMG_5474.JPG', 'IMG_5475.JPG', 'IMG_5476.JPG', 'IMG_5477.JPG',
          'IMG_5478.JPG', 'IMG_5479.JPG', 'IMG_5480.JPG', 'IMG_5481.JPG', 'IMG_5482.JPG',
          'IMG_5483.JPG', 'IMG_5484.JPG', 'IMG_5485.JPG', 'IMG_5486.JPG', 'IMG_5487.JPG',
          'IMG_5488.JPG', 'IMG_5489.JPG', 'IMG_5490.JPG', 'IMG_5492.JPG', 'IMG_5493.JPG',
          'IMG_5494.JPG', 'IMG_5495.JPG', 'IMG_5496.JPG', 'IMG_5496(1).JPG', 'IMG_5498.JPG',
          'IMG_5500.JPG', 'IMG_5501.JPG', 'IMG_5502.JPG', 'IMG_5503.JPG', 'IMG_5504.JPG',
          'IMG_5505.JPG', 'IMG_5506.JPG', 'IMG_5507.JPG', 'IMG_5508.JPG', 'IMG_5509.JPG',
          'IMG_5510.JPG', 'IMG_5511.JPG', 'IMG_5512.JPG', 'IMG_5513.JPG', 'IMG_5514.JPG',
          'IMG_5515.JPG', 'IMG_5516.JPG', 'IMG_5517.JPG', 'IMG_5518.JPG', 'IMG_5519.JPG',
          'IMG_5520.JPG', 'IMG_5521.JPG', 'IMG_5522.JPG', 'IMG_5523.JPG', 'IMG_5524.JPG',
          'IMG_5525.JPG', 'IMG_5526.JPG', 'IMG_5527.JPG', 'IMG_5528.JPG', 'IMG_5529.JPG',
          'IMG_5530.JPG', 'IMG_5531.JPG', 'IMG_5532.JPG', 'IMG_5533.JPG', 'IMG_5534.JPG',
          'IMG_5537.JPG', 'IMG_5541.JPG', 'IMG_5542.JPG', 'IMG_5543.JPG', 'IMG_5547.JPG',
          'IMG_5548.JPG', 'IMG_5555.JPG', 'IMG_5557.JPG', 'IMG_5561.JPG', 'IMG_5562.JPG',
          'IMG_5563.JPG', 'IMG_5564.JPG', 'IMG_5565.JPG', 'IMG_5568.JPG', 'IMG_5569.JPG',
          'IMG_5570.JPG', 'IMG_5579.JPG', 'IMG_5592.JPG', 'IMG_5593.JPG', 'IMG_5594.JPG',
          'IMG_5600.JPG', 'IMG_5601.JPG', 'IMG_5615.JPG', 'IMG_5619.JPG', 'IMG_5623.JPG',
          'IMG_5625.JPG', 'IMG_5631.JPG', 'IMG_5634.JPG', 'IMG_5635.JPG', 'IMG_5640.JPG',
          'IMG_5646.JPG', 'IMG_5652.JPG', 'IMG_5655.JPG', 'IMG_5656.JPG', 'IMG_5657.JPG',
          'IMG_5658.JPG', 'IMG_5659.JPG', 'IMG_5661.JPG', 'IMG_5662.JPG', 'IMG_5663.JPG',
          'IMG_5664.JPG', 'IMG_5665.JPG', 'IMG_5666.JPG', 'IMG_5667.JPG', 'IMG_5668.JPG',
          'IMG_5670.JPG', 'IMG_5671.JPG', 'IMG_5672.JPG', 'IMG_5675.JPG', 'IMG_5676.JPG',
          'IMG_5678.JPG', 'IMG_5679.JPG', 'IMG_5682.JPG', 'IMG_5684.JPG', 'IMG_5686.JPG',
          'IMG_5687.JPG', 'IMG_5689.JPG', 'IMG_5691.JPG', 'IMG_5694.JPG', 'IMG_5697.JPG',
          'IMG_5699.JPG', 'IMG_5701.JPG', 'IMG_5702.JPG', 'IMG_5705.JPG', 'IMG_5708.JPG',
          'IMG_5712.JPG', 'IMG_5713.JPG', 'IMG_5716.JPG', 'IMG_5717.JPG', 'IMG_5719.JPG',
          'IMG_5720.JPG', 'IMG_5722.JPG', 'IMG_5725.JPG', 'IMG_5726.JPG', 'IMG_5727.JPG',
          'IMG_5730.JPG', 'IMG_5731.JPG', 'IMG_5732.JPG', 'IMG_5734.JPG', 'IMG_5735.JPG',
          'IMG_5736.JPG', 'IMG_5737.JPG', 'IMG_5739.JPG', 'IMG_5740.JPG', 'IMG_5741.JPG',
          'IMG_5742.JPG', 'IMG_5743.JPG', 'IMG_5744.JPG', 'IMG_5745.JPG', 'IMG_5748.JPG',
          'IMG_5757.JPG', 'IMG_5758.JPG', 'IMG_5760.JPG', 'IMG_5762.JPG', 'IMG_5764.JPG',
          'IMG_5768.JPG', 'IMG_5775.JPG', 'IMG_5781.JPG', 'IMG_5790.JPG', 'IMG_5795.JPG',
          'IMG_5803.JPG', 'IMG_5803(1).JPG', 'IMG_5813.JPG', 'IMG_5817.JPG', 'IMG_5818.JPG',
          'IMG_5821.JPG', 'IMG_5822.JPG', 'IMG_5823.JPG', 'IMG_5824.JPG', 'IMG_5826.JPG',
          'IMG_5827.JPG', 'IMG_5828.JPG', 'IMG_5829.JPG', 'IMG_5834.JPG', 'IMG_5837.JPG',
          'IMG_5838.JPG', 'IMG_5841.JPG', 'IMG_5845.JPG', 'IMG_5848.JPG'
        ]

        const loadedPhotos = photoNames.map((name, index) => {
          // Extract year from filename or use current year as fallback
          // Try to parse date from filename if it follows YYYY-MM-DD pattern
          // Otherwise use a default year
          const currentYear = new Date().getFullYear()
          const year = 2024 // Default year - in production, extract from EXIF or filename
          
          // Spread dates across December 2024 for variety
          const dayOfMonth = 1 + (index % 31)
          const date = new Date(2024, 11, dayOfMonth) // December 2024
          
          return {
            id: index,
            src: `/FamilyChristmas/${name}`,
            name: name,
            year: year,
            date: date,
            rotation: (Math.random() - 0.5) * 6, // Random rotation between -3 and 3 degrees
            x: Math.random() * 100, // Random horizontal position
            y: Math.random() * 100, // Random vertical position
          }
        })

        setPhotos(loadedPhotos)
        
        // Extract unique years
        const uniqueYears = [...new Set(loadedPhotos.map(p => p.year))].sort()
        setYears(uniqueYears)
        if (uniqueYears.length > 0) {
          setSelectedYear(uniqueYears[0])
        }
      } catch (error) {
        console.error('Error loading photos:', error)
      }
    }

    loadPhotos()
  }, [])

  const filteredPhotos = selectedYear 
    ? photos.filter(photo => photo.year === selectedYear)
    : photos

  return (
    <div className="min-h-screen paper-texture relative overflow-hidden">
      {/* Header */}
      <motion.header 
        className="text-center py-8 px-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-serif text-amber-900 mb-2 drop-shadow-sm">
          Digital Family Scrapbook
        </h1>
        <div className="w-32 h-1 bg-amber-700 mx-auto mt-4 rounded-full opacity-60"></div>
      </motion.header>

      {/* Photo Gallery */}
      <PhotoGallery photos={filteredPhotos} />

      {/* Timeline Slider */}
      <TimelineSlider 
        years={years}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        photos={photos}
      />
    </div>
  )
}

export default App

