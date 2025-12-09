
import React from 'react';
import { VisualVariant } from '../types';
import { motion } from 'framer-motion';

interface Visual3DProps {
  variant: VisualVariant;
}

export const Visual3D: React.FC<Visual3DProps> = ({ variant }) => {
  
  const renderScene = () => {
    switch (variant) {
      case VisualVariant.ABSTRACT_NET:
        return (
          <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
             {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotateX: 360, rotateY: 360 }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[600px] h-[600px] border border-indigo-500/20 rounded-full"
                  style={{ 
                    borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                    transform: `rotateZ(${i * 45}deg)`
                  }}
                />
             ))}
             <div className="absolute w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-3xl animate-pulse-slow" />
          </div>
        );

      case VisualVariant.DATA_FLOW:
        return (
          <div className="absolute inset-0 flex items-center justify-center perspective-[1000px] pointer-events-none">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-end justify-center gap-4 opacity-20 p-20 transform rotate-y-[-20deg]">
                {[...Array(5)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ height: ['20%', '60%', '30%', '80%', '20%'] }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                        className="w-16 bg-gradient-to-t from-indigo-600 to-transparent rounded-t-xl"
                    />
                ))}
             </div>
          </div>
        );

      case VisualVariant.SOCIAL_SPHERES:
        return (
          <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
             {[...Array(6)].map((_, i) => (
                <motion.div
                   key={i}
                   className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/30 backdrop-blur-sm border border-white/10"
                   animate={{
                      x: [Math.cos(i) * 200, Math.sin(i) * 250, Math.cos(i) * 200],
                      y: [Math.sin(i) * 200, Math.cos(i) * 150, Math.sin(i) * 200],
                      z: [Math.sin(i) * 100, Math.cos(i) * -100, Math.sin(i) * 100],
                      scale: [1, 1.2, 1]
                   }}
                   transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
                />
             ))}
          </div>
        );

      case VisualVariant.FLOATING_BOOK:
        return (
           <div className="absolute inset-0 flex items-center justify-center perspective-[2000px] pointer-events-none opacity-20">
               <motion.div 
                 animate={{ rotateY: [0, 10, -10, 0], rotateX: [10, 0, 10] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                 className="relative w-[300px] h-[400px] bg-slate-800 rounded-l-lg border-r border-slate-700 shadow-2xl transform-style-3d"
                 style={{ transformStyle: 'preserve-3d' }}
               >
                  {/* Pages */}
                  {[...Array(5)].map((_, i) => (
                      <motion.div
                         key={i}
                         className="absolute inset-0 bg-slate-700 origin-left border border-slate-600 rounded-sm"
                         style={{ transform: `translateZ(${i * 2}px)` }}
                      />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center transform translate-z-[10px]">
                      <div className="text-6xl font-serif text-slate-600 font-bold">Aa</div>
                  </div>
               </motion.div>
           </div>
        );

      case VisualVariant.TIME_SPIRAL:
         return (
            <div className="absolute inset-0 flex items-center justify-center perspective-[1000px] overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="relative w-[800px] h-[800px]"
                >
                    {[...Array(12)].map((_, i) => (
                        <div 
                            key={i} 
                            className="absolute top-1/2 left-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent to-indigo-500/20 origin-left"
                            style={{ transform: `rotate(${i * 30}deg)` }}
                        />
                    ))}
                    <div className="absolute inset-0 rounded-full border border-indigo-500/10 border-dashed" />
                    <div className="absolute inset-20 rounded-full border border-indigo-500/10 border-dashed" />
                    <div className="absolute inset-40 rounded-full border border-indigo-500/10 border-dashed" />
                </motion.div>
            </div>
         );
      
      case VisualVariant.SHOPPING_CART:
          return (
            <div className="absolute inset-0 flex items-center justify-center perspective-[1000px] pointer-events-none opacity-15">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-20 h-20 border border-emerald-400/30 bg-emerald-900/10 backdrop-blur-sm"
                        initial={{ y: 600, x: Math.random() * 800 - 400, rotate: 0 }}
                        animate={{ y: -600, rotate: 360 }}
                        transition={{ 
                            duration: 10 + Math.random() * 10, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: Math.random() * 5 
                        }}
                    />
                ))}
            </div>
          );

      case VisualVariant.BLOCKS_TETRIS:
          return (
             <div className="absolute inset-0 flex items-center justify-center perspective-[1200px] pointer-events-none">
                 <div className="grid grid-cols-4 gap-4 transform rotate-x-60 rotate-z-[-20deg] opacity-20">
                     {[...Array(16)].map((_, i) => (
                         <motion.div
                            key={i}
                            className="w-24 h-24 bg-rose-500/20 border border-rose-400/30 rounded shadow-2xl"
                            animate={{ translateZ: [0, 40, 0] }}
                            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                         />
                     ))}
                 </div>
             </div>
          );
    
      case VisualVariant.EXAM_BOARD:
          return (
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
          );

      default:
        return null;
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
        >
            {renderScene()}
        </motion.div>
    </div>
  );
};
