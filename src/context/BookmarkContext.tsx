import React, { createContext, useContext, useEffect, useState } from 'react';

interface BookmarkContextType {
  savedBlogSlugs: string[];
  isSaved: (slug: string) => boolean;
  toggleSave: (slug: string) => void;
  clearAllSaved: () => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const STORAGE_KEY = 'cricketverse_saved_articles_v1';

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedBlogSlugs, setSavedBlogSlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedBlogSlugs));
    } catch {
      // Ignore write errors (e.g. private browsing quota)
    }
  }, [savedBlogSlugs]);

  const isSaved = (slug: string) => savedBlogSlugs.includes(slug);

  const toggleSave = (slug: string) => {
    setSavedBlogSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const clearAllSaved = () => {
    setSavedBlogSlugs([]);
  };

  return (
    <BookmarkContext.Provider value={{ savedBlogSlugs, isSaved, toggleSave, clearAllSaved }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = (): BookmarkContextType => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
