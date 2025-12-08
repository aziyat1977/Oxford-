import React from 'react';
import { SlideConfig } from '../../types';
import { motion } from 'framer-motion';

interface FriendCirclesSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const FriendCirclesSlide: React.FC<FriendCirclesSlideProps> = ({ slide, isActive }) => {
  
  const circles = [
    { title: "Inner Circle", desc: "Get on well with", r: 80, color: "stroke-emerald-500", text: "text-emerald-400", delay: 0.2 },
    { title: "Outer Circle", desc: "Keep in touch with", r: 160, color: "stroke-indigo-500", text: "text-indigo-400", delay: 0.5 },
    { title: "The Void", desc: "Lost touch / Fell out", r: 240, color: "stroke-slate-600", text: "text-slate-500", delay: 0.8 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      <h2 className="text-4xl font-heading font-bold mb-12 relative z-10 text-white">Friendship Phrases</h2>
      
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {circles.map((circle, idx) => (
            <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 1, delay: circle.delay, type: 'spring' }}
                className={`absolute rounded-full border-2 ${circle.color} border-dashed flex items-start justify-center pt-4 backdrop-blur-[1px]`}
                style={{ width: circle.r * 2, height: circle.r * 2 }}
            >
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ delay: circle.delay + 0.5 }}
                    className="text-center -mt-10 bg-slate-900 px-2 rounded-lg"
                >
                    <div className={`font-bold ${circle.text}`}>{circle.title}</div>
                    <div className="text-xs text-slate-300 whitespace-nowrap">{circle.desc}</div>
                </motion.div>
            </motion.div>
        ))}
        
        {/* Center ME */}
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: isActive ? 1 : 0 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-slate-900 shadow-xl z-20"
        >
            ME
        </motion.div>
      </div>

      <motion.button
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="mt-8 px-6 py-3 border border-slate-600 rounded-full text-slate-300 hover:text-white hover:border-white transition-colors relative z-10"
         onClick={() => window.alert("Tip for students: Draw concentric circles and place your friends' names!")}
      >
        ✏️ Student Activity Task
      </motion.button>
    </div>
  );
};