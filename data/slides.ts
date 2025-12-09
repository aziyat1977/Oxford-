
import { SlideConfig, SlideType } from '../types';

export const slides: SlideConfig[] = [
  // ==========================================
  // UNIT 1.1: Trends & Friends
  // ==========================================
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
  // NEW 1.1 EXERCISE 1: Deep Reading Details
  {
    id: 'quiz-rob-details',
    type: SlideType.QUIZ,
    title: 'Deep Dive: Rob\'s Mission',
    content: {
      questions: [
        {
          question: "Where did Rob meet his girlfriend?",
          options: ["In Poland", "Online", "In the USA", "At school"],
          correctIndex: 1,
          explanation: "The text explicitly says: 'Rob met his Polish girlfriend online'."
        },
        {
          question: "How long have they been together?",
          options: ["One year", "Three years", "Since 2010", "Seven months"],
          correctIndex: 1,
          explanation: "Text reference: 'they've now been together for three years'."
        },
        {
          question: "Which relative did he visit recently?",
          options: ["A cousin in Poland", "An uncle in Germany", "A distant relative in the USA", "His sister in Scotland"],
          correctIndex: 2,
          explanation: "Text reference: 'he's also just visited a distant relative in the USA'."
        }
      ]
    }
  },
  {
    id: 'grammar-1',
    type: SlideType.GRAMMAR_TIMELINE,
    title: 'Tense Timeline',
  },
  // NEW 1.1 EXERCISE 2: Grammar Signal Words
  {
    id: 'match-grammar-signals',
    type: SlideType.MATCHING,
    title: 'Match Signals to Tenses',
    content: {
        pairs: [
            { id: '1', left: 'Currently', right: 'Present Continuous' },
            { id: '2', left: 'Usually', right: 'Present Simple' },
            { id: '3', left: 'So far', right: 'Present Perfect' },
            { id: '4', left: 'For three years', right: 'Present Perfect' },
            { id: '5', left: 'Generally', right: 'Present Simple' }
        ]
    }
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
                options: ["am / spending", "do / spend", "have / spent", "spend"], 
                correctIndex: 3, 
                explanation: "'Usually' implies a habit, so we use Present Simple: 'I usually spend'."
            }
        ]
    }
  },
  // NEW 1.1 EXERCISE 3: Question Formation (Page 7 Ex 4a)
  {
    id: 'quiz-question-forms',
    type: SlideType.QUIZ,
    title: 'Forming Questions',
    content: {
        questions: [
            {
                question: "Complete the question: 'Why ____ a photo of everyone he meets?'",
                options: ["does he take", "is he taking", "has he taken", "he takes"],
                correctIndex: 0,
                explanation: "Referring to a general habit/rule of his project: Present Simple 'does he take'."
            },
            {
                question: "Complete the question: 'What ____ Rob ____ from the process?'",
                options: ["is / learning", "does / learn", "has / learned", "did / learn"],
                correctIndex: 0,
                explanation: "He is currently in the middle of the process: Present Continuous 'is Rob learning'."
            },
            {
                question: "Complete the question: 'Which countries ____ he ____?'",
                options: ["does / visit", "is / visiting", "has / visited", "visits"],
                correctIndex: 2,
                explanation: "Asking about experience up to now: Present Perfect 'has he visited'."
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
  // NEW 1.1 EXERCISE 4: Vocabulary Context
  {
    id: 'quiz-vocab-context',
    type: SlideType.QUIZ,
    title: 'Vocabulary in Context',
    content: {
        questions: [
            {
                question: "'I trust her completely with my secrets.' This person is likely in your:",
                options: ["Inner Circle", "Outer Circle", "Facebook List", "Unknowns"],
                correctIndex: 0,
                explanation: "Trusting someone with secrets suggests a very close relationship (Inner Circle)."
            },
            {
                question: "'We used to talk, but I haven't heard from him in ages.' You have:",
                options: ["Fallen out", "Lost touch", "Met up", "Got on well"],
                correctIndex: 1,
                explanation: "'Lost touch' means to gradually stop communicating over time."
            },
            {
                question: "'We both love jazz and hiking.' You:",
                options: ["Have a lot in common", "Fall out", "Keep in touch", "Make friends"],
                correctIndex: 0,
                explanation: "Having shared interests means having things in common."
            }
        ]
    }
  },
  // NEW 1.1 EXERCISE 5: Friendship Logic
  {
    id: 'quiz-social-circle-logic',
    type: SlideType.QUIZ,
    title: 'Friendship Dynamics',
    content: {
        questions: [
            {
                question: "If you 'meet up' with someone, what are you doing?",
                options: ["Meeting them for the first time", "Seeing them by arrangement", "Talking on Skype", "Adding them on Facebook"],
                correctIndex: 1,
                explanation: "'Meet up' implies a planned physical meeting with someone you already know."
            },
            {
                question: "Which represents the most casual relationship?",
                options: ["A close friend", "A best friend", "A friend of a friend", "A partner"],
                correctIndex: 2,
                explanation: "A friend of a friend is the most distant/casual connection in this list."
            },
            {
                question: "To 'make friends' usually happens:",
                options: ["When you first meet", "After 10 years", "When you argue", "When you leave"],
                correctIndex: 0,
                explanation: "We 'make friends' at the beginning of a relationship."
            }
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
  
  // ==========================================
  // UNIT 1.2: #Trending
  // ==========================================
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
  // NEW 1.2 EXERCISE 1: Black Friday Listening Facts
  {
    id: 'quiz-black-friday',
    type: SlideType.QUIZ,
    title: 'Listening: Black Friday Facts',
    content: {
        questions: [
            {
                question: "How many times has 'Black Friday' been used on Twitter recently?",
                options: ["One million", "Two billion", "Five hundred", "Ten thousand"],
                correctIndex: 1,
                explanation: "According to the radio item, the expression has been used more than two billion times."
            },
            {
                question: "True or False: Black Friday only happens in the USA.",
                options: ["True", "False"],
                correctIndex: 1,
                explanation: "False. It started in the USA but has spread to other countries."
            },
            {
                question: "How much did shoppers spend last year?",
                options: ["$11 billion", "$2 billion", "$5 million", "$100"],
                correctIndex: 0,
                explanation: "Shoppers around the world spent more than 11 billion dollars."
            }
        ]
    }
  },
  // NEW 1.2 EXERCISE 2: Advanced Definitions
  {
    id: 'match-shopping-defs',
    type: SlideType.MATCHING,
    title: 'Advanced Shopping Terms',
    content: {
        pairs: [
            { id: '1', left: 'Purchaser', right: 'Formal word for buyer' },
            { id: '2', left: 'Special offer', right: 'Promotion like "Buy 1 Get 1 Free"' },
            { id: '3', left: 'Half-price', right: '50% Discount' },
            { id: '4', left: 'Items', right: 'Individual things to buy' },
            { id: '5', left: 'Deal', right: 'An agreement or bargain' }
        ]
    }
  },
  {
    id: 'grammar-2',
    type: SlideType.GRAMMAR_TETRIS,
    title: 'State vs Action',
  },
  // NEW 1.2 EXERCISE 3: State vs Action Nuance
  {
    id: 'quiz-state-nuance',
    type: SlideType.QUIZ,
    title: 'State vs Action Nuances',
    content: {
        questions: [
            {
                question: "I ____ (think) you are right about this.",
                options: ["think", "am thinking", "thinking", "have thought"],
                correctIndex: 0,
                explanation: "Here 'think' means 'have an opinion' (State), so Simple form is used."
            },
            {
                question: "I ____ (think) about moving to Spain next year.",
                options: ["think", "am thinking", "thinking", "thought"],
                correctIndex: 1,
                explanation: "Here 'think' means 'mental process/considering' (Action), so Continuous form is allowed."
            },
            {
                question: "The chef ____ (taste) the soup to check the salt.",
                options: ["tastes", "is tasting", "tasting", "has tasted"],
                correctIndex: 1,
                explanation: "Here 'taste' is an active physical action, so Continuous is used."
            }
        ]
    }
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
  // NEW 1.2 EXERCISE 4: State Verb Categories
  {
    id: 'match-state-cats',
    type: SlideType.MATCHING,
    title: 'Categorize State Verbs',
    content: {
        pairs: [
            { id: '1', left: 'Know / Understand', right: 'Thinking / Mental State' },
            { id: '2', left: 'Like / Hate', right: 'Feeling / Emotion' },
            { id: '3', left: 'Own / Belong', right: 'Possession' },
            { id: '4', left: 'Smell / Taste', right: 'Senses' },
            { id: '5', left: 'Seem / Appear', right: 'Experience' }
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
  // NEW 1.2 EXERCISE 5: Buy Nothing Day Comprehension
  {
    id: 'quiz-buy-nothing',
    type: SlideType.QUIZ,
    title: 'Buy Nothing Day Analysis',
    content: {
        questions: [
            {
                question: "What is the main purpose of 'Buy Nothing Day'?",
                options: ["To save money for Christmas", "To encourage people not to shop for one day", "To close all shops legally", "To sell more tetris games"],
                correctIndex: 1,
                explanation: "It is an event to encourage people to pause consumption."
            },
            {
                question: "Which verb fits? 'We ____ that shopping makes us happy.'",
                options: ["believe", "are believing", "believed", "have belief"],
                correctIndex: 0,
                explanation: "'Believe' is a state verb of opinion."
            },
            {
                question: "Which fits? 'Most of the time we ____ people to buy locally.'",
                options: ["prefer", "are preferring", "prefers", "preferred"],
                correctIndex: 0,
                explanation: "'Prefer' is a state verb."
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
    },
  },
  // ==========================================
  // UNIT TEST 1B
  // ==========================================
  {
    id: 'test-intro',
    type: SlideType.TRANSITION,
    title: 'Unit Test 1B',
    subtitle: 'Comprehensive Assessment for Units 1.1 & 1.2',
  },
  {
    id: 'test-1b-section-1-2',
    type: SlideType.QUIZ,
    title: 'Test 1B: Listening & Keywords',
    content: {
        context: "Listening Section (Transcript Unavailable). Please answer based on Sentence Stress rules. Content words (nouns, verbs, adjectives) are usually stressed. Function words (pronouns, prepositions) are usually unstressed.",
        questions: [
            {
                question: "Select the two stressed KEY words: 'I really like shopping for clothes on the internet.'",
                options: ["I / like", "really / clothes", "shopping / on", "for / internet"],
                correctIndex: 1,
                explanation: "'Really' (adverb) and 'clothes' (noun) carry the main new information here."
            },
            {
                question: "Select the two stressed KEY words: 'Fabio buys all his music online.'",
                options: ["buys / his", "Fabio / music", "all / online", "music / online"],
                correctIndex: 2,
                explanation: "'All' (quantity emphasis) and 'online' (location) are the key focus points."
            },
            {
                question: "Select the two stressed KEY words: 'The first thing to do is create an account.'",
                options: ["first / account", "thing / do", "create / is", "to / an"],
                correctIndex: 0,
                explanation: "'First' (sequence) and 'account' (object) are critical."
            },
            {
                question: "Select the two stressed KEY words: 'I only check my emails once a day.'",
                options: ["check / emails", "only / once", "I / day", "my / a"],
                correctIndex: 1,
                explanation: "'Only' and 'once' emphasize frequency and restriction."
            },
            {
                question: "Select the two stressed KEY words: 'Sarah designs websites and she loves her job.'",
                options: ["Sarah / she", "designs / job", "websites / loves", "and / her"],
                correctIndex: 2,
                explanation: "'Websites' and 'loves' carry the specific meaning."
            },
            {
                question: "Dialogue Stress: 'Is that your new SMARTPHONE?' Is 'smartphone' the key stressed word?",
                options: ["Yes", "No"],
                correctIndex: 0,
                explanation: "Yes, it is the new object being asked about."
            },
            {
                question: "Dialogue Stress: 'It LOOKS great.' Is 'looks' the key stressed word?",
                options: ["Yes", "No"],
                correctIndex: 1,
                explanation: "No. The adjective 'great' usually carries the stress here."
            },
            {
                question: "Dialogue Stress: 'Why do YOU like it?' Is 'you' the key stressed word?",
                options: ["Yes", "No"],
                correctIndex: 1,
                explanation: "No. The verb 'like' typically takes stress unless emphasizing the person specifically in contrast."
            },
            {
                question: "Dialogue Stress: 'I can listen to MUSIC on it.' Is 'music' the key stressed word?",
                options: ["Yes", "No"],
                correctIndex: 0,
                explanation: "Yes, 'music' is the key feature being discussed."
            },
            {
                question: "Dialogue Stress: 'I MIGHT get one soon.' Is 'might' the key stressed word?",
                options: ["Yes", "No"],
                correctIndex: 1,
                explanation: "No. 'I' or 'one' might be stressed, or 'soon'. 'Might' is auxiliary."
            }
        ]
    }
  },
  {
    id: 'test-1b-section-3-4',
    type: SlideType.QUIZ,
    title: 'Test 1B: Grammar & Vocabulary',
    content: {
        questions: [
            {
                question: "Complete: 'Nina is very popular so she ____ with everybody in her language class.'",
                options: ["gets on well", "meet up", "in touch", "up"],
                correctIndex: 0,
                explanation: "To 'get on well' means to have a good relationship."
            },
            {
                question: "Complete: 'We try to ____ with our best friends every weekend.'",
                options: ["fall out", "meet up", "get on", "have in common"],
                correctIndex: 1,
                explanation: "'Meet up' means to see someone by arrangement."
            },
            {
                question: "Complete: 'I ____ with my brother; he loves sport but I prefer reading.'",
                options: ["have a lot in common", "don't have a lot in common", "keep in touch", "get on well"],
                correctIndex: 1,
                explanation: "Since they have different interests (sport vs reading), they 'don't have a lot in common'."
            },
            {
                question: "Complete: 'Pat is feeling sad because he ____ with his friend Raul.'",
                options: ["has fallen out", "has met up", "has kept in touch", "has got on well"],
                correctIndex: 0,
                explanation: "To 'fall out' means to argue and stop being friends."
            },
            {
                question: "Complete: 'Since my girlfriend has been away, I ____ with her every day by email.'",
                options: ["have fallen out", "have kept in touch", "have met up", "have common"],
                correctIndex: 1,
                explanation: "Keeping in touch means maintaining contact."
            },
            {
                question: "Choose the correct form: 'Excuse me, but that bag ____ to me!'",
                options: ["belongs", "is belonging"],
                correctIndex: 0,
                explanation: "'Belong' is a state verb, not used in continuous."
            },
            {
                question: "Choose the correct form: 'We asked... but none of them ____ where the post office was.'",
                options: ["was knowing", "knew"],
                correctIndex: 1,
                explanation: "'Know' is a state verb."
            },
            {
                question: "Choose the correct form: 'Unfortunately, most local shops ____ more expensive than supermarkets.'",
                options: ["are", "are being"],
                correctIndex: 0,
                explanation: "Describing a general fact/state."
            },
            {
                question: "Choose the correct form: 'It was fabulous! We ____ it!'",
                options: ["really loved", "were really loving"],
                correctIndex: 0,
                explanation: "'Love' is a state verb."
            },
            {
                question: "Choose the correct form: 'If you ____ about getting a new car, you should take advice.'",
                options: ["think", "are thinking"],
                correctIndex: 1,
                explanation: "Here 'think' means the mental process of considering, so continuous is allowed."
            }
        ]
    }
  },
  {
    id: 'test-1b-section-4-continued',
    type: SlideType.QUIZ,
    title: 'Test 1B: Grammar Continued',
    content: {
        questions: [
            {
                question: "Choose correct form: 'She bought the red shirt because the blue one ____ as comfortable.'",
                options: ["didn't feel", "wasn't feeling"],
                correctIndex: 0,
                explanation: "'Feel' here describes the state/quality of the shirt."
            },
            {
                question: "Choose correct form: 'I ____ for some new shoes for work tomorrow.'",
                options: ["'ll be looking", "look"],
                correctIndex: 0,
                explanation: "Future continuous for an action in progress at a specific future time."
            },
            {
                question: "Choose correct form: 'Sorry, I must have been studying and I ____ the phone ring.'",
                options: ["didn't hear", "wasn't hearing"],
                correctIndex: 0,
                explanation: "'Hear' is a sense verb, usually simple form."
            },
            {
                question: "Choose correct form: '____ unusual that no one else has turned up?'",
                options: ["Doesn't it seem", "Isn't it seeming"],
                correctIndex: 0,
                explanation: "'Seem' is a state verb."
            },
            {
                question: "Choose correct form: 'If we ____ a bigger house, I'd fill it with furniture!'",
                options: ["owned", "were owning"],
                correctIndex: 0,
                explanation: "'Own' is a state verb of possession."
            }
        ]
    }
  },
  {
    id: 'test-1b-section-5',
    type: SlideType.QUIZ,
    title: 'Test 1B: Verb Forms',
    content: {
        questions: [
            {
                question: "Complete: 'I ____ (know) Ahmet for three years.'",
                options: ["know", "am knowing", "have known", "knew"],
                correctIndex: 2,
                explanation: "Present Perfect for duration up to now (for three years)."
            },
            {
                question: "Complete: 'Tariq isn't at home because he ____ (spend) all day at the beach.'",
                options: ["spends", "is spending", "has spent", "spent"],
                correctIndex: 1,
                explanation: "Present Continuous for action happening around now/today."
            },
            {
                question: "Complete: 'Ana's quite shy and so she ____ (not/like) loud people.'",
                options: ["don't like", "isn't liking", "doesn't like", "hasn't liked"],
                correctIndex: 2,
                explanation: "Present Simple for personality/state."
            },
            {
                question: "Complete: 'Our friend Yun travels a lot... and ____ (go) to eight different countries since he started.'",
                options: ["goes", "is going", "has gone", "went"],
                correctIndex: 2,
                explanation: "Present Perfect for experience/result."
            },
            {
                question: "Complete: 'Some people ____ (talk) with their friends every day.'",
                options: ["talk", "are talking", "have talked", "talking"],
                correctIndex: 0,
                explanation: "Present Simple for routine/habit."
            },
            {
                question: "Complete: 'Sorry, but you've missed Daniel - he ____ (just/go) for lunch.'",
                options: ["just goes", "is just going", "'s just gone", "just went"],
                correctIndex: 2,
                explanation: "Present Perfect with 'just' for very recent past actions."
            },
            {
                question: "Complete: 'Ellen ____ (call) last night to say she can't come.'",
                options: ["calls", "is calling", "has called", "called"],
                correctIndex: 3,
                explanation: "Past Simple because 'last night' is a finished time."
            },
            {
                question: "Complete: 'They had an argument yesterday and they ____ (not/speak) to each other since.'",
                options: ["don't speak", "aren't speaking", "haven't spoken", "didn't speak"],
                correctIndex: 2,
                explanation: "Present Perfect with 'since'."
            },
            {
                question: "Complete: 'I ____ (not/meet) my colleague Johanne because we only communicate by email.'",
                options: ["don't meet", "am not meeting", "haven't met", "didn't meet"],
                correctIndex: 2,
                explanation: "Present Perfect for experience up to now."
            },
            {
                question: "Complete: 'Fernando is at his French class. He ____ (learn) the language for his trip.'",
                options: ["learns", "'s learning", "has learned", "learned"],
                correctIndex: 1,
                explanation: "Present Continuous for action in progress."
            }
        ]
    }
  },
  {
    id: 'test-1b-section-6-reading',
    type: SlideType.QUIZ,
    title: 'Test 1B: Reading',
    content: {
        context: `Meeting again… on the internet!

For most people, the internet is part of our daily lives. There are so many things it can be used for; from shopping online to studying for a degree, or researching your family history. But for some people, sites like Facebook or YouTube have had a much more dramatic effect. Here are the stories of two people whose lives have been dramatically changed through the power of the internet.

Tomoko’s story
Tomoko was one of two twin girls born in Tokyo in 1987, but separated at birth and adopted by two different families. When she was four years old, Tomoko moved with her new parents to Scotland. Years later, while she was studying there at university, she received a strange phone call from one of her friends. It turned out that he’d had seen a girl that he’d thought was Tomoko on a YouTube video. The similarities were astonishing, apart from the fact that the other girl spoke with an Australian accent. When Tomoko watched the video for herself, she was amazed, and decided to find out more about this intriguing ‘double’. She eventually discovered that Jade, the girl in the film, is a singer, and had recently moved to the United States. Like Tomoko, she had been born in Tokyo, on exactly the same day. The girls finally met up in London a few months later, and medical tests proved that they are actually sisters.

Annie’s story
Imagine meeting your daughter again after a gap of sixty-eight years. Hard to believe, but that’s exactly what happened to Annie Walberg from Connecticut, USA. Annie was only sixteen when she gave birth to her precious daughter and was unable to keep her, so one-day-old Fiona was given to another family in 1945. For the next twenty-five years, Annie wrote hundreds of letters to the daughter she missed so badly, but Fiona’s new family thought it best not to pass them on to her. Naturally, as she grew up, Fiona assumed that her real mother didn’t want to know her or have any contact with her, but nearly seventy years later she received a friend request on Facebook … from an eighty-four-year-old! After many years, Annie had finally managed to find her daughter by searching the internet, and using the few details she knew about the family who had given her a new home. They have now met several times and are in regular contact. The lost letters cannot be replaced, but they can now talk about all the lost years.`,
        questions: [
            {
                question: "1. The internet has helped thousands of people find lost friends and relatives.",
                options: ["True", "False", "Not Given"],
                correctIndex: 2,
                explanation: "The text says 'for some people' and gives 'two' stories. It doesn't mention thousands."
            },
            {
                question: "2. Tomoko has made a video to try to find her sister.",
                options: ["True", "False", "Not Given"],
                correctIndex: 1,
                explanation: "False. Her friend saw a video of the *other* girl (Jade)."
            },
            {
                question: "3. It isn't certain yet if Jade is Tomoko's twin.",
                options: ["True", "False", "Not Given"],
                correctIndex: 1,
                explanation: "False. Medical tests proved that they are actually sisters."
            },
            {
                question: "4. Annie had been looking for her daughter for a long time.",
                options: ["True", "False", "Not Given"],
                correctIndex: 0,
                explanation: "True. She wrote letters for 25 years and searched the internet."
            },
            {
                question: "5. Fiona found her real mother through reading a letter.",
                options: ["True", "False", "Not Given"],
                correctIndex: 1,
                explanation: "False. She received a friend request on Facebook."
            },
            {
                question: "Complete: 'Tomoko has spent most of her life living in ____.'",
                options: ["Tokyo", "Scotland", "Australia", "London"],
                correctIndex: 1,
                explanation: "She moved to Scotland when she was four."
            },
            {
                question: "Complete: 'The girl in the video looked like Tomoko but her ____ was different.'",
                options: ["face", "hair", "accent", "name"],
                correctIndex: 2,
                explanation: "The text mentions she spoke with an Australian accent."
            },
            {
                question: "Complete: 'Jade travelled from ____ to meet Tomoko.'",
                options: ["Tokyo", "Scotland", "the United States", "Australia"],
                correctIndex: 2,
                explanation: "Jade had recently moved to the United States."
            },
            {
                question: "Complete: 'Fiona's ____ didn't let her read Annie's letters.'",
                options: ["real mother", "family / new family", "friend", "sister"],
                correctIndex: 1,
                explanation: "Fiona's new family thought it best not to pass them on."
            },
            {
                question: "Complete: 'It wasn't true that Annie wanted no ____ with her daughter.'",
                options: ["contact", "letters", "meeting", "internet"],
                correctIndex: 0,
                explanation: "Fiona assumed her mother didn't want contact, but it wasn't true."
            }
        ]
    }
  },
  {
    id: 'test-1b-section-8-9',
    type: SlideType.QUIZ,
    title: 'Test 1B: Dialogue & Word Forms',
    content: {
        questions: [
            {
                question: "Dialogue: '____ to recent research, sales are falling.'",
                options: ["According", "About", "If", "What"],
                correctIndex: 0,
                explanation: "According to..."
            },
            {
                question: "Dialogue: '____ are your views on e-books?'",
                options: ["How", "What", "Which", "Why"],
                correctIndex: 1,
                explanation: "What are your views..."
            },
            {
                question: "Dialogue: 'What are your ____ on e-books?'",
                options: ["views", "concerned", "convinced", "people"],
                correctIndex: 0,
                explanation: "Views (opinions)."
            },
            {
                question: "Dialogue: '____ you ask me, e-books are much more convenient.'",
                options: ["If", "What", "About", "Far"],
                correctIndex: 0,
                explanation: "If you ask me..."
            },
            {
                question: "Dialogue: '____ do you think about that?'",
                options: ["What", "How", "If", "Why"],
                correctIndex: 0,
                explanation: "What do you think..."
            },
            {
                question: "Dialogue: 'What do you think ____ that?'",
                options: ["about", "around", "over", "for"],
                correctIndex: 0,
                explanation: "Think about."
            },
            {
                question: "Dialogue: 'Some ____ like the feel of a book.'",
                options: ["people", "views", "convinced", "concerned"],
                correctIndex: 0,
                explanation: "Some people..."
            },
            {
                question: "Dialogue: 'As ____ as I'm concerned...'",
                options: ["far", "long", "much", "soon"],
                correctIndex: 0,
                explanation: "As far as I'm concerned..."
            },
            {
                question: "Dialogue: 'As far as I'm ____ ...'",
                options: ["concerned", "convinced", "viewed", "believed"],
                correctIndex: 0,
                explanation: "As far as I'm concerned (idiom)."
            },
            {
                question: "Dialogue: 'Well I'm ____ that both traditional books and e-books will continue.'",
                options: ["convinced", "concerned", "believed", "agreed"],
                correctIndex: 0,
                explanation: "I'm convinced (sure)."
            },
            // Word Formation
            {
                question: "Word Form: 'It can be difficult to keep a ____ (friend) going.'",
                options: ["friendly", "friendship", "befriend", "friendliness"],
                correctIndex: 1,
                explanation: "Noun form: friendship."
            },
            {
                question: "Word Form: 'Money can buy ____ (happy).'",
                options: ["happily", "happiness", "unhappy", "happier"],
                correctIndex: 1,
                explanation: "Noun form: happiness."
            },
            {
                question: "Word Form: 'Help him find ____ (employ).'",
                options: ["employer", "employee", "employment", "employed"],
                correctIndex: 2,
                explanation: "Noun form (the state of having a job): employment."
            },
            {
                question: "Word Form: 'Carry out a number of ____ (secure) checks.'",
                options: ["securely", "security", "secured", "securing"],
                correctIndex: 1,
                explanation: "Adjectival noun / Compound noun: security checks."
            },
            {
                question: "Word Form: 'A slow internet ____ (connect) is annoying.'",
                options: ["connector", "connecting", "connection", "connected"],
                correctIndex: 2,
                explanation: "Noun form: connection."
            }
        ]
    }
  },
  {
    id: 'test-1b-section-9-10',
    type: SlideType.QUIZ,
    title: 'Test 1B: Word Forms & Vocab',
    content: {
        questions: [
            {
                question: "Word Form: 'You'll find your ____ (fit) levels improve.'",
                options: ["fitting", "fitness", "fitter", "fit"],
                correctIndex: 1,
                explanation: "Noun form: fitness levels."
            },
            {
                question: "Word Form: 'Margot's ____ (able) to type has improved.'",
                options: ["ability", "enable", "unable", "ably"],
                correctIndex: 0,
                explanation: "Noun form: ability."
            },
            {
                question: "Word Form: 'Forms of ____ (communicate) like writing letters.'",
                options: ["communicating", "communication", "communicator", "communicative"],
                correctIndex: 1,
                explanation: "Noun form: communication."
            },
            {
                question: "Word Form: 'Hiro's greatest ____ (achieve) was coming top.'",
                options: ["achievement", "achiever", "achieving", "achieved"],
                correctIndex: 0,
                explanation: "Noun form: achievement."
            },
            {
                question: "Word Form: 'Find all the ____ (inform) you need.'",
                options: ["informer", "information", "informative", "informing"],
                correctIndex: 1,
                explanation: "Noun form: information."
            },
            {
                question: "Vocab: 'This shirt cost £12, but today it was ____, so I only paid £6.'",
                options: ["bargain", "half-price", "deal"],
                correctIndex: 1,
                explanation: "Half of 12 is 6. Half-price."
            },
            {
                question: "Vocab: 'There's a 20% ____ on it at the moment.'",
                options: ["discount", "consumer", "purchase"],
                correctIndex: 0,
                explanation: "A percentage off is a discount."
            },
            {
                question: "Vocab: 'Would you like me to help you carry your ____?'",
                options: ["special offer", "item", "shopping"],
                correctIndex: 2,
                explanation: "Shopping refers to the bags/goods purchased."
            },
            {
                question: "Vocab: 'They didn't spend long in the shop as they only needed four ____.'",
                options: ["deals", "purchasers", "items"],
                correctIndex: 2,
                explanation: "Items means individual products."
            },
            {
                question: "Vocab: 'Three books for the price of one – what a ____!'",
                options: ["bargain", "customer", "consumer"],
                correctIndex: 0,
                explanation: "A bargain is something bought for a very good price."
            }
        ]
    }
  }
];
