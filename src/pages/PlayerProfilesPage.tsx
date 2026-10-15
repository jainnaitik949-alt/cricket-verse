import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Award,
  X,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { PlayerCard } from '../components/PlayerCard';
import { SEOHead } from '../components/SEOHead';
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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 transition-colors">
      <SEOHead
        title="Legendary Cricket Players Directory"
        description="Explore in-depth player profiles, career statistics, and verified records for cricket legends including Sachin Tendulkar, Virat Kohli, MS Dhoni, and Sir Donald Bradman."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <Award className="w-4 h-4" />
            <span>Cricket Hall of Fame Directory</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
            Legendary Players Directory
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Discover the immortals of cricket. Examine verified records, tactical roles, and career breakdowns across eras of international competition.
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
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-10 pr-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
              />
            </div>

            {/* Role Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-muted)] font-bold shrink-0">Role:</span>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
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
                className="text-[var(--cricket-emerald)] hover:underline font-bold flex items-center gap-1"
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
                alt={activeModalPlayer.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/60 to-transparent" />

              <button
                onClick={() => setActiveModalPlayer(null)}
                className="absolute top-4 right-4 p-2.5 bg-black/70 text-white rounded-xl hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{activeModalPlayer.countryFlag}</span>
                    <span className="text-xs bg-[var(--cricket-emerald)] text-white px-2.5 py-0.5 rounded-lg font-bold">
                      {activeModalPlayer.primaryRole}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                    {activeModalPlayer.fullName}
                  </h3>
                  <p className="text-xs text-[var(--cricket-emerald)] font-bold">
                    Career Span: {activeModalPlayer.careerSpan}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-[var(--text-secondary)]">
              {/* Bio & Styles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl">
                <div>
                  <span className="text-[var(--text-muted)] text-[11px] uppercase block font-bold">Batting Style</span>
                  <span className="text-[var(--text-primary)] font-bold text-xs">{activeModalPlayer.battingStyle}</span>
                </div>
                {activeModalPlayer.bowlingStyle && (
                  <div>
                    <span className="text-[var(--text-muted)] text-[11px] uppercase block font-bold">Bowling Style</span>
                    <span className="text-[var(--text-primary)] font-bold text-xs">{activeModalPlayer.bowlingStyle}</span>
                  </div>
                )}
                <div>
                  <span className="text-[var(--text-muted)] text-[11px] uppercase block font-bold">Born</span>
                  <span className="text-[var(--text-primary)] font-bold text-xs">{activeModalPlayer.born}</span>
                </div>
                {activeModalPlayer.nickname && (
                  <div>
                    <span className="text-[var(--text-muted)] text-[11px] uppercase block font-bold">Nickname</span>
                    <span className="text-[var(--cricket-emerald)] font-bold text-xs">{activeModalPlayer.nickname}</span>
                  </div>
                )}
              </div>

              {/* Career Overview */}
              <div>
                <h4 className="font-heading text-2xl text-[var(--text-primary)] mb-2">Career Retrospective</h4>
                <p className="leading-relaxed">
                  {activeModalPlayer.overview}
                </p>
              </div>

              {/* Major Achievements */}
              <div>
                <h4 className="font-heading text-2xl text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Major Career Honours</span>
                </h4>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[var(--text-primary)]">
                  {activeModalPlayer.majorAchievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>

              {/* Verified Records */}
              <div>
                <h4 className="font-heading text-2xl text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--cricket-emerald)]" />
                  <span>Verified World Records</span>
                </h4>
                <div className="space-y-2">
                  {activeModalPlayer.verifiedRecords.map((rec, i) => (
                    <div key={i} className="p-3.5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[var(--text-primary)]">{rec.title}</span>
                        <span className="font-extrabold text-[var(--cricket-emerald)]">{rec.stat}</span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">{rec.context}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              {activeModalPlayer.relatedArticleSlug && (
                <div className="pt-2">
                  <Link
                    to={`/blogs/${activeModalPlayer.relatedArticleSlug}`}
                    onClick={() => setActiveModalPlayer(null)}
                    className="w-full py-3 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors text-xs shadow-lg"
                  >
                    <span>Read Full 1,000-Word Biography Article</span>
                    <ChevronRight className="w-4 h-4" />
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
