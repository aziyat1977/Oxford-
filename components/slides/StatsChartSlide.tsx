import React, { useState } from 'react';
import { SlideConfig } from '../../types';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Button } from '../Button';

interface StatsChartSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

const data = [
  { name: '1990', value: 5, label: 'Real Life' },
  { name: '2005', value: 150, label: 'Early Social' },
  { name: '2010', value: 240, label: 'FB Growth' },
  { name: 'Now', value: 338, label: 'Current Avg' },
];

export const StatsChartSlide: React.FC<StatsChartSlideProps> = ({ slide, isActive }) => {
  const [showTruth, setShowTruth] = useState(false);
  const [activeBar, setActiveBar] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full p-8 md:px-24 gap-12">
      
      <div className="flex-1 space-y-8 z-10">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isActive ? 0 : -50, opacity: isActive ? 1 : 0 }}
          className="text-4xl font-heading font-bold text-white"
        >
          {slide.title}
        </motion.h2>
        
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: isActive ? 1 : 0 }}
           transition={{ delay: 0.3 }}
           className="text-lg text-slate-300 space-y-4"
        >
          <p>Facebook statistics claim the average adult has a specific number of "friends".</p>
          <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
             <div className="text-sm text-slate-400 mb-2 uppercase tracking-wide">The Magic Number</div>
             <div className="text-6xl font-bold text-primary-400 tabular-nums">
                {showTruth ? <span className="text-accent-400">338</span> : "???"}
             </div>
          </div>
        </motion.div>

        <div className="flex gap-4 pt-4">
             <Button onClick={() => setShowTruth(true)} variant={showTruth ? "secondary" : "outline"}>
                {showTruth ? "True Fact!" : "Reveal Answer"}
             </Button>
             <Button onClick={() => setShowTruth(false)} variant="ghost">Reset</Button>
        </div>
      </div>

      <div className="flex-1 w-full h-[400px] bg-slate-900/30 rounded-2xl p-6 border border-slate-700/50 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={showTruth && index === 3 ? '#2dd4bf' : '#6366f1'} 
                    onMouseEnter={() => setActiveBar(index)}
                    onMouseLeave={() => setActiveBar(null)}
                    fillOpacity={activeBar === index ? 1 : 0.7}
                    style={{ transition: 'all 0.3s' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        {!showTruth && (
            <div className="absolute inset-0 backdrop-blur-[2px] bg-slate-900/40 flex items-center justify-center rounded-2xl">
                <p className="text-xl font-bold text-white bg-slate-800 px-6 py-3 rounded-lg shadow-xl">
                    Chart Hidden
                </p>
            </div>
        )}
      </div>
    </div>
  );
};