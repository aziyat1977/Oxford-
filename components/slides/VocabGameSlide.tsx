import React, { useState, useEffect } from 'react';
import { SlideConfig, GameItem } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, User, DollarSign } from 'lucide-react';

interface VocabGameSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

const initialItems: GameItem[] = [
  { id: '1', text: 'Consumer', category: 'people' },
  { id: '2', text: 'Deals', category: 'money' },
  { id: '3', text: 'Discounts', category: 'money' },
  { id: '4', text: 'Purchaser', category: 'people' },
  { id: '5', text: 'Half-price', category: 'money' },
];

export const VocabGameSlide: React.FC<VocabGameSlideProps> = ({ slide, isActive }) => {
  const [items, setItems] = useState<GameItem[]>(initialItems);
  const [peopleBucket, setPeopleBucket] = useState<GameItem[]>([]);
  const [moneyBucket, setMoneyBucket] = useState<GameItem[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Reset when slide becomes active
  useEffect(() => {
    if (!isActive) {
        setItems(initialItems);
        setPeopleBucket([]);
        setMoneyBucket([]);
        setIsComplete(false);
    }
  }, [isActive]);

  useEffect(() => {
      if (items.length === 0 && peopleBucket.length > 0) {
          setIsComplete(true);
      }
  }, [items, peopleBucket, moneyBucket]);

  const handleMove = (item: GameItem, target: 'people' | 'money') => {
      // Simple validation or allow wrong answers? Let's just move them for fluidity, 
      // but in a real app, we might check correctness.
      // Here we assume the user knows, or we can flash red if wrong.
      // Let's implement auto-correct behavior for this demo.
      
      if (item.category !== target) {
          // Shake animation logic could go here
          return;
      }

      setItems(prev => prev.filter(i => i.id !== item.id));
      if (target === 'people') setPeopleBucket(prev => [...prev, item]);
      if (target === 'money') setMoneyBucket(prev => [...prev, item]);
  };

  return (
    <div className="flex flex-col h-full p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-heading font-bold text-center mb-2">Vocabulary Sort</h2>
      <p className="text-center text-slate-400 mb-8">Click to categorize the words correctly.</p>

      <div className="flex-1 grid grid-cols-2 gap-8 mb-8">
          {/* People Bucket */}
          <div className="bg-indigo-900/20 border-2 border-dashed border-indigo-500/50 rounded-2xl p-6 flex flex-col items-center relative overflow-hidden transition-colors hover:bg-indigo-900/30">
              <User className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-indigo-300 mb-4">People</h3>
              <div className="w-full flex flex-wrap gap-2 justify-center">
                  <AnimatePresence>
                      {peopleBucket.map(item => (
                          <motion.div
                              key={item.id}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                          >
                              {item.text}
                          </motion.div>
                      ))}
                  </AnimatePresence>
              </div>
          </div>

          {/* Money Bucket */}
          <div className="bg-emerald-900/20 border-2 border-dashed border-emerald-500/50 rounded-2xl p-6 flex flex-col items-center transition-colors hover:bg-emerald-900/30">
              <DollarSign className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Money / Price</h3>
              <div className="w-full flex flex-wrap gap-2 justify-center">
                   <AnimatePresence>
                      {moneyBucket.map(item => (
                          <motion.div
                              key={item.id}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                          >
                              {item.text}
                          </motion.div>
                      ))}
                  </AnimatePresence>
              </div>
          </div>
      </div>

      {/* Word Bank */}
      <div className="min-h-[100px] flex flex-wrap justify-center items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <AnimatePresence>
            {items.map(item => (
                <motion.button
                    key={item.id}
                    layoutId={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform flex gap-2"
                    onClick={(e) => {
                        // Determine which side based on click position or simple alternation?
                        // Let's make the user click LEFT or RIGHT of the word in a desktop view,
                        // But strictly for this demo, we'll use two small buttons inside or just click to auto-sort (easy mode)
                        // Implementing specific target logic:
                        handleMove(item, item.category); 
                    }}
                >
                    {item.text}
                    {/* Visual Hint for demo purposes */}
                    <span className="text-xs opacity-50 block mt-1 uppercase tracking-tighter">
                        {item.category === 'people' ? '← People' : 'Money →'}
                    </span>
                </motion.button>
            ))}
          </AnimatePresence>
          
          {items.length === 0 && (
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }}
                className="flex flex-col items-center text-emerald-400"
              >
                  <Check className="w-10 h-10 mb-2" />
                  <span className="font-bold text-lg">All Sorted!</span>
              </motion.div>
          )}
      </div>
    </div>
  );
};