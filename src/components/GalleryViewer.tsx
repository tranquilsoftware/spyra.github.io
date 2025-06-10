import { useState, useEffect, TouchEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollAnimation } from './animations/ScrollAnimation'
import { BRAND_NAME } from '../globals'

const images = Array.from({ length: 3 }, (_, i) => ({
  src: `/assets/images/${i + 1}.jpeg`,
  alt: `${BRAND_NAME} Images ${i + 1}`
}))

export function GalleryViewer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVertical, setIsVertical] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setIsVertical(img.naturalHeight > img.naturalWidth)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Touch handlers for mobile
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    }
    if (isRightSwipe) {
      handlePrev()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <ScrollAnimation direction="up" distance={50}>
      <div id="lookbook" className="relative w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold gradient-text text-center mb-12"
        >
          Lookbook
          <span className="sr-only">
            - {BRAND_NAME} Lookbook
          </span>
        </motion.h2>

        <div 
          className="relative w-full max-w-4xl mx-auto touch-pan-y" 
          style={{ 
            height: isVertical 
              ? 'calc(100vh - 200px)' 
              : 'calc(100vh - 400px)', 
            minHeight: '500px' 
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0"
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover rounded-[2rem] shadow-xl select-none"
                onLoad={handleImageLoad}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons - with larger touch targets for mobile */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full 
                     bg-white/20 backdrop-blur-md hover:bg-white/30 
                     transition-all duration-300 hover:scale-110
                     focus:outline-none focus:ring-2 focus:ring-primary/60
                     active:scale-95 touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full 
                     bg-white/20 backdrop-blur-md hover:bg-white/30 
                     transition-all duration-300 hover:scale-110
                     focus:outline-none focus:ring-2 focus:ring-primary/60
                     active:scale-95 touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* iOS-style dots indicator with better touch targets */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 p-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300
                          ${index === currentIndex ? 'bg-primary/60' : 'bg-primary/20'}
                          focus:outline-none focus:ring-2 focus:ring-primary/60
                          touch-manipulation`}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
