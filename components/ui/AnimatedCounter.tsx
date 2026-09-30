"use client";

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = '', prefix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(totalMiliseconds / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.round(easedProgress * end);

      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
