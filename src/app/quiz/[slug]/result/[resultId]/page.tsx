import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allQuizzes, getQuizBySlug } from '@/data/quizzes';
import ShareButtons from '@/components/ui/ShareButtons';
import QuizCard from '@/components/ui/QuizCard';
import type { QuizResult } from '@/lib/types';
import { siteConfig } from '@/lib/config';

interface PageProps {
  params: Promise<{ slug: string; resultId: string }>;
}

function getAllResultParams() {
  const params: { slug: string; resultId: string }[] = [];
  for (const quiz of allQuizzes) {
    if (quiz.results) {
      for (const result of quiz.results) {
        params.push({ slug: quiz.slug, resultId: result.id });
      }
    }
    if (quiz.scoreRanges) {
      for (const range of quiz.scoreRanges) {
        params.push({ slug: quiz.slug, resultId: range.result.id });
      }
    }
  }
  return params;
}

export async function generateStaticParams() {
  return getAllResultParams();
}

export default async function ResultPage({ params }: PageProps) {
  const { slug, resultId } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) notFound();

  let result: QuizResult | undefined;
  if (quiz.results) {
    result = quiz.results.find((r) => r.id === resultId);
  }
  if (quiz.scoreRanges) {
    const range = quiz.scoreRanges.find((r) => r.result.id === resultId);
    if (range) result = range.result;
  }

  if (!result) notFound();

  const relatedQuizzes = allQuizzes.filter((q) => q.slug !== slug).slice(0, 3);
  const shareUrl = `${siteConfig.url}/quiz/${slug}/result/${resultId}`;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        {' / '}
        <Link href={`/quiz/${slug}`} className="hover:text-primary-600">{quiz.title}</Link>
        {' / '}
        <span className="text-gray-900">Result</span>
      </div>

      {/* Result Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary-500 via-pink-500 to-orange-400 p-8 text-center text-white">
            <div className="text-7xl mb-4">{result.emoji}</div>
            <p className="text-sm uppercase tracking-wide mb-2 text-white/80">Your Result</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{result.title}</h1>
            <p className="text-white/80">from: {quiz.title}</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{result.description}</p>

            {/* Traits */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Traits</h2>
              <div className="flex flex-wrap gap-2">
                {result.traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-primary-800 mb-2">Fun Fact</h3>
              <p className="text-primary-700 text-sm">{result.funFact}</p>
            </div>

            {/* Share */}
            <div className="text-center mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Share Your Result</h3>
              <ShareButtons
                title={`I got ${result.title}!`}
                url={shareUrl}
                text={`I got "${result.title}" on the ${quiz.title} quiz! Take it to find out yours:`}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/quiz/${slug}`}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-pink-500 text-white rounded-xl font-semibold text-center hover:shadow-lg transition-shadow"
              >
                Retake Quiz
              </Link>
              <Link
                href="/quizzes"
                className="px-8 py-3 bg-gray-100 text-gray-800 rounded-xl font-semibold text-center hover:bg-gray-200 transition-colors"
              >
                More Quizzes
              </Link>
            </div>
          </div>
        </div>

        {/* Related Quizzes */}
        {relatedQuizzes.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Try These Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedQuizzes.map((q) => (
                <QuizCard key={q.slug} quiz={q} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
