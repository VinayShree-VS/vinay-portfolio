'use client';

import React from 'react';
import { siteConfig } from '@/lib/data';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiHeart } from 'react-icons/fi';

const footerLinks = [
	{ icon: <FiGithub className="w-5 h-5" />, href: siteConfig.socials.github, label: 'GitHub' },
	{ icon: <FiLinkedin className="w-5 h-5" />, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
	{ icon: <FiTwitter className="w-5 h-5" />, href: siteConfig.socials.twitter, label: 'Twitter' },
	{ icon: <FiDribbble className="w-5 h-5" />, href: siteConfig.socials.dribbble, label: 'Dribbble' },
];

export function Footer() {
	return (
		<footer className="relative z-10 py-8 sm:py-12 border-t border-gray-200/30 dark:border-white/[0.06]">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-5 sm:gap-6">
				{/* Social Links */}
				<div className="flex gap-2 sm:gap-3">
					{footerLinks.map((social) => (
						<motion.a
							key={social.label}
							whileHover={{ scale: 1.15, y: -3 }}
							whileTap={{ scale: 0.9 }}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
							className="p-2.5 rounded-xl text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
						>
							{social.icon}
						</motion.a>
					))}
				</div>

				{/* Divider */}
				<div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

				{/* Copyright */}
				<p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1.5 text-center">
					&copy; {new Date().getFullYear()} {siteConfig.name}. Built with{' '}
					<motion.span
						animate={{ scale: [1, 1.2, 1] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					>
						<FiHeart className="w-3.5 h-3.5 text-red-500 inline" />
					</motion.span>{' '}
					using Next.js
				</p>
			</div>
		</footer>
	);
}
