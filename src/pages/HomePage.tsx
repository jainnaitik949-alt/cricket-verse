import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Award,
  Calendar,
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
import { SEOPageBadge } from '../components/SEOPageBadge';
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
        title="Cricket News, Guides & Legends Archive | CricketVerse"
        description="Explore cricket news and articles, uncover cricket history, and master our verified cricket records guide with in-depth analysis and player biographies."
        mainKeyword="cricket news and articles"
        relatedKeywords={['cricket history', 'cricket records guide']}
        aeoQuestion="What makes CricketVerse the definitive cricket publication?"
        aeoAnswer="CricketVerse provides verified historical archives, tactical coaching tutorials, player biographies, and tournament breakdowns curated by cricket historians and analysts."
      />

      {/* Announcement Strip */}
      <AnnouncementStrip />

      {/* Transparent SEO & AEO Target Inspector */}
      <SEOPageBadge />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border-subtle)] py-20 lg:py-28 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-primary)]">
        {/* Stadium lighting glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--cricket-emerald)] font-bold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--cricket-emerald)] animate-ping" />
            <span>Cricket News, Guides & Digital Publication</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[var(--text-primary)] leading-[0.95] max-w-4xl mx-auto">
            The World of Cricket, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              All in One Place.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-normal">
            Explore cricket news and articles, uncover centuries of cricket history, and master our verified cricket records guide with in-depth analysis and legendary player biographies.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blogs"
              aria-label="Explore all cricket blog articles and analysis"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 group text-sm cursor-pointer"
            >
              <span>Explore Cricket Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/cricket-basics"
              aria-label="Learn beginner cricket rules and pitch dimensions"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold rounded-xl border border-[var(--border-subtle)] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
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
              <p className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">1598–2025</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">Archived Timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section (AEO Question Heading) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
              Flagship Publication
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
              What Is the Featured Cover Story on CricketVerse Today?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
              CricketVerse’s featured cover story traces the extraordinary transformation of cricket from 16th-century English village pastures to five-day Test epics and modern floodlit global stadium tournaments.
            </p>
          </div>
          <Link
            to="/blogs"
            aria-label="View all 12 cricket articles in our publication"
            className="text-xs sm:text-sm font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 flex items-center gap-1 transition-colors shrink-0"
          >
            <span>View All 12 Articles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <FeaturedBlogCard blog={featuredBlog} />
      </section>

      {/* Latest Cricket Blogs (AEO Question Heading) */}
      <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
                Fresh Dispatches
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                What Are the Latest In-Depth Cricket Articles and Tactical Stories?
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                Our latest dispatches deliver peer-reviewed cricket journalism covering match laws, bowling mechanics, tournament tactics, and statistical milestones.
              </p>
            </div>
            <Link
              to="/blogs"
              aria-label="Browse complete archive of 12 cricket articles"
              className="px-4 py-2 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold rounded-xl border border-[var(--border-subtle)] transition-colors self-start sm:self-auto shrink-0"
            >
              <span>Browse Complete Archive</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Cricket Categories (AEO Question Heading) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
            Subject Taxonomy
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-[var(--text-primary)]">
            What Cricket Categories Can You Explore Across Our Publication?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Readers can explore six curated subjects covering cricket history, beginner playing rules, legend biographies, international tournaments, IPL franchise leagues, and verified records.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                to={`/blogs?category=${encodeURIComponent(cat.query)}`}
                aria-label={`Explore cricket category: ${cat.title}`}
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
                  <span>Explore {cat.title}</span>
                  <ChevronRight className="w-4 h-4 text-[var(--cricket-emerald)] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Editor's Curated Picks (AEO Question Heading) */}
      <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Curated Masterpieces
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
              Which Essential Articles Does the CricketVerse Editorial Board Recommend?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
              Our editorial board highlights four pivotal essays exploring batting discipline, legendary rivalries, IPL auction dynamics, and unbreakable statistical milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorPicks.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Spotlight (AEO Question Heading) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
              Legends Spotlight
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
              Who Are the Legendary Players Spotlighted in Cricket History?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
              Cricket history celebrates timeless icons including Sachin Tendulkar, Virat Kohli, MS Dhoni, Rohit Sharma, and Jasprit Bumrah whose verified statistics defined their eras.
            </p>
          </div>
          <Link
            to="/players"
            aria-label="View all 16 cricket legends in our Hall of Fame"
            className="text-xs sm:text-sm font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 flex items-center gap-1 transition-colors shrink-0"
          >
            <span>View All 16 Legends</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spotlightPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden hover:border-[var(--cricket-emerald)] transition-all group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-[var(--bg-secondary)] overflow-hidden">
                <img
                  src={player.image}
                  alt={`Portrait of international cricket player ${player.name} (${player.country})`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xl" role="img" aria-label={player.country}>{player.countryFlag}</span>
                  <span className="text-xs bg-[var(--bg-primary)]/80 text-[var(--cricket-emerald)] px-2 py-0.5 rounded font-bold backdrop-blur-sm">
                    {player.primaryRole}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-heading text-2xl text-[var(--text-primary)] leading-none">
                    {player.name}
                  </h3>
                  <p className="text-[11px] text-[var(--text-muted)] mt-1">{player.careerSpan}</p>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                  {player.overview}
                </p>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">{player.battingStyle}</span>
                  <Link
                    to="/players"
                    aria-label={`View full player biography for ${player.name}`}
                    className="font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 flex items-center gap-1"
                  >
                    <span>Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Milestones Timeline (AEO Question Heading) */}
      <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
                Heritage & Milestones
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                How Did Cricket Evolve from 1598 Pastoral Origins to the Modern Era?
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                Cricket evolved across five centuries from a 1598 schoolboy pastime in Guildford into a 22-yard codified global sport uniting over two billion supporters worldwide.
              </p>
            </div>
            <Link
              to="/blogs/history-of-cricket"
              aria-label="Read complete historical evolution essay of cricket"
              className="text-xs sm:text-sm font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 flex items-center gap-1 transition-colors shrink-0"
            >
              <span>Read History Article</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cricketTimeline.slice(0, 6).map((item) => (
              <div
                key={item.year}
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--cricket-emerald)]/50 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl text-[var(--cricket-emerald)]">{item.year}</span>
                  <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase bg-[var(--bg-elevated)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
                    Milestone
                  </span>
                </div>
                <h3 className="font-heading text-lg text-[var(--text-primary)] leading-tight">{item.headline}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section (AEO Question Heading) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider block">
            Weekly Dispatch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
            Why Should You Subscribe to the CricketVerse Dispatch?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            The CricketVerse Dispatch delivers weekly tactical essays, verified statistical breakdowns, and match previews directly to your inbox without spam or advertising clutter.
          </p>
        </div>
        <NewsletterForm />
      </section>
    </div>
  );
};
