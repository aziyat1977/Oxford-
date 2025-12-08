import React, { useState } from 'react';
import { SlideConfig } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

interface ReadingSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const ReadingSlide: React.FC<ReadingSlideProps> = ({ slide, isActive }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isActive ? 0 : -20, opacity: isActive ? 1 : 0 }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-bold mb-4">
            <span>READING MISSION</span>
        </div>
        <h2 className="text-4xl font-heading font-bold mb-4">{slide.title}</h2>
        <p className="text-slate-400 text-lg">Scan the text. Find the motive.</p>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mock Text Representation */}
        <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: isActive ? 0 : -20, opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white text-slate-900 p-8 rounded-lg shadow-xl rotate-1 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 font-heading font-bold text-6xl select-none">PAGE 6</div>
            <h3 className="font-bold text-xl mb-4 text-indigo-700">The 700 Friend Challenge</h3>
            <p className="leading-relaxed mb-4">
                Rob Jones decided to undertake a massive project. He wanted to verify if his <span className="bg-yellow-200 px-1">Internet friends</span> were actually real people.
            </p>
            <p className="leading-relaxed text-slate-600 blur-[2px] hover:blur-none transition-all duration-300 cursor-text">
                He spent the year traveling to meet all 700 people. Some were surprised, but most welcomed him. In the process, he managed to gather significant donations for charity.
            </p>
        </motion.div>

        {/* Question Card */}
        <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
        >
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <h4 className="text-xl font-bold text-white mb-6">Why is Rob trying to meet all 700 friends?</h4>
                
                <div 
                    onClick={() => setIsRevealed(!isRevealed)}
                    className="relative group cursor-pointer"
                >
                    <div className={`p-6 rounded-xl border transition-all duration-500 ${isRevealed ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-slate-700/30 border-slate-600'}`}>
                        <div className="flex justify-between items-start mb-2">
                            <span className={`text-xs font-bold uppercase tracking-wider ${isRevealed ? 'text-emerald-400' : 'text-slate-500'}`}>
                                {isRevealed ? 'Answer' : 'Hidden Answer'}
                            </span>
                            {isRevealed ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
                        </div>
                        
                        <div className="relative overflow-hidden">
                            <p className={`text-lg transition-all duration-500 ${isRevealed ? 'text-white blur-none translate-y-0' : 'text-transparent blur-md translate-y-2'}`}>
                                To raise money for charity & prove internet friends are real!
                            </p>
                            
                            {!isRevealed && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">Click to Reveal</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};