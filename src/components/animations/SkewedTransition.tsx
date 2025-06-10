import { motion } from 'framer-motion';

export const SkewedTransition = () => {
  return (
    <div className="relative w-full h-32 mt-20 overflow-hidden">
      {/* Top Layer - Matches Hero background */}
      <motion.div 
        className="absolute inset-0 bg-background origin-bottom-left"
        initial={{ skewY: 0 }}
        animate={{ skewY: 3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Bottom Layer - Matches content background */}
      <motion.div 
        className="absolute inset-0 origin-bottom-left"
        initial={{ skewY: 0 }}
        animate={{ skewY: 3 }}
        style={{ translateY: '95%' }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      />
    </div>
  );
};