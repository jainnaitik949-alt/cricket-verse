export interface BlogSection {
  id: string;
  title: string;
  content: string; // Markdown or formatted text paragraphs
  subsections?: {
    title: string;
    content: string;
  }[];
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  quote?: {
    text: string;
    author: string;
  };
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 
    | 'Cricket History'
    | 'Cricket Rules and Basics'
    | 'Cricket Formats'
    | 'Legendary Players'
    | 'International Cricket'
    | 'IPL and T20 Leagues'
    | 'Records and Statistics'
    | 'Cricket Training and Skills'
    | 'Cricket Technology and Analysis';
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  lastVerifiedDate: string;
  readTimeMinutes: number;
  coverImage: string;
  coverImageAlt: string;
  coverImageCaption?: string;
  introduction: string;
  sections: BlogSection[];
  keyTakeaways: string[];
  conclusion: string;
  sources: {
    title: string;
    url?: string;
    notes?: string;
  }[];
  relatedBlogSlugs: string[];
}

export interface PlayerFormatStats {
  matches: number;
  runs?: number;
  wickets?: number;
  avg?: number;
  hundreds?: number;
  strikeRate?: number;
}

export interface PlayerProfile {
  id: string;
  name: string;
  fullName: string;
  nickname?: string;
  country: string;
  countryFlag: string;
  born: string;
  primaryRole: 'Batter' | 'Fast Bowler' | 'Spin Bowler' | 'All-rounder' | 'Wicketkeeper Batter';
  battingStyle: string;
  bowlingStyle?: string;
  image: string;
  careerSpan: string;
  overview: string;
  majorAchievements: string[];
  verifiedRecords: {
    title: string;
    stat: string;
    context: string;
  }[];
  statsSummary: {
    tests?: PlayerFormatStats;
    odis?: PlayerFormatStats;
    t20is?: PlayerFormatStats;
    ipl?: PlayerFormatStats;
  };
  relatedArticleSlug?: string;
}

export interface TournamentInfo {
  id: string;
  name: string;
  shortName: string;
  category: 'International ODI' | 'International T20' | 'Test Championship' | 'Franchise T20' | 'Women International';
  governingBody: string;
  inauguralYear: number;
  frequency: string;
  format: string;
  currentChampions: string;
  mostSuccessfulTeam: string;
  description: string;
  structure: string;
  historicalSignificance: string;
  recentEditions: {
    year: number;
    winner: string;
    runnerUp: string;
    host: string;
    finalMargin: string;
  }[];
  relatedArticleSlug?: string;
}

export interface CricketRecordItem {
  id: string;
  format: 'Test' | 'ODI' | 'T20I' | 'World Cup' | 'IPL';
  category: 'Batting' | 'Bowling' | 'Wicketkeeping' | 'Team';
  recordName: string;
  holder: string;
  achievement: string;
  dateOrSpan: string;
  details: string;
  source: string;
  lastVerified: string;
}

export interface TimelineMilestone {
  year: number;
  headline: string;
  description: string;
  category: string;
  significance: string;
}
