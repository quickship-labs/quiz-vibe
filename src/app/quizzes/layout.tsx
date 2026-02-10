import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'All Quiz Categories - Personality, Fun & Trivia',
  description: 'Browse all our free quizzes organized by category. Personality tests, fun viral quizzes, and knowledge trivia challenges.',
  keywords: ['personality quizzes', 'fun quizzes', 'trivia quizzes', 'all quizzes'],
  path: '/quizzes',
});

export default function QuizzesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
