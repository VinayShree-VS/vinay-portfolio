'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

interface Bubble {
  id: number;
  size: number;
  left: string;
  delay: number;
  duration: number;
  opacity: number;
}

function generateBubbles(count: number): Bubble[] {
  const bubbles: Bubble[] = [];
  for (let i = 0; i < count; i++) {
    bubbles.push({
      id: i,
      // Varied sizes: some small (4-8px), some medium (10-18px), a few large (20-30px)
      size: i < 8 ? Math.random() * 22 + 8 : i < 18 ? Math.random() * 10 + 4 : Math.random() * 6 + 2,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: Math.random() * 18 + 14,
      opacity: Math.random() * 0.25 + 0.05,
    });
  }
  return bubbles;
}

export function BubbleBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
      setBubbles(generateBubbles(30));
    }
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1]"
      aria-hidden="true"
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble-particle"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: '-5%',
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            background: isDark
              ? b.size > 14
                ? `radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(59,130,246,0.15) 60%, transparent 100%)`
                : `radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(59,130,246,0.2) 100%)`
              : b.size > 14
                ? `radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.08) 60%, transparent 100%)`
                : `radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(59,130,246,0.1) 100%)`,
          }}
        />
      ))}
    </div>
  );
}
