import { BlogArticle } from '../../types';

export const blog8IPL: BlogArticle = {
  id: 'blog-8',
  slug: 'ipl-explained',
  title: 'IPL Explained — Teams, Auction, Points Table, and Match Strategy',
  subtitle: 'The ultimate insider guide to the richest, most competitive franchise tournament in global sport',
  excerpt: 'Demystify the Indian Premier League: how mega-auctions and salary purses work, the mathematics of Net Run Rate (NRR), the high-stakes playoff bracket, Impact Player tactics, and how IPL transformed world cricket.',
  category: 'IPL and T20 Leagues',
  tags: ['IPL', 'T20 Leagues', 'Player Auction', 'Net Run Rate', 'Playoffs', 'Match Strategy', 'Impact Player'],
  author: {
    name: 'Karan Mehra',
    role: 'T20 Franchise Analyst & Sports Strategist',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  publishedDate: '2025-03-02',
  lastVerifiedDate: '2025-11-20',
  readTimeMinutes: 10,
  coverImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1600&q=80',
  coverImageAlt: 'Cricket batsman hitting the ball before a roaring stadium under lights',
  coverImageCaption: 'High stakes entertainment: The IPL combines world-class international stars with local prodigies under prime-time floodlights.',
  introduction: 'Launched in April 2008 by the Board of Control for Cricket in India (BCCI), the Indian Premier League (IPL) revolutionized the sporting world. By combining twenty-over cricket with city-based private franchise ownership, Bollywood flair, cutting-edge data analytics, and prime-time broadcasting, the IPL became a sporting juggernaut. Today, it ranks behind only the NFL in terms of media rights value per match, creating a high-octane theater where global icons and uncapped rural prodigies share the same dugout.',
  sections: [
    {
      id: 'genesis-and-franchise-model',
      title: '1. The Genesis: How the Franchise Model Functions',
      content: 'In late 2007, following India’s victory in the inaugural T20 World Cup, cricket administrators recognized the public’s thirst for domestic franchise entertainment. In 2008, eight original franchises representing major Indian cities were auctioned to industrial conglomerates and entertainment moguls.\n\nToday, the league operates as a 10-team competition. Franchises generate revenue through shared central broadcasting rights, league-wide sponsorships, home stadium gate receipts, and merchandise sales. Crucially, squads are not static school or state units; they are assembled through an open, transparent player auction system.',
    },
    {
      id: 'mega-auction-retention-salary-cap',
      title: '2. The Mega-Auction, Retention Rules, and Salary Caps',
      content: 'Every three to four years, the BCCI holds an IPL Mega Auction, interspersed with mini-auctions in intervening years. Each franchise operates under a strict, equal salary purse (which stood at ₹120 crore / approx. $14.5 million USD for the 2025 cycle):\n\n• Player Retentions: Prior to a mega auction, teams may retain a limited core of players (typically 4 to 6) from their existing squad at designated financial deductions from their total purse.\n• Overseas Player Restrictions: Squads may comprise up to 25 players (with a maximum of 8 international overseas stars). In the playing eleven on match day, a team can field a maximum of 4 overseas players, ensuring that domestic Indian talent forms the backbone of every team.\n• Right-to-Match (RTM): An auction mechanism enabling a franchise to match the winning bid of an un-retained player who was part of their squad the previous season.',
    },
    {
      id: 'points-table-and-nrr-explained',
      title: '3. Understanding the Points Table and Net Run Rate (NRR)',
      content: 'During the group stage, teams play 14 league matches. Teams earn 2 points for a win, 1 point for a tie or no result (rain abandonment), and 0 for a loss. When teams finish level on points, rank is determined by Net Run Rate (NRR).\n\nNet Run Rate is calculated using a straightforward formula:\nNRR = (Total Runs Scored ÷ Total Overs Faced) − (Total Runs Conceded ÷ Total Overs Bowled)\n\nImportant NRR Nuances:\n• If a team is bowled out (loses all 10 wickets) before completing their 20 overs, their run rate is calculated over the full 20 overs.\n• Therefore, chasing down a target in 14 overs rather than 19.5 overs provides a massive boost to NRR, often deciding which team advances to the playoffs.',
    },
    {
      id: 'the-playoff-system',
      title: '4. The Page-Playoff System: Why Finishing in the Top Two Matters',
      content: 'Unlike sudden-death knockout tournaments, the IPL utilizes the Page playoff format to reward regular season consistency:',
      table: {
        caption: 'The IPL Playoff Bracket Architecture',
        headers: ['Match', 'Contestants', 'Winner Advances To', 'Loser Consequence'],
        rows: [
          ['Qualifier 1', 'Rank 1 vs Rank 2', 'The Grand Final', 'Moves to Qualifier 2 (Second Chance!)'],
          ['Eliminator', 'Rank 3 vs Rank 4', 'Moves to Qualifier 2', 'Instantly Eliminated from Tournament'],
          ['Qualifier 2', 'Loser of Q1 vs Winner of Eliminator', 'The Grand Final', 'Eliminated in 3rd Place'],
          ['The Final', 'Winner of Q1 vs Winner of Q2', 'IPL Champions Trophy', 'Runner-Up'],
        ],
      },
    },
    {
      id: 'impact-player-rule',
      title: '5. The Impact Player Rule and Tactical Matchups',
      content: 'In 2023, the IPL introduced the "Impact Player" rule. Teams name five substitutes alongside their starting eleven at the coin toss. At any point during a match (during innings breaks, fall of wickets, or end of overs), a captain can replace any starting player with an Impact Substitute, who can bat and bowl their full 4-over quota.\n\nThis rule revolutionized team balance: teams effectively field 12 players—allowing them to bat down to number 8 or 9 with specialist hitters, then sub out a batter for a specialist death bowler. In 2024, this rule catalyzed record-breaking team totals, with teams routinely surpassing 250 runs.',
    },
    {
      id: 'scouting-and-global-impact',
      title: '6. Modern Scouting, Data Analytics, and Global Impact',
      content: 'Gone are the days when player selection was based solely on reputation. Every IPL franchise maintains year-round scouting networks scouring domestic tournaments (Ranji Trophy, Syed Mushtaq Ali, Vijay Hazare) and youth academies for hidden gems. Stars like Jasprit Bumrah, Hardik Pandya, Yashasvi Jaiswal, and Rinku Singh were uncovered through franchise talent development.\n\nSimultaneously, data analytics firms sit in team dugouts providing real-time matchup data: optimal bowling angles against left-handers, pitch ball bounce tracking, and boundary percentage metrics. The IPL has made international cricketers financially independent, united players across political boundaries, and raised the competitive standard of international white-ball cricket.',
    },
  ],
  keyTakeaways: [
    'Founded in 2008 by the BCCI, the IPL features 10 city-based franchises assembled via mega and mini-auctions.',
    'Teams operate within an equal salary purse cap and can field a maximum of 4 overseas players in the playing XI.',
    'The points table awards 2 points for a win; ties in points are resolved through Net Run Rate (NRR).',
    'The top two teams receive two chances to reach the final via Qualifier 1 and Qualifier 2.',
    'The Impact Player rule permits a tactical substitution of one player during the match to bat or bowl.',
    'Mumbai Indians and Chennai Super Kings are the joint most successful franchises in IPL history with 5 titles each.',
  ],
  conclusion: 'The Indian Premier League has permanently altered the ecology of world sport. By synthesizing unmatched financial power, elite international competition, scientific scouting, and high drama, the IPL represents the vanguard of modern cricket’s entertainment future.',
  sources: [
    { title: 'BCCI / Indian Premier League Official Rules & Regulations', url: 'https://www.iplt20.com' },
    { title: 'ESPNCricinfo — Complete IPL Historical Archives and Statistics', url: 'https://www.espncricinfo.com/series/ipl' },
  ],
  relatedBlogSlugs: ['test-odi-t20-formats', 'ms-dhoni', 'virat-kohli'],
};
