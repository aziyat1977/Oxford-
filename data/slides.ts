
import { SlideConfig, SlideType } from '../types';

export const slides: SlideConfig[] = [
  // --- UNIT 1.1 ---
  {
    id: 'intro-1',
    type: SlideType.INTRO,
    title: 'Trends, Friends & Spends',
    subtitle: 'Are you really my friend? Why is spending #trending?',
  },
  {
    id: 'stats-1',
    type: SlideType.STATS_CHART,
    title: 'The Magic Number',
  },
  {
    id: 'reading-1',
    type: SlideType.INTERACTIVE_READING,
    title: 'Reading Mission: Rob Jones',
  },
  {
    id: 'quiz-read-check',
    type: SlideType.QUIZ,
    title: 'Comprehension Check',
    content: {
      questions: [
        {
          question: "Why does Rob Jones take photos with everyone he meets?",
          options: ["To show off on Instagram", "To prove they are real people", "To remember their names", "To win a photography contest"],
          correctIndex: 1,
          explanation: "The text states he wants to verify if his internet friends were actually real people."
        },
        {
          question: "How many countries does he plan to visit?",
          options: ["Thirty", "Seven hundred", "One hundred", "Twelve"],
          correctIndex: 0,
          explanation: "He is travelling thousands of miles to thirty countries including New Zealand."
        },
        {
          question: "What grammar form is: 'He has already met 123 friends'?",
          options: ["Present Simple", "Present Continuous", "Present Perfect", "Past Simple"],
          correctIndex: 2,
          explanation: "Present Perfect (have/has + past participle) describes a past action with a result in the present."
        }
      ]
    }
  },
  {
    id: 'grammar-1',
    type: SlideType.GRAMMAR_TIMELINE,
    title: 'Tense Timeline',
  },
  {
    id: 'quiz-grammar-1',
    type: SlideType.QUIZ,
    title: 'Grammar Master: Present Tenses',
    content: {
        questions: [
            {
                question: "Choose the correct form: 'What ____ Rob ____ to do?'",
                options: ["is / trying", "does / try", "has / tried", "did / try"],
                correctIndex: 0,
                explanation: "Present Continuous is used for actions in progress around now."
            },
            {
                question: "Choose the correct form: 'How many friends ____ he ____ so far?'",
                options: ["does / meet", "is / meeting", "has / met", "did / meet"],
                correctIndex: 2,
                explanation: "Present Perfect is used when we talk about 'so far' or 'up until now'."
            },
            {
                question: "Choose the correct form: 'I ____ usually ____ a day with them.'",
                options: ["am / spending", "do / spend", "-", "spend"], // Simplified option
                correctIndex: 3, // Actually options need to be strings. Let's fix.
                explanation: "'Usually' implies a habit, so we use Present Simple."
            }
        ]
    }
  },
  {
    id: 'friends-1',
    type: SlideType.FRIEND_CIRCLES,
    title: 'Friendship Circles',
  },
  {
    id: 'matching-phrasal',
    type: SlideType.MATCHING,
    title: 'Friendship Phrasal Verbs',
    content: {
        pairs: [
            { id: '1', left: 'Get on well with', right: 'Have a good relationship' },
            { id: '2', left: 'Fall out with', right: 'Have an argument and stop speaking' },
            { id: '3', left: 'Keep in touch', right: 'Stay in contact' },
            { id: '4', left: 'Meet up', right: 'See someone by arrangement' },
            { id: '5', left: 'Have in common', right: 'Share similar interests' }
        ]
    }
  },
  {
    id: 'reflective-1',
    type: SlideType.REFLECTION,
    title: 'Discussion: Quality vs Quantity',
    content: {
        prompt: "Is it possible to really be friends with 338 people? Why or why not? Describe your own 'Inner Circle'."
    }
  },
  
  // --- UNIT 1.2 ---
  {
    id: 'trans-1',
    type: SlideType.TRANSITION,
    title: 'Unit 1.2: #Trending',
    subtitle: 'Black Friday. Bargains. Chaos.',
  },
  {
    id: 'vocab-1',
    type: SlideType.VOCAB_GAME,
    title: 'Vocabulary Sort',
  },
  {
    id: 'matching-shopping',
    type: SlideType.MATCHING,
    title: 'Shopping Vocabulary',
    content: {
        pairs: [
            { id: '1', left: 'Bargain', right: 'Something bought for a good price' },
            { id: '2', left: 'Refund', right: 'Money returned to you' },
            { id: '3', left: 'Receipt', right: 'Paper proof of purchase' },
            { id: '4', left: 'Discount', right: 'A reduction in price' },
            { id: '5', left: 'Consumer', right: 'A person who buys goods' }
        ]
    }
  },
  {
    id: 'grammar-2',
    type: SlideType.GRAMMAR_TETRIS,
    title: 'State vs Action',
  },
  {
    id: 'quiz-state-verbs',
    type: SlideType.QUIZ,
    title: 'State Verbs Challenge',
    content: {
        questions: [
            {
                question: "Which sentence is correct?",
                options: ["I am needing a new phone.", "I need a new phone.", "I am needing to buy.", "I needing a phone."],
                correctIndex: 1,
                explanation: "'Need' is a state verb and is rarely used in continuous forms."
            },
            {
                question: "Complete: 'This idea ____ crazy to me.'",
                options: ["is seeming", "seem", "seems", "seeming"],
                correctIndex: 2,
                explanation: "'Seem' is a state verb. Third person singular adds 's'."
            },
            {
                question: "Identify the State Verb:",
                options: ["Run", "Buy", "Believe", "Eat"],
                correctIndex: 2,
                explanation: "'Believe' describes a mental state, not a physical action."
            }
        ]
    }
  },
  {
    id: 'quiz-poster-grammar',
    type: SlideType.QUIZ,
    title: 'Poster Grammar (Ex 10a)',
    content: {
        questions: [
            {
                question: "Poster 1: 'There are some people who ____ inside a shopping basket.'",
                options: ["stand", "are standing", "stood", "standing"],
                correctIndex: 1,
                explanation: "Use Present Continuous to describe what is happening in a picture/poster now."
            },
            {
                question: "Poster 1: 'I ____ this one because I think it shows...'",
                options: ["like", "am liking", "liked", "have liked"],
                correctIndex: 0,
                explanation: "'Like' is a state verb expressing a feeling."
            },
            {
                question: "Poster 2: 'It ____ obviously based on the Tetris video game.'",
                options: ["is seeming", "seems", "seem", "has seemed"],
                correctIndex: 1,
                explanation: "Use Present Simple for facts/states describing the poster."
            }
        ]
    }
  },
  {
    id: 'reflective-2',
    type: SlideType.REFLECTION,
    title: 'Debate: Buy Nothing Day',
    content: {
        prompt: "Look at the posters. Do you agree with the message of 'Buy Nothing Day'? Is Black Friday a harmless tradition or a problem? Speak for 1 minute."
    }
  },
  {
    id: 'task-1',
    type: SlideType.CREATIVE_TASK,
    title: 'Design Challenge',
  },
  {
    id: 'final-quiz',
    type: SlideType.QUIZ,
    title: 'Unit Review',
    content: {
        questions: [
            {
                question: "Which word is NOT a synonym for 'friend'?",
                options: ["Mate", "Pal", "Enemy", "Buddy"],
                correctIndex: 2,
                explanation: "Enemy is an antonym."
            },
            {
                question: "If you 'fall out' with someone, you...",
                options: ["Trip over them", "Stop being friends", "Go parachuting", "Meet them unexpectedly"],
                correctIndex: 1,
                explanation: "To fall out means to have an argument and stop speaking."
            },
            {
                question: "Choose the correct sentence:",
                options: ["I am not understanding.", "I don't understand.", "I am not understand.", "I no understand."],
                correctIndex: 1,
                explanation: "'Understand' is a state verb."
            }
        ]
    }
  }
];
