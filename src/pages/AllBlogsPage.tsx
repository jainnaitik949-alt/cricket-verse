import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, ArrowUpDown, BookOpen, AlertCircle } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { SEOHead } from '../components/SEOHead';
import { allBlogs, blogCategories } from '../data/blogsData';

export const AllBlogsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'alphabetical' | 'readTime'>('latest');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && blogCategories.includes(cat as any)) {
      setSelectedCategory(cat);
    }
    const q = searchParams.get('search');
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredBlogs = useMemo(() => {
    let result = [...allBlogs];

    if (selectedCategory !== 'All') {
      result = result.filter((b) => b.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q)) ||
          b.sections.some((s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'latest') {
      result.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'readTime') {
      result.sort((a, b) => b.readTimeMinutes - a.readTimeMinutes);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('latest');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || searchQuery.trim() !== '';

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 transition-colors">
      <SEOHead
        title="All Cricket Blogs & Guides"
        description="Browse all 12 complete, detailed cricket articles on CricketVerse covering history, rules, formats, legends, IPL, records, batting, bowling, and technology."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <BookOpen className="w-4 h-4" />
            <span>CricketVerse Publishing Archive</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
            All Cricket Blogs
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Explore 12 authoritative, fully researched articles breaking down cricket history, playing rules, legendary player profiles, international tournaments, and technical skills.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 space-y-5 shadow-lg">
          {/* Search and Sort controls */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.trim()) {
                    searchParams.set('search', e.target.value);
                  } else {
                    searchParams.delete('search');
                  }
                  setSearchParams(searchParams);
                }}
                placeholder="Search by keywords, players, rules, or tournaments..."
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-10 pr-10 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    searchParams.delete('search');
                    setSearchParams(searchParams);
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 font-bold">
                <ArrowUpDown className="w-3.5 h-3.5 text-[var(--cricket-emerald)]" />
                <span className="hidden sm:inline">Sort:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort articles"
                className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-primary)] rounded-xl px-3 py-3 focus:outline-none focus:border-[var(--cricket-emerald)] cursor-pointer"
              >
                <option value="latest">Latest Published</option>
                <option value="oldest">Oldest First</option>
                <option value="alphabetical">Title (A to Z)</option>
                <option value="readTime">Read Time (Longest)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="space-y-2">
            <span className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider block">
              Filter By Category
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {blogCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                      isActive
                        ? 'bg-[var(--cricket-emerald)] text-white shadow-md shadow-emerald-600/30'
                        : 'bg-[var(--bg-elevated)] hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active status bar */}
          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
            <p>
              Showing <strong className="text-[var(--text-primary)]">{filteredBlogs.length}</strong> of{' '}
              <strong className="text-[var(--text-primary)]">{allBlogs.length}</strong> cricket articles
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-[var(--cricket-emerald)] hover:underline font-bold flex items-center gap-1 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-12 text-center space-y-4 max-w-xl mx-auto shadow-xl">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--cricket-emerald)] mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-3xl text-[var(--text-primary)]">No Articles Found</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              We couldn’t find any articles matching your search criteria. Try modifying your search keywords or switching categories.
            </p>
            <div className="pt-2">
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
