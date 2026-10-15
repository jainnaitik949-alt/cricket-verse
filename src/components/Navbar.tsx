import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Bookmark,
  Search,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
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
    { to: '/cricket-basics', label: 'Cricket Basics' },
    { to: '/players', label: 'Players' },
    { to: '/tournaments', label: 'Tournaments' },
    { to: '/cricket-records', label: 'Records' },
    { to: '/about-us', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
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
      <header className="sticky top-0 z-40 bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Redesigned Brand Logo with rich anchor text */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="CricketVerse Home - Every Match. Every Legend. Every Story.">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#059669] via-[#10B981] to-[#22C55E] flex items-center justify-center shadow-lg shadow-emerald-500/20 border border-emerald-400/40 group-hover:scale-105 transition-transform duration-300">
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

            {/* Desktop Navigation with distinct anchor text */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
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
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)] transition-colors flex items-center gap-1.5 cursor-pointer"
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
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)] transition-colors flex items-center gap-2 cursor-pointer"
                title="Search cricket articles"
                aria-label="Search cricket articles"
              >
                <Search className="w-4 h-4 text-[var(--cricket-emerald)]" />
                <span className="hidden xl:inline text-xs text-[var(--text-muted)] pr-1">Search articles...</span>
                <kbd className="hidden xl:inline text-[10px] bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)] px-1.5 py-0.5 rounded">
                  /
                </kbd>
              </button>

              {/* Bookmarks Link with anchor text */}
              <Link
                to="/saved-articles"
                className="relative p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] rounded-lg border border-[var(--border-subtle)] transition-colors flex items-center gap-1.5"
                title="View saved cricket reading list"
                aria-label={`View saved articles reading list (${savedBlogSlugs.length} saved)`}
              >
                <Bookmark className="w-4 h-4 text-[var(--cricket-emerald)]" />
                <span className="hidden md:inline text-xs font-semibold">Saved Reading List</span>
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
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
              to="/saved-articles"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
            >
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[var(--cricket-emerald)]" />
                <span>Saved Reading List</span>
              </div>
              {savedBlogSlugs.length > 0 && (
                <span className="bg-[var(--cricket-emerald)] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {savedBlogSlugs.length}
                </span>
              )}
            </Link>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl space-y-4 p-5">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--cricket-emerald)]" />
                <span className="font-heading text-lg tracking-wide text-[var(--text-primary)]">
                  Search CricketVerse Publication
                </span>
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                aria-label="Close search modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 12 articles, rules, legends, tournaments..."
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)] focus:ring-1 focus:ring-[var(--cricket-emerald)]"
              />
            </form>

            {/* Results preview */}
            <div className="max-h-80 overflow-y-auto space-y-2">
              {searchQuery.trim() && searchResults.length === 0 && (
                <div className="text-center py-8 text-sm text-[var(--text-muted)]">
                  No cricket articles matching "{searchQuery}". Try searching "Sachin", "LBW", "DRS", or "World Cup".
                </div>
              )}

              {searchResults.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blogs/${blog.slug}`}
                  onClick={() => setSearchModalOpen(false)}
                  className="p-3 rounded-xl bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all flex items-center justify-between group"
                  aria-label={`Read article: ${blog.title}`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-[var(--cricket-emerald)] font-bold uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--cricket-emerald)] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                </Link>
              ))}

              {!searchQuery.trim() && (
                <div className="text-xs text-[var(--text-muted)] pt-2 flex flex-wrap gap-2 items-center">
                  <span>Suggested searches:</span>
                  {['Cricket Rules', 'Sachin Tendulkar', 'Virat Kohli', 'MS Dhoni', 'World Cup', 'IPL Strategy'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className="px-2.5 py-1 rounded bg-[var(--bg-elevated)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] cursor-pointer transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
