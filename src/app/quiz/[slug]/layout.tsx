import { Metadata } from 'next';
import { allQuizzes, getQuizBySlug } from '@/data/quizzes';
import { generateSEO } from '@/lib/seo';
import { siteConfig } from '@/lib/config';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allQuizzes.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);
  if (!quiz) return {};

  const baseMeta = generateSEO({
    title: quiz.title,
    description: quiz.metaDescription,
    keywords: quiz.keywords,
    path: `/quiz/${quiz.slug}`,
  });

  return {
    ...baseMeta,
    title: {
      default: quiz.title,
      template: `%s | ${siteConfig.name}`,
    },
  };
}

export default function QuizLayout({ children }: LayoutProps) {
  return children;
}
