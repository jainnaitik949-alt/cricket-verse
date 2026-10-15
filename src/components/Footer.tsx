import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group" aria-label="CricketVerse Home: Every Match. Every Legend. Every Story.">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#059669] via-[#10B981] to-[#22C55E] flex items-center justify-center border border-emerald-400/30 group-hover:scale-105 transition-transform">
                <span className="font-heading text-2xl text-white font-extrabold">CV</span>
              </div>
              <span className="font-heading text-3xl tracking-wider text-[var(--text-primary)] group-hover:text-emerald-400 transition-colors">
                CRICKET<span className="text-[var(--cricket-emerald)]">VERSE</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
              Every Match. Every Legend. Every Story. CricketVerse is an independent sports-editorial publication dedicated to in-depth analysis, verified historical records, beginner rules, and the enduring legends of cricket.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs">
              <span className="text-[var(--text-muted)]">Verified Editorial Standards</span>
              <span className="text-[var(--border-subtle)]">·</span>
              <span className="text-[var(--cricket-emerald)] font-semibold">Updated Nov 2025</span>
            </div>
          </div>

          {/* Quick Links with rich descriptive anchor text */}
          <div className="space-y-3">
            <h4 className="font-subheading text-sm uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Explore Cricket
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blogs" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  All 12 Cricket Articles
                </Link>
              </li>
              <li>
                <Link to="/cricket-basics" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Cricket Basics & Rules Guide
                </Link>
              </li>
              <li>
                <Link to="/players" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Legendary Player Profiles
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  International Tournaments
                </Link>
              </li>
              <li>
                <Link to="/cricket-records" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Verified Historical Records
                </Link>
              </li>
              <li>
                <Link to="/saved-articles" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Saved Reading List
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories with rich descriptive anchor text */}
          <div className="space-y-3">
            <h4 className="font-subheading text-sm uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Cricket Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blogs?category=Cricket History" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Cricket History & Origins
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=Legendary Players" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Player Biographies
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=Cricket Rules and Basics" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Rules and Match Laws
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=IPL and T20 Leagues" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  IPL & Franchise Leagues
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=Cricket Training and Skills" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Batting & Bowling Skills
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=Cricket Technology and Analysis" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Technology & DRS Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Publication & Newsletter */}
          <div className="space-y-3">
            <h4 className="font-subheading text-sm uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Publication & Team
            </h4>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <Link to="/about-us" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  About CricketVerse Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--cricket-emerald)] transition-colors">
                  Contact Editorial Team
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <NewsletterForm isFooterCompact />
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-start gap-2 max-w-2xl">
            <Shield className="w-4 h-4 text-[var(--cricket-emerald)] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[var(--text-primary)]">Verification & Data Policy:</strong> Cricket statistics, player career records, and competition regulations change over time. CricketVerse clearly identifies dates of verification for all historical records. For real-time match scores and current ICC rankings, please consult official governing bodies (ICC, BCCI, Cricket Australia, ECB).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <p>© {new Date().getFullYear()} CricketVerse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
