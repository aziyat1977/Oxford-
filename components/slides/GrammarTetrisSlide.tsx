import React from 'react';
import { SlideConfig } from '../../types';
import { motion } from 'framer-motion';

interface GrammarTetrisSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const GrammarTetrisSlide: React.FC<GrammarTetrisSlideProps> = ({ slide, isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-heading font-bold mb-2">State vs. Action</h2>
        <p className="text-slate-400">The "Tetris" Rule: Do they stack or flow?</p>
      </div>

      <div className="flex gap-20 items-end">
        {/* Action Column */}
        <div className="flex flex-col items-center">
            <div className="mb-4 text-rose-400 font-bold tracking-widest uppercase text-sm">Action (Dynamic)</div>
            <div className="flex flex-col gap-1">
                {['RUN', 'EAT', 'PLAY'].map((word, i) => (
                    <motion.div
                        key={word}
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: isActive ? 0 : -200, opacity: isActive ? 1 : 0 }}
                        transition={{ delay: i * 0.2 + 0.2, type: 'spring', bounce: 0.2 }}
                        className="w-32 h-12 bg-rose-500 rounded flex items-center justify-center font-bold text-white shadow-[4px_4px_0px_rgba(0,0,0,0.3)] border-t border-l border-white/20"
                    >
                        {word}
                    </motion.div>
                ))}
            </div>
            <p className="mt-4 text-xs text-slate-500 max-w-[150px] text-center">Can be continuous (Running, Eating)</p>
        </div>

        {/* State Column */}
        <div className="flex flex-col items-center">
            <div className="mb-4 text-blue-400 font-bold tracking-widest uppercase text-sm">State (Stative)</div>
            <div className="flex flex-col gap-1 relative">
                {/* Visualizing that these don't stack/move the same way - they are blobs */}
                {['BELIEVE', 'KNOW', 'LIKE'].map((word, i) => (
                    <motion.div
                        key={word}
                        initial={{ scale: 0 }}
                        animate={{ scale: isActive ? 1 : 0 }}
                        transition={{ delay: i * 0.2 + 1 }}
                        className="w-32 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg z-10"
                    >
                        {word}
                    </motion.div>
                ))}
            </div>
             <p className="mt-4 text-xs text-slate-500 max-w-[150px] text-center">Never continuous. <br/> <span className="line-through opacity-50">I am knowing</span></p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ delay: 2 }}
        className="mt-16 bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-8"
      >
          <div className="text-right">
              <div className="text-rose-400 font-bold text-xl line-through decoration-2 decoration-rose-500">"I am knowing the answer"</div>
              <div className="text-xs text-slate-500">Incorrect Grammar</div>
          </div>
          <div className="h-10 w-px bg-slate-600"></div>
          <div className="text-left">
              <div className="text-emerald-400 font-bold text-xl">"I know the answer"</div>
              <div className="text-xs text-slate-500">Correct State Verb Usage</div>
          </div>
      </motion.div>
    </div>
  );
};