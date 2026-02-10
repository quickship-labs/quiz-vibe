import type { QuizConfig } from '@/lib/types';

export const mentalAgeQuiz: QuizConfig = {
  slug: 'mental-age',
  title: 'What Is Your Mental Age?',
  description: 'Your real age is just a number. Find out how old your mind really is!',
  category: 'fun',
  image: '🧒',
  timeEstimate: '3 min',
  questionCount: 10,
  metaDescription: 'How old is your mind really? Take this free mental age quiz to discover if you think like a teenager, a young adult, or a wise elder. Your mental age might surprise you!',
  keywords: ['mental age quiz', 'what is my mental age', 'how old is my mind', 'mental age test', 'psychological age'],
  questions: [
    { id: 'q1', question: 'It is Friday night. What are you doing?', options: [
      { id: 'a', text: 'Going out to a party or club', scores: { correct: 0 } },
      { id: 'b', text: 'Dinner and drinks with close friends', scores: { correct: 0 }, correctAnswer: true },
      { id: 'c', text: 'Binge-watching a new series at home', scores: { correct: 0 } },
      { id: 'd', text: 'Going to bed early with a good book', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q2', question: 'How do you feel about social media?', options: [
      { id: 'a', text: 'I post and check it constantly', scores: { correct: 0 } },
      { id: 'b', text: 'I use it regularly but do not obsess', scores: { correct: 0 } },
      { id: 'c', text: 'I have accounts but rarely post', scores: { correct: 0 }, correctAnswer: true },
      { id: 'd', text: 'I think it is mostly a waste of time', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q3', question: 'Someone cuts you off in traffic. You...', options: [
      { id: 'a', text: 'Honk and yell at them', scores: { correct: 0 } },
      { id: 'b', text: 'Get annoyed but let it go quickly', scores: { correct: 0 }, correctAnswer: true },
      { id: 'c', text: 'Barely notice because you are enjoying the drive', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Think about how everyone is in a rush these days', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q4', question: 'What best describes your morning routine?', options: [
      { id: 'a', text: 'Snooze alarm 5 times, rush out the door', scores: { correct: 0 } },
      { id: 'b', text: 'Quick shower, grab coffee, go', scores: { correct: 0 } },
      { id: 'c', text: 'Wake up, exercise, healthy breakfast', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Up at dawn, read the news, take my time', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q5', question: 'How do you handle money?', options: [
      { id: 'a', text: 'Spend it as soon as I get it', scores: { correct: 0 } },
      { id: 'b', text: 'Try to save but often splurge', scores: { correct: 0 } },
      { id: 'c', text: 'Have a budget and savings plan', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Invested wisely and live within my means', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q6', question: 'What kind of humor do you enjoy most?', options: [
      { id: 'a', text: 'Memes and viral TikTok videos', scores: { correct: 0 } },
      { id: 'b', text: 'Stand-up comedy and witty banter', scores: { correct: 0 }, correctAnswer: true },
      { id: 'c', text: 'Dry humor and clever wordplay', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Dad jokes and classic comedy', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q7', question: 'How do you prefer to learn new things?', options: [
      { id: 'a', text: 'Short videos and quick tutorials', scores: { correct: 0 } },
      { id: 'b', text: 'Hands-on practice and experimentation', scores: { correct: 0 } },
      { id: 'c', text: 'Books and in-depth courses', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Life experience is the best teacher', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q8', question: 'What is your relationship with your phone?', options: [
      { id: 'a', text: 'It is basically attached to my hand', scores: { correct: 0 } },
      { id: 'b', text: 'I check it often but can put it down', scores: { correct: 0 } },
      { id: 'c', text: 'I use it when needed but prefer real interaction', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'I sometimes forget where I left it', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q9', question: 'Pick a weekend activity:', options: [
      { id: 'a', text: 'Music festival or amusement park', scores: { correct: 0 } },
      { id: 'b', text: 'Brunch and shopping with friends', scores: { correct: 0 } },
      { id: 'c', text: 'Gardening or a home improvement project', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'A quiet walk in nature', scores: { correct: 1 }, correctAnswer: true },
    ]},
    { id: 'q10', question: 'What matters most to you in life?', options: [
      { id: 'a', text: 'Having fun and living in the moment', scores: { correct: 0 } },
      { id: 'b', text: 'Building a successful career', scores: { correct: 0 } },
      { id: 'c', text: 'Strong relationships and family', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Inner peace and wisdom', scores: { correct: 1 }, correctAnswer: true },
    ]},
  ],
  scoreRanges: [
    { min: 0, max: 20, result: { id: 'teen', title: 'Teenager (13-19)', emoji: '🧒', description: 'Your mind is young, energetic, and always looking for the next thrill! You live in the moment, embrace trends, and have a playful spirit that keeps life exciting. Your youthful energy is infectious and keeps everyone around you feeling alive.', traits: ['Energetic', 'Spontaneous', 'Trendy', 'Playful'], funFact: 'Having a young mental age is linked to greater creativity and openness to new experiences!' }},
    { min: 21, max: 40, result: { id: 'young-adult', title: 'Young Adult (20-29)', emoji: '🧑', description: 'You have the perfect balance of youthful energy and emerging wisdom. You are building your path in life, curious about the world, and starting to understand what truly matters. Your ambition is matched by your growing self-awareness.', traits: ['Ambitious', 'Curious', 'Social', 'Growing'], funFact: 'The young adult brain is still developing, making this an incredible time for learning and adaptation!' }},
    { min: 41, max: 60, result: { id: 'mature', title: 'Mature Adult (30-45)', emoji: '👨', description: 'Your mind has found a beautiful balance between experience and vitality. You have learned from your past, make thoughtful decisions, and know what you want in life. Your emotional maturity and practical wisdom make you a natural mentor.', traits: ['Balanced', 'Wise', 'Practical', 'Emotionally mature'], funFact: 'Research shows that emotional regulation peaks in the mature adult years, making decisions more balanced and thoughtful!' }},
    { min: 61, max: 80, result: { id: 'wise', title: 'Wise Elder (46-65)', emoji: '🧓', description: 'Your mind carries the rich tapestry of experience and deep understanding. You see life with clarity and perspective that only comes with wisdom. You prioritize what truly matters and have let go of trivial concerns.', traits: ['Wise', 'Patient', 'Reflective', 'Peaceful'], funFact: 'Studies show that life satisfaction actually increases with age, peaking in the 60s and 70s!' }},
    { min: 81, max: 100, result: { id: 'old-soul', title: 'Old Soul (66+)', emoji: '🧙', description: 'You are an old soul with profound wisdom beyond your years. You find joy in simplicity, value deep connections over quantity, and have a serene acceptance of life. Your perspective is a gift that brings calm to any situation.', traits: ['Serene', 'Philosophical', 'Simple', 'Deeply wise'], funFact: 'Old souls throughout history have been some of the greatest philosophers, artists, and spiritual leaders!' }},
  ],
};
