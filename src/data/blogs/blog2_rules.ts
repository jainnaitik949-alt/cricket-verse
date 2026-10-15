import { BlogArticle } from '../../types';

export const blog2Rules: BlogArticle = {
  id: 'blog-2',
  slug: 'cricket-rules-guide',
  title: 'Understanding Cricket Rules — A Complete Beginner’s Guide',
  subtitle: 'The essential handbook to overs, wickets, dismissals, scoring, and fielding positions',
  excerpt: 'Demystify cricket with this straightforward breakdown of pitch geometry, dismissal laws (LBW, caught, bowled, stumped, run out), scoring runs, powerplays, and umpire reviews with illustrative match examples.',
  category: 'Cricket Rules and Basics',
  tags: ['Cricket Rules', 'Beginners Guide', 'LBW', 'DRS', 'Fielding Positions', 'Scoring'],
  author: {
    name: 'Sarah Jenkins',
    role: 'ICC Certified Level 2 Coach & Educator',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=75',
  },
  publishedDate: '2025-01-22',
  lastVerifiedDate: '2025-11-20',
  readTimeMinutes: 10,
  coverImage: 'https://images.unsplash.com/photo-1531415074868-036b107e7752?auto=format&fit=crop&w=800&q=75',
  coverImageAlt: 'Cricket pitch with wooden stumps and white bails in sharp focus',
  coverImageCaption: 'The battleground: A 22-yard pitch with wickets at each end forms the core geometry of cricket.',
  introduction: 'To the uninitiated, cricket can appear labyrinthine: a sport where games can span hours or days, players break for tea, and commentators speak fluently of "silly mid-off" and "cow corner." Beneath the quaint terminology lies an elegant, highly structured game of pressure, geometry, and strategy. This guide breaks down the core rules of cricket into clear, logical concepts for anyone looking to understand and enjoy the sport.',
  sections: [
    {
      id: 'what-is-the-objective-of-cricket',
      title: 'What Is the Primary Objective of Cricket and How Are Teams Structured?',
      content: 'The primary objective of cricket is for the batting team to score more runs than the opposing team while the fielding team aims to dismiss all 10 opposing batters.\n\nCricket is contested between two teams of 11 players each. The game takes place on an oval grass field with no standardized perimeter dimensions, though international boundaries usually sit between 65 and 85 meters from the center. In the very middle lies the pitch—a rectangular clay strip 22 yards (20.12 meters) long by 10 feet (3.05 meters) wide. At each end of the pitch stand the wickets: three wooden uprights called stumps topped by two horizontal wooden cylinders called bails. If the bails are knocked off by the ball or the wicketkeeper holding the ball, the wicket is broken.',
    },
    {
      id: 'how-do-overs-and-bowling-work',
      title: 'How Do Batting, Bowling, and Overs Function in a Match?',
      content: 'An over consists of 6 legal deliveries bowled consecutively from one end of the pitch by a single bowler, after which ends switch.\n\nAt any given moment during play, two batters occupy the pitch—one at the "striker’s end" ready to face the bowler, and one at the "non-striker’s end" alongside the bowler. The fielding team places all 11 players on the ground: the bowler, the wicketkeeper (crouched behind the striker’s stumps wearing protective gloves and pads), and nine fielders scattered across the turf.\n\nA bowler delivers the ball with a straight arm (the elbow must not bend or flex more than 15 degrees during delivery) toward the striker. Six legal deliveries constitute an "over". Once an over is completed, play switches ends: a different bowler takes over from the opposite end of the pitch, and fielders reorient their positions.',
    },
    {
      id: 'how-are-runs-and-boundaries-scored',
      title: 'How Are Runs and Boundaries Scored in Cricket?',
      content: 'Runs are scored either by batters physically sprinting between wickets (1, 2, or 3 runs) or by hitting the ball to the boundary rope (4 runs if it bounces, 6 runs if hit over on the full).\n\nBatters can score runs in multiple ways:\n\n• Running between the wickets: When the striker hits the ball into open field, both batters may sprint to opposite ends. Each successful crossing between popping creases equals 1 run. Batters may turn and complete 2, 3, or rarely 4 runs if the ball is deep in the outfield.\n\n• Boundaries: If a batter hits the ball and it touches the ground before crossing the boundary rope, they earn 4 runs automatically. If the ball clears the boundary rope on the full (in the air without bouncing), they earn 6 runs (cricket’s equivalent of a home run). Batters do not need to run when a boundary is struck.',
    },
    {
      id: 'what-are-extras-in-cricket',
      title: 'What Are Extras in Cricket: Wides, No-Balls, Byes, and Leg-Byes?',
      content: 'Extras are penalty and bonus runs credited to the batting team’s total due to bowler errors or ball deflections past the wicketkeeper.\n\nRuns can also be added to the team total through fielding infractions, known as "extras":\n\n• Wide Ball: If a delivery passes too wide for the batter to reach with a normal cricket stroke, the umpire signals a wide. The batting team receives 1 penalty run, and the delivery must be re-bowled.\n\n• No-Ball: If a bowler oversteps the bowling crease with their front foot, bowls above waist height without bouncing, or breaches fielding restrictions, it is a no-ball. The batting side receives 1 run, the ball must be re-bowled, and in limited-overs formats, the next legal delivery is a "Free Hit" (the batter cannot be dismissed by most methods).\n\n• Byes and Leg-Byes: If the ball misses the bat and eludes the wicketkeeper, batters can run a "bye". If the ball deflects off the batter’s body (pads) without touching the bat while the batter was offering a stroke, runs scored are recorded as "leg-byes".',
    },
    {
      id: 'what-are-the-common-dismissals',
      title: 'What Are the Five Most Common Ways a Batter Is Dismissed in Cricket?',
      content: 'The five most common dismissal methods are bowled, caught, LBW (leg before wicket), run out, and stumped.\n\nUnder the official MCC Laws of Cricket, there are 10 distinct dismissal methods. In practice, over 95% of dismissals fall into five categories:',
      table: {
        caption: 'Common Cricket Dismissals and Explanations',
        headers: ['Dismissal', 'Mechanism', 'Credit to Bowler?'],
        rows: [
          ['Bowled', 'The delivery eludes the bat and directly strikes the stumps, dislodging a bail.', 'Yes'],
          ['Caught', 'The batter hits the ball and a fielder catches it before it touches the turf.', 'Yes'],
          ['LBW (Leg Before Wicket)', 'The ball strikes the batter’s pads in line with the stumps, preventing it from hitting the wicket.', 'Yes'],
          ['Run Out', 'Fielders dislodge the bails with the ball while either batter is outside their safe crease line.', 'No (Team effort)'],
          ['Stumped', 'The batter steps out of their crease while swinging and missing; the wicketkeeper whips off the bails.', 'Yes'],
        ],
      },
    },
    {
      id: 'how-does-lbw-and-drs-work',
      title: 'How Does the LBW (Leg Before Wicket) Law and Decision Review System (DRS) Work?',
      content: 'A batter is out LBW if the ball strikes the pad in line with the stumps without pitching outside leg-stump and is projected to hit the wicket.\n\nLeg Before Wicket (LBW) is cricket’s most debated law. A batter is out LBW if all the following conditions are met:\n1. The ball must pitch either in line with the wickets or outside the off-stump (it can never pitch outside leg-stump).\n2. The ball must strike the batter’s pad or body before touching the bat or glove.\n3. The impact must be in line with the stumps (unless no genuine shot was attempted).\n4. The trajectory of the ball must have been projected to go on and hit the stumps.\n\nIn modern televised matches, teams can challenge an umpire’s decision using the Decision Review System (DRS). DRS utilizes ball-tracking technology (Hawk-Eye), microphone audio spikes (UltraEdge/Snicko) to detect slight edges off the bat, and thermal imaging (HotSpot).',
    },
    {
      id: 'what-are-fielding-positions-and-powerplays',
      title: 'What Are Key Fielding Positions and Powerplay Restrictions in Cricket?',
      content: 'Fielding positions divide into the Off Side and Leg Side, with limited-overs matches enforcing a 30-yard circle where only two fielders may be outside during initial powerplay overs.\n\nThe cricket field is divided into the "Off Side" (the half facing the batter’s chest as they stand) and the "Leg Side" or "On Side" (the half behind the batter’s back). Fundamental fielding positions include:\n\n• Slip: Stationed beside the wicketkeeper for edges.\n• Point & Cover: Guarding the off-side square and cover drive regions.\n• Mid-off & Mid-on: Stationed straight down the ground on either side of the bowler.\n• Mid-wicket & Square Leg: Patrolling the on-side.\n• Long-off, Long-on, Deep Mid-wicket: Boundary catchers.\n\nIn limited-overs formats (ODI and T20), "Powerplays" enforce fielding circles (a 30-yard radius). During the initial Powerplay (overs 1–6 in T20s, overs 1–10 in ODIs), only two fielders are permitted outside the 30-yard ring, encouraging attacking batting and boundary shots.',
    },
    {
      id: 'how-is-a-winner-decided',
      title: 'How Is a Winner Decided in a Completed Cricket Match?',
      content: 'A winner is decided when the second-batting team either surpasses the first team’s total (winning by wickets) or is dismissed/restricted short of the target (first team wins by runs).\n\nConsider a fictional 20-over match between the Emerald Eagles and the Cobalt Knights:\n\n1. Innings 1: The Eagles bat first. Over their allotted 20 overs, they compile 168 runs while losing 6 wickets. Their final scorecard reads 168/6 in 20.0 overs.\n2. Target Setting: The Knights need exactly 1 more run to win: a target of 169 runs in 20.0 overs (required run rate = 8.45 runs per over).\n3. Innings 2: The Knights bat. After 19.3 overs, their score reaches 170/4.\n4. Result: Because the Knights passed the target with 4 wickets down and 3 balls to spare, they win by 6 wickets. Had the Eagles bowled all 10 Knights out for 150, the Eagles would have won by 18 runs.',
    },
  ],
  keyTakeaways: [
    'Cricket features 11 players per side competing across a 22-yard pitch.',
    'An over consists of 6 legal deliveries bowled from one end of the pitch.',
    'Batter strikes hitting the rope on the ground count as 4 runs; over the rope on the full counts as 6 runs.',
    'Top dismissals are caught, bowled, LBW, run out, and stumped.',
    'LBW requires the ball not to pitch outside leg-stump and be projected to strike the wickets.',
    'Powerplay rules restrict fielders outside the 30-yard circle to incentivize aggressive strokeplay.',
  ],
  conclusion: 'While cricket possesses deep tactical nuances, its heartbeat is the duel between bowler and batter. Once you understand the pitch, how runs are gathered, and how wickets fall, every delivery becomes a chess match in motion. With this foundation, you are fully equipped to watch any international clash or local fixture with confidence.',
  sources: [
    { title: 'Marylebone Cricket Club — Laws of Cricket (Code 2017 with amendments)', url: 'https://www.lords.org/mcc/the-laws-of-cricket' },
    { title: 'ICC Men’s Playing Conditions & Decision Review System protocols', url: 'https://www.icc-cricket.com' },
  ],
  relatedBlogSlugs: ['test-odi-t20-formats', 'batting-techniques', 'fast-vs-spin-bowling'],
};
