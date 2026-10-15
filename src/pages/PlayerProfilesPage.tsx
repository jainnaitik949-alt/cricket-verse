import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Award,
  X,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { PlayerCard } from '../components/PlayerCard';
import { SEOHead } from '../components/SEOHead';
import { SEOPageBadge } from '../components/SEOPageBadge';
import { playersData } from '../data/playersData';
import { PlayerProfile } from '../types';

export const PlayerProfilesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [activeModalPlayer, setActiveModalPlayer] = useState<PlayerProfile | null>(null);

  const roles = ['All', 'Batter', 'Fast Bowler', 'Spin Bowler', 'All-rounder', 'Wicketkeeper Batter'];
  const countries = ['All', 'India', 'Australia', 'West Indies', 'South Africa', 'Sri Lanka'];

  const filteredPlayers = useMemo(() => {
    return playersData.filter((player) => {
      const matchesSearch =
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (player.nickname && player.nickname.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRole = selectedRole === 'All' || player.primaryRole === selectedRole;
      const matchesCountry = selectedCountry === 'All' || player.country === selectedCountry;

      return matchesSearch && matchesRole && matchesCountry;
    });
  }, [searchQuery, selectedRole, selectedCountry]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-8 transition-colors">
      <SEOHead
        title="Cricket Legends Biographies & Stats | CricketVerse"
        description="Explore cricket legends biographies, analyze the greatest cricket players of all time, and examine verified cricket career stats from Bradman to Virat Kohli."
        mainKeyword="cricket legends biographies"
        relatedKeywords={['greatest cricket players', 'cricket career stats']}
        aeoQuestion="Who are considered the greatest legends in cricket history?"
        aeoAnswer="Sir Donald Bradman with his 99.94 Test average, Sachin Tendulkar with 100 international centuries, and MS Dhoni who won all three ICC white-ball trophies lead cricket history."
      />

      {/* Transparent SEO & AEO Target Inspector */}
      <SEOPageBadge />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-4">
        {/* Header with AEO Question & Answer */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <Award className="w-4 h-4" />
            <span>Cricket Hall of Fame Directory</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
            Cricket Hall of Fame: Player Biographies & Career Records
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl text-[var(--cricket-emerald)]">
            Who Are the Greatest Cricket Legends Featured in Our Hall of Fame?
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Cricket history is illuminated by titans including Sachin Tendulkar with 100 international centuries, Virat Kohli with his relentless chase records, MS Dhoni who won all three ICC white-ball trophies, and Sir Donald Bradman who achieved an unassailable 99.94 Test average. Discover their verified milestones below.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 space-y-4 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search player name, nickname..."
                aria-label="Search cricket players by name or nickname"
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-10 pr-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
              />
            </div>

            {/* Role Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-muted)] font-bold shrink-0">Role:</span>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                aria-label="Filter players by tactical role"
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-primary)] rounded-xl px-3 py-3 focus:outline-none focus:border-[var(--cricket-emerald)] cursor-pointer"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Country Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-muted)] font-bold shrink-0">Country:</span>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                aria-label="Filter players by international country"
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-primary)] rounded-xl px-3 py-3 focus:outline-none focus:border-[var(--cricket-emerald)] cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
            <p>
              Showing <strong className="text-[var(--text-primary)]">{filteredPlayers.length}</strong> of{' '}
              <strong className="text-[var(--text-primary)]">{playersData.length}</strong> player profiles
            </p>
            {(searchQuery || selectedRole !== 'All' || selectedCountry !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRole('All');
                  setSelectedCountry('All');
                }}
                aria-label="Reset all player filters"
                className="text-[var(--cricket-emerald)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Players Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onSelect={(p) => setActiveModalPlayer(p)}
            />
          ))}
        </div>
      </div>

      {/* Player Detail Modal */}
      {activeModalPlayer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveModalPlayer(null)}
        >
          <div
            className="w-full max-w-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] bg-[var(--bg-secondary)] overflow-hidden shrink-0">
              <img
                src={activeModalPlayer.image}
                alt={`Full portrait of cricket legend ${activeModalPlayer.name}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/60 to-transparent" />

              <button
                onClick={() => setActiveModalPlayer(null)}
                aria-label="Close player biography modal"
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl" role="img" aria-label={activeModalPlayer.country}>{activeModalPlayer.countryFlag}</span>
                    <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase tracking-wider">
                      {activeModalPlayer.country} · {activeModalPlayer.careerSpan}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)] leading-none">
                    {activeModalPlayer.name}
                  </h3>
                  {activeModalPlayer.nickname && (
                    <p className="text-xs text-[var(--text-muted)] italic mt-0.5">"{activeModalPlayer.nickname}"</p>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Overview */}
              <div>
                <h4 className="font-heading text-xl text-[var(--text-primary)] mb-2">Career Overview</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeModalPlayer.overview}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold block">Primary Role</span>
                  <span className="text-xs text-[var(--text-primary)] font-bold">{activeModalPlayer.primaryRole}</span>
                </div>
                <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold block">Batting Style</span>
                  <span className="text-xs text-[var(--text-primary)] font-bold">{activeModalPlayer.battingStyle}</span>
                </div>
                <div className="p-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold block">Bowling Style</span>
                  <span className="text-xs text-[var(--text-primary)] font-bold">{activeModalPlayer.bowlingStyle}</span>
                </div>
              </div>

              {/* Verified Records */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-[var(--cricket-emerald)] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Statistical Milestones</span>
                </div>
                <div className="space-y-2">
                  {activeModalPlayer.verifiedRecords.map((rec, i) => (
                    <div key={i} className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[var(--text-primary)]">{rec.title}</span>
                        <span className="text-xs font-mono font-bold text-[var(--cricket-emerald)]">{rec.stat}</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">{rec.context}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-2">
                <h4 className="font-heading text-lg text-[var(--text-primary)]">Major Honors & Career Achievements</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                  {activeModalPlayer.majorAchievements?.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[var(--bg-elevated)]/60 p-2.5 rounded-lg border border-[var(--border-subtle)]">
                      <span className="text-[var(--cricket-emerald)] mt-0.5">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Article Link */}
              {activeModalPlayer.relatedArticleSlug && (
                <div className="pt-2">
                  <Link
                    to={`/blogs/${activeModalPlayer.relatedArticleSlug}`}
                    onClick={() => setActiveModalPlayer(null)}
                    aria-label={`Read complete in-depth biography article on ${activeModalPlayer.name}`}
                    className="w-full py-3 px-4 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Read Complete {activeModalPlayer.name} Biography Essay</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
