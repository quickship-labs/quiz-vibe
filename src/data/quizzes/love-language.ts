import type { QuizConfig } from '@/lib/types';

export const loveLanguageQuiz: QuizConfig = {
  slug: 'love-language',
  title: "What's Your Love Language?",
  description: 'Discover how you express and receive love most naturally.',
  category: 'personality',
  image: '💕',
  timeEstimate: '3 min',
  questionCount: 10,
  metaDescription: 'Take our free love language quiz to discover how you give and receive love. Learn if your love language is Words, Touch, Gifts, Time, or Acts of Service.',
  keywords: ['love language', 'love language quiz', 'relationship quiz', 'love language test', 'personality test'],
  questions: [
    {
      id: 'q1',
      question: 'What makes you feel most loved by your partner?',
      options: [
        { id: 'a', text: 'When they tell me how much they love and appreciate me', scores: { words: 3 } },
        { id: 'b', text: 'When they hold my hand or give me a hug', scores: { touch: 3 } },
        { id: 'c', text: 'When they surprise me with a thoughtful gift', scores: { gifts: 3 } },
        { id: 'd', text: 'When they spend quality, uninterrupted time with me', scores: { time: 3 } },
      ],
    },
    {
      id: 'q2',
      question: 'What would disappoint you most in a relationship?',
      options: [
        { id: 'a', text: 'Rarely hearing "I love you" or words of affirmation', scores: { words: 3 } },
        { id: 'b', text: 'Lack of physical affection and closeness', scores: { touch: 3 } },
        { id: 'c', text: 'Never receiving thoughtful presents', scores: { gifts: 3 } },
        { id: 'd', text: 'Always being too busy to spend time together', scores: { time: 3 } },
      ],
    },
    {
      id: 'q3',
      question: 'How do you typically show love to others?',
      options: [
        { id: 'a', text: 'I tell them and compliment them often', scores: { words: 3 } },
        { id: 'b', text: 'I give hugs, cuddles, and physical affection', scores: { touch: 3 } },
        { id: 'c', text: 'I give them gifts that remind me of them', scores: { gifts: 3 } },
        { id: 'd', text: 'I do helpful things to make their life easier', scores: { acts: 3 } },
      ],
    },
    {
      id: 'q4',
      question: 'What would be your ideal date?',
      options: [
        { id: 'a', text: 'A romantic dinner with deep, meaningful conversation', scores: { words: 2, time: 1 } },
        { id: 'b', text: 'Cuddling and watching a movie together', scores: { touch: 2, time: 1 } },
        { id: 'c', text: 'Going shopping and picking out something special', scores: { gifts: 2, time: 1 } },
        { id: 'd', text: 'Doing an activity or project together', scores: { acts: 2, time: 1 } },
      ],
    },
    {
      id: 'q5',
      question: 'What gift would mean the most to you?',
      options: [
        { id: 'a', text: 'A heartfelt letter expressing their feelings', scores: { words: 3 } },
        { id: 'b', text: 'A couples massage or spa day', scores: { touch: 3 } },
        { id: 'c', text: 'Something I mentioned wanting weeks ago', scores: { gifts: 3 } },
        { id: 'd', text: 'Help with a project or task I\'ve been putting off', scores: { acts: 3 } },
      ],
    },
    {
      id: 'q6',
      question: 'When you had a rough day, what helps most?',
      options: [
        { id: 'a', text: 'Hearing "You did great" or "I\'m proud of you"', scores: { words: 3 } },
        { id: 'b', text: 'A long, comforting hug', scores: { touch: 3 } },
        { id: 'c', text: 'A small surprise to cheer me up', scores: { gifts: 3 } },
        { id: 'd', text: 'Someone taking care of my responsibilities', scores: { acts: 3 } },
      ],
    },
    {
      id: 'q7',
      question: 'What bothers you most when someone is distracted?',
      options: [
        { id: 'a', text: 'Not listening to what I\'m saying', scores: { words: 2, time: 1 } },
        { id: 'b', text: 'Pulling away when I try to be close', scores: { touch: 3 } },
        { id: 'c', text: 'Not noticing something I got or made for them', scores: { gifts: 3 } },
        { id: 'd', text: 'Being on their phone during our time together', scores: { time: 3 } },
      ],
    },
    {
      id: 'q8',
      question: 'Which of these means the most to you?',
      options: [
        { id: 'a', text: 'Receiving a compliment on something I did', scores: { words: 3 } },
        { id: 'b', text: 'A surprise hug from behind', scores: { touch: 3 } },
        { id: 'c', text: 'A small token that shows they thought of me', scores: { gifts: 3 } },
        { id: 'd', text: 'Having them complete a task without being asked', scores: { acts: 3 } },
      ],
    },
    {
      id: 'q9',
      question: 'In a long-distance relationship, what would you miss most?',
      options: [
        { id: 'a', text: 'Not hearing their voice and words of encouragement', scores: { words: 3 } },
        { id: 'b', text: 'Not being able to touch and hold them', scores: { touch: 3 } },
        { id: 'c', text: 'Not being able to give and receive gifts in person', scores: { gifts: 3 } },
        { id: 'd', text: 'Not being able to spend quality time together', scores: { time: 3 } },
      ],
    },
    {
      id: 'q10',
      question: 'What makes you feel closest to someone?',
      options: [
        { id: 'a', text: 'Deep conversations about feelings and dreams', scores: { words: 2, time: 1 } },
        { id: 'b', text: 'Physical intimacy and closeness', scores: { touch: 3 } },
        { id: 'c', text: 'Exchanging meaningful gifts', scores: { gifts: 3 } },
        { id: 'd', text: 'Doing everyday activities together', scores: { acts: 2, time: 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'words',
      title: 'Words of Affirmation',
      emoji: '💬',
      description: 'You feel most loved through verbal expressions of affection. Compliments, words of appreciation, and hearing "I love you" mean the world to you. Kind, encouraging words make you feel valued and secure in your relationships.',
      traits: ['Verbal', 'Expressive', 'Appreciative', 'Encouraging'],
      funFact: 'People with this love language tend to remember compliments and kind words for years!',
    },
    {
      id: 'touch',
      title: 'Physical Touch',
      emoji: '🤗',
      description: 'Physical affection speaks volumes to you. Hugs, hand-holding, cuddles, and other forms of touch make you feel connected and loved. Physical presence and closeness are essential for you to feel secure in relationships.',
      traits: ['Affectionate', 'Warm', 'Connected', 'Nurturing'],
      funFact: 'Physical touch releases oxytocin, the bonding hormone, making this love language powerful!',
    },
    {
      id: 'gifts',
      title: 'Receiving Gifts',
      emoji: '🎁',
      description: 'Thoughtful gifts are deeply meaningful to you. It\'s not about materialism - it\'s about the thought, effort, and care that goes into choosing something special. Gifts serve as visual symbols of love and remind you that you\'re cherished.',
      traits: ['Thoughtful', 'Sentimental', 'Detail-oriented', 'Appreciative'],
      funFact: 'People with this love language often keep gifts forever as precious mementos of love!',
    },
    {
      id: 'time',
      title: 'Quality Time',
      emoji: '⏰',
      description: 'Nothing says love to you like undivided attention. You value being truly present with your loved ones, whether it\'s deep conversation, shared activities, or simply being together. Distractions during your time together feel hurtful.',
      traits: ['Present', 'Attentive', 'Engaged', 'Devoted'],
      funFact: 'Quality time lovers often have the best memories because they\'re fully present in moments!',
    },
    {
      id: 'acts',
      title: 'Acts of Service',
      emoji: '🛠️',
      description: 'Actions speak louder than words for you. When someone helps you, does tasks for you, or makes your life easier, you feel truly loved. You believe that love is something you do, and you show your love by being helpful and supportive.',
      traits: ['Helpful', 'Supportive', 'Practical', 'Dependable'],
      funFact: 'This love language is all about the saying "Actions speak louder than words" - and you live by it!',
    },
  ],
};
