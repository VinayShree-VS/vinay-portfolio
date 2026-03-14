'use client';

import React from 'react';
import { testimonialsData } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto">
      <SectionTitle
        title="Testimonials"
        badge="What Clients Say"
        subtitle="Feedback from people I've had the pleasure of working with."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {testimonialsData.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="h-full rounded-2xl p-6 sm:p-8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/40 dark:border-white/[0.06] card-shine border-gradient hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.12)] transition-all duration-500 flex flex-col">
              {/* Quote icon */}
              <div className="text-purple-500/20 dark:text-purple-400/10 mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, duration: 0.3 }}
                  >
                    <FiStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-gray-200/50 dark:border-white/[0.06]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0 shadow-lg shadow-purple-500/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
