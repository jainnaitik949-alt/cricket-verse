import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  Search,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const glossaryTerms = [
  { term: 'Over', definition: 'A sequence of 6 legal deliveries bowled from one end of the pitch by a single bowler.' },
  { term: 'Maiden Over', definition: 'An over in which zero runs are conceded by the bowler off the bat or extras.' },
  { term: 'Wicket', definition: 'Has three meanings: the three wooden stumps and bails; the 22-yard pitch itself; or the dismissal of a batter.' },
  { term: 'Duck', definition: 'When a batter is dismissed without scoring a single run (0). A "Golden Duck" occurs on the very first ball faced.' },
  { term: 'Yorker', definition: 'A full-pitched delivery aimed directly at the batter’s toes or popping crease, extremely difficult to hit.' },
  { term: 'Bouncer', definition: 'A fast short-pitched delivery that bounces high off the turf, rising toward the batter’s chest or helmet.' },
  { term: 'Googly', definition: 'A deception delivery bowled by a right-arm leg-spinner that spins back into the right-handed batter like an off-break.' },
  { term: 'Doosra', definition: 'A delivery bowled with an off-spinner’s action that turns away from a right-handed batter instead of turning in.' },
  { term: 'Powerplay', definition: 'A period of overs in limited-overs matches where fielding restrictions limit how many fielders can stand outside the 30-yard circle.' },
  { term: 'Decision Review System (DRS)', definition: 'A technology protocol allowing teams to challenge on-field umpire decisions using ball tracking (Hawk-Eye) and sound edge sensors (UltraEdge).' },
  { term: 'Free Hit', definition: 'Awarded to the batting side following a foot-fault no-ball in limited-overs cricket; the batter cannot be dismissed by most methods.' },
  { term: 'Super Over', definition: 'A single one-over eliminator played to determine a winner when scores are tied in limited-overs matches.' },
  { term: 'Follow-On', definition: 'In Test cricket, if the team batting second trails by 200+ runs, the opposing captain can require them to bat their second innings immediately.' },
  { term: 'Declaration', definition: 'When a batting captain in a multi-day match voluntarily closes their team’s innings to force time pressure on the opposition.' },
  { term: 'Hat-Trick', definition: 'When a bowler takes three wickets in three consecutive deliveries across a match.' },
  { term: 'Dot Ball', definition: 'A delivery from which zero runs are scored.' },
];

