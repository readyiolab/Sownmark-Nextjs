"use client";

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sownmark-cookie-consent');
    if (!consent) {
      // Small delay to let the user see the page first
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sownmark-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sownmark-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[998] p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl flex-shrink-0 hidden sm:block">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-gray-900">Your Privacy Settings</h4>
                <p className="text-sm text-gray-500 max-w-3xl leading-relaxed">
                  We use cookies and third-party tools to optimize website functionality, analyze traffic, and run targeted advertising campaigns in compliance with GDPR and the Indian IT Act. By clicking "Accept All", you agree to our use of cookies.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <button
                onClick={handleDecline}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Reject Optional
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#1a2957] text-white hover:bg-[#1a2957]/90 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
