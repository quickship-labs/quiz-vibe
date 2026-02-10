import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { allQuizzes } from '@/data/quizzes';

export default function sitemap(): MetadataRoute.Sitemap {
  const quizPages = allQuizzes.map((quiz) => ({
    url: `${siteConfig.url}/quiz/${quiz.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const resultPages: MetadataRoute.Sitemap = [];
  for (const quiz of allQuizzes) {
    const results = quiz.results || [];
    const rangeResults = quiz.scoreRanges?.map((r) => r.result) || [];
    const allResults = [...results, ...rangeResults];

    for (const result of allResults) {
      resultPages.push({
        url: `${siteConfig.url}/quiz/${quiz.slug}/result/${result.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/quizzes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...quizPages,
    ...resultPages,
  ];
}
