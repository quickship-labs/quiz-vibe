import Link from 'next/link';
import type { QuizConfig } from '@/lib/types';

interface QuizCardProps {
  quiz: QuizConfig;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const categoryColors = {
    personality: 'from-purple-500 to-pink-500',
    fun: 'from-orange-500 to-red-500',
    trivia: 'from-blue-500 to-cyan-500',
  };

  return (
    <Link href={`/quiz/${quiz.slug}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${categoryColors[quiz.category]} opacity-10 group-hover:opacity-20 transition-opacity`}
        />
        <div className="relative p-6">
          <div className="text-6xl mb-4">{quiz.image}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {quiz.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {quiz.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {quiz.timeEstimate}
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {quiz.questionCount} questions
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
