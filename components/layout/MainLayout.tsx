"use client";

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyWhatsApp from '../ui/StickyWhatsApp';
import CookieConsent from '../ui/CookieConsent';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <StickyWhatsApp />
      <CookieConsent />
    </div>
  );
}
