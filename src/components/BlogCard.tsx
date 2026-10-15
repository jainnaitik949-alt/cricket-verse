import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Clock, ArrowRight } from 'lucide-react';
import { BlogArticle } from '../types';
import { useBookmarks } from '../context/BookmarkContext';

interface BlogCardProps {
  blog: BlogArticle;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { isSaved, toggleSave } = useBookmarks();
  const saved = isSaved(blog.slug);

  const formattedDate = new Date(blog.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="group bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden hover:border-[var(--cricket-emerald)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)]">
        <img
          src={blog.coverImage}
          alt={blog.coverImageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80" />

        {/* Bookmark Action */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSave(blog.slug);
          }}
          aria-label={saved ? 'Remove bookmark' : 'Bookmark article'}
          className={`absolute top-3 right-3 p-2.5 rounded-xl backdrop-blur-md transition-all ${
            saved
              ? 'bg-[var(--cricket-emerald)] text-white shadow-md'
              : 'bg-black/60 text-white hover:bg-black/80'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Metadata - Zero-pill discipline */}
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-bold">
            <span className="text-[var(--cricket-emerald)]">{blog.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{blog.readTimeMinutes} min read</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-2xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--cricket-emerald)] transition-colors leading-tight line-clamp-2">
            <Link to={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        {/* Footer info & Read CTA */}
        <div className="pt-5 mt-5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-6 h-6 rounded-full object-cover border border-[var(--border-subtle)]"
            />
            <span className="text-[var(--text-secondary)] font-medium truncate max-w-[120px]">{blog.author.name}</span>
          </div>

          <Link
            to={`/blogs/${blog.slug}`}
            className="inline-flex items-center gap-1 font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
