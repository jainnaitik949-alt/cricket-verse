import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SEOPageBadge } from '../components/SEOPageBadge';
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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-8 transition-colors">
      <SEOHead
        title="Verified Cricket Records & Historic Stats | CricketVerse"
        description="Review verified cricket records, examine all-time highest cricket scores, and discover the most international wickets taken across Test, ODI, and T20 matches."
        mainKeyword="verified cricket records"
        relatedKeywords={['highest cricket scores', 'most international wickets']}
        aeoQuestion="What are the most famous historic records in cricket?"
        aeoAnswer="Notable records include Bradman’s 99.94 Test average, Brian Lara’s 400 not out, Muralitharan’s 800 Test wickets, and Rohit Sharma’s 264 ODI individual score."
      />

      {/* Transparent SEO & AEO Target Inspector */}
      <SEOPageBadge />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-4">
        {/* Header with AEO Question & Answer */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Official ICC Historical Database</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
            Verified Cricket Records & Statistical Milestones
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl text-[var(--cricket-emerald)]">
            What Are the Most Unbreakable Batting and Bowling Records in Cricket?
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Cricket’s most resilient records include Sir Donald Bradman’s 99.94 career Test batting average, Brian Lara’s 400 not out in a single Test innings, Muttiah Muralitharan’s 800 Test wickets, and Rohit Sharma’s 264 in a One Day International. Review all verified records below.
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
                aria-label="Search verified cricket records"
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-10 pr-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
              />
            </div>

            {/* Format Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-muted)] font-bold shrink-0">Format:</span>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                aria-label="Filter records by match format"
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
                aria-label="Filter records by discipline category"
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
                aria-label="Reset record search filters"
                className="text-[var(--cricket-emerald)] hover:underline font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Records Table Card */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-4 px-6">Record Description</th>
                  <th className="py-4 px-6">Record Holder</th>
                  <th className="py-4 px-6">Stat / Achievement</th>
                  <th className="py-4 px-6 hidden md:table-cell">Format & Category</th>
                  <th className="py-4 px-6 hidden lg:table-cell">Source & Verified Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {filteredRecords.map((rec) => (
                  <tr key={rec.id} className="hover:bg-[var(--bg-elevated)]/50 transition-colors">
                    <td className="py-4 px-6">
                      <p className="font-bold text-[var(--text-primary)] text-sm">{rec.recordName}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{rec.details}</p>
                    </td>
                    <td className="py-4 px-6 font-semibold text-[var(--text-primary)] whitespace-nowrap">
                      {rec.holder}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="font-heading text-xl text-[var(--cricket-emerald)] font-bold">
                        {rec.achievement}
                      </span>
                    </td>
                    <td className="py-4 px-6 hidden md:table-cell whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 text-xs rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-medium">
                          {rec.format}
                        </span>
                        <span className="px-2 py-0.5 text-xs rounded bg-[var(--cricket-emerald)]/10 text-[var(--cricket-emerald)] font-medium border border-[var(--cricket-emerald)]/30">
                          {rec.category}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell text-xs text-[var(--text-muted)] whitespace-nowrap">
                      <p>{rec.source}</p>
                      <p className="text-[11px] text-[var(--cricket-emerald)]">Verified: {rec.lastVerified}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deep Dive Callout */}
        <div className="p-8 bg-gradient-to-r from-[var(--bg-card)] to-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-heading text-2xl text-[var(--text-primary)]">
              Curious About the Stories Behind These Numbers?
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Read our dedicated analytical article examining Bradman’s 99.94, Lara’s marathon 400*, and Murali’s 800 wickets in full historical context.
            </p>
          </div>
          <Link
            to="/blogs/cricket-records"
            aria-label="Read complete essay on historical cricket records"
            className="px-6 py-3 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2 shrink-0 transition-all cursor-pointer"
          >
            <span>Read Records Essay</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
