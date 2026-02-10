import type { QuizConfig } from '@/lib/types';

export const elementTypeQuiz: QuizConfig = {
  slug: 'element-type',
  title: 'Which Element Are You?',
  description: 'Are you Fire, Water, Earth, or Air? Discover your elemental personality.',
  category: 'fun',
  image: '🔥',
  timeEstimate: '2 min',
  questionCount: 8,
  metaDescription: 'Which element matches your personality? Take this free quiz to find out if you are Fire, Water, Earth, or Air. Discover your elemental nature!',
  keywords: ['element quiz', 'which element am I', 'fire water earth air quiz', 'elemental personality'],
  questions: [
    { id: 'q1', question: 'How would your friends describe your energy?', options: [
      { id: 'a', text: 'Passionate and intense', scores: { fire: 3 } },
      { id: 'b', text: 'Calm and flowing', scores: { water: 3 } },
      { id: 'c', text: 'Steady and reliable', scores: { earth: 3 } },
      { id: 'd', text: 'Light and free-spirited', scores: { air: 3 } },
    ]},
    { id: 'q2', question: 'When facing a challenge, you...', options: [
      { id: 'a', text: 'Charge in with full force and determination', scores: { fire: 3 } },
      { id: 'b', text: 'Flow around it and find the path of least resistance', scores: { water: 3 } },
      { id: 'c', text: 'Plant your feet and endure with patience', scores: { earth: 3 } },
      { id: 'd', text: 'Think creatively and approach from a new angle', scores: { air: 3 } },
    ]},
    { id: 'q3', question: 'Pick a season that resonates with you:', options: [
      { id: 'a', text: 'Summer — heat, energy, and long days', scores: { fire: 3 } },
      { id: 'b', text: 'Winter — quiet, deep, and reflective', scores: { water: 3 } },
      { id: 'c', text: 'Autumn — grounded, harvest, and gratitude', scores: { earth: 3 } },
      { id: 'd', text: 'Spring — fresh, breezy, and full of new ideas', scores: { air: 3 } },
    ]},
    { id: 'q4', question: 'What draws people to you?', options: [
      { id: 'a', text: 'My confidence and warmth', scores: { fire: 3 } },
      { id: 'b', text: 'My empathy and emotional depth', scores: { water: 3 } },
      { id: 'c', text: 'My dependability and strength', scores: { earth: 3 } },
      { id: 'd', text: 'My ideas and communication skills', scores: { air: 3 } },
    ]},
    { id: 'q5', question: 'Your ideal vacation would be...', options: [
      { id: 'a', text: 'An adventure trip with adrenaline activities', scores: { fire: 3 } },
      { id: 'b', text: 'A peaceful beach or lake getaway', scores: { water: 3 } },
      { id: 'c', text: 'A cabin in the mountains or countryside', scores: { earth: 3 } },
      { id: 'd', text: 'Traveling to explore new cultures and cities', scores: { air: 3 } },
    ]},
    { id: 'q6', question: 'What frustrates you the most?', options: [
      { id: 'a', text: 'Slow progress and lack of action', scores: { fire: 3 } },
      { id: 'b', text: 'Dishonesty and emotional shallowness', scores: { water: 3 } },
      { id: 'c', text: 'Chaos and unreliability', scores: { earth: 3 } },
      { id: 'd', text: 'Closed-mindedness and routine', scores: { air: 3 } },
    ]},
    { id: 'q7', question: 'In relationships, you value...', options: [
      { id: 'a', text: 'Passion, excitement, and spontaneity', scores: { fire: 3 } },
      { id: 'b', text: 'Deep emotional connection and vulnerability', scores: { water: 3 } },
      { id: 'c', text: 'Trust, stability, and commitment', scores: { earth: 3 } },
      { id: 'd', text: 'Intellectual stimulation and freedom', scores: { air: 3 } },
    ]},
    { id: 'q8', question: 'Choose a word that resonates with your core:', options: [
      { id: 'a', text: 'Power', scores: { fire: 3 } },
      { id: 'b', text: 'Depth', scores: { water: 3 } },
      { id: 'c', text: 'Foundation', scores: { earth: 3 } },
      { id: 'd', text: 'Freedom', scores: { air: 3 } },
    ]},
  ],
  results: [
    { id: 'fire', title: 'Fire', emoji: '🔥', description: 'You burn bright with passion, energy, and determination. A natural leader with an infectious enthusiasm, you inspire others with your boldness and warmth. Like fire, you can illuminate the darkest rooms and spark transformation wherever you go.', traits: ['Passionate', 'Courageous', 'Energetic', 'Inspiring'], funFact: 'Fire signs in astrology (Aries, Leo, Sagittarius) are known for their leadership and ability to motivate others!' },
    { id: 'water', title: 'Water', emoji: '💧', description: 'Deep, intuitive, and emotionally rich. You flow through life with grace and adaptability, finding your way around any obstacle. Your emotional depth allows you to connect with others on a profound level that most cannot reach.', traits: ['Intuitive', 'Emotional', 'Adaptable', 'Deep'], funFact: 'Water covers 71% of the Earth and is essential for all life — just like emotional intelligence is essential for all relationships!' },
    { id: 'earth', title: 'Earth', emoji: '🌍', description: 'Grounded, reliable, and strong as stone. You are the foundation that others build upon. Your patience and practicality make you an anchor in any storm, and your connection to the physical world gives you a stable, nurturing presence.', traits: ['Grounded', 'Reliable', 'Patient', 'Nurturing'], funFact: 'The oldest rocks on Earth are over 4 billion years old — a testament to the enduring strength of the earth element!' },
    { id: 'air', title: 'Air', emoji: '💨', description: 'Free-thinking, communicative, and endlessly curious. You float above the mundane and see life from a broader perspective. Your ideas flow freely, your mind is always active, and your ability to connect seemingly unrelated concepts makes you brilliant.', traits: ['Intellectual', 'Communicative', 'Curious', 'Free-spirited'], funFact: 'Air is all around us yet invisible — much like how great ideas can be everywhere, waiting for an Air personality to discover them!' },
  ],
};
