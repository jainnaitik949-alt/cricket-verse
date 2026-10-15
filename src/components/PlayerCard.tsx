import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PlayerProfile } from '../types';

interface PlayerCardProps {
  player: PlayerProfile;
  onSelect?: (player: PlayerProfile) => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, onSelect }) => {
  return (
    <div className="group bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden hover:border-[var(--cricket-emerald)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
      <div>
        {/* Visual Header with small size image and descriptive alt text */}
        <div className="relative aspect-[16/10] bg-[var(--bg-secondary)] overflow-hidden">
          <img
            src={player.image}
            alt={`Portrait of international cricket player ${player.name} representing ${player.country}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/40 to-transparent" />

          {/* Country flag and role badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-xl" title={player.country} role="img" aria-label={player.country}>
              {player.countryFlag}
            </span>
            <span className="text-xs bg-[var(--bg-primary)]/90 text-[var(--cricket-emerald)] px-2.5 py-1 rounded-lg border border-[var(--border-subtle)] font-bold backdrop-blur-sm">
              {player.primaryRole}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <p className="text-[11px] text-[var(--cricket-emerald)] font-bold uppercase tracking-wider">
                {player.careerSpan}
              </p>
              <h3 className="font-heading text-2xl text-[var(--text-primary)] leading-none">
                {player.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-5 space-y-3">
          {player.nickname && (
            <p className="text-xs text-[var(--text-muted)] italic font-medium">
              "{player.nickname}"
            </p>
          )}

          <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
            {player.overview}
          </p>

          {/* Key Verified Record */}
          {player.verifiedRecords.length > 0 && (
            <div className="p-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl">
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--cricket-emerald)] font-bold mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Milestone</span>
              </div>
              <p className="text-xs text-[var(--text-primary)] font-semibold">
                {player.verifiedRecords[0].title}: <strong className="text-[var(--cricket-emerald)]">{player.verifiedRecords[0].stat}</strong>
              </p>
              <p className="text-[11px] text-[var(--text-muted)] truncate mt-0.5">
                {player.verifiedRecords[0].context}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Card Actions with descriptive anchor text */}
      <div className="p-5 pt-0 border-t border-[var(--border-subtle)] mt-2 flex items-center justify-between text-xs">
        {onSelect ? (
          <button
            onClick={() => onSelect(player)}
            aria-label={`View full career statistics and biography for ${player.name}`}
            className="w-full mt-3 py-2.5 px-3 bg-[var(--bg-elevated)] hover:bg-[var(--cricket-emerald)] text-[var(--text-primary)] hover:text-white font-bold rounded-xl border border-[var(--border-subtle)] hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>View Full Career Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : player.relatedArticleSlug ? (
          <Link
            to={`/blogs/${player.relatedArticleSlug}`}
            aria-label={`Read dedicated biography article for ${player.name}`}
            className="w-full mt-3 py-2.5 px-3 bg-[var(--bg-elevated)] hover:bg-[var(--cricket-emerald)] text-[var(--text-primary)] hover:text-white font-bold rounded-xl border border-[var(--border-subtle)] hover:border-transparent transition-all flex items-center justify-center gap-1.5"
          >
            <span>Read Biography Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <Link
            to="/cricket-records"
            aria-label={`Explore all-time cricket records related to ${player.name}`}
            className="w-full mt-3 py-2.5 px-3 bg-[var(--bg-elevated)] hover:bg-[var(--cricket-emerald)] text-[var(--text-primary)] hover:text-white font-bold rounded-xl border border-[var(--border-subtle)] hover:border-transparent transition-all flex items-center justify-center gap-1.5"
          >
            <span>Explore All Cricket Records</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
