import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{siteConfig.name}</h3>
            <p className="text-sm">{siteConfig.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quizzes</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quiz/personality-type" className="hover:text-white transition-colors">Personality Type</Link></li>
              <li><Link href="/quiz/love-language" className="hover:text-white transition-colors">Love Language</Link></li>
              <li><Link href="/quiz/spirit-animal" className="hover:text-white transition-colors">Spirit Animal</Link></li>
              <li><Link href="/quiz/element-type" className="hover:text-white transition-colors">Element Type</Link></li>
              <li><Link href="/quizzes" className="hover:text-white transition-colors">View All</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quizzes" className="hover:text-white transition-colors">All Quizzes</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 text-xs">Quizzes are for entertainment purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
