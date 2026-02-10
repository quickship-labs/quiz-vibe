import type { QuizConfig } from '@/lib/types';
import { personalityTypeQuiz } from './personality-type';
import { loveLanguageQuiz } from './love-language';
import { emotionalIntelligenceQuiz } from './emotional-intelligence';
import { spiritAnimalQuiz } from './spirit-animal';
import { elementTypeQuiz } from './element-type';
import { mentalAgeQuiz } from './mental-age';
import { brainTypeQuiz } from './brain-type';
import { careerMatchQuiz } from './career-match';
import { travelPersonalityQuiz } from './travel-personality';
import { generalKnowledgeQuiz } from './general-knowledge';

export const allQuizzes: QuizConfig[] = [
  personalityTypeQuiz,
  loveLanguageQuiz,
  emotionalIntelligenceQuiz,
  spiritAnimalQuiz,
  elementTypeQuiz,
  mentalAgeQuiz,
  brainTypeQuiz,
  careerMatchQuiz,
  travelPersonalityQuiz,
  generalKnowledgeQuiz,
];

export function getQuizBySlug(slug: string): QuizConfig | undefined {
  return allQuizzes.find((q) => q.slug === slug);
}

export function getQuizzesByCategory(category: string): QuizConfig[] {
  return allQuizzes.filter((q) => q.category === category);
}

export {
  personalityTypeQuiz,
  loveLanguageQuiz,
  emotionalIntelligenceQuiz,
  spiritAnimalQuiz,
  elementTypeQuiz,
  mentalAgeQuiz,
  brainTypeQuiz,
  careerMatchQuiz,
  travelPersonalityQuiz,
  generalKnowledgeQuiz,
};
