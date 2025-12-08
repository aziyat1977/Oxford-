import React from 'react';
import { SlideConfig } from '../../types';
import { motion } from 'framer-motion';

interface IntroSlideProps {
  slide: SlideConfig;
  isActive: boolean;
  isTransition?: boolean;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ slide, isActive, isTransition = false }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 relative z-10">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6"
      >
         <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-4 ${isTransition ? 'bg-accent-500/20 text-accent-400' : 'bg-indigo-500/20 text-indigo-300'}`}>
            {isTransition ? 'NEXT UNIT' : 'UNIT 1.1 & 1.2'}
         </span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="font-heading text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400 mb-8 max-w-4xl leading-tight"
      >
        {slide.title}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed"
      >
        {slide.subtitle}
      </motion.p>
      
      {!isTransition && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ delay: 1 }}
            className="mt-12 text-sm text-slate-500"
        >
            Press Arrow Keys or Use Controls to Navigate
        </motion.div>
      )}
    </div>
  );
};