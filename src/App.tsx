import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AllBlogsPage } from './pages/AllBlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { CricketBasicsPage } from './pages/CricketBasicsPage';
import { PlayerProfilesPage } from './pages/PlayerProfilesPage';
import { TournamentsPage } from './pages/TournamentsPage';
import { RecordsPage } from './pages/RecordsPage';
import { SavedArticlesPage } from './pages/SavedArticlesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors selection:bg-[var(--cricket-emerald)] selection:text-white">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* 1. Home Page */}
                <Route path="/" element={<HomePage />} />

                {/* 2. All Blogs Directory */}
                <Route path="/blogs" element={<AllBlogsPage />} />

                {/* 3. Individual Blog Article */}
                <Route path="/blogs/:slug" element={<BlogDetailPage />} />

                {/* 4. Cricket Basics & Rules */}
                <Route path="/cricket-basics" element={<CricketBasicsPage />} />
                <Route path="/basics" element={<Navigate to="/cricket-basics" replace />} />

                {/* 5. Player Profiles */}
                <Route path="/players" element={<PlayerProfilesPage />} />
                <Route path="/cricket-players" element={<Navigate to="/players" replace />} />

                {/* 6. Tournaments & Leagues */}
                <Route path="/tournaments" element={<TournamentsPage />} />
                <Route path="/cricket-tournaments" element={<Navigate to="/tournaments" replace />} />

                {/* 7. Cricket Records Archive */}
                <Route path="/cricket-records" element={<RecordsPage />} />
                <Route path="/records" element={<Navigate to="/cricket-records" replace />} />

                {/* 8. Saved Reading List */}
                <Route path="/saved-articles" element={<SavedArticlesPage />} />
                <Route path="/saved" element={<Navigate to="/saved-articles" replace />} />

                {/* 9. About Us */}
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/about" element={<Navigate to="/about-us" replace />} />

                {/* 10. Contact Us */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

                {/* 404 Not Found Page */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </BookmarkProvider>
    </ThemeProvider>
  );
}
