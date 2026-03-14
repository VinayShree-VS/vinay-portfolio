'use client';

import React from 'react';
import { experienceData } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';

export function Timeline() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 max-w-5xl mx-auto">
      <SectionTitle
        title="Experience"
        badge="My Journey"
        subtitle="A timeline of my professional career and growth."
      />

      <div className="relative">
        {/* Vertical line — left on mobile, center on md+ */}
        <div className="absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent" />

        {experienceData.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative flex items-start mb-8 sm:mb-12 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Pulsing dot */}
            <div className="absolute left-[18px] md:left-1/2 -translate-x-1/2 z-10">
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500"
                />
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-[3px] border-white dark:border-gray-950 shadow-lg shadow-purple-500/40" />
              </div>
            </div>

            {/* Card */}
            <div
              className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] w-full ${
                i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
              }`}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/40 dark:border-white/[0.06] card-shine border-gradient hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.12)] transition-shadow duration-500"
              >
                <span className="inline-block text-[10px] sm:text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="purple">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
