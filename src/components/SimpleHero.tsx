import { motion } from 'framer-motion'
import { BRAND_NAME } from '../globals'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <div className="container mx-auto px-5 text-center">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="mb-6 text-4xl font-bold md:text-6xl gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {BRAND_NAME}
          </motion.h1>

          <motion.p 
            className="text-xl text-content-white max-w-2xl mx-auto subtle-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Handmade Tasmanian Clothing made with ❤️
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}