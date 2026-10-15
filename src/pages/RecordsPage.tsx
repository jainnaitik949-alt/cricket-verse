import React, { useState, useMemo } from 'react';
import { ShieldCheck, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { verifiedCricketRecords } from '../data/recordsData';

export const RecordsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const formats = ['All', 'Test', 'ODI', 'T20I', 'World Cup', 'IPL'];
  const categories = ['All', 'Batting', 'Bowling', 'Wicketkeeping', 'Team'];

  const filteredRecords = useMemo(() => {
    return verifiedCricketRecords.filter((rec) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        rec.recordName.toLowerCase().includes(q) ||
        rec.holder.toLowerCase().includes(q) ||
        rec.achievement.toLowerCase().includes(q) ||
        rec.details.toLowerCase().includes(q);

      const matchesFormat = selectedFormat === 'All' || rec.format === selectedFormat;
      const matchesCategory = selectedCategory === 'All' || rec.category === selectedCategory;

      return matchesSearch && matchesFormat && matchesCategory;
    });
  }, [searchQuery, selectedFormat, selectedCategory]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 transition-colors">
      <SEOHead
        title="Verified Cricket Records & Statistics"
        description="Explore verified historical cricket records across Tests, ODIs, T20Is, World Cups, and the IPL. Featuring Bradman’s 99.94, Lara’s 400*, Murali’s 800 wickets, and Rohit’s 264."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Official ICC Historical Database</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
            Cricket Records That Made History
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Statistically verified milestones across 140+ years of international competition. Every entry includes official source verification and verification timestamps.
          </p>
        </div>

        {/* Filter and Search Box */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 space-y-4 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search record name, player, or team..."
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-10 pr-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
              />
            </div>

            {/* Format Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-muted)] font-bold shrink-0">Format:</span>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-primary)] rounded-xl px-3 py-3 focus:outline-none focus:border-[var(--cricket-emerald)] cursor-pointer"
              >
                {formats.map((f) => (
                  <option key={f} value={f}>
                    {f === 'All' ? 'All Formats' : f}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-muted)] font-bold shrink-0">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-primary)] rounded-xl px-3 py-3 focus:outline-none focus:border-[var(--cricket-emerald)] cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Categories' : c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
            <p>
              Showing <strong className="text-[var(--text-primary)]">{filteredRecords.length}</strong> of{' '}
              <strong className="text-[var(--text-primary)]">{verifiedCricketRecords.length}</strong> verified records
            </p>
            {(searchQuery || selectedFormat !== 'All' || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFormat('All');
                  setSelectedCategory('All');
                }}
                className="text-[var(--cricket-emerald)] hover:underline font-bold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Records Table View */}
        <div className="border border-[var(--border-subtle)] rounded-3xl overflow-hidden bg-[var(--bg-card)] shadow-2xl">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[var(--bg-secondary)] text-[var(--text-primary)] border-b border-[var(--border-subtle)]">
                  <th className="py-4 px-4 font-bold">Record Description</th>
                  <th className="py-4 px-4 font-bold">Format & Discipline</th>
                  <th className="py-4 px-4 font-bold">Holder / Team</th>
                  <th className="py-4 px-4 font-bold">Achievement</th>
                  <th className="py-4 px-4 font-bold">Period / Date</th>
                  <th className="py-4 px-4 font-bold">Verification & Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                {filteredRecords.map((rec) => (
                  <tr key={rec.id} className="hover:bg-[var(--bg-elevated)] transition-colors">
                    <td className="py-4 px-4 font-bold text-[var(--text-primary)]">
                      <div>{rec.recordName}</div>
                      <div className="text-[11px] text-[var(--text-muted)] font-normal mt-0.5 line-clamp-1">
                        {rec.details}
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="text-[var(--cricket-emerald)] font-bold">{rec.format}</span>
                      <span className="text-[var(--text-muted)] mx-1">·</span>
                      <span>{rec.category}</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-[var(--text-primary)] whitespace-nowrap">
                      {rec.holder}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="font-extrabold text-[var(--cricket-emerald)] text-sm">{rec.achievement}</span>
                    </td>
                    <td className="py-4 px-4 text-[var(--text-muted)] whitespace-nowrap text-xs">
                      {rec.dateOrSpan}
                    </td>
                    <td className="py-4 px-4 text-[11px] text-[var(--text-muted)]">
                      <p className="text-[var(--text-primary)] font-semibold truncate max-w-[160px]">{rec.source}</p>
                      <p className="text-[var(--cricket-emerald)] text-[10px]">Verified: {rec.lastVerified}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card View */}
          <div className="lg:hidden divide-y divide-[var(--border-subtle)]">
            {filteredRecords.map((rec) => (
              <div key={rec.id} className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--cricket-emerald)] font-bold">
                    {rec.format} · {rec.category}
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)]">{rec.dateOrSpan}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-[var(--text-primary)]">{rec.recordName}</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{rec.details}</p>
                </div>
                <div className="p-3.5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block font-bold">Record Holder</span>
                    <span className="text-xs font-bold text-[var(--text-primary)]">{rec.holder}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block font-bold">Achievement</span>
                    <span className="text-xs font-extrabold text-[var(--cricket-emerald)]">{rec.achievement}</span>
                  </div>
                </div>
                <div className="text-[11px] text-[var(--text-muted)] flex items-center justify-between pt-1">
                  <span>Source: {rec.source}</span>
                  <span className="text-[var(--cricket-emerald)] font-semibold">Verified {rec.lastVerified}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
