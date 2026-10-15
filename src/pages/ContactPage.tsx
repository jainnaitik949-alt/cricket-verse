import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SEOPageBadge } from '../components/SEOPageBadge';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errs.email = 'A valid email address is required.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a message with at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmittedMessage(
      `Demonstration Mode Active: In a production environment with a live mail server or API endpoint, your message would be dispatched to the CricketVerse editorial desk. Your simulated query regarding "${formData.subject}" by ${formData.name} was successfully validated.`
    );
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-8 transition-colors">
      <SEOHead
        title="Contact Cricket Editorial Team & Inquiries | CricketVerse"
        description="Contact cricket editorial team members, submit cricket feedback inquiries, and propose original submit cricket stories for publication review within 48 hours."
        mainKeyword="contact cricket editorial team"
        relatedKeywords={['cricket feedback inquiries', 'submit cricket stories']}
        aeoQuestion="How can readers and writers contact the CricketVerse team?"
        aeoAnswer="You can submit feedback, corrections, and article proposals through our online form or email editorial@cricketverse.org, with a guaranteed response within 48 hours."
      />

      {/* Transparent SEO & AEO Target Inspector */}
      <SEOPageBadge />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-4">
        {/* Header with AEO Question & Answer */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--cricket-emerald)] tracking-wider uppercase">
            <Mail className="w-4 h-4" />
            <span>Editorial Communication</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
            Contact the CricketVerse Editorial Desk
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl text-[var(--cricket-emerald)]">
            How Can You Submit Editorial Feedback or Cricket Story Inquiries?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            You can submit article proposals, statistical corrections, and reader inquiries using our structured online dispatch form below or by writing directly to editorial@cricketverse.org with an expected 48-hour response time.
          </p>
        </div>

        {/* Demo Mode Notice */}
        <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl flex items-start gap-3.5 text-xs text-[var(--text-secondary)] shadow-md">
          <Info className="w-5 h-5 text-[var(--cricket-emerald)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[var(--text-primary)]">Editorial Notice:</strong> This website is currently configured in demonstration mode for college presentation and portfolio evaluation. Messages submitted below trigger client-side input validation and simulated delivery feedback.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          {submittedMessage && (
            <div className="p-4 bg-[var(--bg-elevated)] border border-[var(--cricket-emerald)] rounded-2xl text-xs text-[var(--cricket-emerald)] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-semibold">{submittedMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[var(--text-primary)] block">
                  Your Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  aria-label="Your full name"
                  className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[var(--text-primary)] block">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@example.com"
                  aria-label="Your email address"
                  className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[var(--text-primary)] block">
                Inquiry Topic / Subject <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Historical record correction / Article submission query"
                aria-label="Inquiry topic or subject"
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)]"
              />
              {errors.subject && (
                <p className="text-[11px] text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[var(--text-primary)] block">
                Detailed Message <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your detailed inquiry, fact-checking source link, or feedback here..."
                aria-label="Detailed message"
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--cricket-emerald)] resize-y"
              />
              {errors.message && (
                <p className="text-[11px] text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              aria-label="Submit message to CricketVerse editorial desk"
              className="w-full py-3.5 bg-[var(--cricket-emerald)] hover:bg-emerald-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Message to Editorial Desk</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
