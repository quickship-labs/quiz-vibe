'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-pink-500 bg-clip-text text-transparent">
            QuizVibe
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/quizzes" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              All Quizzes
            </Link>
            <Link href="/#personality" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Personality
            </Link>
            <Link href="/#fun" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Fun
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/quizzes" className="block py-2 text-gray-600 hover:text-primary-600">All Quizzes</Link>
            <Link href="/#personality" className="block py-2 text-gray-600 hover:text-primary-600">Personality</Link>
            <Link href="/#fun" className="block py-2 text-gray-600 hover:text-primary-600">Fun</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
