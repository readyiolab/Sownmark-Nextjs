"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useScrollToHashTargets = (targets: string[] = [], delay = 500) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');

    if (targets.includes(hash)) {
      const scrollToElement = () => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const timer = setTimeout(scrollToElement, delay);
      return () => clearTimeout(timer);
    }
  }, [pathname, targets, delay]);
};

export default useScrollToHashTargets;
