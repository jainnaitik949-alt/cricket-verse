import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<AllBlogsPage />} />
                <Route path="/blogs/:slug" element={<BlogDetailPage />} />
                <Route path="/basics" element={<CricketBasicsPage />} />
                <Route path="/players" element={<PlayerProfilesPage />} />
                <Route path="/tournaments" element={<TournamentsPage />} />
                <Route path="/records" element={<RecordsPage />} />
                <Route path="/saved" element={<SavedArticlesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
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