export const CricketBasicsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 transition-colors">
      <SEOHead
        title="Cricket Basics — A Beginner’s Guide to the Game"
        description="Learn the objective of cricket, pitch dimensions, player roles, dismissals (bowled, caught, LBW, run out), overs, scoring, and common terminology."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-full text-xs text-[var(--cricket-emerald)] font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cricket 101 Education Portal</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl text-[var(--text-primary)] tracking-tight">
            Cricket Basics Explained
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            New to cricket? This step-by-step field guide explains the pitch, player roles, scoring, dismissals, and game rules in plain language without jargon.
          </p>
        </div>

        {/* 1. The Core Objective */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              1
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">First Principles</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">The Objective of Cricket</h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Cricket is a bat-and-ball contest played between two teams of <strong>11 players each</strong>. The teams take turns batting and fielding:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-6 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <h3 className="font-heading text-2xl text-[var(--cricket-emerald)]">The Batting Team</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Sends two batters to the pitch at a time. Their goal is to hit the ball into open field, score as many runs as possible without getting out, and build a competitive total.
              </p>
            </div>

            <div className="p-6 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <h3 className="font-heading text-2xl text-amber-400">The Bowling & Fielding Team</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Places all 11 players on the grass (1 bowler, 1 wicketkeeper behind the stumps, 9 fielders). Their goal is to restrict runs and dismiss ("get out") 10 opposing batters.
              </p>
            </div>
          </div>
        </section>

        {/* 2. The Anatomy of the Pitch & Stumps */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              2
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">Geometry</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">The Pitch & The Wickets</h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            While the outer boundary rope can stretch 65 to 85 meters from the center, all primary action takes place on the central <strong>pitch</strong>:
          </p>

          {/* Visual Pitch Diagram Box */}
          <div className="p-6 bg-[var(--bg-elevated)] border-2 border-dashed border-[var(--cricket-emerald)]/40 rounded-2xl space-y-6">
            <div className="text-center">
              <span className="text-xs text-[var(--cricket-emerald)] font-extrabold tracking-widest uppercase">
                Pitch Layout (22 Yards / 20.12 Meters)
              </span>
            </div>

            <div className="relative bg-emerald-950/70 border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-inner">
              {/* Bowler's end */}
              <div className="text-center space-y-2">
                <div className="w-20 h-8 bg-slate-900 border border-white text-white text-[10px] flex items-center justify-center rounded-lg font-bold mx-auto">
                  Bowling Crease
                </div>
                <div className="flex justify-center gap-1.5">
                  <div className="w-2 h-7 bg-amber-400 rounded-t" />
                  <div className="w-2 h-7 bg-amber-400 rounded-t" />
                  <div className="w-2 h-7 bg-amber-400 rounded-t" />
                </div>
                <span className="text-[11px] text-emerald-300 font-bold block">Non-Striker / Bowler End</span>
              </div>

              {/* 22 Yards indicator */}
              <div className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="w-full border-t-2 border-dashed border-emerald-400 relative">
                  <span className="absolute left-1/2 -top-3.5 -translate-x-1/2 bg-emerald-900 px-3 py-0.5 rounded text-xs font-extrabold text-white uppercase tracking-wider">
                    22 Yards (66 Feet)
                  </span>
                </div>
                <p className="text-[11px] text-emerald-200 mt-4 text-center font-medium">
                  Hard clay turf prepared for pace, bounce, and spin
                </p>
              </div>

              {/* Striker's end */}
              <div className="text-center space-y-2">
                <div className="w-20 h-8 bg-slate-900 border border-white text-white text-[10px] flex items-center justify-center rounded-lg font-bold mx-auto">
                  Popping Crease
                </div>
                <div className="flex justify-center gap-1.5">
                  <div className="w-2 h-7 bg-amber-400 rounded-t" />
                  <div className="w-2 h-7 bg-amber-400 rounded-t" />
                  <div className="w-2 h-7 bg-amber-400 rounded-t" />
                </div>
                <span className="text-[11px] text-emerald-300 font-bold block">Striker Batter End</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--text-secondary)]">
              <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-subtle)]">
                <strong className="text-[var(--text-primary)] block mb-0.5 font-bold">Stumps & Bails</strong>
                Three vertical wooden posts (28 inches high) topped by two horizontal wooden bails.
              </div>
              <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-subtle)]">
                <strong className="text-[var(--text-primary)] block mb-0.5 font-bold">Popping Crease</strong>
                The white line 4 feet in front of the stumps. Batters must ground their bat behind it to be safe.
              </div>
              <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-subtle)]">
                <strong className="text-[var(--text-primary)] block mb-0.5 font-bold">The 30-Yard Circle</strong>
                An oval radius restricting how many fielders can be stationed on the deep boundary during powerplays.
              </div>
            </div>
          </div>
        </section>

        {/* 3. How Scoring Works */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              3
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">Running & Boundaries</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">How Runs Are Gathered</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <span className="font-heading text-4xl text-[var(--text-primary)]">1, 2, or 3 Runs</span>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When the batter hits into gaps, both batters sprint to the opposite end. Touching down across the crease counts as 1 run. They can turn for 2 or 3.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <span className="font-heading text-4xl text-[var(--cricket-emerald)]">4 Runs (Four)</span>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When the ball is struck along the turf and reaches or crosses the perimeter boundary rope after bouncing. Batters do not need to run.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <span className="font-heading text-4xl text-amber-400">6 Runs (Six)</span>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When the ball is hit over the boundary rope on the full (in the air without touching the ground). Cricket’s ultimate home-run equivalent!
              </p>
            </div>
          </div>
        </section>

        {/* 4. The 5 Main Methods of Dismissal */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              4
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">Dismissals</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">The 5 Major Ways a Batter Gets Out</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-1.5">
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">1. Bowled</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The bowler delivers the ball past the bat and directly knocks the bails off the stumps.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-1.5">
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">2. Caught</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The batter hits the ball and a fielder or wicketkeeper catches it before it touches the turf.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-1.5">
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">3. LBW (Leg Before Wicket)</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The ball hits the batter's pad in line with the stumps, preventing it from hitting the wicket.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-1.5">
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">4. Run Out</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Fielders break the wickets with the ball while either batter is outside their safe crease line while running.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-1.5">
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">5. Stumped</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The batter steps out of their crease while swinging and missing; the wicketkeeper immediately removes the bails.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-card)] border border-[var(--cricket-emerald)] rounded-2xl space-y-1.5 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl text-[var(--cricket-emerald)]">Full Rulebook</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Learn about all 10 dismissal methods, DRS review protocols, and powerplays in our complete guide.
                </p>
              </div>
              <Link to="/blogs/cricket-rules-guide" className="text-[var(--cricket-emerald)] hover:underline font-bold flex items-center gap-1 mt-2">
                <span>Read Full Rules Blog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Glossary of Cricket Terms */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
                5
              </div>
              <div>
                <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">Vocabulary</span>
                <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">Cricket Glossary (A–Z)</h2>
              </div>
            </div>

            {/* Glossary Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search terms..."
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-9 pr-3 py-2 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item) => (
              <div
                key={item.term}
                className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--cricket-emerald)] transition-colors"
              >
                <h4 className="font-heading text-xl text-[var(--cricket-emerald)] mb-1">{item.term}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
