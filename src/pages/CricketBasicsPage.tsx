import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  Search,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SEOPageBadge } from '../components/SEOPageBadge';

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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-8 transition-colors">
      <SEOHead
        title="Cricket Rules for Beginners: Complete Guide | CricketVerse"
        description="Learn cricket rules for beginners, understand how to play cricket, and discover official cricket pitch dimensions, scoring laws, and dismissal methods."
        mainKeyword="cricket rules for beginners"
        relatedKeywords={['how to play cricket', 'cricket pitch dimensions']}
        aeoQuestion="How is cricket played and what are its fundamental rules?"
        aeoAnswer="Cricket is contested between two 11-player teams on a 22-yard pitch, where batters score runs by hitting the ball while bowlers attempt to dismiss them via 10 legal methods."
      />

      {/* Transparent SEO & AEO Target Inspector */}
      <SEOPageBadge />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-4">
        {/* Header with AEO Question & Answer */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-full text-xs text-[var(--cricket-emerald)] font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cricket 101 Education Portal</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl text-[var(--text-primary)] tracking-tight">
            Cricket Rules & Basics for Beginners
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            New to cricket? This step-by-step field guide explains the pitch, player roles, scoring, dismissals, and game rules in plain language without jargon.
          </p>
        </div>

        {/* 1. The Core Objective (AEO Question Heading) */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              1
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">First Principles</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                What Is the Primary Objective of Cricket and How Are Teams Structured?
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            The primary objective of cricket is for the batting team to score more runs than the opposing team, while the fielding team aims to dismiss all 10 opposing batters within the allotted overs or innings. Cricket is contested between two teams of <strong>11 players each</strong>:
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

        {/* 2. The Anatomy of the Pitch & Stumps (AEO Question Heading) */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              2
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">Geometry</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                What Are the Official Dimensions of a Cricket Pitch and Wicket?
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A regulation cricket pitch is a prepared rectangular turf strip measuring exactly <strong>22 yards (20.12 meters / 66 feet)</strong> in length and 10 feet (3.05 meters) in width.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl text-center space-y-1">
              <span className="font-heading text-3xl text-[var(--cricket-emerald)]">22 Yards</span>
              <h4 className="text-xs font-bold text-[var(--text-primary)]">Pitch Length</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Distance between bowling creases</p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl text-center space-y-1">
              <span className="font-heading text-3xl text-amber-400">28 Inches</span>
              <h4 className="text-xs font-bold text-[var(--text-primary)]">Stump Height</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Three wooden stumps with 2 bails</p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl text-center space-y-1">
              <span className="font-heading text-3xl text-[var(--text-primary)]">9 Inches</span>
              <h4 className="text-xs font-bold text-[var(--text-primary)]">Wicket Width</h4>
              <p className="text-[11px] text-[var(--text-muted)]">Total target width across all 3 stumps</p>
            </div>
          </div>

          <div className="p-4 bg-[var(--bg-elevated)]/60 rounded-xl border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed">
            <strong className="text-[var(--text-primary)]">The Popping Crease:</strong> Painted 4 feet (1.22m) in front of the stumps at each end. This line marks the batter's safe sanctuary. If the batter is out of this crease when the bails are broken with the ball, they are liable to be dismissed via run out or stumping.
          </div>
        </section>

        {/* 3. How Runs Are Scored (AEO Question Heading) */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              3
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">Scoring Points</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                How Are Runs and Boundaries Scored in Cricket?
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Runs are scored either by batters sprinting physically between opposite creases after hitting the ball, or automatically by hitting the ball to or over the boundary perimeter rope.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <span className="text-xs font-bold text-[var(--cricket-emerald)] uppercase">Running Between Wickets</span>
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">1, 2, or 3 Runs</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When a batter hits into space, both batters sprint simultaneously. Each successful crossing and grounding of the bat past the opposite popping crease earns one run.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase">Boundary on Bounce</span>
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">4 Runs ("Four")</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If the ball bounces on the turf and hits or crosses over the boundary perimeter rope, 4 runs are automatically credited to the batter without needing to run.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase">Boundary on Full</span>
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">6 Runs ("Six")</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Cricket's home run equivalent: If the batter hits the ball over the boundary rope in the air without touching the ground first, 6 runs are awarded.
              </p>
            </div>

            <div className="p-5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-2">
              <span className="text-xs font-bold text-red-400 uppercase">Fielding Penalties</span>
              <h3 className="font-heading text-2xl text-[var(--text-primary)]">Extras (Wides & No-Balls)</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bowling outside legitimate reach (Wide) or overstepping the crease (No-Ball) awards 1 penalty run to the batting team and requires the ball to be re-bowled.
              </p>
            </div>
          </div>
        </section>

        {/* 4. The Five Ways a Batter Gets Out (AEO Question Heading) */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-[var(--cricket-emerald)] flex items-center justify-center font-bold font-heading text-3xl border border-emerald-500/30">
              4
            </div>
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider">Dismissals</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                What Are the Five Most Common Ways a Batter Is Dismissed in Cricket?
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Under official MCC Laws of Cricket, there are 10 legal methods of dismissal, but over 95% of dismissals occur across these five categories:
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl flex items-start gap-4">
              <span className="font-heading text-2xl text-[var(--cricket-emerald)] shrink-0">1. Bowled</span>
              <div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The bowler delivers the ball past the batter and directly strikes the stumps, dislodging at least one bail.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl flex items-start gap-4">
              <span className="font-heading text-2xl text-[var(--cricket-emerald)] shrink-0">2. Caught</span>
              <div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The batter hits the ball with the bat (or glove touching the handle), and any fielder catches it on the full before it touches the turf.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl flex items-start gap-4">
              <span className="font-heading text-2xl text-[var(--cricket-emerald)] shrink-0">3. LBW (Leg Before Wicket)</span>
              <div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The ball strikes the batter’s leg or body without touching the bat, in line with the stumps, and the umpire judges the ball would have gone on to hit the wickets.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl flex items-start gap-4">
              <span className="font-heading text-2xl text-[var(--cricket-emerald)] shrink-0">4. Run Out</span>
              <div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  While running between wickets, a fielder throws the ball and breaks the stumps before the batter reaches and grounds their bat behind the popping crease.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl flex items-start gap-4">
              <span className="font-heading text-2xl text-[var(--cricket-emerald)] shrink-0">5. Stumped</span>
              <div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  The batter steps forward out of their crease while attempting a stroke, misses the ball, and the wicketkeeper gathers the delivery and breaks the stumps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Glossary Section (AEO Question Heading) */}
        <section className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[var(--cricket-emerald)] uppercase font-bold tracking-wider block">Vocabulary</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                What Are the Most Common Cricket Terms and Definitions?
              </h2>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search glossary terms..."
                aria-label="Search glossary terms"
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl pl-9 pr-3 py-2 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
              />
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)]">
            Common cricket terminology includes overs (6 deliveries), maiden overs (zero runs conceded), yorkers (toe-crushing full balls), and Powerplays (mandatory boundary fielding restrictions).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredGlossary.map((item) => (
              <div key={item.term} className="p-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl space-y-1">
                <span className="font-heading text-xl text-[var(--cricket-emerald)] block">{item.term}</span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Link to Full Guide */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0B251B] to-emerald-950 border border-emerald-500/30 text-center space-y-4 shadow-xl">
          <h3 className="font-heading text-3xl text-white">Ready for the Next Level?</h3>
          <p className="text-xs sm:text-sm text-emerald-200 max-w-xl mx-auto">
            Read our complete 10-minute master handbook explaining LBW edge cases, fielding angles, DRS protocol, and Powerplay strategies.
          </p>
          <div>
            <Link
              to="/blogs/cricket-rules-guide"
              aria-label="Read complete beginner cricket rules article"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>Read Complete Rules Handbook</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
