import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { getSEOConfig } from '../data/seoData';

export const SEOPageBadge: React.FC = () => {
  const location = useLocation();
  const config = getSEOConfig(location.pathname);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border-subtle)] hover:border-[var(--cricket-emerald)]/40 rounded-xl p-3 sm:p-4 text-xs transition-all shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--cricket-emerald)]/15 text-[var(--cricket-emerald)] font-bold tracking-wide text-[11px] uppercase border border-[var(--cricket-emerald)]/30">
              <Sparkles className="w-3.5 h-3.5" />
              SEO & AEO Metadata
            </span>
            <span className="text-[var(--text-muted)] font-mono text-[11px] bg-[var(--bg-elevated)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
              {config.path}
            </span>
            <span className="text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)]">Main Keyword:</strong>{' '}
              <span className="text-[var(--cricket-emerald)] font-semibold underline decoration-[var(--cricket-emerald)]/40 underline-offset-2">
                {config.mainKeyword}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-[var(--text-muted)] text-[11px] hidden md:inline">
              Related: {config.relatedKeywords.join(', ')}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-[11px] text-[var(--cricket-emerald)] hover:text-emerald-400 font-medium py-0.5 px-2 rounded hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
              aria-label={isExpanded ? "Collapse SEO and keyword details" : "Expand SEO and keyword details"}
            >
              <span>{isExpanded ? 'Hide Specs' : 'View Target Keywords & Rules'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div>
                <span className="text-[var(--text-muted)] font-bold">Page Title (50-60 chars):</span>
                <p className="text-[var(--text-primary)] font-medium mt-0.5 bg-[var(--bg-elevated)] p-2 rounded border border-[var(--border-subtle)]">
                  {config.pageTitle}
                  <span className="text-[10px] text-[var(--text-muted)] ml-2">({config.pageTitle.length} chars)</span>
                </p>
              </div>
              <div>
                <span className="text-[var(--text-muted)] font-bold">Meta Description (140-160 chars):</span>
                <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed mt-0.5 bg-[var(--bg-elevated)] p-2 rounded border border-[var(--border-subtle)]">
                  {config.metaDescription}
                  <span className="text-[10px] text-[var(--text-muted)] ml-2">({config.metaDescription.length} chars)</span>
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-[var(--text-muted)] font-bold">Target Keyword Alignment:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Main: {config.mainKeyword}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Rel 1: {config.relatedKeywords[0]}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Rel 2: {config.relatedKeywords[1]}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-[var(--text-muted)] font-bold">AEO Answer Snippet (Voice & AI Engine):</span>
                <div className="mt-0.5 bg-[var(--bg-elevated)] p-2 rounded border border-[var(--border-subtle)] text-[11px]">
                  <p className="text-[var(--cricket-emerald)] font-semibold">Q: {config.aeoQuestion}</p>
                  <p className="text-[var(--text-secondary)] mt-1">A: {config.aeoAnswer}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
