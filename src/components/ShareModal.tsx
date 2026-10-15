import React, { useState } from 'react';
import { Share2, Copy, Check, X, Twitter, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title, url }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const shareTwitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `Reading "${title}" on CricketVerse:`
  )}&url=${encodeURIComponent(url)}`;

  const shareWhatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Check out "${title}" on CricketVerse: ${url}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#0D2238] border border-[#1F3851] rounded-2xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#829AB1] hover:text-white transition-colors"
          aria-label="Close share dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <Share2 className="w-5 h-5 text-[#16A34A]" />
          <h3 className="font-heading text-2xl text-white">Share This Article</h3>
        </div>

        <p className="text-xs text-[#B8C7D9] mb-5 line-clamp-2">
          {title}
        </p>

        {/* Copy link input */}
        <div className="space-y-3">
          <label className="text-xs text-[#829AB1] font-medium block">
            Direct Link
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={url}
              className="w-full bg-[#071A2B] border border-[#1F3851] rounded-lg px-3 py-2 text-xs text-white focus:outline-none select-all"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="pt-6 mt-6 border-t border-[#1F3851] flex items-center justify-between gap-3">
          <a
            href={shareTwitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 bg-[#102A43] hover:bg-[#1A3858] text-white text-xs font-medium rounded-lg border border-[#1F3851] flex items-center justify-center gap-2 transition-colors"
          >
            <Twitter className="w-4 h-4 text-[#86EFAC]" />
            <span>X / Twitter</span>
          </a>

          <a
            href={shareWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 bg-[#102A43] hover:bg-[#1A3858] text-white text-xs font-medium rounded-lg border border-[#1F3851] flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#16A34A]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
