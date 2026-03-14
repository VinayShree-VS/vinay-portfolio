'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'blue' | 'green';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 hover:scale-105',
        variant === 'default' &&
          'bg-gray-100/80 text-gray-600 dark:bg-white/[0.06] dark:text-gray-400',
        variant === 'purple' &&
          'bg-purple-100/80 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 hover:bg-purple-200/80 dark:hover:bg-purple-500/20',
        variant === 'blue' &&
          'bg-blue-100/80 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 hover:bg-blue-200/80 dark:hover:bg-blue-500/20',
        variant === 'green' &&
          'bg-green-100/80 text-green-700 dark:bg-green-500/10 dark:text-green-400 hover:bg-green-200/80 dark:hover:bg-green-500/20',
        className
      )}
    >
      {children}
    </span>
  );
}
