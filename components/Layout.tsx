import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev 
}) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="w-screen h-screen relative flex flex-col bg-slate-900 overflow-hidden text-slate-100 font-sans selection:bg-indigo-500/30">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
         <div className="font-heading font-bold text-xl tracking-tight text-slate-400">
            ESL <span className="text-white">MasterClass</span>
         </div>
         <div className="text-sm font-mono text-slate-500">
            {currentSlide + 1} <span className="opacity-30">/</span> {totalSlides}
         </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div 
            className="h-full bg-gradient-to-r from-indigo-500 to-accent-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto h-full">
         {children}
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-50">
        <button 
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700 hover:border-slate-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button 
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="w-12 h-12 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/30 flex items-center justify-center text-white hover:bg-indigo-500 hover:scale-105 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px]" />
      </div>

    </div>
  );
};