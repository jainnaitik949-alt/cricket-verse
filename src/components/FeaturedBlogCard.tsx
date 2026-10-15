import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BlogArticle } from '../types';
import { useBookmarks } from '../context/BookmarkContext';

interface FeaturedBlogCardProps {
  blog: BlogArticle;
}

export const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({ blog }) => {
  const { isSaved, toggleSave } = useBookmarks();
  const saved = isSaved(blog.slug);

  const formattedDate = new Date(blog.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="relative bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl overflow-hidden hover:border-[var(--cricket-emerald)] transition-all duration-300 shadow-2xl stadium-glow-emerald">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Cover Image */}
        <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] bg-[var(--bg-secondary)] overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.coverImageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[var(--bg-card)] hidden lg:block opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent lg:hidden" />

          {/* Bookmark Button */}
          <button
            onClick={() => toggleSave(blog.slug)}
            aria-label={saved ? `Remove bookmark for ${blog.title}` : `Bookmark article: ${blog.title}`}
            className={`absolute top-4 left-4 p-3 rounded-xl backdrop-blur-md transition-all z-10 shadow-lg cursor-pointer ${
              saved
                ? 'bg-[var(--cricket-emerald)] text-white'
                : 'bg-black/60 text-white hover:bg-black/80'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content Details */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[var(--bg-card)]">
          <div className="space-y-4">
            {/* Kicker & Category */}
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-bold tracking-wider uppercase">
              <span className="text-[var(--cricket-emerald)] flex items-center gap-1.5 font-extrabold">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Featured Cover Story</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400 font-semibold">{blog.category}</span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-4xl text-[var(--text-primary)] hover:text-[var(--cricket-emerald)] transition-colors leading-[1.05]">
              <Link to={`/blogs/${blog.slug}`} aria-label={`Read featured story: ${blog.title}`}>
                {blog.title}
              </Link>
            </h3>

            {/* Subtitle */}
            <p className="text-sm font-subheading text-[var(--cricket-emerald)] uppercase tracking-wide font-medium">
              {blog.subtitle}
            </p>

            {/* Excerpt */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] space-y-4">
            {/* Metadata info */}
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-3">
                <img
                  src={blog.author.avatar}
                  alt={`Author portrait of ${blog.author.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-full object-cover border-2 border-[var(--cricket-emerald)]"
                />
                <div>
                  <p className="text-[var(--text-primary)] font-bold text-xs leading-none">{blog.author.name}</p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{blog.author.role}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1 justify-end text-[var(--cricket-emerald)] font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{blog.readTimeMinutes} min read</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{formattedDate}</p>
              </div>
            </div>

            {/* Read Button with descriptive anchor text */}
            <Link
              to={`/blogs/${blog.slug}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              aria-label={`Read complete article: ${blog.title}`}
            >
              <span>Read Complete Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
