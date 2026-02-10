'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { QuizConfig, QuizAnswer } from '@/lib/types';
import { createQuizEngine } from '@/lib/quiz-engine';

interface QuizPlayerProps {
  quiz: QuizConfig;
}

export default function QuizPlayer({ quiz }: QuizPlayerProps) {
  const router = useRouter();
  const [engine] = useState(() => createQuizEngine(quiz));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questionCount) * 100;

  const handleAnswerSelect = (answerId: string) => {
    if (isAnimating) return;
    setSelectedAnswer(answerId);
  };

  const handleNext = () => {
    if (!selectedAnswer || isAnimating) return;

    const answer: QuizAnswer = {
      questionId: currentQuestion.id,
      answerId: selectedAnswer,
    };

    engine.addAnswer(answer);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnimating(false);
      }, 300);
    } else {
      // Quiz complete - calculate result
      const result = engine.calculateResult();
      if (result) {
        router.push(`/quiz/${quiz.slug}/result/${result.id}`);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestionIndex + 1} of {quiz.questionCount}
          </span>
          <span className="text-sm font-medium text-primary-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary-500 to-pink-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div
        className={`bg-white rounded-2xl shadow-xl p-8 mb-6 transition-all duration-300 ${
          isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              disabled={isAnimating}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                selectedAnswer === option.id
                  ? 'border-primary-500 bg-primary-50 shadow-md transform scale-[1.02]'
                  : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-25'
              } ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === option.id
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedAnswer === option.id && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-lg font-medium text-gray-800">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-center">
        <button
          onClick={handleNext}
          disabled={!selectedAnswer || isAnimating}
          className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
            selectedAnswer && !isAnimating
              ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      </div>
    </div>
  );
}
