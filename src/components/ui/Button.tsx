'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl cursor-pointer',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        // Variants
        variant === 'primary' &&
          'bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 pulse-glow',
        variant === 'secondary' &&
          'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30',
        variant === 'outline' &&
          'border-2 border-purple-500/50 text-purple-600 hover:bg-purple-500 hover:text-white hover:border-purple-500 dark:border-purple-400/50 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white dark:hover:border-purple-500',
        variant === 'ghost' &&
          'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10',
        // Sizes
        size === 'sm' && 'px-4 py-2 text-sm gap-1.5',
        size === 'md' && 'px-6 py-2.5 text-sm gap-2',
        size === 'lg' && 'px-8 py-3.5 text-base gap-2.5',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
