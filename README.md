# CricketVerse — Every Match. Every Legend. Every Story.

CricketVerse is an authoritative, sports-editorial digital publication and cricket information platform built with React, TypeScript, Vite, and Tailwind CSS. It is engineered for cricket enthusiasts, students, aspiring cricketers, and sports researchers.

---

## Features Overview

- **12 Full-Length In-Depth Cricket Articles:** Complete 900–1,200-word guides with verified milestones, analytical sections, comparative tables, key takeaways, and official sources.
- **Cricket Basics Field Guide:** Interactive pitch dimensions, fielding circles, dismissal rules (Bowled, Caught, LBW, Run Out, Stumped), scoring explanations, and an A–Z glossary.
- **16 Legendary Player Profiles:** Verified career records, batting and bowling styles, major tournament honors, and biography links.
- **6 Major Tournaments:** ICC ODI World Cup, T20 World Cup, WTC, Women’s ODI & T20 World Cups, and the IPL.
- **Historical Records Database:** Filterable and sortable records across Test, ODI, T20I, World Cup, and IPL with source attribution and verification timestamps.
- **500-Year Historical Timeline:** From 1598 Tudor court records through to the 2024 T20 World Cup victory.
- **Search & Category Filtering:** Instant search by title, tag, player, or rule keyword, plus real-time category filtering.
- **Browser Bookmarking:** Save articles to a personal reading list that persists in `localStorage`.
- **Social Sharing:** Instant native sharing and direct link copying with visual feedback.
- **Anti-Slop Design Constitution:** Zero-pill discipline for static metadata, authentic sports palette (`#071A2B`, `#102A43`, `#16A34A`), Bebas Neue & Oswald typography, and high-contrast accessibility.

---

## Local Development Guide

### 1. Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000` (or the port specified in terminal).

### 4. Build for Production
```bash
npm run build
```
This runs TypeScript type checking (`tsc`) and compiles optimized production assets into the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## Vercel Deployment Instructions

CricketVerse includes `vercel.json` with SPA rewrite rules to ensure client-side routes (e.g., `/blogs/sachin-tendulkar`, `/basics`, `/records`) resolve cleanly.

### Step-by-Step Deployment:
1. **Push to GitHub / GitLab:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete CricketVerse publishing website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cricketverse.git
   git push -u origin main
   ```
2. **Import into Vercel:**
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **"Add New"** > **"Project"**.
   - Select your `cricketverse` repository from GitHub.
3. **Configure Build Settings:**
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. **Deploy:**
   - Click **"Deploy"**. Vercel will build the project and provide an instant live URL (e.g. `https://cricketverse.vercel.app`).

---

## Content Management & Architecture

### How to Add or Edit Blogs
All 12 articles reside under `src/data/blogs/`:
- `blog1_history.ts`: History of Cricket
- `blog2_rules.ts`: Understanding Cricket Rules
- `blog3_formats.ts`: Test, ODI, and T20 Formats
- `blog4_sachin.ts`: Sachin Tendulkar Profile
- `blog5_kohli.ts`: Virat Kohli Profile
- `blog6_dhoni.ts`: MS Dhoni Profile
- `blog7_worldcup.ts`: ICC Cricket World Cup
- `blog8_ipl.ts`: IPL Explained
- `blog9_records.ts`: Cricket Records That Made History
- `blog10_batting.ts`: Better Batter Coaching
- `blog11_bowling.ts`: Fast vs Spin Bowling
- `blog12_technology.ts`: Technology & DRS

To create a new article, create a new file conforming to the `BlogArticle` interface in `src/types/index.ts` and add it to `allBlogs` in `src/data/blogsData.ts`.

### How to Update Verified Cricket Statistics
Verified records are centralized in `src/data/recordsData.ts`. Each record specifies:
- `holder`: Name of player or team
- `achievement`: Numerical figure or milestone
- `source`: Official governing body (ICC, BCCI, Wisden)
- `lastVerified`: Month and year when stats were verified against official sources.

### Configuring a Future Live-Score Provider
To integrate live match feeds:
1. Obtain an API key from an authorized cricket data provider (such as CricketData.org, Sportmonks Cricket API, or CricAPI).
2. Store your API key securely in `.env` (never commit secrets to client code):
   ```env
   VITE_CRICKET_API_KEY=your_verified_api_key_here
   ```
3. Use a backend server proxy route (`/api/live-scores`) to fetch match fixtures without exposing private credentials in the browser bundle.
4. Pass live responses into the UI with proper timestamping and attribution, clearly distinguishing live match data from historical articles.

---

## License
MIT. Published by the CricketVerse Editorial Board.
