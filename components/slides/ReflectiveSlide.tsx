
import React, { useState, useEffect } from 'react';
import { SlideConfig } from '../../types';
import { motion } from 'framer-motion';
import { Mic, Square, Play, RefreshCw } from 'lucide-react';
import { Button } from '../Button';

interface ReflectiveSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const ReflectiveSlide: React.FC<ReflectiveSlideProps> = ({ slide, isActive }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute default
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRecording && timeLeft > 0) {
        interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
    } else if (timeLeft === 0) {
        setIsRecording(false);
    }
    return () => clearInterval(interval);
  }, [isRecording, timeLeft]);

  const toggleRecording = () => {
    if (!hasStarted) setHasStarted(true);
    setIsRecording(!isRecording);
  };

  const reset = () => {
    setIsRecording(false);
    setHasStarted(false);
    setTimeLeft(60);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6 text-center">
      <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/20 p-12 rounded-3xl backdrop-blur-sm">
        <h2 className="text-3xl font-heading font-bold mb-6 text-indigo-300">{slide.title}</h2>
        <p className="text-xl text-white mb-12 leading-relaxed max-w-2xl">
            {slide.content?.prompt || "Discuss the topic."}
        </p>

        {/* Visualizer Mockup */}
        <div className="h-24 flex items-center justify-center gap-1 mb-10">
            {[...Array(20)].map((_, i) => (
                <motion.div 
                    key={i}
                    animate={isRecording ? { 
                        height: [20, Math.random() * 80 + 20, 20],
                    } : { height: 10 }}
                    transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }}
                    className={`w-2 rounded-full ${isRecording ? 'bg-accent-400' : 'bg-slate-700'}`}
                />
            ))}
        </div>

        <div className="flex flex-col items-center gap-6">
            <div className="font-mono text-5xl font-bold tabular-nums tracking-widest text-white">
                00:{timeLeft.toString().padStart(2, '0')}
            </div>

            <div className="flex gap-4">
                <Button 
                    onClick={toggleRecording} 
                    variant={isRecording ? "secondary" : "primary"}
                    className="w-40"
                >
                    {isRecording ? <><Square className="w-4 h-4 fill-current"/> Stop</> : hasStarted ? <><Play className="w-4 h-4 fill-current"/> Resume</> : <><Mic className="w-4 h-4"/> Start</>}
                </Button>
                <Button onClick={reset} variant="ghost" icon={<RefreshCw />}>
                    Reset
                </Button>
            </div>
        </div>
      </div>
      <p className="mt-8 text-slate-500 text-sm">Use this timer to practice your speaking fluency.</p>
    </div>
  );
};
