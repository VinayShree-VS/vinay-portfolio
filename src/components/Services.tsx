'use client';

import React from 'react';
import { servicesData } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { FiCode, FiFeather, FiServer, FiSmartphone, FiCloud, FiZap } from 'react-icons/fi';

const iconMap: Record<string, React.ReactNode> = {
  code: <FiCode className="w-7 h-7 sm:w-8 sm:h-8" />,
  palette: <FiFeather className="w-7 h-7 sm:w-8 sm:h-8" />,
  server: <FiServer className="w-7 h-7 sm:w-8 sm:h-8" />,
  smartphone: <FiSmartphone className="w-7 h-7 sm:w-8 sm:h-8" />,
  cloud: <FiCloud className="w-7 h-7 sm:w-8 sm:h-8" />,
  lightbulb: <FiZap className="w-7 h-7 sm:w-8 sm:h-8" />,
};

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto">
      <SectionTitle
        title="Services"
        badge="What I Offer"
        subtitle="End-to-end solutions from concept to deployment."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="h-full rounded-2xl p-6 sm:p-8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/40 dark:border-white/[0.06] card-shine border-gradient hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.15)] transition-all duration-500 text-center">
              {/* Icon container with animated bg */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-500" />
                <motion.div
                  className="relative text-purple-600 dark:text-purple-400"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {iconMap[service.icon]}
                </motion.div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
