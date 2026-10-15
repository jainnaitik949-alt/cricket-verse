import { BlogArticle } from '../types';
import { blog1History } from './blogs/blog1_history';
import { blog2Rules } from './blogs/blog2_rules';
import { blog3Formats } from './blogs/blog3_formats';
import { blog4Sachin } from './blogs/blog4_sachin';
import { blog5Kohli } from './blogs/blog5_kohli';
import { blog6Dhoni } from './blogs/blog6_dhoni';
import { blog7WorldCup } from './blogs/blog7_worldcup';
import { blog8IPL } from './blogs/blog8_ipl';
import { blog9Records } from './blogs/blog9_records';
import { blog10Batting } from './blogs/blog10_batting';
import { blog11Bowling } from './blogs/blog11_bowling';
import { blog12Technology } from './blogs/blog12_technology';

export const allBlogs: BlogArticle[] = [
  blog1History,
  blog2Rules,
  blog3Formats,
  blog4Sachin,
  blog5Kohli,
  blog6Dhoni,
  blog7WorldCup,
  blog8IPL,
  blog9Records,
  blog10Batting,
  blog11Bowling,
  blog12Technology,
];

export const blogCategories = [
  'All',
  'Cricket History',
  'Cricket Rules and Basics',
  'Cricket Formats',
  'Legendary Players',
  'International Cricket',
  'IPL and T20 Leagues',
  'Records and Statistics',
  'Cricket Training and Skills',
  'Cricket Technology and Analysis',
] as const;

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return allBlogs.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(slugs: string[]): BlogArticle[] {
  return allBlogs.filter((b) => slugs.includes(b.slug));
}

export function getFeaturedBlog(): BlogArticle {
  // Return the flagship comprehensive history or iconic player article as featured
  return blog1History;
}
