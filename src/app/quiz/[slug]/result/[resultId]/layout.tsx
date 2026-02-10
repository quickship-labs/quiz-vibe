import { Metadata } from 'next';
import { allQuizzes, getQuizBySlug } from '@/data/quizzes';
import { generateSEO } from '@/lib/seo';

interface LayoutProps {
  children: React.ReactNode;
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

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug, resultId } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return {};

  let resultTitle = resultId;
  if (quiz.results) {
    const result = quiz.results.find((r) => r.id === resultId);
    if (result) resultTitle = result.title;
  }
  if (quiz.scoreRanges) {
    const range = quiz.scoreRanges.find((r) => r.result.id === resultId);
    if (range) resultTitle = range.result.title;
  }

  return generateSEO({
    title: `Your Result: ${resultTitle} - ${quiz.title}`,
    description: `I got ${resultTitle} on the ${quiz.title} quiz! Take the quiz to discover your result.`,
    keywords: [...quiz.keywords, resultTitle.toLowerCase()],
    path: `/quiz/${slug}/result/${resultId}`,
  });
}

export default function ResultLayout({ children }: LayoutProps) {
  return children;
}
