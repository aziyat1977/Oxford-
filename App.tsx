import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { SlideRenderer } from './components/SlideRenderer';
import { slides } from './data/slides';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <Layout 
      currentSlide={currentSlideIndex} 
      totalSlides={slides.length}
      onNext={nextSlide}
      onPrev={prevSlide}
    >
      {/* 
         We use AnimatePresence with a generic div to handle page transitions 
         But typically slide transitions are handled better by individual components animating in.
         However, for a global "slide" feel:
      */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
           <div 
             key={slide.id}
             className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === currentSlideIndex ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}`}
           >
              {/* Only render content if it's the active slide or adjacent (for performance/preload, though simplified here to just active) */}
              {Math.abs(currentSlideIndex - index) <= 1 && (
                 <SlideRenderer slide={slide} isActive={index === currentSlideIndex} />
              )}
           </div>
        ))}
      </div>
    </Layout>
  );
};

export default App;