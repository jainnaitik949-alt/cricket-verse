import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Award,
  Calendar,
  Clock,
  Compass,
  Flame,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { AnnouncementStrip } from '../components/AnnouncementStrip';
import { FeaturedBlogCard } from '../components/FeaturedBlogCard';
import { BlogCard } from '../components/BlogCard';
import { NewsletterForm } from '../components/NewsletterForm';
import { SEOHead } from '../components/SEOHead';
import { allBlogs, getFeaturedBlog } from '../data/blogsData';
import { playersData } from '../data/playersData';
import { cricketTimeline } from '../data/timelineData';

export const HomePage: React.FC = () => {
  const featuredBlog = getFeaturedBlog();
  const latestBlogs = allBlogs.slice(1, 7);
  const editorPicks = [allBlogs[3], allBlogs[4], allBlogs[7], allBlogs[8]];
  const spotlightPlayers = playersData.slice(0, 6);

  const categories = [
    {
      title: 'Cricket History',
      description: 'Origins, first Test in 1877, MCC rules, and the growth of the global game.',
      count: 'Detailed Archives',
      icon: Calendar,
      color: 'from-amber-500/20 to-amber-700/10 text-amber-400 border-amber-500/30',
      query: 'Cricket History',
    },
    {
      title: 'Cricket Rules and Basics',
      description: 'The 22-yard pitch, LBW, powerplays, scoring, and fielding positions.',
      count: 'Beginner Guides',
      icon: BookOpen,
      color: 'from-teal-500/20 to-teal-700/10 text-teal-400 border-teal-500/30',
      query: 'Cricket Rules and Basics',
    },
    {
      title: 'Legendary Players',
      description: 'In-depth career studies of Tendulkar, Kohli, Dhoni, and global icons.',
      count: 'Player Biographies',
      icon: Award,
      color: 'from-yellow-500/20 to-yellow-700/10 text-yellow-400 border-yellow-500/30',
      query: 'Legendary Players',
    },
    {
      title: 'International Cricket',
      description: 'ODI World Cups, T20 World Cups, and the World Test Championship.',
      count: 'Global Tournaments',
      icon: Compass,
      color: 'from-blue-500/20 to-blue-700/10 text-blue-400 border-blue-500/30',
      query: 'International Cricket',
    },
    {
      title: 'IPL and T20 Leagues',
      description: 'Franchise auctions, Net Run Rate (NRR), playoffs, and the Impact Player rule.',
      count: 'Franchise Guides',
      icon: Flame,
      color: 'from-orange-500/20 to-orange-700/10 text-orange-400 border-orange-500/30',
      query: 'IPL and T20 Leagues',
    },
    {
      title: 'Records and Statistics',
      description: 'Bradman’s 99.94, Lara’s 400*, Rohit’s 264, and verified historical milestones.',
      count: 'Verified Records',
      icon: ShieldCheck,
      color: 'from-emerald-500/20 to-emerald-700/10 text-emerald-400 border-emerald-500/30',
      query: 'Records and Statistics',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors">
      <SEOHead
        title="Every Match. Every Legend. Every Story."
        description="The premier cricket publication featuring 12 complete in-depth articles, player biographies, beginner rules, tournament breakdowns, and verified historical records."
      />

      {/* Announcement Strip */}
      <AnnouncementStrip />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border-subtle)] py-20 lg:py-28 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-primary)]">
        {/* Stadium lighting glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--cricket-emerald)] font-bold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--cricket-emerald)] animate-ping" />
            <span>Cricket Information & Digital Publication</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[var(--text-primary)] leading-[0.95] max-w-4xl mx-auto">
            The World of Cricket, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              All in One Place.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-normal">
            Explore cricket legends, historic matches, international tournaments, IPL stories, playing rules, iconic records, and the moments that make cricket unforgettable.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blogs"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 group text-sm"
            >
              <span>Explore Cricket Blogs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/basics"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold rounded-xl border border-[var(--border-subtle)] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <BookOpen className="w-4 h-4 text-[var(--cricket-emerald)]" />
              <span>Learn Cricket Basics</span>
            </Link>
          </div>

          {/* Quick metric highlights */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-[var(--border-subtle)] text-center">
            <div className="p-3">
              <p className="font-heading text-3xl sm:text-4xl text-[var(--cricket-emerald)]">12</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">In-Depth Articles</p>
            </div>
            <div className="p-3">
              <p className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">16</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">Legend Profiles</p>
            </div>
            <div className="p-3">
              <p className="font-heading text-3xl sm:text-4xl text-amber-400">100%</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">Verified Data</p>
            </div>
            <div className="p-3">
              <p className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">1877–2025</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">Archived Timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
              Flagship Publication
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
              Featured Cover Story
            </h2>
          </div>
          <Link
            to="/blogs"
            className="text-xs sm:text-sm font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <span>View All 12 Articles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <FeaturedBlogCard blog={featuredBlog} />
      </section>

      {/* Latest Cricket Blogs */}
      <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
                Fresh Dispatches
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                Latest Cricket Blogs
              </h2>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                Original, peer-reviewed cricket journalism covering history, techniques, tournaments, and legends.
              </p>
            </div>
            <Link
              to="/blogs"
              className="px-4 py-2 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold rounded-xl border border-[var(--border-subtle)] transition-colors self-start sm:self-auto shrink-0"
            >
              Browse Complete Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Cricket Categories */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
            Subject Taxonomy
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-[var(--text-primary)]">
            Explore Cricket Categories
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            Navigate our specialized collections tailored for beginners, historians, analytical fans, and players.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                to={`/blogs?category=${encodeURIComponent(cat.query)}`}
                className="group bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 hover:border-[var(--cricket-emerald)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} border flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--cricket-emerald)] font-bold uppercase tracking-wider">
                      {cat.count}
                    </span>
                    <h3 className="font-heading text-2xl text-[var(--text-primary)] group-hover:text-[var(--cricket-emerald)] transition-colors mt-0.5">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-bold text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                  <span>Explore category</span>
                  <ChevronRight className="w-4 h-4 text-[var(--cricket-emerald)] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Legends of Cricket Spotlight */}
      <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
                Hall of Greats
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                Legends of Cricket
              </h2>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                Verified achievements and historical records of the icons who defined cricket across generations.
              </p>
            </div>
            <Link
              to="/players"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 transition-colors self-start sm:self-auto"
            >
              <span>View All 16 Player Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spotlightPlayers.map((player) => (
              <div key={player.id} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden hover:border-[var(--cricket-emerald)] transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group">
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" title={player.country}>{player.countryFlag}</span>
                    <span className="text-xs text-[var(--cricket-emerald)] font-bold">{player.primaryRole}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-[var(--text-primary)] group-hover:text-[var(--cricket-emerald)] transition-colors">
                      {player.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-medium">{player.careerSpan} · {player.country}</p>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                    {player.overview}
                  </p>
                  {player.verifiedRecords[0] && (
                    <div className="p-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-xs">
                      <p className="text-[11px] text-[var(--text-muted)]">{player.verifiedRecords[0].title}</p>
                      <p className="text-[var(--text-primary)] font-bold text-xs">{player.verifiedRecords[0].stat}</p>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-[var(--bg-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <Link
                    to={player.relatedArticleSlug ? `/blogs/${player.relatedArticleSlug}` : `/players`}
                    className="text-[var(--cricket-emerald)] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>Read Biography</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-[var(--text-muted)]">Official Records</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cricket Through the Years (Timeline) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
            Chronology of the Game
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-[var(--text-primary)]">
            Cricket Through the Years
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            Key milestones marking cricket’s evolution from 16th-century rural pastures to global sporting spectacles.
          </p>
        </div>

        <div className="relative border-l-2 border-[var(--border-subtle)] ml-4 sm:ml-32 md:ml-40 space-y-8 pl-6 sm:pl-8">
          {cricketTimeline.slice(0, 8).map((milestone) => (
            <div key={milestone.year} className="relative group">
              {/* Year marker */}
              <div className="hidden sm:block absolute -left-44 top-0.5 text-right w-36">
                <span className="font-heading text-3xl text-[var(--cricket-emerald)] font-bold group-hover:text-emerald-400 transition-colors">
                  {milestone.year}
                </span>
                <span className="block text-[11px] text-[var(--text-muted)] uppercase font-bold">
                  {milestone.category}
                </span>
              </div>

              {/* Glowing pin node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--cricket-emerald)] border-4 border-[var(--bg-primary)] group-hover:scale-125 transition-transform shadow-md shadow-emerald-500/40" />

              {/* Mobile year */}
              <div className="sm:hidden mb-1 flex items-center gap-2">
                <span className="font-heading text-2xl text-[var(--cricket-emerald)] font-bold">{milestone.year}</span>
                <span className="text-[11px] text-[var(--text-muted)] uppercase">· {milestone.category}</span>
              </div>

              {/* Content box */}
              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 hover:border-[var(--cricket-emerald)] transition-all max-w-3xl shadow-sm">
                <h3 className="font-heading text-2xl text-[var(--text-primary)] leading-tight">
                  {milestone.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {milestone.description}
                </p>
                <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-center gap-2">
                  <span className="text-[var(--cricket-emerald)] font-bold">Historical Impact:</span>
                  <span>{milestone.significance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <Link
            to="/blogs/history-of-cricket"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold rounded-xl border border-[var(--border-subtle)] transition-colors"
          >
            <span>Read Full 500-Year Cricket History Article</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--cricket-emerald)]" />
          </Link>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
              Curated Selection
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
              Editor’s Picks
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Hand-picked analytical articles and iconic player retrospectives recommended by the editorial staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorPicks.map((blog) => (
              <div key={blog.id} className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 flex flex-col justify-between hover:border-[var(--cricket-emerald)] transition-all hover:-translate-y-1 shadow-sm">
                <div className="space-y-2.5">
                  <span className="text-[11px] text-[var(--cricket-emerald)] font-bold">{blog.category}</span>
                  <h4 className="font-heading text-xl text-[var(--text-primary)] leading-tight line-clamp-2">
                    <Link to={`/blogs/${blog.slug}`} className="hover:text-[var(--cricket-emerald)] transition-colors">
                      {blog.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{blog.readTimeMinutes} min read</span>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="text-[var(--cricket-emerald)] hover:text-emerald-400 font-bold flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </section>
    </div>
  );
};
