import { BlogArticle } from '../../types';

export const blog9Records: BlogArticle = {
  id: 'blog-9',
  slug: 'cricket-records',
  title: 'Cricket Records That Made History',
  subtitle: 'From Bradman’s 99.94 and Lara’s 400* to Muralitharan’s 800 wickets and Rohit’s 264: the unbreakable monuments of the game',
  excerpt: 'Explore cricket’s most storied individual and team records across Tests, ODIs, T20s, and World Cups, examining why some milestones stand as unassailable summits and how stats are officially verified.',
  category: 'Records and Statistics',
  tags: ['Cricket Records', 'Don Bradman', 'Brian Lara 400', 'Muralitharan 800', 'Rohit Sharma 264', 'World Cup Records'],
  author: {
    name: 'Siddharth V. Rao',
    role: 'Senior Cricket Statistician & Archivist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  publishedDate: '2025-03-09',
  lastVerifiedDate: '2025-11-20',
  readTimeMinutes: 10,
  coverImage: 'https://images.unsplash.com/photo-1531415074868-036b107e7752?auto=format&fit=crop&w=1600&q=80',
  coverImageAlt: 'Cricket scoreboard illuminated against an evening sky',
  coverImageCaption: 'Monuments in willow and leather: Cricket records reflect exceptional athletic peaks across decades of competition.',
  introduction: 'Cricket is fundamentally a sport of numbers. Every stroke, delivery, catch, and appeal is transcribed by official scorers into historical ledgers. While many records are shattered as equipment and training methods evolve, a select few records stand so far above statistical probability that they are considered virtually unbreakable monuments. Understanding these milestones provides a lens into cricket’s greatest moments.',
  sections: [
    {
      id: 'bradman-statistical-wonder',
      title: '1. Sir Donald Bradman’s 99.94: Sport’s Greatest Statistical Anomaly',
      content: 'In any sport, standard deviations measure exceptional performance. In Test cricket, a career batting average above 50.00 is exceptional, and above 55.00 is legendary. Sir Donald Bradman of Australia, who played 52 Tests between 1928 and 1948, concluded his career with a batting average of 99.94.\n\nStatisticians have calculated that Bradman’s average is 4.4 standard deviations above the mean of his peers—a mathematical anomaly greater than Michael Jordan’s scoring in basketball, Pelé’s goals in football, or Wayne Gretzky’s points in hockey. In his final innings at The Oval in 1948, Bradman needed just 4 runs to finish with an average of exactly 100.00; he was bowled for a second-ball duck by leg-spinner Eric Hollies, freezing his average forever at 99.94.',
    },
    {
      id: 'lara-400-individual-summit',
      title: '2. Brian Lara’s 400 Not Out: The Mount Everest of Batting',
      content: 'On April 12, 2004, at the Antigua Recreation Ground, West Indian genius Brian Charles Lara achieved what no other human has accomplished in first-class international cricket: an individual score of 400 not out against England.\n\nBatting for nearly 13 hours across 582 deliveries, Lara struck 43 boundaries and 4 sixes. Remarkably, Lara had held the previous world record of 375 against the same opponent on the exact same ground ten years earlier in 1994, before Matthew Hayden briefly surpassed it with 380 in 2003. Lara’s 400* reclaimed the summit and remains the highest individual score in Test history.',
    },
    {
      id: 'muralitharan-800-wickets',
      title: '3. Muttiah Muralitharan: 800 Test Wickets',
      content: 'In July 2010 in Galle, Sri Lankan off-spinner Muttiah Muralitharan announced he would retire after the first Test against India. At that point, he sat on 792 Test wickets. Requiring 8 wickets to achieve the mythical 800-wicket milestone, he claimed 5 in the first innings and chipped away in the second.\n\nWith India 9 wickets down in their follow-on and rain threatening, Muralitharan induced an edge from Pragyan Ojha to Mahela Jayawardene at slip, securing his 800th wicket on the final ball of his Test career. Averaging over 6 wickets per Test match across 133 Tests with 67 five-wicket hauls, his record of 800 Test wickets (and 534 ODI wickets) is mathematically almost insurmountable in the modern era of truncated Test schedules.',
    },
    {
      id: 'verified-records-table',
      title: '4. Verified Table of Cricket’s Greatest Historical Records',
      content: 'The following table catalogs verified records recognized by the International Cricket Council (ICC):',
      table: {
        caption: 'Iconic Cricket Records across Formats (Last Verified: Nov 2025)',
        headers: ['Record Description', 'Holder / Team', 'Format', 'Achievement', 'Year / Date', 'Source Verification'],
        rows: [
          ['Highest Test Batting Average', 'Sir Donald Bradman (AUS)', 'Test Cricket', '99.94 runs per innings', '1928–1948', 'Official ICC / Wisden'],
          ['Highest Individual Test Score', 'Brian Lara (WI)', 'Test Cricket', '400* vs England (Antigua)', '2004', 'Official Match Scorecard'],
          ['Most Career Test Wickets', 'Muttiah Muralitharan (SL)', 'Test Cricket', '800 Wickets (133 Tests)', '1992–2010', 'ICC Historical Archives'],
          ['Most International Hundreds', 'Sachin Tendulkar (IND)', 'Tests + ODIs', '100 Centuries (51 Test / 49 ODI)', '1989–2013', 'BCCI / ICC Archives'],
          ['Highest Individual ODI Score', 'Rohit Sharma (IND)', 'One Day International', '264 vs Sri Lanka (Kolkata)', '2014', 'BCCI / ESPNCricinfo'],
          ['Fastest Century in ODI History', 'AB de Villiers (SA)', 'One Day International', '100 off 31 balls vs WI', '2015', 'ICC Match Center'],
          ['Most Career ODI Centuries', 'Virat Kohli (IND)', 'One Day International', '50 Centuries', '2008–Present', 'ICC Official Rankings'],
          ['Most Wickets in Single World Cup', 'Mitchell Starc (AUS)', 'ODI World Cup', '27 Wickets (2019 Edition)', '2019', 'ICC World Cup Records'],
          ['Most Runs in Single World Cup', 'Virat Kohli (IND)', 'ODI World Cup', '765 Runs (2023 Edition)', '2023', 'ICC Tournament Stats'],
        ],
      },
    },
    {
      id: 'white-ball-explosions',
      title: '5. White-Ball Explosions: Rohit Sharma’s 264 and AB de Villiers’ 31-Ball Century',
      content: 'Limited-overs cricket has witnessed statistical breakthroughs that challenged traditional assumptions:\n\n• Rohit Sharma’s 264 (2014): At Eden Gardens, Kolkata, Rohit scored 264 runs off 173 deliveries against Sri Lanka, featuring 33 boundaries and 9 sixes. Rohit is also the only cricketer in history to register three double-centuries in ODI cricket (209 vs AUS in 2013, 264 vs SL in 2014, and 208* vs SL in 2017).\n\n• AB de Villiers’ 31-Ball Hundred (2015): In Johannesburg against the West Indies, South Africa’s de Villiers reached his century in just 31 deliveries (and 50 runs in 16 balls), smashing 16 sixes in an innings of 149 off 44 balls.',
    },
    {
      id: 'statistics-verification-context',
      title: '6. How Cricket Records are Verified and Contextualized',
      content: 'Official cricket statistics are governed by strict international protocol. Matches are only classified as official Tests, ODIs, or T20Is if both teams have full member or associate status approved by the ICC, and play under official ICC playing conditions with accredited umpires and scorers.\n\nCricket historians caution against direct cross-era comparisons. For instance, Bradman batted without protective helmets on uncovered pitches that turned muddy in the rain, yet he faced far fewer 150 km/h reverse-swinging deliveries or mystery spin variations. Recognizing the context of equipment, boundary sizes, and pitch preparation enhances our appreciation of every recorded feat.',
    },
  ],
  keyTakeaways: [
    'Sir Donald Bradman’s 99.94 career Test average is considered the greatest statistical feat in world sport.',
    'Brian Lara holds the highest individual Test score with 400* against England in 2004.',
    'Muttiah Muralitharan took 800 Test wickets and 534 ODI wickets, the most in both disciplines.',
    'Rohit Sharma holds the highest ODI score (264) and is the only batter with three ODI double centuries.',
    'AB de Villiers struck the fastest ODI hundred in just 31 balls in 2015.',
    'Official records require ICC accredited status and standard playing conditions for verification.',
  ],
  conclusion: 'Cricket records are more than dry numbers on a ledger; they are human milestones forged against adversity, pressure, and the elements. Whether written in red ball on five-day pitches or launched into the bleachers in white-ball spectacles, these achievements define the outer boundaries of human sporting capability.',
  sources: [
    { title: 'ESPNCricinfo Statsguru — Official Cricket Database and Record Query System', url: 'https://stats.espncricinfo.com' },
    { title: 'ICC Historical Match Archive & Official Record Book', url: 'https://www.icc-cricket.com/records' },
  ],
  relatedBlogSlugs: ['sachin-tendulkar', 'virat-kohli', 'test-odi-t20-formats'],
};
