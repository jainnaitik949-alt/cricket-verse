import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  ogType?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, ogType = 'website' }) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | CricketVerse`;

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Set OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | CricketVerse`);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) {
      ogTypeTag.setAttribute('content', ogType);
    }
  }, [title, description, ogType]);

  return null;
};
