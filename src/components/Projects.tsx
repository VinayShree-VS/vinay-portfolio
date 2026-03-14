'use client';

import React from 'react';
import { projectsData } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto">
      <SectionTitle
        title="Projects"
        badge="My Work"
        subtitle="A selection of projects I've built — from full-stack apps to open-source tools."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/40 dark:border-white/[0.06] card-shine border-gradient hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.2)] transition-all duration-500">
              {/* Image / Gradient placeholder */}
              <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-cyan-500/30 group-hover:from-purple-600/40 group-hover:via-blue-500/30 group-hover:to-cyan-400/40 transition-all duration-700" />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                {/* Code icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300/30 dark:text-purple-300/15 group-hover:text-purple-300/50 transition-colors duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </motion.svg>
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-4">
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                      aria-label={`GitHub - ${project.title}`}
                    >
                      <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                      aria-label={`Live demo - ${project.title}`}
                    >
                      <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
