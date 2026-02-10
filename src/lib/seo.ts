import { siteConfig } from './config';
import type { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  path = '',
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateQuizJsonLd(quiz: {
  title: string;
  description: string;
  questions: Array<{ question: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: quiz.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Take the quiz to find out your answer!',
      },
    })),
  };
}
