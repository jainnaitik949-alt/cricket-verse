import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 transition-colors">
      <SEOHead
        title="About CricketVerse — Editorial Mission & Standards"
        description="Learn about CricketVerse, our mission to explore every match, legend, and story, and our verified cricket data policies."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <Heart className="w-4 h-4 text-[var(--cricket-emerald)]" />
            <span>Independent Sports Journalism</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl text-[var(--text-primary)]">
            About CricketVerse
          </h1>
          <p className="font-subheading text-xl text-[var(--cricket-emerald)] uppercase tracking-wide font-bold">
            Every Match · Every Legend · Every Story
          </p>
        </div>

        {/* Core Mission */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-12 space-y-6 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed shadow-xl">
          <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">Our Mission</h2>
          <p>
            CricketVerse is a cricket-focused digital publication created for fans who want to understand and enjoy the game beyond the scoreboard.
          </p>
          <p>
            From the earliest days of cricket in 16th-century English pastures to the modern era of floodlit international tournaments and multi-billion-dollar franchise leagues, CricketVerse explores the stories, players, rules, records, and innovations that shape the sport.
          </p>
          <div className="p-6 bg-[var(--bg-elevated)] border-l-4 border-[var(--cricket-emerald)] rounded-r-2xl italic text-[var(--text-primary)] text-base font-medium">
            "To bring every cricket story, every legendary performance, and every important aspect of the game into one informative, trustworthy destination."
          </div>
        </div>

        {/* The Three Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-[var(--cricket-emerald)]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-[var(--text-primary)]">Accessible Depth</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We bridge beginner-friendly clarity with authentic tactical depth so both newcomers and lifelong cricket connoisseurs learn something new.
            </p>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-[var(--text-primary)]">Verified Data</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We never fabricate scores, rankings, or career statistics. Historical records cite official sources (ICC, BCCI, Wisden) and feature clear verification dates.
            </p>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-[var(--text-primary)]">Editorial Restraint</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We maintain anti-slop design standards: clean typography, zero synthetic filler, and clear separation of historical records from evolving statistics.
            </p>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading text-2xl text-[var(--text-primary)]">Have a Correction or Story Pitch?</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Reach out to our sports editorial desk with feedback, corrections, or queries.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold rounded-xl text-xs transition-colors shrink-0 shadow-lg"
          >
            Contact Editorial Desk
          </Link>
        </div>
      </div>
    </div>
  );
};
