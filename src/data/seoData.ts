export interface PageSEOConfig {
  path: string;
  pageTitle: string; // 50-60 chars, includes brand suffix, main keyword early
  metaDescription: string; // 140-160 chars, active CTA, contains main + 2 related keywords
  mainKeyword: string;
  relatedKeywords: [string, string];
  h1: string;
  aeoQuestion: string;
  aeoAnswer: string;
}

export const siteSEOData: Record<string, PageSEOConfig> = {
  // 1. Home Page
  '/': {
    path: '/',
    pageTitle: 'Cricket News, Guides & Legends Archive | CricketVerse', // 56 chars
    metaDescription: 'Explore cricket news and articles, uncover cricket history, and master our verified cricket records guide with in-depth analysis and player biographies.', // 153 chars
    mainKeyword: 'cricket news and articles',
    relatedKeywords: ['cricket history', 'cricket records guide'],
    h1: 'The World of Cricket, All in One Place',
    aeoQuestion: 'What makes CricketVerse the definitive cricket publication?',
    aeoAnswer: 'CricketVerse provides verified historical archives, tactical coaching tutorials, player biographies, and tournament breakdowns curated by cricket historians and analysts.',
  },

  // 2. All Blogs Directory
  '/blogs': {
    path: '/blogs',
    pageTitle: 'Cricket Blog Articles & Tactical Guides | CricketVerse', // 55 chars
    metaDescription: 'Read complete cricket blog articles, dive into expert cricket analysis, and discover modern cricket stories covering Test, ODI, and T20 league matches.', // 153 chars
    mainKeyword: 'cricket blog articles',
    relatedKeywords: ['cricket analysis', 'modern cricket stories'],
    h1: 'Complete Cricket Articles & Tactical Guides',
    aeoQuestion: 'What cricket topics and categories are covered on CricketVerse?',
    aeoAnswer: 'CricketVerse covers cricket history, match laws, player profiles, international tournaments, IPL tactics, batting drills, bowling mechanics, and technology analysis.',
  },

  // 3. Cricket Basics & Rules Guide
  '/cricket-basics': {
    path: '/cricket-basics',
    pageTitle: 'Cricket Rules for Beginners: Complete Guide | CricketVerse', // 59 chars
    metaDescription: 'Learn cricket rules for beginners, understand how to play cricket, and discover official cricket pitch dimensions, scoring laws, and dismissal methods.', // 152 chars
    mainKeyword: 'cricket rules for beginners',
    relatedKeywords: ['how to play cricket', 'cricket pitch dimensions'],
    h1: 'Cricket Rules & Basics for Beginners',
    aeoQuestion: 'How is cricket played and what are its fundamental rules?',
    aeoAnswer: 'Cricket is contested between two 11-player teams on a 22-yard pitch, where batters score runs by hitting the ball while bowlers attempt to dismiss them via 10 legal methods.',
  },

  // 4. Player Profiles / Legends
  '/players': {
    path: '/players',
    pageTitle: 'Cricket Legends Biographies & Stats | CricketVerse', // 51 chars
    metaDescription: 'Explore cricket legends biographies, analyze the greatest cricket players of all time, and examine verified cricket career stats from Bradman to Virat Kohli.', // 158 chars
    mainKeyword: 'cricket legends biographies',
    relatedKeywords: ['greatest cricket players', 'cricket career stats'],
    h1: 'Cricket Hall of Fame: Player Biographies & Career Records',
    aeoQuestion: 'Who are considered the greatest legends in cricket history?',
    aeoAnswer: 'Sir Donald Bradman with his 99.94 Test average, Sachin Tendulkar with 100 international centuries, and MS Dhoni who won all three ICC white-ball trophies lead cricket history.',
  },

  // 5. International Tournaments
  '/tournaments': {
    path: '/tournaments',
    pageTitle: 'International Cricket Tournaments & Guides | CricketVerse', // 57 chars
    metaDescription: 'Discover international cricket tournaments, relive the ICC Cricket World Cup, and understand IPL tournament structure, auction strategies, and playoff rules.', // 159 chars
    mainKeyword: 'international cricket tournaments',
    relatedKeywords: ['ICC Cricket World Cup', 'IPL tournament structure'],
    h1: 'International Tournaments & Franchise Leagues',
    aeoQuestion: 'What are the premier tournaments in world cricket?',
    aeoAnswer: 'The premier global tournaments include the ICC Men’s ODI World Cup, ICC Men’s T20 World Cup, ICC World Test Championship, and the Indian Premier League (IPL).',
  },

  // 6. Cricket Records
  '/cricket-records': {
    path: '/cricket-records',
    pageTitle: 'Verified Cricket Records & Historic Stats | CricketVerse', // 57 chars
    metaDescription: 'Review verified cricket records, examine all-time highest cricket scores, and discover the most international wickets taken across Test, ODI, and T20 matches.', // 159 chars
    mainKeyword: 'verified cricket records',
    relatedKeywords: ['highest cricket scores', 'most international wickets'],
    h1: 'Verified Cricket Records & Statistical Milestones',
    aeoQuestion: 'What are the most famous historic records in cricket?',
    aeoAnswer: 'Notable records include Bradman’s 99.94 Test average, Brian Lara’s 400 not out, Muralitharan’s 800 Test wickets, and Rohit Sharma’s 264 ODI individual score.',
  },

  // 7. Saved Articles Reading List
  '/saved-articles': {
    path: '/saved-articles',
    pageTitle: 'Your Saved Cricket Articles & Reading List | CricketVerse', // 58 chars
    metaDescription: 'Access your saved cricket articles, manage your custom cricket reading list, and return to your favorite cricket stories anytime on desktop or mobile devices.', // 159 chars
    mainKeyword: 'saved cricket articles',
    relatedKeywords: ['cricket reading list', 'favorite cricket stories'],
    h1: 'Your Saved Cricket Reading List',
    aeoQuestion: 'How does the CricketVerse saved reading list work?',
    aeoAnswer: 'CricketVerse saves your bookmarked articles locally in your browser storage so you can easily resume reading long-form cricket essays and historical analysis anytime.',
  },

  // 8. About Us
  '/about-us': {
    path: '/about-us',
    pageTitle: 'About CricketVerse: Mission & Archive | CricketVerse', // 52 chars
    metaDescription: 'Learn about CricketVerse publication, explore our cricket editorial mission, and discover how our cricket historical archive preserves verified facts and stories.', // 160 chars
    mainKeyword: 'about CricketVerse publication',
    relatedKeywords: ['cricket editorial mission', 'cricket historical archive'],
    h1: 'About CricketVerse: Every Match. Every Legend. Every Story.',
    aeoQuestion: 'What is the editorial philosophy and mission of CricketVerse?',
    aeoAnswer: 'CricketVerse is dedicated to delivering independent, fact-checked cricket journalism, deep analytical essays, and verified historical statistics free of speculation.',
  },

  // 9. Contact Us
  '/contact': {
    path: '/contact',
    pageTitle: 'Contact Cricket Editorial Team & Inquiries | CricketVerse', // 57 chars
    metaDescription: 'Contact cricket editorial team members, submit cricket feedback inquiries, and propose original submit cricket stories for publication review within 48 hours.', // 159 chars
    mainKeyword: 'contact cricket editorial team',
    relatedKeywords: ['cricket feedback inquiries', 'submit cricket stories'],
    h1: 'Contact the CricketVerse Editorial Desk',
    aeoQuestion: 'How can readers and writers contact the CricketVerse team?',
    aeoAnswer: 'You can submit feedback, corrections, and article proposals through our online form or email editorial@cricketverse.org, with a guaranteed response within 48 hours.',
  },

  // Individual Blog Articles SEO Configurations
  '/blogs/history-of-cricket': {
    path: '/blogs/history-of-cricket',
    pageTitle: 'History of Cricket: Origins to Modern Era | CricketVerse', // 56 chars
    metaDescription: 'Explore the complete history of cricket, uncover the origins of cricket in 16th-century England, and relive the first Test match 1877 that birthed The Ashes.', // 158 chars
    mainKeyword: 'history of cricket',
    relatedKeywords: ['origins of cricket', 'first test match 1877'],
    h1: 'The History of Cricket — From Pastoral Pastime to Global Phenomenon',
    aeoQuestion: 'Where did cricket originate and when was the first Test match played?',
    aeoAnswer: 'Cricket originated in rural southeast England in the late 16th century, and the first official Test match took place in Melbourne in March 1877 between Australia and England.',
  },

  '/blogs/cricket-rules-guide': {
    path: '/blogs/cricket-rules-guide',
    pageTitle: 'Cricket Rules Explained: The Complete Guide | CricketVerse', // 58 chars
    metaDescription: 'Master all cricket rules explained, understand the technical LBW rule cricket mechanics, and learn the ten legal cricket dismissals guide with clear diagrams.', // 159 chars
    mainKeyword: 'cricket rules explained',
    relatedKeywords: ['lbw rule cricket', 'cricket dismissals guide'],
    h1: 'Understanding Cricket Rules — A Complete Beginner’s Handbook',
    aeoQuestion: 'How do the LBW rule and primary cricket dismissals work?',
    aeoAnswer: 'LBW occurs when the ball strikes a batter’s leg in line with stumps without bat contact; it is one of the five common dismissals alongside bowled, caught, run out, and stumped.',
  },

  '/blogs/test-odi-t20-formats': {
    path: '/blogs/test-odi-t20-formats',
    pageTitle: 'Cricket Formats Comparison: Test, ODI & T20 | CricketVerse', // 58 chars
    metaDescription: 'Read our cricket formats comparison, evaluate Test vs ODI vs T20 tactics, and learn international cricket overs, session strategy, and innings dynamics.', // 153 chars
    mainKeyword: 'cricket formats comparison',
    relatedKeywords: ['test vs odi vs t20', 'international cricket overs'],
    h1: 'The Three Main Formats of Cricket — Test, ODI, and T20 Compared',
    aeoQuestion: 'What are the main tactical differences between Test, ODI, and T20 cricket?',
    aeoAnswer: 'Test cricket spans five days with two innings and unlimited overs; ODIs are single-innings 50-over matches; and T20 cricket is a high-tempo 20-over contest completed in three hours.',
  },

  '/blogs/sachin-tendulkar': {
    path: '/blogs/sachin-tendulkar',
    pageTitle: 'Sachin Tendulkar Career & 100 Centuries | CricketVerse', // 55 chars
    metaDescription: 'Examine the iconic Sachin Tendulkar career, review master blaster stats across 664 matches, and relive his historic milestone of 100 international centuries.', // 158 chars
    mainKeyword: 'sachin tendulkar career',
    relatedKeywords: ['master blaster stats', '100 international centuries'],
    h1: 'Sachin Tendulkar — The Journey of the Master Blaster',
    aeoQuestion: 'How many international centuries and runs did Sachin Tendulkar score?',
    aeoAnswer: 'Sachin Tendulkar scored exactly 100 international centuries (51 in Tests, 49 in ODIs) and amassed a world-record 34,357 international runs across his 24-year career.',
  },

  '/blogs/virat-kohli': {
    path: '/blogs/virat-kohli',
    pageTitle: 'Virat Kohli Batting Records & Chase Master | CricketVerse', // 57 chars
    metaDescription: 'Discover verified Virat Kohli batting records, learn why he is the ultimate Kohli chase master, and count every milestone in king kohli centuries history.', // 155 chars
    mainKeyword: 'virat kohli batting records',
    relatedKeywords: ['kohli chase master', 'king kohli centuries'],
    h1: 'Virat Kohli — Discipline, Fitness, and Modern Batting Mastery',
    aeoQuestion: 'Why is Virat Kohli recognized as the greatest chase master in cricket?',
    aeoAnswer: 'Virat Kohli averages over 65 in successful ODI run-chases, converting 27 chase centuries with unmatched strike rotation, fitness, and game-management pacing.',
  },

  '/blogs/ms-dhoni': {
    path: '/blogs/ms-dhoni',
    pageTitle: 'MS Dhoni Captaincy, Finishes & Trophies | CricketVerse', // 55 chars
    metaDescription: 'Review the historic MS Dhoni captaincy era, break down famous captain cool finishes, and celebrate how he secured all three major dhoni ICC trophies for India.', // 160 chars
    mainKeyword: 'ms dhoni captaincy',
    relatedKeywords: ['captain cool finishes', 'dhoni icc trophies'],
    h1: 'MS Dhoni — The Captain Who Changed Indian Cricket Forever',
    aeoQuestion: 'Which ICC trophies did MS Dhoni win as captain?',
    aeoAnswer: 'MS Dhoni is the only captain to win all three ICC white-ball tournaments: the 2007 T20 World Cup, the 2011 ODI World Cup, and the 2013 ICC Champions Trophy.',
  },

  '/blogs/icc-cricket-world-cup': {
    path: '/blogs/icc-cricket-world-cup',
    pageTitle: 'ICC Cricket World Cup History & Winners | CricketVerse', // 55 chars
    metaDescription: 'Explore complete ICC Cricket World Cup history, study all ODI World Cup winners from 1975 to 2023, and relive iconic World Cup matches that shaped the game.', // 157 chars
    mainKeyword: 'icc cricket world cup history',
    relatedKeywords: ['odi world cup winners', 'iconic world cup matches'],
    h1: 'The ICC Cricket World Cup — History, Format, and Iconic Matches',
    aeoQuestion: 'Which nation has won the most ICC Men’s Cricket World Cups?',
    aeoAnswer: 'Australia holds the world record with 6 Men’s ODI World Cup titles (1987, 1999, 2003, 2007, 2015, and 2023), followed by India and West Indies with 2 titles each.',
  },

  '/blogs/ipl-explained': {
    path: '/blogs/ipl-explained',
    pageTitle: 'IPL Tournament Guide & Auction Strategy | CricketVerse', // 56 chars
    metaDescription: 'Master our complete IPL tournament guide, understand Indian Premier League auction dynamics, and see how the net run rate calculator decides playoff spots.', // 156 chars
    mainKeyword: 'ipl tournament guide',
    relatedKeywords: ['indian premier league auction', 'net run rate calculator'],
    h1: 'IPL Explained — Teams, Auction Dynamics, and Match Strategy',
    aeoQuestion: 'How does the Indian Premier League (IPL) playoff and points system work?',
    aeoAnswer: 'Teams earn 2 points for a win, with ties resolved via Super Over. The top four teams advance to the playoffs: Qualifier 1, Eliminator, Qualifier 2, and Final.',
  },

  '/blogs/cricket-records': {
    path: '/blogs/cricket-records',
    pageTitle: 'Historical Cricket Records That Made History | CricketVerse', // 60 chars
    metaDescription: 'Analyze historical cricket records, marvel at Don Bradman 99.94 average, and revisit Brian Lara 400 not out alongside the greatest bowling feats ever recorded.', // 160 chars
    mainKeyword: 'historical cricket records',
    relatedKeywords: ['don bradman 99.94 average', 'brian lara 400 not out'],
    h1: 'Cricket Records That Made History — Unbreakable Milestones',
    aeoQuestion: 'Why is Sir Donald Bradman’s 99.94 Test average considered unbreakable?',
    aeoAnswer: 'Bradman scored 6,996 Test runs in 80 innings with 29 centuries, leaving him with an average of 99.94—nearly 40 runs higher than any other player in 147 years.',
  },

  '/blogs/batting-techniques': {
    path: '/blogs/batting-techniques',
    pageTitle: 'Cricket Batting Techniques & Footwork Drills | CricketVerse', // 59 chars
    metaDescription: 'Improve your cricket batting techniques, learn how to improve cricket batting through body alignment, and master structured cricket footwork drills today.', // 155 chars
    mainKeyword: 'cricket batting techniques',
    relatedKeywords: ['how to improve cricket batting', 'cricket footwork drills'],
    h1: 'How to Become a Better Batter — Technique, Footwork, and Shot Selection',
    aeoQuestion: 'What are the three pillars of solid cricket batting technique?',
    aeoAnswer: 'The three pillars are a balanced, still head position at ball release, decisive forward or backward footwork into the line of delivery, and playing directly under the eyes.',
  },

  '/blogs/fast-vs-spin-bowling': {
    path: '/blogs/fast-vs-spin-bowling',
    pageTitle: 'Fast vs Spin Bowling: Grips & Techniques | CricketVerse', // 56 chars
    metaDescription: 'Compare fast vs spin bowling, master the upright cricket bowling grip, and learn reverse swing technique and wrist spin drift to outwit any batter.', // 149 chars
    mainKeyword: 'fast vs spin bowling',
    relatedKeywords: ['cricket bowling grip', 'reverse swing technique'],
    h1: 'Fast Bowling vs Spin Bowling — Techniques, Strategies, and Skills',
    aeoQuestion: 'What differentiates the aerodynamics of fast bowling from spin bowling?',
    aeoAnswer: 'Fast bowlers use upright seams, air speed (140+ km/h), and ball condition for conventional or reverse swing; spinners use fingertip or wrist revolutions to achieve drift and turn.',
  },

  '/blogs/cricket-technology': {
    path: '/blogs/cricket-technology',
    pageTitle: 'Technology in Modern Cricket: DRS & Hawk-Eye | CricketVerse', // 59 chars
    metaDescription: 'Explore technology in modern cricket, see how DRS Hawk Eye cricket predicts trajectory, and learn how UltraEdge cricket review detects micro-edges accurately.', // 158 chars
    mainKeyword: 'technology in modern cricket',
    relatedKeywords: ['drs hawk eye cricket', 'ultraedge cricket review'],
    h1: 'How Technology Has Changed Modern Cricket — DRS, Hawk-Eye & AI',
    aeoQuestion: 'How does the Decision Review System (DRS) work in international cricket?',
    aeoAnswer: 'DRS synthesizes high-speed synchronized ball-tracking (Hawk-Eye), acoustic snickometer sensors (UltraEdge), and thermal imaging (Hot Spot) to verify on-field decisions.',
  },
};

