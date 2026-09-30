"use client";

import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export const COOKIE_CONSENT_KEY = 'sownmark-cookie-consent';

// Rendered in the server HTML so it paints with FCP instead of becoming a late LCP candidate.
// When consent already exists, the inline script in app/layout.tsx sets html[data-cookie-consent]
// before first paint and globals.css hides the banner.
const CookieConsent: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  const saveChoice = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    } catch {}
    document.documentElement.dataset.cookieConsent = choice;
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="cookie-banner fixed bottom-0 left-0 right-0 z-[998] p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl flex-shrink-0 hidden sm:block">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-bold text-gray-900">Your Privacy Settings</p>
            <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
              We use cookies and third-party tools to optimize website functionality, analyze traffic, and run targeted advertising campaigns in compliance with GDPR and the Indian IT Act. By clicking "Accept All", you agree to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={() => saveChoice('declined')}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Reject Optional
          </button>
          <button
            onClick={() => saveChoice('accepted')}
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#1a2957] text-white hover:bg-[#1a2957]/90 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
