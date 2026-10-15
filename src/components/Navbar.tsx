import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Bookmark,
  Search,
  Menu,
  X,
  Sun,
  Moon,
  Compass,
  Award,
  Trophy,
  BarChart3,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';
import { useTheme } from '../context/ThemeContext';
import { allBlogs } from '../data/blogsData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { savedBlogSlugs } = useBookmarks();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/blogs', label: 'All Blogs' },
    { to: '/basics', label: 'Cricket Basics' },
    { to: '/players', label: 'Players' },
    { to: '/tournaments', label: 'Tournaments' },
    { to: '/records', label: 'Records' },
    { to: '/about', label: 'About' },
  ];

  const searchResults = searchQuery.trim()
    ? allBlogs.filter((blog) => {
        const q = searchQuery.toLowerCase();
        return (
          blog.title.toLowerCase().includes(q) ||
          blog.excerpt.toLowerCase().includes(q) ||
          blog.category.toLowerCase().includes(q) ||
          blog.tags.some((t) => t.toLowerCase().includes(q))
        );
      }).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchModalOpen(false);
      navigate(`/blogs?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Redesigned Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#059669] via-[#10B981] to-[#84CC16] flex items-center justify-center shadow-lg shadow-emerald-500/20 border border-emerald-400/40 group-hover:scale-105 transition-transform duration-300">
                <span className="font-heading text-2xl text-white font-extrabold leading-none tracking-tight">CV</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl tracking-wider text-[var(--text-primary)] flex items-center gap-1 group-hover:text-emerald-400 transition-colors leading-none">
                  CRICKET<span className="text-[var(--cricket-emerald)]">VERSE</span>
                </span>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-medium hidden sm:block">
                  Every Match · Every Legend · Every Story
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActive
                        ? 'text-white bg-[var(--cricket-emerald)] shadow-sm shadow-emerald-600/30 font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions: Theme Switcher, Search, Bookmarks, Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Theme Switcher Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'Pavilion Day' : 'Stadium Night'} theme`}
                title={`Switch to ${theme === 'dark' ? 'Pavilion Day (Light)' : 'Stadium Night (Dark)'}`}
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)] transition-colors flex items-center gap-1.5"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-emerald-600" />
                )}
                <span className="text-[11px] font-semibold hidden xl:inline">
                  {theme === 'dark' ? 'Day Mode' : 'Night Mode'}
                </span>
              </button>

              {/* Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)] transition-colors flex items-center gap-2"
                title="Search articles (Ctrl + K)"
                aria-label="Search articles"
              >
                <Search className="w-4 h-4 text-[var(--cricket-emerald)]" />
                <span className="hidden xl:inline text-xs text-[var(--text-muted)] pr-1">Search...</span>
                <kbd className="hidden xl:inline text-[10px] bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] px-1.5 py-0.5 rounded">
                  /
                </kbd>
              </button>

              {/* Bookmarks Link */}
              <Link
                to="/saved"
                className="relative p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)] transition-colors flex items-center gap-1.5"
                title="Saved Articles"
                aria-label="Saved articles"
              >
                <Bookmark className="w-4 h-4 text-[var(--cricket-emerald)]" />
                <span className="hidden md:inline text-xs font-semibold">Saved</span>
                {savedBlogSlugs.length > 0 && (
                  <span className="bg-[var(--cricket-emerald)] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none shadow-sm">
                    {savedBlogSlugs.length}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg transition-colors border border-[var(--border-subtle)]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-150">
            <div className="mb-3">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, rules, players..."
                  className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-lg pl-9 pr-4 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
                />
              </form>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-white bg-[var(--cricket-emerald)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/saved"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
            >
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[var(--cricket-emerald)]" />
                <span>Saved Articles</span>
              </div>
              {savedBlogSlugs.length > 0 && (
                <span className="bg-[var(--cricket-emerald)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {savedBlogSlugs.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
            >
              <div className="flex items-center gap-2">
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-600" />}
                <span>Theme Mode</span>
              </div>
              <span className="text-xs text-[var(--text-muted)] uppercase">
                {theme === 'dark' ? 'Stadium Night' : 'Pavilion Day'}
              </span>
            </button>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center gap-3">
                <Search className="w-5 h-5 text-[var(--cricket-emerald)] shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, cricket rules, players, records..."
                  className="w-full bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] text-base focus:outline-none"
                />
              </form>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick search suggestions */}
            <div className="max-h-96 overflow-y-auto p-3 divide-y divide-[var(--border-subtle)]">
              {searchResults.length > 0 ? (
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] px-3 py-1 font-semibold">
                    Matching Articles
                  </p>
                  {searchResults.map((blog) => (
                    <Link
                      key={blog.id}
                      to={`/blogs/${blog.slug}`}
                      onClick={() => setSearchModalOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs text-[var(--cricket-emerald)] mb-1 font-semibold">
                          <span>{blog.category}</span>
                          <span>·</span>
                          <span>{blog.readTimeMinutes} min read</span>
                        </div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--cricket-emerald)] transition-colors line-clamp-1">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                          {blog.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : searchQuery.trim() ? (
                <div className="py-8 text-center text-[var(--text-muted)] text-sm">
                  No articles found for "{searchQuery}". Press Enter to see all search options.
                </div>
              ) : (
                <div className="py-6 px-3">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-3">
                    Popular Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Cricket Rules',
                      'Sachin Tendulkar',
                      'Virat Kohli',
                      'MS Dhoni',
                      'ICC World Cup',
                      'IPL Strategy',
                      'Fast Bowling',
                      'Decision Review System',
                    ].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => {
                          setSearchQuery(term);
                          navigate(`/blogs?search=${encodeURIComponent(term)}`);
                          setSearchModalOpen(false);
                        }}
                        className="px-3 py-1.5 text-xs bg-[var(--bg-elevated)] hover:bg-[var(--cricket-emerald)] text-[var(--text-secondary)] hover:text-white rounded-lg border border-[var(--border-subtle)] transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {searchQuery.trim() && (
              <div className="p-3 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] text-right">
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="px-4 py-1.5 bg-[var(--cricket-emerald)] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  View All Search Results
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
