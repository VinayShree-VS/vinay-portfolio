'use client';

import { useCountUp } from '@/hooks/use-countup';
import { aboutData } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';

import React, { useState } from 'react';

function CountUp({ value }: { value: number }) {
  const [start, setStart] = useState(false);
  const count = useCountUp(value, 1200, start);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setStart(true)}
    >
      <span className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{count}+</span>
    </motion.div>
  );
}
export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto">
      <SectionTitle
        title="About Me"
        badge="Who I Am"
        subtitle="A passionate developer who loves turning ideas into elegant, functional code."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {aboutData.description.map((desc, i) => (
            <p
              key={i}
              className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400"
            >
              {desc}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'Figma'].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-medium cursor-default hover:bg-purple-500/20 hover:border-purple-500/30 transition-colors"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {aboutData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative rounded-2xl p-5 sm:p-6 text-center bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/40 dark:border-white/[0.06] card-shine border-gradient hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)] transition-shadow duration-500 cursor-default"
            >
              <CountUp value={stat.value} />
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
