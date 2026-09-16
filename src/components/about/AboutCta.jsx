'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const AboutCta = () => (
    <section className="about-cta-section bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="about-cta-card relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-500/25 bg-gradient-to-br from-indigo-600/15 via-slate-900/80 to-[#dc2f02]/10 p-8 text-center shadow-2xl sm:p-12"
        >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#dc2f02]/10 blur-3xl" />

            <div className="relative">
                <h2 className="about-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Start building with prompts that already work
                </h2>
                <p className="about-description mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                    Join thousands of builders and creators using PromptAI to ship faster, cut wasted
                    credits and turn prompt engineering into a repeatable advantage.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/all-prompts"
                        className="about-primary-cta group inline-flex w-full items-center justify-center gap-2 rounded-xl border-none bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors duration-200 hover:bg-indigo-500 sm:w-auto"
                    >
                        Browse prompts
                        <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/contact"
                        className="about-secondary-cta inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/40 px-8 py-3 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white sm:w-auto"
                    >
                        <FiMail className="h-4 w-4" />
                        Talk to the team
                    </Link>
                </div>
            </div>
        </motion.div>
    </section>
);

export default AboutCta;