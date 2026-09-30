"use client";

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyWhatsApp from '../ui/StickyWhatsApp';
import CookieConsent from '../ui/CookieConsent';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 50;
        setIsScrolled((prev) => (prev === next ? prev : next));
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frame);
    };
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
