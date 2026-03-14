'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/data';
import Link from 'next/link';
import { useScrollspy } from '@/hooks/use-scroll';
import { useTheme } from '@/components/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
  const allLinks = [{ label: 'Home', href: '#hero' }, ...siteConfig.navLinks];
  const activeId = useScrollspy(allLinks.map((l) => l.href.replace('#', '')));
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? isDark
            ? 'backdrop-blur-xl bg-[#03030a]/80 border-b border-white/[0.06] shadow-lg shadow-black/20'
            : 'backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg shadow-black/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link
          href="#hero"
          className="font-extrabold text-lg sm:text-xl tracking-[0.15em] uppercase"
        >
          <span className="gradient-text">VINAY</span>
        </Link>

        {/* Desktop nav - center */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {allLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'relative transition-all px-4 py-2 rounded-lg',
                  activeId === link.href.replace('#', '')
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                )}
              >
                {link.label}
                {activeId === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="navPill"
                    className={cn(
                      'absolute inset-0 rounded-lg -z-10',
                      isDark ? 'bg-white/[0.08]' : 'bg-purple-500/10'
                    )}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              'p-2.5 rounded-xl transition-all',
              isDark
                ? 'text-gray-400 hover:text-white hover:bg-white/[0.08]'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiSun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMoon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Contact button */}
          <motion.a
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            Contact
          </motion.a>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={cn(
              'lg:hidden p-2.5 rounded-xl transition-all',
              isDark
                ? 'text-gray-400 hover:text-white hover:bg-white/[0.08]'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <FiX className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <FiMenu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className={cn(
              'lg:hidden overflow-hidden backdrop-blur-xl border-t',
              isDark
                ? 'bg-[#03030a]/95 border-white/[0.06]'
                : 'bg-white/95 border-gray-200/50'
            )}
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {allLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-xl transition-all text-sm font-medium',
                      activeId === link.href.replace('#', '')
                        ? isDark
                          ? 'bg-white/[0.08] text-white'
                          : 'bg-purple-500/10 text-gray-900'
                        : isDark
                          ? 'text-gray-400 hover:bg-white/[0.05] hover:text-white'
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: allLinks.length * 0.05 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold mt-2"
                >
                  Contact Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
