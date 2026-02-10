import QuizCard from '@/components/ui/QuizCard';
import { allQuizzes } from '@/data/quizzes';
import { categories } from '@/lib/config';

export default function QuizzesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">All Quizzes</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Browse our complete collection of personality tests, fun quizzes, and trivia challenges.
      </p>

      {categories.map((category) => {
        const quizzes = allQuizzes.filter((q) => q.category === category.id);
        if (quizzes.length === 0) return null;

        return (
          <section key={category.id} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.emoji}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <QuizCard key={quiz.slug} quiz={quiz} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
