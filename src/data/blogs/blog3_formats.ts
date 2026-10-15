import { BlogArticle } from '../../types';

export const blog3Formats: BlogArticle = {
  id: 'blog-3',
  slug: 'test-odi-t20-formats',
  title: 'The Three Main Formats of Cricket — Test, ODI, and T20 Explained',
  subtitle: 'From five-day tactical endurance to three-hour pyrotechnic thrillers: comparing the pillars of international cricket',
  excerpt: 'Understand the distinct worlds of Test matches, 50-over One Day Internationals, and high-octane 20-over T20 cricket, exploring differing tactics, equipment, mental fortitude, and tournament structures.',
  category: 'Cricket Formats',
  tags: ['Test Cricket', 'ODI', 'T20', 'Cricket Formats', 'WTC', 'World Cup', 'Format Comparison'],
  author: {
    name: 'David Gower-Jones',
    role: 'Senior International Cricket Analyst',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  publishedDate: '2025-01-28',
  lastVerifiedDate: '2025-11-20',
  readTimeMinutes: 10,
  coverImage: 'https://images.unsplash.com/photo-1531415074868-036b107e7752?auto=format&fit=crop&w=1600&q=80',
  coverImageAlt: 'Cricket player facing a delivery under stadium lights',
  coverImageCaption: 'Three distinct formats require three completely different physiological and tactical skill sets.',
  introduction: 'Few sports on Earth offer the stylistic diversity of cricket. A spectator can spend five patient summer days observing the psychological warfare of red-ball Test cricket, spend a sunny afternoon witnessing the tactical ebb and flow of a 50-over One Day International (ODI), or immerse themselves in a deafening three-hour Twenty20 (T20) blockbuster under floodlights. While the pitch length and fundamental laws remain identical, each format functions as a fundamentally different game.',
  sections: [
    {
      id: 'test-cricket-ultimate-trial',
      title: '1. Test Cricket: The Ultimate Trial of Skill and Character',
      content: 'Test cricket is the sport’s oldest, purest, and most mentally demanding discipline. Contested in traditional white or cream clothing with a crimson red leather ball (or pink under floodlights for Day-Night Tests), a Test match can last up to five days, featuring approximately 90 overs (540 balls) per day.\n\nEach side has two innings to bat and bowl. To win a Test, a team must not only score more runs than the opposition but also take all 20 opposing wickets (10 in each innings). If the five days elapse without the leading team taking those final wickets, the match concludes in a "Draw"—irrespective of how many runs either team has accumulated. This unique condition makes defensive stubbornness, session management, and bowling stamina paramount.',
    },
    {
      id: 'declarations-and-followon',
      title: '2. Declarations, Follow-Ons, and Red-Ball Strategy',
      content: 'Test cricket features unique tactical instruments not seen in limited-overs play:\n\n• Declarations: A batting captain can voluntarily end their team’s innings at any point ("declare") if they believe they have scored enough runs and wish to give their bowlers maximum time to dismiss the opposition before the match runs out of time.\n\n• The Follow-On: If the team batting first leads by 200 or more runs after both sides have completed their first innings, their captain may enforce the "follow-on"—mandating that the trailing team immediately bat their second innings back-to-back. This exerts extreme physical and psychological pressure.\n\nPitch wear plays a decisive role: on Day 1, pitches offer seam and bounce to pace bowlers; by Days 4 and 5, footmarks and cracked clay allow spin bowlers to turn deliveries unpredictably.',
    },
    {
      id: 'odi-cricket-tactical-balance',
      title: '3. One Day Internationals (ODI): 50 Overs of Calculated Chess',
      content: 'Born in 1971 and popularized across the 1980s and 90s, One Day Internationals condense the contest into a single day. Each side receives exactly one innings of 50 overs (300 balls), played in colorful team kits with a white leather ball that swings during initial overs.\n\nAn ODI unfolds in three distinct tactical acts:\n1. The First Powerplay (Overs 1–10): Only two fielders are permitted outside the 30-yard circle. Batters attempt to capitalize on gaps while bowlers seek early swing wickets.\n2. The Middle Overs (Overs 11–40): Four fielders outside the ring. Batters rotate the strike with singles and twos while spinners strangle scoring rates and hunt breakthroughs.\n3. The Death Overs (Overs 41–50): Five fielders permitted outside the circle. Batters unleash boundary-clearing power, while bowlers rely on toe-crushing yorkers and deceiving slower balls.',
    },
    {
      id: 't20-cricket-high-octane-revolution',
      title: '4. Twenty20 (T20): Maximum Risk and Explosive Innovation',
      content: 'Introduced professionally in 2003, Twenty20 compressed cricket into a high-octane 3-hour entertainment package. With only 20 overs (120 deliveries) per side, every single ball is contested at maximum intensity. A single maiden over (an over with 0 runs scored) can tilt the win probability by 15%.\n\nBecause teams have 10 wickets to expend over just 120 balls, batters adopt a hyper-aggressive mindset. Dot balls (deliveries yielding zero runs) are treated as mini-disasters. Batters execute unorthodox 360-degree strokes—such as reverse scoops, switch-hits, and ramps—while bowlers develop mystery knuckleballs, wide yorkers, and back-of-the-hand slower deliveries.',
    },
    {
      id: 'formats-comparison-matrix',
      title: '5. Direct Format Comparison Matrix',
      content: 'A side-by-side breakdown illustrates the stark operational differences across the three international formats:',
      table: {
        caption: 'Comparison of Test, ODI, and T20 Cricket',
        headers: ['Feature', 'Test Cricket', 'One Day International (ODI)', 'Twenty20 International (T20I)'],
        rows: [
          ['Duration', 'Up to 5 Days (approx. 30 hours)', '7 to 8 Hours', '3 to 3.5 Hours'],
          ['Overs per Innings', 'Unlimited (usually 90/day)', 'Strictly 50 overs', 'Strictly 20 overs'],
          ['Innings per Team', 'Two innings', 'One innings', 'One innings'],
          ['Ball Used', 'Red ball (Pink for D/N)', 'Two new White balls', 'One White ball per innings'],
          ['Clothing', 'Traditional white/cream', 'Coloured team jersey', 'Coloured team jersey'],
          ['Max Bowler Quota', 'No limit per bowler', '10 overs per bowler', '4 overs per bowler'],
          ['Possible Results', 'Win, Loss, Draw, Tie', 'Win, Loss, Tie, No Result', 'Win, Loss (Super Over for ties)'],
          ['Pinnacle Trophy', 'ICC World Test Championship', 'ICC Men’s Cricket World Cup', 'ICC Men’s T20 World Cup'],
        ],
      },
    },
    {
      id: 'player-adaptation',
      title: '6. The Art of Cross-Format Mastery and Statistics in Context',
      content: 'Because conditions and tempos differ radically, a cricketer’s numerical record must always be interpreted in context. In Test cricket, a batting average of 50.00 is the gold standard of greatness, and a strike rate of 55 runs per 100 balls is entirely respectable. In T20 cricket, however, an average of 35.00 accompanied by a strike rate of 150.00 is exponentially more destructive.\n\nOnly a rare tier of all-time cricketers—such as Virat Kohli, AB de Villiers, Kane Williamson, and Rohit Sharma—have maintained world-class outputs simultaneously across all three formats. For bowlers, fast bowlers like Jasprit Bumrah and Mitchell Starc adjust their line, length, and wrist angles between the grueling endurance of red-ball spells and the pinpoint defensive art of death-over execution.',
    },
  ],
  keyTakeaways: [
    'Test cricket requires taking 20 wickets across two innings over 5 days; games can end in a draw if time expires.',
    'ODIs are structured over 50 overs per side, featuring distinct phases from opening powerplay to death-over assaults.',
    'T20 cricket is completed in 3 hours, incentivizing maximum risk, 360-degree strokeplay, and strike rate optimization.',
    'Bowlers are limited to 10 overs in ODIs and 4 overs in T20s, whereas Test bowling quotas are unlimited.',
    'Tied games in limited-overs cricket are resolved through a thrilling one-over eliminator known as the Super Over.',
    'Evaluating player statistics requires format-specific criteria: Test cricket values patience and average, while T20 prioritizes strike rate and boundary percentage.',
  ],
  conclusion: 'The coexistence of Test, ODI, and T20 cricket makes the sport uniquely captivating. Far from cannibalizing one another, each format serves a distinct purpose: Tests test the soul and technical purity of the player, ODIs reward methodical pacing and tactical maturity, and T20 provides unbridled adrenaline and athletic modern entertainment.',
  sources: [
    { title: 'International Cricket Council — Men’s International Format Playing Conditions', url: 'https://www.icc-cricket.com' },
    { title: 'ESPNCricinfo — Historical Records across Tests, ODIs, and T20 Internationals', url: 'https://www.espncricinfo.com' },
  ],
  relatedBlogSlugs: ['cricket-rules-guide', 'icc-cricket-world-cup', 'cricket-records'],
};
