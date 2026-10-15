import { BlogArticle } from '../../types';

export const blog1History: BlogArticle = {
  id: 'blog-1',
  slug: 'history-of-cricket',
  title: 'The History of Cricket — From Its Origins to the Modern Game',
  subtitle: 'How a medieval pastoral pastime evolved into a multi-billion dollar global phenomenon',
  excerpt: 'Trace cricket’s extraordinary transformation from 16th-century English countryside pastures to five-day Test epics, white-ball revolutions, and the modern digital era under stadium floodlights.',
  category: 'Cricket History',
  tags: ['Cricket History', 'Test Cricket', 'ICC', 'Evolution', 'Ashes', 'T20 Revolution'],
  author: {
    name: 'Alastair Vance',
    role: 'Cricket Historian & Senior Columnist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  publishedDate: '2025-01-15',
  lastVerifiedDate: '2025-11-20',
  readTimeMinutes: 9,
  coverImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1600&q=80',
  coverImageAlt: 'Historic cricket ground with traditional pavilion and green turf',
  coverImageCaption: 'The spiritual home of cricket: English village grounds established the earliest playing codes that still govern international play.',
  introduction: 'Cricket is widely regarded as one of the oldest codified team sports on Earth. While millions today watch neon-lit stadium tournaments and pyrotechnic boundaries, cricket’s heartbeat was forged in the damp grass of rural southeast England during the late Middle Ages. What began as a juvenile pursuit involving a shepherd’s crook and a ball of matted wool has developed across five centuries into a sophisticated international passion uniting over two billion admirers worldwide.',
  sections: [
    {
      id: 'early-origins',
      title: '1. Pastoral Roots and the Earliest References (1550–1700)',
      content: 'Historical records first document cricket in late Tudor England. In 1598, an official court case in Guildford, Surrey, recorded testimony concerning a parcel of common land where schoolboys had played "creckett" around 1550. Etymologists suggest the word stems from Old English "cricc" or "cryce", referring to a crutch or curved walking staff—the ancestral ancestor of the modern willow bat.\n\nBy the 17th century, cricket transitioned from a children’s pastime to an adult pursuit. Village greens across Kent, Sussex, and Hampshire saw locals bowling stones or leather balls underarm at two small wooden pegs driven into the turf. High-stakes wagering among wealthy landowners accelerated the sport’s organization, turning local rivalries into sponsored spectacles.',
    },
    {
      id: 'hambledon-mcc',
      title: '2. The Hambledon Era and the Marylebone Cricket Club (1750–1835)',
      content: 'During the mid-18th century, a rural tavern club in Hampshire called Hambledon Cricket Club became the epicentre of the cricketing universe. Playing at Broadhalfpenny Down, Hambledon developed tactical innovations that transformed the game: the introduction of a third stump (after a batter notoriously allowed the ball to pass between two uprights without dislodging the bail), the standardization of maximum bat widths to 4.25 inches, and the shift from rolling the ball across the turf to pitching it through the air.\n\nIn 1787, Thomas Lord established a ground in St John’s Wood, London, and the Marylebone Cricket Club (MCC) was founded. The MCC took custody of the Laws of Cricket in 1788, creating universal regulations for pitch lengths (22 yards), ball weights (5.5 to 5.75 ounces), and dismissal methods that endure to this day.',
      table: {
        caption: 'Chronological Milestones in Early Cricket Codification',
        headers: ['Year', 'Milestone', 'Impact on the Sport'],
        rows: [
          ['1598', 'First written reference to "creckett"', 'Recorded in Guildford court legal rolls'],
          ['1744', 'First codified Laws of Cricket', 'Established 22-yard pitch and two stumps'],
          ['1775', 'Third stump added', 'Solved the controversy of balls passing between stumps'],
          ['1787', 'Formation of the MCC', 'Created the global custodian of the Laws of Cricket'],
          ['1835', 'Overarm bowling legalized', 'Radically increased bowling pace and bounce'],
        ],
      },
    },
    {
      id: 'first-test-match',
      title: '3. The Birth of International Test Cricket (1877) and The Ashes',
      content: 'As the British Empire expanded, cricket travelled to Australia, South Africa, the West Indies, and the Indian subcontinent. In March 1877, a combined Australian XI met an English touring team at the Melbourne Cricket Ground in what is officially recognized as the first Test match. Australia emerged victorious by 45 runs, highlighted by Charles Bannerman scoring 165 runs—still the highest percentage of team runs in a completed Test innings.\n\nFive years later, in 1882 at The Oval in London, Australia bowled England out for 77 to seal an agonizing defeat on English soil. The Sporting Times published a satirical mock obituary lamenting that "the body of English cricket will be cremated and the ashes taken to Australia." Thus, the legendary Ashes rivalry was born, setting the gold standard for five-day endurance contests.',
    },
    {
      id: 'subcontinent-and-caribbean',
      title: '4. Global Expansion: The Caribbean Flair and Subcontinent Dominance',
      content: 'During the 20th century, cricket evolved from a colonial import into an instrument of cultural identity and national pride. The West Indies were granted Test status in 1928, producing titans like Sir Frank Worrell, Sir Garfield Sobers, and later the fearsome four-pronged pace attack of the 1970s and 80s led by Clive Lloyd and Sir Vivian Richards.\n\nOn the Indian subcontinent, cricket found its most passionate heartland. India played its inaugural Test at Lord’s in 1932 under CK Nayudu. Half a century later, on June 25, 1983, Kapil Dev’s underdog Indian squad stunned the two-time reigning champion West Indies at Lord’s to lift the Prudential World Cup. That single afternoon sparked an economic and cultural revolution, shifting the administrative and commercial nerve center of cricket irreversibly toward South Asia.',
    },
    {
      id: 'white-ball-revolution',
      title: '5. The White-Ball Revolution: ODIs, Kerry Packer, and Day-Night Drama',
      content: 'For nearly a century, multi-day red-ball matches were the sole international format. That changed abruptly in January 1971 when rain washed out three days of a Test in Melbourne; officials staged an improvised 40-overs-per-side game to salvage ticket revenue, creating the first One Day International.\n\nAustralian media magnate Kerry Packer revolutionized the landscape in 1977 with World Series Cricket. Packer introduced colored clothing, protective helmets, white balls, floodlit day-night encounters, and multi-camera broadcast packages. Although initially condemned by traditionalists, Packer’s commercial innovations were soon adopted by the International Cricket Council (ICC), laying the foundation for modern global sporting spectacles.',
    },
    {
      id: 't20-and-ipl',
      title: '6. The Twenty20 Earthquake and the Franchise Era',
      content: 'In 2003, the England and Wales Cricket Board designed a fast-paced three-hour format called Twenty20 to attract younger spectators. The format caught fire globally during the inaugural ICC World Twenty20 in South Africa in 2007, culminating in an electrifying final between India and Pakistan in Johannesburg.\n\nIn 2008, the Board of Control for Cricket in India (BCCI) launched the Indian Premier League (IPL). By merging top international talent with domestic prodigies, private franchise ownership, Bollywood glamour, and prime-time broadcasting, the IPL fundamentally altered player contracts, athletic conditioning, and shot innovation (scoops, switch-hits, ramp shots), making cricket the second most valuable sports broadcasting property per match after the NFL.',
    },
    {
      id: 'modern-technology',
      title: '7. Technology, Equipment, and the Contemporary Landscape',
      content: 'Modern cricket operates in a hyper-technological ecosystem. High-density willow bats with 40mm edges launch balls 100 meters, while lightweight carbon-composite helmets protect players against 150 km/h bouncers. The Decision Review System (DRS)—incorporating Hawk-Eye ball tracking, UltraEdge sound sensors, and high-frame-rate infrared cameras—has virtually eliminated howler umpiring decisions.\n\nMoreover, the introduction of the ICC World Test Championship and the staging of pink-ball Day-Night Tests have preserved five-day cricket alongside booming domestic T20 leagues. Cricket’s inclusion in the 2028 Los Angeles Olympic Games marks its latest triumphant leap toward universal worldwide recognition.',
    },
  ],
  keyTakeaways: [
    'Cricket originated as an English pastoral game in the 16th century before being formalized by the MCC in 1787.',
    'The first recognized Test match took place in 1877 between Australia and England in Melbourne.',
    'India’s 1983 World Cup victory catalyzed cricket’s financial and cultural migration toward the subcontinent.',
    'Kerry Packer’s 1977 World Series Cricket pioneered colored clothing, white balls, and floodlit matches.',
    'Twenty20 cricket and the 2008 launch of the IPL turned cricket into a multi-billion dollar modern entertainment powerhouse.',
    'Cricket returns to the Olympic Games program in Los Angeles 2028, confirming its global expansion.',
  ],
  conclusion: 'From quiet sheep pastures in Surrey to the roar of 100,000 fans in Ahmedabad, cricket has demonstrated an unmatched ability to reinvent itself while cherishing its foundational traditions. As the game strides forward into new continents, digital viewing experiences, and Olympic arenas, its core narrative remains unchanged: a timeless duel between batter and bowler over 22 yards of earth.',
  sources: [
    { title: 'Marylebone Cricket Club (MCC) — Historical Records & The Laws of Cricket', url: 'https://www.lords.org/mcc/the-laws-of-cricket' },
    { title: 'International Cricket Council (ICC) — History of International Cricket', url: 'https://www.icc-cricket.com' },
    { title: 'Wisden Cricketers’ Almanack — Historical Archive and Records', url: 'https://www.wisden.com' },
  ],
  relatedBlogSlugs: ['cricket-rules-guide', 'test-odi-t20-formats', 'icc-cricket-world-cup'],
};
