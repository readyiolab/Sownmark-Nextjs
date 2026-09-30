"use client";

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function GA4TrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window.gtag('config', 'G-V24YGWR2D9', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GA4Tracker() {
  return (
    <Suspense fallback={null}>
      <GA4TrackerContent />
    </Suspense>
  );
}
