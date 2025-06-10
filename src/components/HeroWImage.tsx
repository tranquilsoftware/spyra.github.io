// import { Button } from "../components/ui/Button"
import { motion } from 'framer-motion'
import { BRAND_NAME } from '../globals'
// import { useNavigate } from 'react-router-dom'

export default function Hero() {
  
  return (
    //     <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent">

    <section className="relative w-full h-screen flex py-24 overflow-hidden bg-transparent">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <motion.div 
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 
            className="mb-6 text-4xl font-bold md:text-6xl gradient-text text-left w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {BRAND_NAME}
          </motion.h1>

          <motion.p 
            className="mb-8 text-xl text-white text-left w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Handmade Tasmanian Clothing made with ❤️
          </motion.p>

          {/* Buttons section - keeping it commented as requested */}
          {/* 
          <motion.div 
            className="flex justify-start gap-4 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Button
              className="bg-gradient-to-r from-primary-light to-accent hover:from-primary hover:to-accent-dark text-white"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </Button>

            <Button
              variant="outline"
              className="border-border bg-white/5 text-white hover:bg-white/10"
              onClick={() => navigate('/quote-builder')}
            >
              Build your Quote
            </Button>
          </motion.div>
          */}
        </motion.div>

        {/* Image placeholder */}
        <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gray-800/50 rounded-lg h-96 w-full flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </motion.div>


        {/* Googly Eye */}
        {/* <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <GooglyEye 
              size={5120} 
              eyeColor="rgba(255, 255, 255, 0.1)" 
              pupilColor="#ffffff"
              className="border-2 border-white/20 rounded-full p-8 backdrop-blur-sm"
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse" />
          </div>
        </motion.div> */}

        
      </div>
    </section>
  )
}