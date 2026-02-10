export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'QuizVibe',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://quizvibe.vercel.app',
  description: 'Free personality quizzes, fun tests, and trivia challenges. Discover your personality type, love language, spirit animal, and more!',
  adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-7766226733923401',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
};

export const categories = [
  {
    id: 'personality',
    name: 'Personality',
    description: 'Discover who you really are',
    emoji: '🧠',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'fun',
    name: 'Fun & Viral',
    description: 'Just for fun quizzes',
    emoji: '🎉',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'trivia',
    name: 'Knowledge & Trivia',
    description: 'Test your knowledge',
    emoji: '🎓',
    gradient: 'from-blue-500 to-cyan-500',
  },
];
