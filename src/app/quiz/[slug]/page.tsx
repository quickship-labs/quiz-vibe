import { notFound } from 'next/navigation';
import { allQuizzes, getQuizBySlug } from '@/data/quizzes';
import QuizPlayer from '@/components/quiz/QuizPlayer';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allQuizzes.map((quiz) => ({ slug: quiz.slug }));
}

export default async function QuizPage({ params }: PageProps) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        {' / '}
        <Link href="/quizzes" className="hover:text-primary-600">Quizzes</Link>
        {' / '}
        <span className="text-gray-900">{quiz.title}</span>
      </div>

      {/* Quiz Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{quiz.image}</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{quiz.title}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">{quiz.description}</p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <span>{quiz.timeEstimate}</span>
          <span>|</span>
          <span>{quiz.questionCount} questions</span>
        </div>
      </div>

      {/* Quiz Player */}
      <QuizPlayer quiz={quiz} />
    </div>
  );
}
