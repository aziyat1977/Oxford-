
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
  QUIZ = 'QUIZ',
  MATCHING = 'MATCHING',
  REFLECTION = 'REFLECTION'
}

export enum VisualVariant {
  ABSTRACT_NET = 'ABSTRACT_NET',
  DATA_FLOW = 'DATA_FLOW',
  FLOATING_BOOK = 'FLOATING_BOOK',
  TIME_SPIRAL = 'TIME_SPIRAL',
  SOCIAL_SPHERES = 'SOCIAL_SPHERES',
  SHOPPING_CART = 'SHOPPING_CART',
  BLOCKS_TETRIS = 'BLOCKS_TETRIS',
  EXAM_BOARD = 'EXAM_BOARD',
  PUZZLE_PIECES = 'PUZZLE_PIECES',
  CONVERSATION = 'CONVERSATION'
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
  visual?: VisualVariant;
  content?: any; 
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
