
import React, { useState } from 'react';
import { SlideConfig, QuizQuestion } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../Button';

interface QuizSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const QuizSlide: React.FC<QuizSlideProps> = ({ slide, isActive }) => {
  const questions: QuizQuestion[] = slide.content?.questions || [];
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentQ].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6 w-full">
      <div className="w-full mb-8">
        <div className="flex justify-between items-end mb-2">
            <h2 className="text-3xl font-heading font-bold text-white">{slide.title}</h2>
            <span className="text-slate-400 font-mono">Q{currentQ + 1}/{questions.length}</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
            />
        </div>
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
            key={currentQ}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: isActive ? 1 : 0 }}
            exit={{ x: -50, opacity: 0 }}
            className="w-full bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl"
        >
            <h3 className="text-2xl font-bold mb-8 text-white leading-relaxed">
                {questions[currentQ].question}
            </h3>

            <div className="space-y-4">
                {questions[currentQ].options.map((option, idx) => {
                    let stateStyles = "bg-slate-700/50 border-slate-600 hover:bg-slate-700";
                    
                    if (isAnswered) {
                        if (idx === questions[currentQ].correctIndex) {
                            stateStyles = "bg-emerald-900/30 border-emerald-500 text-emerald-100";
                        } else if (idx === selectedOption) {
                            stateStyles = "bg-rose-900/30 border-rose-500 text-rose-100";
                        } else {
                            stateStyles = "opacity-50 grayscale";
                        }
                    } else if (selectedOption === idx) {
                        stateStyles = "bg-indigo-600 border-indigo-400 text-white";
                    }

                    return (
                        <motion.button
                            key={idx}
                            whileHover={!isAnswered ? { scale: 1.01 } : {}}
                            whileTap={!isAnswered ? { scale: 0.99 } : {}}
                            onClick={() => handleSelect(idx)}
                            className={`w-full p-4 rounded-xl border-2 text-left font-medium text-lg transition-all flex items-center justify-between ${stateStyles}`}
                        >
                            <span>{option}</span>
                            {isAnswered && idx === questions[currentQ].correctIndex && <CheckCircle className="text-emerald-400" />}
                            {isAnswered && idx === selectedOption && idx !== questions[currentQ].correctIndex && <XCircle className="text-rose-400" />}
                        </motion.button>
                    )
                })}
            </div>

            {isAnswered && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-6 bg-slate-900/50 rounded-xl p-4 border border-slate-700/50"
                >
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-bold text-indigo-300 block mb-1">Explanation</span>
                            <p className="text-slate-300 text-sm leading-relaxed">{questions[currentQ].explanation}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {isAnswered && currentQ < questions.length - 1 && (
                <div className="mt-8 flex justify-end">
                    <Button onClick={nextQuestion} icon={<ArrowRight />}>Next Question</Button>
                </div>
            )}
            
            {isAnswered && currentQ === questions.length - 1 && (
                <div className="mt-8 flex justify-center text-center">
                    <div className="text-xl font-bold text-emerald-400">
                        Quiz Complete! Score: {score}/{questions.length}
                    </div>
                </div>
            )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
