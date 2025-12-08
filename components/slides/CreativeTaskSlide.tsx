import React from 'react';
import { SlideConfig } from '../../types';
import { motion } from 'framer-motion';
import { Clock, PenTool } from 'lucide-react';

interface CreativeTaskSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const CreativeTaskSlide: React.FC<CreativeTaskSlideProps> = ({ slide, isActive }) => {
  return (
    <div className="flex flex-col md:flex-row h-full max-w-6xl mx-auto items-center gap-12 p-8">
        <div className="flex-1">
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                className="w-full aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 shadow-2xl rotate-3"
             >
                 <div className="w-full h-full bg-slate-900 rounded-[22px] flex flex-col items-center justify-center p-8 text-center border border-white/10">
                    <h3 className="text-5xl font-heading font-black text-white mb-2 uppercase tracking-tighter">Buy <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Nothing</span><br/> Day</h3>
                    <div className="w-20 h-2 bg-white/20 my-6 rounded-full"></div>
                    <p className="text-slate-400 font-serif italic text-lg">"Escape the cycle of consumption"</p>
                 </div>
             </motion.div>
        </div>

        <div className="flex-1 space-y-8">
            <div>
                <motion.h2 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: isActive ? 0 : 50, opacity: isActive ? 1 : 0 }}
                    className="text-4xl font-bold mb-4 font-heading"
                >
                    Design Challenge
                </motion.h2>
                <p className="text-xl text-slate-300">Create a poster for an anti-consumerist holiday.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-accent-400" />
                    Success Checklist
                </h4>
                <ul className="space-y-3">
                    {[
                        "Create a catchy Slogan",
                        "Use a clear visual idea",
                        "Use exactly 2 State Verbs (e.g., 'We believe', 'It seems')"
                    ].map((item, i) => (
                        <motion.li 
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                            transition={{ delay: i * 0.2 + 0.5 }}
                            className="flex items-center gap-3 text-slate-300"
                        >
                            <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold border border-indigo-500/30">{i+1}</span>
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-4 bg-rose-900/20 px-6 py-4 rounded-lg border border-rose-500/30 text-rose-200"
            >
                <Clock className="w-6 h-6" />
                <span className="font-bold text-lg">Time Limit: 10 Minutes</span>
            </motion.div>
        </div>
    </div>
  );
};