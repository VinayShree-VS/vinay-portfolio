'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ className, children, hover = true, glass = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-500 card-shine border-gradient',
        glass &&
          'bg-white/60 backdrop-blur-xl dark:bg-white/[0.03] border border-gray-200/40 dark:border-white/[0.06]',
        !glass &&
          'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
        hover &&
          'hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)] hover:border-purple-500/20 dark:hover:border-purple-500/20 cursor-pointer',
        className
      )}
    >
      {/* Inner glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:from-purple-500/5 group-hover:to-blue-500/5" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
