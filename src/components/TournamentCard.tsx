import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, ArrowRight } from 'lucide-react';
import { TournamentInfo } from '../types';

interface TournamentCardProps {
  tournament: TournamentInfo;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--cricket-emerald)] transition-all duration-300 hover:shadow-xl">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs text-[var(--cricket-emerald)] font-bold uppercase tracking-wider">
              {tournament.category}
            </span>
            <h3 className="font-heading text-3xl text-[var(--text-primary)] mt-1">
              {tournament.name}
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Governed by {tournament.governingBody} · Est. {tournament.inauguralYear} ({tournament.frequency})
            </p>
          </div>
          <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-amber-400">
            <Trophy className="w-5 h-5" />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {tournament.description}
        </p>

        {/* Structure & Champions Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl">
            <span className="text-[11px] text-[var(--text-muted)] uppercase font-semibold block">
              Reigning Champions
            </span>
            <span className="text-sm text-[var(--text-primary)] font-bold mt-0.5 block">
              {tournament.currentChampions}
            </span>
          </div>

          <div className="p-3.5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl">
            <span className="text-[11px] text-[var(--text-muted)] uppercase font-semibold block">
              Most Successful
            </span>
            <span className="text-sm text-[var(--cricket-emerald)] font-bold mt-0.5 block">
              {tournament.mostSuccessfulTeam}
            </span>
          </div>
        </div>

        {/* Recent Editions Table */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[var(--cricket-emerald)]" />
            <span>Recent Finals History</span>
          </h4>
          <div className="border border-[var(--border-subtle)] rounded-xl overflow-hidden bg-[var(--bg-elevated)] text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-secondary)]">
                  <th className="py-2.5 px-3">Year</th>
                  <th className="py-2.5 px-3">Champion</th>
                  <th className="py-2.5 px-3 hidden sm:table-cell">Runner-Up</th>
                  <th className="py-2.5 px-3">Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                {tournament.recentEditions.slice(0, 3).map((ed) => (
                  <tr key={ed.year} className="hover:bg-[var(--bg-card)]">
                    <td className="py-2.5 px-3 font-bold text-[var(--text-primary)]">{ed.year}</td>
                    <td className="py-2.5 px-3 text-[var(--cricket-emerald)] font-semibold">{ed.winner}</td>
                    <td className="py-2.5 px-3 hidden sm:table-cell">{ed.runnerUp}</td>
                    <td className="py-2.5 px-3 text-[11px] text-[var(--text-muted)] truncate max-w-[140px]">{ed.finalMargin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-5 mt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <span className="text-xs text-[var(--text-muted)]">Verified ICC / League Data</span>
        {tournament.relatedArticleSlug ? (
          <Link
            to={`/blogs/${tournament.relatedArticleSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 transition-colors"
          >
            <span>Read In-Depth Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--cricket-emerald)] hover:text-emerald-400 transition-colors"
          >
            <span>Related Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
