import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center px-4 py-16 transition-colors">
      <SEOHead
        title="404 — Page Not Found"
        description="The requested page could not be located on CricketVerse."
      />

      <div className="max-w-md w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--bg-elevated)] border-2 border-[var(--border-subtle)] text-[var(--cricket-emerald)] font-heading text-5xl font-extrabold shadow-inner">
          0
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[var(--cricket-emerald)] font-bold">
            Out For A Duck · 404
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[var(--text-primary)]">
            Page Not Found
          </h1>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            The delivery was pitched outside the tramlines. The page or article you are searching for does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-3 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>CricketVerse Home</span>
          </Link>

          <Link
            to="/blogs"
            className="w-full sm:w-auto px-5 py-3 bg-[var(--bg-elevated)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xs font-bold rounded-xl border border-[var(--border-subtle)] flex items-center justify-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[var(--cricket-emerald)]" />
            <span>Browse All Blogs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
