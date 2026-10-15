import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Bookmark,
  Share2,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ArrowLeft,
  ExternalLink,
  ListOrdered,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ShareModal } from '../components/ShareModal';
import { BlogCard } from '../components/BlogCard';
import { useBookmarks } from '../context/BookmarkContext';
import { allBlogs, getBlogBySlug, getRelatedBlogs } from '../data/blogsData';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isSaved, toggleSave } = useBookmarks();
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const blog = slug ? getBlogBySlug(slug) : undefined;

  // Track scroll reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center p-4">
        <SEOHead title="Article Not Found" description="The requested cricket article could not be found." />
        <div className="text-center max-w-md bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-8 space-y-4">
          <h2 className="font-heading text-4xl text-[var(--text-primary)]">Article Not Found</h2>
          <p className="text-sm text-[var(--text-secondary)]">
            The article "{slug}" does not exist in our publishing directory.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--cricket-emerald)] text-white text-xs font-bold rounded-xl hover:bg-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Blogs</span>
          </Link>
        </div>
      </div>
    );
  }

  const saved = isSaved(blog.slug);
  const relatedArticles = getRelatedBlogs(blog.relatedBlogSlugs);

  const currentIndex = allBlogs.findIndex((b) => b.slug === blog.slug);
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : undefined;
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : undefined;

  const formattedDate = new Date(blog.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedVerifiedDate = new Date(blog.lastVerifiedDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://cricketverse.app/blogs/${blog.slug}`;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pb-20 transition-colors relative">
      <SEOHead
        title={blog.title}
        description={blog.excerpt}
        ogType="article"
      />

      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        title={blog.title}
        url={currentUrl}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] py-3 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <Link to="/" className="hover:text-[var(--text-primary)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blogs" className="hover:text-[var(--text-primary)] transition-colors">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-[var(--cricket-emerald)] font-semibold truncate max-w-[200px] sm:max-w-md">{blog.title}</span>
          </div>

          <Link
            to="/blogs"
            className="hidden sm:inline-flex items-center gap-1 text-[var(--cricket-emerald)] hover:text-emerald-400 font-bold shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header Container */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-6">
        {/* Category & Read Time */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
          <Link
            to={`/blogs?category=${encodeURIComponent(blog.category)}`}
            className="text-[var(--cricket-emerald)] hover:underline"
          >
            {blog.category}
          </Link>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-[var(--text-secondary)]">
            <Clock className="w-3.5 h-3.5 text-[var(--cricket-emerald)]" />
            <span>{blog.readTimeMinutes} min read</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.05]">
          {blog.title}
        </h1>

        {/* Subtitle */}
        <p className="font-subheading text-lg sm:text-xl text-[var(--cricket-emerald)] tracking-wide leading-relaxed font-semibold">
          {blog.subtitle}
        </p>

        {/* Author row & Interactive actions */}
        <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[var(--cricket-emerald)]"
            />
            <div>
              <p className="text-sm font-bold text-[var(--text-primary)]">{blog.author.name}</p>
              <p className="text-xs text-[var(--text-muted)]">{blog.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Bookmark button */}
            <button
              onClick={() => toggleSave(blog.slug)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                saved
                  ? 'bg-[var(--cricket-emerald)] text-white shadow-md'
                  : 'bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
              <span>{saved ? 'Article Saved' : 'Save Article'}</span>
            </button>

            {/* Share button */}
            <button
              onClick={() => setShareModalOpen(true)}
              className="p-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
              title="Share article"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cover Image & Caption */}
        <div className="pt-4 space-y-2">
          <div className="rounded-3xl overflow-hidden border border-[var(--border-subtle)] aspect-[16/9] bg-[var(--bg-secondary)] shadow-2xl">
            <img
              src={blog.coverImage}
              alt={blog.coverImageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {blog.coverImageCaption && (
            <p className="text-xs text-[var(--text-muted)] italic text-center px-4">
              {blog.coverImageCaption}
            </p>
          )}
        </div>
      </header>

      {/* Main Content Layout with Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 grid grid-cols-1 gap-10">
        {/* Table of Contents Box */}
        <nav aria-label="Table of contents" className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-[var(--text-primary)] font-subheading text-sm uppercase tracking-wider font-bold">
            <ListOrdered className="w-4 h-4 text-[var(--cricket-emerald)]" />
            <span>Table of Contents</span>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {blog.sections.map((section, idx) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[var(--text-secondary)] hover:text-[var(--cricket-emerald)] transition-colors flex items-start gap-1.5 line-clamp-1 py-1"
                >
                  <span className="text-[var(--cricket-emerald)] font-bold">{idx + 1}.</span>
                  <span>{section.title.replace(/^\d+\.\s*/, '')}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#key-takeaways"
                className="text-[var(--cricket-emerald)] hover:underline transition-colors flex items-center gap-1.5 py-1 font-bold"
              >
                <span>★ Key Takeaways & Fact Sheet</span>
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-normal bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border-l-4 border-[var(--cricket-emerald)] italic shadow-sm">
          {blog.introduction}
        </div>

        {/* Article Body Sections */}
        <article className="space-y-12 text-[var(--text-primary)] leading-relaxed">
          {blog.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)] pt-2 border-b border-[var(--border-subtle)] pb-2">
                {section.title}
              </h2>

              <div className="text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line text-[var(--text-secondary)]">
                {section.content}
              </div>

              {/* Render Table if available */}
              {section.table && (
                <div className="my-6 border border-[var(--border-subtle)] rounded-2xl overflow-hidden bg-[var(--bg-card)] shadow-lg">
                  {section.table.caption && (
                    <div className="p-3 bg-[var(--bg-elevated)] border-b border-[var(--border-subtle)] text-xs font-bold text-[var(--cricket-emerald)]">
                      {section.table.caption}
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[var(--bg-secondary)] text-[var(--text-primary)] border-b border-[var(--border-subtle)]">
                          {section.table.headers.map((h, i) => (
                            <th key={i} className="py-3 px-4 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[var(--bg-elevated)] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 ${
                                  cIdx === 0 ? 'font-bold text-[var(--text-primary)]' : ''
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Key Takeaways Section */}
          <section id="key-takeaways" className="bg-[var(--bg-card)] border border-[var(--cricket-emerald)] rounded-3xl p-6 sm:p-8 space-y-4 scroll-mt-24 shadow-xl stadium-glow-emerald">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="font-heading text-3xl text-[var(--text-primary)]">Key Takeaways</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
              {blog.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--cricket-emerald)] mt-2 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Conclusion */}
          <section className="space-y-3 pt-4">
            <h3 className="font-heading text-3xl text-[var(--text-primary)]">Conclusion</h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {blog.conclusion}
            </p>
          </section>

          {/* Verification & Sources */}
          <section className="pt-6 border-t border-[var(--border-subtle)] space-y-3 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--cricket-emerald)]" />
              <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-[11px]">
                Fact-Check & Sources (Last Verified: {formattedVerifiedDate})
              </span>
            </div>
            <p className="text-[11px] leading-relaxed">
              In accordance with CricketVerse editorial ethics, all historical dates, scores, laws, and records cited in this article are verified against official records:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-[11px]">
              {blog.sources.map((src, i) => (
                <li key={i}>
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--cricket-emerald)] hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      <span>{src.title}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span>{src.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Tags */}
          <div className="pt-4 flex flex-wrap gap-2 text-xs">
            <span className="text-[var(--text-muted)] font-bold py-1">Tags:</span>
            {blog.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blogs?search=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-[var(--bg-elevated)] hover:bg-[var(--cricket-emerald)] text-[var(--text-secondary)] hover:text-white rounded-lg border border-[var(--border-subtle)] transition-colors font-medium"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </article>

        {/* Previous and Next Article Links */}
        <div className="pt-8 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevBlog ? (
            <Link
              to={`/blogs/${prevBlog.slug}`}
              className="p-4 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl flex items-center gap-3 transition-colors group shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--cricket-emerald)] shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div className="overflow-hidden">
                <span className="text-[11px] text-[var(--text-muted)] uppercase block font-bold">Previous Article</span>
                <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--cricket-emerald)] transition-colors line-clamp-1">
                  {prevBlog.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog && (
            <Link
              to={`/blogs/${nextBlog.slug}`}
              className="p-4 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl flex items-center justify-between gap-3 text-right transition-colors group shadow-sm"
            >
              <div className="overflow-hidden">
                <span className="text-[11px] text-[var(--text-muted)] uppercase block font-bold">Next Article</span>
                <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--cricket-emerald)] transition-colors line-clamp-1">
                  {nextBlog.title}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--cricket-emerald)] shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="pt-12 border-t border-[var(--border-subtle)] space-y-6">
            <div>
              <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
                Further Reading
              </span>
              <h3 className="font-heading text-3xl text-[var(--text-primary)]">
                Related Articles
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <BlogCard key={rel.id} blog={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
