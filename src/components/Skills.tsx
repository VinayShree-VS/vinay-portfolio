'use client';

import React from 'react';
import { skillsData } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto">
      <SectionTitle
        title="Skills & Expertise"
        badge="What I Do"
        subtitle="Technologies and tools I use to bring ideas to life."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {skillsData.map((category, catIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-5 sm:p-6 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/40 dark:border-white/[0.06] card-shine border-gradient hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.12)] transition-shadow duration-500"
          >
            <h3 className="text-base sm:text-lg font-bold mb-5 sm:mb-6 text-purple-600 dark:text-purple-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50" />
              {category.category}
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <li key={skill.name} className="group/skill">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 sm:h-2.5 bg-gray-100 dark:bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: catIdx * 0.1 + skillIdx * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full relative"
                    >
                      {/* Glowing tip */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-purple-500/50 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
