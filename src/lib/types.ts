export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    scores: Record<string, number>; // resultId -> score contribution
    correctAnswer?: boolean; // for trivia quizzes
  }[];
}

export interface QuizResult {
  id: string;
  title: string;
  description: string; // 3-4 sentences
  emoji: string;
  traits: string[];
  funFact: string;
}

export interface ScoreRange {
  min: number;
  max: number;
  result: QuizResult;
}

export interface QuizConfig {
  slug: string;
  title: string;
  description: string;
  category: 'personality' | 'fun' | 'trivia';
  image: string; // emoji for now
  questions: QuizQuestion[];
  results?: QuizResult[]; // For personality quizzes
  scoreRanges?: ScoreRange[]; // For trivia quizzes
  timeEstimate: string; // "3 min"
  questionCount: number;
  metaDescription: string;
  keywords: string[];
}

export interface QuizAnswer {
  questionId: string;
  answerId: string;
}
