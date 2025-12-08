
import React, { useState, useEffect } from 'react';
import { SlideConfig, MatchingPair } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface MatchingSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const MatchingSlide: React.FC<MatchingSlideProps> = ({ slide, isActive }) => {
  const originalPairs: MatchingPair[] = slide.content?.pairs || [];
  
  const [leftSide, setLeftSide] = useState<MatchingPair[]>([]);
  const [rightSide, setRightSide] = useState<MatchingPair[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isActive) {
        setLeftSide([...originalPairs].sort(() => Math.random() - 0.5));
        setRightSide([...originalPairs].sort(() => Math.random() - 0.5));
        setMatches(new Set());
        setSelectedLeft(null);
    }
  }, [isActive, slide]);

  const handleLeftClick = (id: string) => {
    if (matches.has(id)) return;
    setSelectedLeft(id);
  };

  const handleRightClick = (id: string) => {
    if (matches.has(id) || !selectedLeft) return;

    if (selectedLeft === id) {
        // Correct Match
        setMatches(prev => new Set(prev).add(id));
        setSelectedLeft(null);
    } else {
        // Wrong Match - Visual Feedback could go here (shake)
        setSelectedLeft(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-heading font-bold mb-2">{slide.title}</h2>
      <p className="text-slate-400 mb-10">Select an item on the left, then click its match on the right.</p>

      <div className="flex w-full gap-12">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
            {leftSide.map((item) => {
                const isMatched = matches.has(item.id);
                const isSelected = selectedLeft === item.id;
                
                return (
                    <motion.button
                        key={`L-${item.id}`}
                        layout
                        onClick={() => handleLeftClick(item.id)}
                        disabled={isMatched}
                        className={`w-full p-4 rounded-xl border-2 text-left font-bold transition-all relative overflow-hidden ${
                            isMatched 
                            ? 'bg-slate-800 border-slate-800 text-slate-600 opacity-50' 
                            : isSelected 
                                ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg scale-105 z-10' 
                                : 'bg-slate-800/50 border-slate-700 hover:border-slate-500 text-slate-200'
                        }`}
                    >
                        {item.left}
                        {isMatched && <Check className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />}
                    </motion.button>
                );
            })}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
            {rightSide.map((item) => {
                const isMatched = matches.has(item.id);
                
                return (
                    <motion.button
                        key={`R-${item.id}`}
                        layout
                        onClick={() => handleRightClick(item.id)}
                        disabled={isMatched}
                        className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all relative ${
                            isMatched 
                            ? 'bg-slate-800 border-slate-800 text-slate-600 opacity-50' 
                            : selectedLeft
                                ? 'bg-slate-700 border-slate-500 text-white cursor-pointer hover:bg-slate-600'
                                : 'bg-slate-800/50 border-slate-700 text-slate-400'
                        }`}
                    >
                        {item.right}
                    </motion.button>
                );
            })}
        </div>
      </div>

      {matches.size === originalPairs.length && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mt-8 bg-emerald-500 text-white px-8 py-2 rounded-full font-bold shadow-lg"
          >
              All Matched! Great Job!
          </motion.div>
      )}
    </div>
  );
};
