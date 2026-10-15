import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogCard } from '../components/BlogCard';
import { useBookmarks } from '../context/BookmarkContext';
import { allBlogs } from '../data/blogsData';

export const SavedArticlesPage: React.FC = () => {
  const { savedBlogSlugs, clearAllSaved } = useBookmarks();

  const savedBlogs = allBlogs.filter((b) => savedBlogSlugs.includes(b.slug));

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 transition-colors">
      <SEOHead
        title="Saved Cricket Articles"
        description="Access your saved CricketVerse reading list and bookmarked articles across all cricket categories."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
              <Bookmark className="w-4 h-4 fill-current text-[var(--cricket-emerald)]" />
              <span>Personal Reading List</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
              Saved Articles
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Articles bookmarked for offline study, quick reference, and research. Stored locally in your browser.
            </p>
          </div>

          {savedBlogs.length > 0 && (
            <button
              onClick={clearAllSaved}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] hover:bg-red-500/10 text-[var(--text-secondary)] hover:text-red-400 border border-[var(--border-subtle)] rounded-xl text-xs font-bold transition-colors self-start sm:self-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All Saved</span>
            </button>
          )}
        </div>

        {/* Content */}
        {savedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {savedBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-12 text-center space-y-4 max-w-lg mx-auto shadow-xl">
            <div className="w-14 h-14 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--cricket-emerald)] mx-auto">
              <Bookmark className="w-6 h-6 text-[var(--cricket-emerald)]" />
            </div>
            <h3 className="font-heading text-3xl text-[var(--text-primary)]">No Saved Articles Yet</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              When exploring our 12 cricket blogs, click the bookmark icon on any article card or reader header to save it here for quick access.
            </p>
            <div className="pt-2">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors shadow-lg"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore All Cricket Blogs</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
