import React, { useState } from 'react';
import { Trophy, Info } from 'lucide-react';
import { TournamentCard } from '../components/TournamentCard';
import { SEOHead } from '../components/SEOHead';
import { SEOPageBadge } from '../components/SEOPageBadge';
import { tournamentsData } from '../data/tournamentsData';

export const TournamentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'International ODI',
    'International T20',
    'Test Championship',
    'Franchise T20',
    'Women International',
  ];

  const filteredTournaments =
    selectedCategory === 'All'
      ? tournamentsData
      : tournamentsData.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-8 transition-colors">
      <SEOHead
        title="International Cricket Tournaments & Guides | CricketVerse"
        description="Discover international cricket tournaments, relive the ICC Cricket World Cup, and understand IPL tournament structure, auction strategies, and playoff rules."
        mainKeyword="international cricket tournaments"
        relatedKeywords={['ICC Cricket World Cup', 'IPL tournament structure']}
        aeoQuestion="What are the premier tournaments in world cricket?"
        aeoAnswer="The premier global tournaments include the ICC Men’s ODI World Cup, ICC Men’s T20 World Cup, ICC World Test Championship, and the Indian Premier League (IPL)."
      />

      {/* Transparent SEO & AEO Target Inspector */}
      <SEOPageBadge />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-4">
        {/* Header with AEO Question & Answer */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Global Championship Center</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
            International Tournaments & Franchise Leagues
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl text-[var(--cricket-emerald)]">
            What Major Tournaments Define Modern International Cricket?
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Modern international cricket is anchored by four premier global events: the quadrennial ICC Men’s and Women’s ODI World Cups, the fast-paced ICC T20 World Cups, the elite two-year ICC World Test Championship cycle, and the blockbuster Indian Premier League (IPL) franchise tournament.
          </p>
        </div>

        {/* Live Scores & Current Data Disclaimer Note */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-5 flex items-start gap-3.5 shadow-md">
          <Info className="w-5 h-5 text-[var(--cricket-emerald)] shrink-0 mt-0.5" />
          <div className="text-xs text-[var(--text-secondary)] space-y-1">
            <p className="font-bold text-[var(--text-primary)]">
              Data Integrity & Fixtures Architecture Notice
            </p>
            <p className="leading-relaxed">
              CricketVerse strictly catalogs verified historical championship records and tournament formats. In accordance with editorial standards, we do not fabricate live scores, ongoing match status, or speculative league tables. Future real-time score feeds will interface via verified sports data APIs with official timestamps.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-label={`Filter tournaments by category: ${cat}`}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--cricket-emerald)] text-white shadow-md shadow-emerald-600/30'
                    : 'bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </div>
  );
};
