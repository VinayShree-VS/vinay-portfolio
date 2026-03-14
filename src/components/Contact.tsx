'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { siteConfig } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const socialLinks = [
	{ icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
	{ icon: <FiLinkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
	{ icon: <FiTwitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
];

const inputStyles =
	'w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 text-sm sm:text-base hover:border-purple-500/30';

export function Contact() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<section id="contact" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto">
			<SectionTitle
				title="Get In Touch"
				badge="Contact"
				subtitle="Have a project in mind or just want to say hello? Drop me a message!"
			/>

			<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
				{/* Info */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="lg:col-span-2 space-y-6 sm:space-y-8"
				>
					{/* Email */}
					<motion.div
						whileHover={{ x: 4 }}
						className="flex items-start gap-4 group cursor-default"
					>
						<div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
							<FiMail className="w-5 h-5" />
						</div>
						<div className="min-w-0">
							<h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
								Email
							</h4>
							<p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm truncate">
								{siteConfig.email}
							</p>
						</div>
					</motion.div>

					{/* Location */}
					<motion.div
						whileHover={{ x: 4 }}
						className="flex items-start gap-4 group cursor-default"
					>
						<div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
							<FiMapPin className="w-5 h-5" />
						</div>
						<div className="min-w-0">
							<h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
								Location
							</h4>
							<p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
								{siteConfig.location}
							</p>
						</div>
					</motion.div>

					{/* Social */}
					<div className="pt-2 sm:pt-4">
						<h4 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
							Follow me
						</h4>
						<div className="flex gap-2 sm:gap-3">
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									whileHover={{ scale: 1.1, y: -3 }}
									whileTap={{ scale: 0.95 }}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="p-3 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-gray-200/40 dark:border-white/[0.06] text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
								>
									{social.icon}
								</motion.a>
							))}
						</div>
					</div>
				</motion.div>

				{/* Form */}
				<motion.form
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="lg:col-span-3 rounded-2xl p-5 sm:p-6 md:p-8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/40 dark:border-white/[0.06] card-shine border-gradient"
					onSubmit={(e) => {
						e.preventDefault();
						setSubmitted(true);
					}}
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							required
							className={inputStyles}
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							required
							className={inputStyles}
						/>
					</div>
					<input
						type="text"
						name="subject"
						placeholder="Subject"
						className={`${inputStyles} mb-3 sm:mb-4`}
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						required
						rows={5}
						className={`${inputStyles} mb-4 sm:mb-6 resize-none`}
					/>
					<Button type="submit" size="lg" className="w-full">
						<FiSend className="w-4 h-4" /> Send Message
					</Button>
					{submitted && (
						<motion.div
							initial={{ opacity: 0, y: 10, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							className="mt-4 p-3 sm:p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-center text-xs sm:text-sm font-medium"
						>
							✓ Thank you! Your message has been sent successfully.
						</motion.div>
					)}
				</motion.form>
			</div>
		</section>
	);
}
