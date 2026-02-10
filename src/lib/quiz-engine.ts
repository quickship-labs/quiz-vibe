import type { QuizConfig, QuizAnswer, QuizResult } from './types';

export class QuizEngine {
  private quiz: QuizConfig;
  private answers: QuizAnswer[] = [];

  constructor(quiz: QuizConfig) {
    this.quiz = quiz;
  }

  addAnswer(answer: QuizAnswer): void {
    const existingIndex = this.answers.findIndex(
      (a) => a.questionId === answer.questionId
    );
    if (existingIndex >= 0) {
      this.answers[existingIndex] = answer;
    } else {
      this.answers.push(answer);
    }
  }

  getProgress(): number {
    return (this.answers.length / this.quiz.questionCount) * 100;
  }

  isComplete(): boolean {
    return this.answers.length === this.quiz.questionCount;
  }

  calculateResult(): QuizResult | null {
    if (!this.isComplete()) return null;

    // For trivia quizzes (score-based)
    if (this.quiz.scoreRanges) {
      let correctCount = 0;
      this.answers.forEach((answer) => {
        const question = this.quiz.questions.find((q) => q.id === answer.questionId);
        const option = question?.options.find((o) => o.id === answer.answerId);
        if (option?.correctAnswer) {
          correctCount++;
        }
      });

      const percentage = (correctCount / this.quiz.questionCount) * 100;
      const range = this.quiz.scoreRanges.find(
        (r) => percentage >= r.min && percentage <= r.max
      );
      return range?.result || null;
    }

    // For personality quizzes (category-based scoring)
    if (this.quiz.results) {
      const scores: Record<string, number> = {};

      // Initialize scores
      this.quiz.results.forEach((result) => {
        scores[result.id] = 0;
      });

      // Tally scores
      this.answers.forEach((answer) => {
        const question = this.quiz.questions.find((q) => q.id === answer.questionId);
        const option = question?.options.find((o) => o.id === answer.answerId);

        if (option?.scores) {
          Object.entries(option.scores).forEach(([resultId, score]) => {
            scores[resultId] = (scores[resultId] || 0) + score;
          });
        }
      });

      // Find highest score
      let maxScore = -1;
      let winningResultId = '';

      Object.entries(scores).forEach(([resultId, score]) => {
        if (score > maxScore) {
          maxScore = score;
          winningResultId = resultId;
        }
      });

      return this.quiz.results.find((r) => r.id === winningResultId) || null;
    }

    return null;
  }

  getAnswers(): QuizAnswer[] {
    return [...this.answers];
  }

  reset(): void {
    this.answers = [];
  }
}

export function createQuizEngine(quiz: QuizConfig): QuizEngine {
  return new QuizEngine(quiz);
}
