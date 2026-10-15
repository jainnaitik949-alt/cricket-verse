import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOConfig, PageSEOConfig } from '../data/seoData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  mainKeyword?: string;
  relatedKeywords?: string[];
  ogType?: 'website' | 'article';
  publishedDate?: string;
  modifiedDate?: string;
  authorName?: string;
  imageUrl?: string;
  aeoQuestion?: string;
  aeoAnswer?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  mainKeyword,
  relatedKeywords,
  ogType = 'website',
  publishedDate,
  modifiedDate,
  authorName,
  imageUrl,
  aeoQuestion,
  aeoAnswer,
}) => {
  const location = useLocation();
  const config: PageSEOConfig = getSEOConfig(location.pathname);

  const finalTitle = title || config.pageTitle;
  const finalDesc = description || config.metaDescription;
  const finalMainKw = mainKeyword || config.mainKeyword;
  const finalRelatedKw = relatedKeywords || config.relatedKeywords;
  const finalAeoQ = aeoQuestion || config.aeoQuestion;
  const finalAeoA = aeoAnswer || config.aeoAnswer;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://cricketverse.org${location.pathname}`;

  useEffect(() => {
    // 1. Set document title
    document.title = finalTitle;

    // 2. Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalDesc);

    // 3. Set meta keywords (Main Keyword + 2 Related Keywords)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    const allKw = [finalMainKw, ...(finalRelatedKw || [])].filter(Boolean).join(', ');
    metaKeywords.setAttribute('content', allKw);

    // 4. OpenGraph tags
    const setMetaProperty = (prop: string, content: string) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaProperty('og:title', finalTitle);
    setMetaProperty('og:description', finalDesc);
    setMetaProperty('og:type', ogType);
    setMetaProperty('og:url', currentUrl);
    setMetaProperty('og:site_name', 'CricketVerse');

    if (imageUrl) {
      setMetaProperty('og:image', imageUrl);
    }

    // Twitter Card
    const setMetaName = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', finalTitle);
    setMetaName('twitter:description', finalDesc);
    if (imageUrl) {
      setMetaName('twitter:image', imageUrl);
    }

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + window.location.pathname);

    // 6. Inject Schema.org JSON-LD for rich snippets and Answer Engine Optimization (AEO)
    let jsonLdScript = document.getElementById('cricketverse-jsonld') as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'cricketverse-jsonld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    const jsonLdData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://cricketverse.org/#website',
          url: 'https://cricketverse.org/',
          name: 'CricketVerse',
          description: 'Every Match. Every Legend. Every Story.',
        },
        {
          '@type': ogType === 'article' ? 'Article' : 'WebPage',
          '@id': `${currentUrl}#webpage`,
          url: currentUrl,
          name: finalTitle,
          description: finalDesc,
          inLanguage: 'en-US',
          isPartOf: { '@id': 'https://cricketverse.org/#website' },
          ...(ogType === 'article' && {
            headline: finalTitle,
            datePublished: publishedDate || '2025-01-01',
            dateModified: modifiedDate || publishedDate || '2025-01-01',
            author: {
              '@type': 'Person',
              name: authorName || 'CricketVerse Editorial Team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'CricketVerse',
              url: 'https://cricketverse.org',
            },
          }),
        },
        // AEO Question-Answer Schema
        ...(finalAeoQ && finalAeoA
          ? [
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: finalAeoQ,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: finalAeoA,
                    },
                  },
                ],
              },
            ]
          : []),
      ],
    };

    jsonLdScript.textContent = JSON.stringify(jsonLdData);
  }, [
    finalTitle,
    finalDesc,
    finalMainKw,
    finalRelatedKw,
    ogType,
    currentUrl,
    imageUrl,
    publishedDate,
    modifiedDate,
    authorName,
    finalAeoQ,
    finalAeoA,
  ]);

  return null;
};
