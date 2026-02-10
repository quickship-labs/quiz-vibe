import Link from 'next/link';
import QuizCard from '@/components/ui/QuizCard';
import { allQuizzes } from '@/data/quizzes';
import { categories } from '@/lib/config';

export default function HomePage() {
  const personalityQuizzes = allQuizzes.filter((q) => q.category === 'personality');
  const funQuizzes = allQuizzes.filter((q) => q.category === 'fun');
  const triviaQuizzes = allQuizzes.filter((q) => q.category === 'trivia');

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-pink-500 to-orange-400 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Yourself Through Fun Quizzes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Personality tests, fun quizzes, and trivia challenges. Find out who you really are!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`#${cat.id}`}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full font-medium transition-colors backdrop-blur-sm"
              >
                {cat.emoji} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quizzes */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Popular Quizzes</h2>
        <p className="text-gray-600 text-center mb-10">Our most-loved personality tests and fun quizzes</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allQuizzes.slice(0, 6).map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} />
          ))}
        </div>
      </section>

      {/* Personality Section */}
      {personalityQuizzes.length > 0 && (
        <section id="personality" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Personality Quizzes</h2>
            <p className="text-gray-600 mb-8">Discover your true self with these personality tests</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalityQuizzes.map((quiz) => (
                <QuizCard key={quiz.slug} quiz={quiz} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fun Section */}
      {funQuizzes.length > 0 && (
        <section id="fun" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Fun & Viral Quizzes</h2>
            <p className="text-gray-600 mb-8">Just for fun quizzes that will make you smile</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {funQuizzes.map((quiz) => (
                <QuizCard key={quiz.slug} quiz={quiz} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trivia Section */}
      {triviaQuizzes.length > 0 && (
        <section id="trivia" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Knowledge & Trivia</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these challenging quizzes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {triviaQuizzes.map((quiz) => (
                <QuizCard key={quiz.slug} quiz={quiz} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Are these quizzes accurate?</h3>
            <p className="text-gray-600 text-sm">Our personality quizzes are designed for entertainment and self-reflection. While based on recognized psychological concepts, they are not clinical assessments.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Can I share my results?</h3>
            <p className="text-gray-600 text-sm">Each result has a unique shareable link. You can copy the link or share directly to social media to compare results with friends.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">How many quizzes do you have?</h3>
            <p className="text-gray-600 text-sm">We currently have {allQuizzes.length} quizzes across personality, fun, and trivia categories, with new quizzes added regularly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
