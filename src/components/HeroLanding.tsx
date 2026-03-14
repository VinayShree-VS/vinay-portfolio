'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiAward, FiCode, FiStar } from 'react-icons/fi';
import { useTheme } from '@/components/ThemeProvider';

// ── Reliable male portrait URLs ──
// const HERO_IMAGES = [
//   'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&crop=face&q=80',
//   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face&q=80',
//   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=face&q=80',
// ];
const HERO_IMAGES = [
  '/images/vkd-img.png',
  '/images/vks-img.png',
  '/images/vkb-img.png',
  '/images/vkw-img.jpeg',
  '/images/vkg-img.png',
  '/images/vkt-img.png',
];
export function HeroLanding() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [imgIdx, setImgIdx] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (imgIdx + 1 < HERO_IMAGES.length) {
      setImgIdx((prev) => prev + 1);
    } else {
      setImgFailed(true);
    }
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse parallax
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const stats = [
    { value: '5+', label: 'Years Exp.' },
    { value: '50+', label: 'Projects' },
    { value: '30+', label: 'Clients' },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${isDark ? 'hero-bg' : 'hero-bg-light'}`}
    >
      {/* ═══ BACKGROUND GLOW BLOBS ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-[20%] left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-[100px] sm:blur-[120px] transition-colors duration-700 ${isDark ? 'bg-purple-600/20' : 'bg-purple-400/10'}`} />
        <div className={`absolute bottom-[20%] right-[10%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-[80px] sm:blur-[100px] transition-colors duration-700 ${isDark ? 'bg-blue-600/15' : 'bg-blue-400/8'}`} />
        <div className={`absolute top-[50%] right-[30%] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full blur-[60px] sm:blur-[80px] transition-colors duration-700 ${isDark ? 'bg-rose-600/10' : 'bg-pink-400/6'}`} />
        <div className={`absolute top-[10%] right-[20%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full blur-[90px] transition-colors duration-700 ${isDark ? 'bg-cyan-500/8' : 'bg-cyan-400/5'}`} />
      </div>

      {/* ═══ FLOATING GEOMETRIC SHAPES ═══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-[15%] right-[8%] w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 ${isDark ? 'border-purple-500/15' : 'border-purple-400/10'}`}
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [45, 45, 45] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute bottom-[25%] left-[5%] w-4 h-4 sm:w-6 sm:h-6 rotate-45 border ${isDark ? 'border-blue-400/20' : 'border-blue-300/15'}`}
        />
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className={`absolute top-[60%] right-[15%] w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isDark ? 'bg-purple-400/30' : 'bg-purple-300/20'}`}
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={`absolute top-[35%] left-[15%] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isDark ? 'bg-cyan-400/25' : 'bg-cyan-300/15'}`}
        />
        <motion.div
          animate={{ rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-[75%] right-[25%] text-2xl font-thin ${isDark ? 'text-white/[0.06]' : 'text-gray-400/10'}`}
        >
          +
        </motion.div>
      </div>

      {/* ═══ NOISE TEXTURE ═══ */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.02]'}`}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* ═══ MAIN CONTENT ═══ */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-12 items-center w-full">

          {/* ═══ LEFT: TEXT (hidden on mobile, shown on lg+) ═══ */}
          <motion.div
            style={{ y: textY }}
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-20 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div variants={item} className="mb-5 sm:mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-500 ${isDark ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-600 border border-green-200/60'}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for Work
              </span>
            </motion.div>

            {/* Small intro — hidden on mobile (shown on image overlay instead) */}
            <motion.p
              variants={item}
              className={`hidden lg:block text-sm font-semibold tracking-[0.3em] uppercase mb-5 transition-colors duration-500 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
            >
              Creative Developer
            </motion.p>

            {/* Large name — hidden on mobile (shown on image overlay instead) */}
            <motion.h1
              variants={item}
              className={`hidden lg:block hero-name mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              VINAY
            </motion.h1>
            <motion.h1 variants={item} className="hidden lg:block hero-name gradient-text mb-6">
              KUMAR
            </motion.h1>

            {/* Role tagline */}
            <motion.div variants={item} className="mb-5 sm:mb-7">
              <p className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Full-Stack Developer &amp;{' '}
                <span className="gradient-text font-semibold">Digital Craftsman</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className={`text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed mb-7 sm:mb-9 transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              I build exceptional digital experiences that connect brands with their
              audience. Specializing in modern web technologies, creative UI, and
              performant applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 pulse-glow transition-all duration-300 cursor-pointer"
              >
                Let&apos;s Talk
                <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20">
                  <FiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer border ${isDark ? 'border-white/10 text-white hover:bg-white/5 hover:border-white/20' : 'border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400'}`}
              >
                <FiCode className="w-4 h-4" />
                View Work
              </motion.a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-12 justify-center lg:justify-start"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className={`text-2xl sm:text-3xl font-bold transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider mt-1 text-gray-500 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT: HERO IMAGE ═══ */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative hero-image-glow">
              {/* ── Portrait image container ──
                   Mobile: nearly full-width, tall
                   Tablet: medium
                   Desktop: large right column
              */}
              <div
                ref={imageRef}
                className="relative w-[280px] h-[370px] sm:w-[340px] sm:h-[440px] md:w-[380px] md:h-[490px] lg:w-[400px] lg:h-[520px] xl:w-[450px] xl:h-[580px] rounded-3xl overflow-hidden transition-transform duration-300 ease-out shadow-2xl"
              >
                {/* Native <img> — avoids next/image HMR crash */}
                {!imgFailed ? (
                  <img
                    key={isDark ? HERO_IMAGES[1] : HERO_IMAGES[imgIdx]}
                    src={isDark ? HERO_IMAGES[1] : HERO_IMAGES[imgIdx]}
                    alt="Vinay Kumar — Full-Stack Developer"
                    onError={handleImageError}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="eager"
                  />
                ) : (
                  <div className={`absolute inset-0 flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-purple-900/80 via-gray-900 to-blue-900/80' : 'bg-gradient-to-br from-purple-100 via-gray-100 to-blue-100'}`}>
                    <div className={`text-6xl sm:text-8xl font-black ${isDark ? 'text-white/10' : 'text-gray-300'}`}>VK</div>
                  </div>
                )}

                {/* ── Cinematic lighting overlays ── */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/35 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${isDark ? 'mix-blend-color opacity-100' : 'mix-blend-multiply opacity-30'}`} />
                <div className={`absolute inset-0 bg-gradient-to-l from-orange-500/20 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${isDark ? 'mix-blend-color opacity-100' : 'mix-blend-multiply opacity-20'}`} />
                <div className={`absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${isDark ? 'mix-blend-overlay opacity-100' : 'mix-blend-multiply opacity-15'}`} />
                {/* Vignette */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isDark ? 'bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]' : 'bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.12)_100%)]'}`} />

                {/* Glass accent panel */}
                <div className={`absolute top-[8%] right-0 w-[28%] h-[50%] rounded-l-2xl pointer-events-none transition-all duration-500 ${isDark ? 'glass-panel' : 'bg-white/25 backdrop-blur-md border-l border-white/40'}`} />

                {/* Bottom fade */}
                <div className={`absolute bottom-0 left-0 right-0 h-[15%] pointer-events-none transition-all duration-500 ${isDark ? 'bg-gradient-to-t from-[#03030a] via-[#03030a]/40 to-transparent' : 'bg-gradient-to-t from-[#f8f9fc] via-[#f8f9fc]/40 to-transparent'}`} />
                {/* Top fade — lighter since name overlay has its own gradient */}
                <div className={`absolute top-0 left-0 right-0 h-[8%] pointer-events-none transition-all duration-500 lg:h-[12%] ${isDark ? 'bg-gradient-to-b from-[#03030a]/20 to-transparent' : 'bg-gradient-to-b from-[#f8f9fc]/10 to-transparent'}`} />
              </div>

              {/* ═══ NAME OVERLAY — spills slightly left of the image ═══
                   No background box. Text has a subtle text-shadow for readability.
                   Positioned so ~60% sits on the image and ~40% hangs left.
                   Only visible on mobile/tablet; hidden on lg+.
              */}
              <div
                className="absolute top-[15%] sm:top-[13%] md:top-[12%] -left-6 sm:-left-10 md:-left-12 z-20 pointer-events-none lg:hidden"
              >
                <p className={`text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase mb-1.5 sm:mb-2 drop-shadow-sm ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                  Creative Developer
                </p>
                <h2
                  className={`text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight leading-[0.85] mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ textShadow: isDark ? '0 2px 20px rgba(0,0,0,0.6)' : '0 2px 16px rgba(255,255,255,0.7)' }}
                >
                  VINAY
                </h2>
                <h2
                  className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight leading-[0.85] gradient-text"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                >
                  KUMAR
                </h2>
              </div>

              {/* ── Floating Stats Card (bottom-left) ── */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-5 lg:-bottom-6 lg:-left-8 z-30"
              >
                <div className={`flex items-center gap-2.5 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-4 rounded-2xl shadow-2xl transition-all duration-500 ${isDark ? 'glass-panel shadow-black/50' : 'bg-white/85 backdrop-blur-xl border border-gray-200/60 shadow-gray-300/50'}`}>
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 flex-shrink-0">
                    <FiAward className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className={`text-base sm:text-xl font-bold transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>2K+</div>
                    <div className={`text-[9px] sm:text-xs whitespace-nowrap transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Happy Clients</div>
                  </div>
                </div>
              </motion.div>

              {/* ── Top-right badge ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-6 z-30"
              >
                <div className={`px-2.5 sm:px-4 py-1.5 sm:py-3 rounded-xl shadow-xl transition-all duration-500 ${isDark ? 'glass-panel shadow-black/40' : 'bg-white/85 backdrop-blur-xl border border-gray-200/60 shadow-gray-300/40'}`}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <FiStar className={`w-3 h-3 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                    <span className={`text-[10px] sm:text-xs font-semibold transition-colors duration-500 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Top Rated</span>
                  </div>
                  <div className={`text-[8px] sm:text-[10px] transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>5+ Years Exp</div>
                </div>
              </motion.div>

              {/* ── Tech stack badge (hidden on xs) ── */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute top-[60%] -left-3 sm:-left-5 lg:-left-8 z-30 hidden sm:block"
              >
                <div className={`px-3 py-2 rounded-xl shadow-lg transition-all duration-500 ${isDark ? 'glass-panel shadow-black/30' : 'bg-white/85 backdrop-blur-xl border border-gray-200/60 shadow-gray-300/30'}`}>
                  <div className="flex items-center gap-1.5">
                    <FiCode className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span className={`text-[10px] font-medium transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>React • Next • Node</span>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating decorative elements ── */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border z-0 transition-colors duration-500 ${isDark ? 'border-purple-500/20' : 'border-purple-400/15'}`}
              />
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className={`absolute top-[30%] -left-3 sm:-left-6 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full z-0 transition-colors duration-500 ${isDark ? 'bg-purple-500/50' : 'bg-purple-400/40'}`}
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className={`absolute bottom-[20%] -right-2 sm:-right-5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full z-0 transition-colors duration-500 ${isDark ? 'bg-blue-400/40' : 'bg-blue-500/30'}`}
              />

              {/* Ring decorations */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] h-[108%] rounded-3xl border -z-10 transition-colors duration-500 ${isDark ? 'border-white/[0.04]' : 'border-gray-300/25'}`} />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[116%] h-[116%] rounded-3xl border -z-10 transition-colors duration-500 ${isDark ? 'border-white/[0.02]' : 'border-gray-200/15'}`} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ═══ SCROLL INDICATOR ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Scroll</span>
          <div className={`w-5 h-9 border rounded-full flex justify-center pt-2 transition-colors duration-500 ${isDark ? 'border-gray-600' : 'border-gray-400'}`}>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], height: [4, 8, 4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-0.5 bg-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
