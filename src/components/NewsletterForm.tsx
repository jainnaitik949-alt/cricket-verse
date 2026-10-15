import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface NewsletterFormProps {
  isFooterCompact?: boolean;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ isFooterCompact = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage('Demo Mode: In a production deployment with a newsletter backend, this will subscribe your email. Your simulated subscription has been logged in this session.');
    setEmail('');
  };

  if (isFooterCompact) {
    return (
      <div className="space-y-2">
        <p className="text-xs text-[var(--text-secondary)] font-semibold">Newsletter (Demo)</p>
        <form onSubmit={handleSubmit} className="flex items-center gap-1.5">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Enter your email..."
            aria-label="Email subscription"
            className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-lg px-3 py-1.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="px-3.5 py-1.5 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white rounded-lg text-xs font-bold shrink-0 transition-colors"
          >
            Join
          </button>
        </form>
        {status === 'success' && (
          <p className="text-[11px] text-[var(--cricket-emerald)] flex items-start gap-1 mt-1 leading-snug">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <span>{message}</span>
          </p>
        )}
        {status === 'error' && (
          <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{message}</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-elevated)] to-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl stadium-glow-emerald">
      <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[var(--cricket-emerald)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-full text-xs text-[var(--cricket-emerald)] font-bold">
          <Mail className="w-3.5 h-3.5" />
          <span>The CricketVerse Dispatch</span>
        </div>

        <h3 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-wide">
          Stay Ahead of Every Delivery
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
          Get weekly historical deep-dives, tactical analyses, batting and bowling breakdowns, and tournament retrospectives delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto pt-2">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Enter your email address..."
            aria-label="Email address for newsletter"
            className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)] transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shrink-0 shadow-lg shadow-emerald-600/30"
          >
            <span>Subscribe</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        {status === 'success' && (
          <div className="p-3 bg-[var(--bg-primary)] border border-[var(--cricket-emerald)] rounded-xl text-xs text-[var(--cricket-emerald)] flex items-start justify-center gap-2 text-left max-w-md mx-auto">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="leading-snug">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-3 bg-[var(--bg-primary)] border border-red-500 rounded-xl text-xs text-red-400 flex items-center justify-center gap-2 max-w-md mx-auto">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <p>{message}</p>
          </div>
        )}

        <p className="text-[11px] text-[var(--text-muted)] pt-1">
          No spam, ever. Demonstrative subscription form adhering to CricketVerse privacy policies.
        </p>
      </div>
    </div>
  );
};