export function getSEOConfig(path: string): PageSEOConfig {
  // Normalize path
  const cleanPath = path.split('?')[0].replace(/\/$/, '') || '/';
  
  // Handle aliases
  if (cleanPath === '/basics') return siteSEOData['/cricket-basics'];
  if (cleanPath === '/cricket-players') return siteSEOData['/players'];
  if (cleanPath === '/cricket-tournaments') return siteSEOData['/tournaments'];
  if (cleanPath === '/records') return siteSEOData['/cricket-records'];
  if (cleanPath === '/saved') return siteSEOData['/saved-articles'];
  if (cleanPath === '/about') return siteSEOData['/about-us'];
  if (cleanPath === '/contact-us') return siteSEOData['/contact'];

  if (siteSEOData[cleanPath]) {
    return siteSEOData[cleanPath];
  }

  // Fallback
  return {
    path: cleanPath,
    pageTitle: 'CricketVerse — Every Match. Every Legend. Every Story.',
    metaDescription: 'The premier independent cricket publication covering verified history, match rules, legendary player profiles, tournament breakdowns, and statistical records.',
    mainKeyword: 'cricket',
    relatedKeywords: ['cricket news', 'cricket records'],
    h1: 'CricketVerse',
    aeoQuestion: 'What is CricketVerse?',
    aeoAnswer: 'CricketVerse is an authoritative digital publication offering verified cricket historical archives, coaching guides, player statistics, and tournament insights.',
  };
}
