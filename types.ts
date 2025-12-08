
export enum SlideType {
  INTRO = 'INTRO',
  STATS_CHART = 'STATS_CHART',
  INTERACTIVE_READING = 'INTERACTIVE_READING',
  GRAMMAR_TIMELINE = 'GRAMMAR_TIMELINE',
  FRIEND_CIRCLES = 'FRIEND_CIRCLES',
  TRANSITION = 'TRANSITION',
  VOCAB_GAME = 'VOCAB_GAME',
  GRAMMAR_TETRIS = 'GRAMMAR_TETRIS',
  CREATIVE_TASK = 'CREATIVE_TASK',
  // New Types
  QUIZ = 'QUIZ',
  MATCHING = 'MATCHING',
  REFLECTION = 'REFLECTION'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface SlideConfig {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: any; // Flexible payload for questions, pairs, etc.
}

export interface GameItem {
  id: string;
  text: string;
  category: 'people' | 'money';
}

export interface TimelineEvent {
  id: string;
  label: string;
  description: string;
  time: number;
  type: 'simple' | 'continuous' | 'perfect';
}
