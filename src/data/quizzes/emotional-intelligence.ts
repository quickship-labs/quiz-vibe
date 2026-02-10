import type { QuizConfig } from '@/lib/types';

export const emotionalIntelligenceQuiz: QuizConfig = {
  slug: 'emotional-intelligence',
  title: 'How High Is Your Emotional Intelligence?',
  description: 'Test your ability to understand and manage emotions.',
  category: 'personality',
  image: '🧠',
  timeEstimate: '4 min',
  questionCount: 12,
  metaDescription: 'Free emotional intelligence test. Discover your EQ score and learn how well you understand, manage, and express emotions. Take the quiz now!',
  keywords: ['emotional intelligence', 'EQ test', 'emotional intelligence quiz', 'EQ score', 'emotional awareness'],
  questions: [
    { id: 'q1', question: 'When someone is upset, you can usually tell what they are feeling...', options: [
      { id: 'a', text: 'Before they even say anything', scores: { correct: 1 }, correctAnswer: true },
      { id: 'b', text: 'Once they start talking about it', scores: { correct: 0 } },
      { id: 'c', text: 'Only if they tell me directly', scores: { correct: 0 } },
      { id: 'd', text: 'I often miss emotional cues', scores: { correct: 0 } },
    ]},
    { id: 'q2', question: 'When you feel angry, you typically...', options: [
      { id: 'a', text: 'React immediately and express it', scores: { correct: 0 } },
      { id: 'b', text: 'Suppress it and pretend everything is fine', scores: { correct: 0 } },
      { id: 'c', text: 'Acknowledge the feeling and choose how to respond', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Ignore it until it goes away', scores: { correct: 0 } },
    ]},
    { id: 'q3', question: 'A friend cancels plans at the last minute. Your first thought is...', options: [
      { id: 'a', text: 'They must not care about me', scores: { correct: 0 } },
      { id: 'b', text: 'Something important must have come up', scores: { correct: 1 }, correctAnswer: true },
      { id: 'c', text: 'I feel annoyed and tell them so', scores: { correct: 0 } },
      { id: 'd', text: 'I do not really think about it', scores: { correct: 0 } },
    ]},
    { id: 'q4', question: 'In a heated disagreement, you are most likely to...', options: [
      { id: 'a', text: 'Raise your voice to make your point', scores: { correct: 0 } },
      { id: 'b', text: 'Walk away without saying anything', scores: { correct: 0 } },
      { id: 'c', text: 'Listen to the other side before responding', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Shut down emotionally', scores: { correct: 0 } },
    ]},
    { id: 'q5', question: 'How well can you identify the specific emotion you are feeling?', options: [
      { id: 'a', text: 'I can name the exact emotion and its cause', scores: { correct: 1 }, correctAnswer: true },
      { id: 'b', text: 'I know if I feel good or bad, but not specifics', scores: { correct: 0 } },
      { id: 'c', text: 'I usually feel confused about my emotions', scores: { correct: 0 } },
      { id: 'd', text: 'I do not pay much attention to my emotions', scores: { correct: 0 } },
    ]},
    { id: 'q6', question: 'When receiving criticism, you usually...', options: [
      { id: 'a', text: 'Get defensive and argue back', scores: { correct: 0 } },
      { id: 'b', text: 'Feel hurt but say nothing', scores: { correct: 0 } },
      { id: 'c', text: 'Consider whether the feedback has merit', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Dismiss it entirely', scores: { correct: 0 } },
    ]},
    { id: 'q7', question: 'You notice a colleague seems withdrawn. You...', options: [
      { id: 'a', text: 'Mind your own business', scores: { correct: 0 } },
      { id: 'b', text: 'Assume they are having a bad day and leave them alone', scores: { correct: 0 } },
      { id: 'c', text: 'Gently check in and offer support', scores: { correct: 1 }, correctAnswer: true },
      { id: 'd', text: 'Tell them to cheer up', scores: { correct: 0 } },
    ]},
    { id: 'q8', question: 'After making a mistake, your inner dialogue sounds like...', options: [
      { id: 'a', text: 'I am so stupid, I always mess things up', scores: { correct: 0 } },
      { id: 'b', text: 'Everyone makes mistakes, what can I learn from this?', scores: { correct: 1 }, correctAnswer: true },
      { id: 'c', text: 'It was not really my fault', scores: { correct: 0 } },
      { id: 'd', text: 'I try not to think about it', scores: { correct: 0 } },
    ]},
    { id: 'q9', question: 'How do you handle stressful situations?', options: [
      { id: 'a', text: 'I panic and feel overwhelmed', scores: { correct: 0 } },
      { id: 'b', text: 'I use coping strategies like deep breathing or exercise', scores: { correct: 1 }, correctAnswer: true },
      { id: 'c', text: 'I pretend everything is fine', scores: { correct: 0 } },
      { id: 'd', text: 'I vent to whoever will listen', scores: { correct: 0 } },
    ]},
    { id: 'q10', question: 'When someone shares good news, you...', options: [
      { id: 'a', text: 'Feel genuinely happy and celebrate with them', scores: { correct: 1 }, correctAnswer: true },
      { id: 'b', text: 'Feel a twinge of jealousy but congratulate them', scores: { correct: 0 } },
      { id: 'c', text: 'Compare it to your own situation', scores: { correct: 0 } },
      { id: 'd', text: 'Respond briefly and change the topic', scores: { correct: 0 } },
    ]},
    { id: 'q11', question: 'You can usually predict how someone will react to bad news...', options: [
      { id: 'a', text: 'Accurately, based on knowing them well', scores: { correct: 1 }, correctAnswer: true },
      { id: 'b', text: 'Sometimes, if I know them well', scores: { correct: 0 } },
      { id: 'c', text: 'Rarely, people always surprise me', scores: { correct: 0 } },
      { id: 'd', text: 'I never try to predict others', scores: { correct: 0 } },
    ]},
    { id: 'q12', question: 'How would you describe your ability to motivate yourself?', options: [
      { id: 'a', text: 'I set clear goals and stay driven even through setbacks', scores: { correct: 1 }, correctAnswer: true },
      { id: 'b', text: 'I am motivated when things are going well', scores: { correct: 0 } },
      { id: 'c', text: 'I struggle with motivation and procrastinate', scores: { correct: 0 } },
      { id: 'd', text: 'I need external motivation from others', scores: { correct: 0 } },
    ]},
  ],
  scoreRanges: [
    { min: 0, max: 25, result: { id: 'developing', title: 'Developing EQ', emoji: '🌱', description: 'Your emotional intelligence is still developing, and that is perfectly okay! You may sometimes find it challenging to identify or manage emotions, both your own and others. The great news is that EQ is a skill that can be learned and improved with practice.', traits: ['Self-aware learner', 'Growth-oriented', 'Open to improvement'], funFact: 'Studies show that EQ can be improved by up to 25% with dedicated practice over just a few months!' }},
    { min: 26, max: 50, result: { id: 'growing', title: 'Growing EQ', emoji: '🌿', description: 'You have a foundation of emotional intelligence and are building on it. You can recognize basic emotions in yourself and others but may sometimes struggle with more nuanced emotional situations. Keep developing your skills!', traits: ['Emotionally aware', 'Empathetic', 'Learning to regulate'], funFact: 'People with growing EQ often make the biggest leaps in improvement because they are already self-aware enough to learn!' }},
    { min: 51, max: 75, result: { id: 'strong', title: 'Strong EQ', emoji: '💪', description: 'You have strong emotional intelligence! You are generally good at reading people, managing your own emotions, and navigating social situations. Others likely come to you for advice and support because of your empathetic nature.', traits: ['Empathetic', 'Self-regulated', 'Socially skilled', 'Self-aware'], funFact: 'People with strong EQ are 58% more likely to succeed in leadership positions!' }},
    { min: 76, max: 100, result: { id: 'exceptional', title: 'Exceptional EQ', emoji: '🌟', description: 'Your emotional intelligence is exceptional! You have a remarkable ability to understand, manage, and express emotions effectively. You naturally build deep connections, navigate conflicts with grace, and inspire those around you.', traits: ['Highly empathetic', 'Master regulator', 'Inspirational', 'Deeply connected'], funFact: 'Only about 15% of people score in the exceptional range for emotional intelligence!' }},
  ],
};
