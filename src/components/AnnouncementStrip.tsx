import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementStrip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-[#0B251B] to-emerald-950 border-b border-emerald-900/50 text-xs text-emerald-100 px-4 py-2 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-semibold text-emerald-300 uppercase tracking-wider text-[11px] shrink-0">Editorial</span>
          <span className="text-emerald-700 hidden sm:inline">|</span>
          <p className="truncate text-[12px] sm:text-[13px] text-white">
            Welcome to <strong className="text-emerald-300 font-bold">CricketVerse</strong> — Explore the Game Beyond the Boundary.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/basics"
            className="hidden md:inline-flex items-center gap-1 text-emerald-300 hover:text-white font-semibold transition-colors text-[12px]"
          >
            <span>Beginner’s Field Guide</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="text-emerald-400 hover:text-white transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
