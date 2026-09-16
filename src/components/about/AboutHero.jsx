'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiUsers } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: 'easeOut' },
    },
};

const AboutHero = ({ badges = [] }) => (
    <section className="about-hero relative overflow-hidden bg-[#011627] px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        {/* Ambient glow layers - hidden on small screens to stay lightweight */}
        <div className="about-glow pointer-events-none absolute left-1/4 top-1/4 hidden h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px] md:block" />
        <div className="about-glow pointer-events-none absolute bottom-1/4 right-1/4 hidden h-[420px] w-[420px] translate-x-1/2 rounded-full bg-[#dc2f02]/10 blur-[140px] md:block" />

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
        >
            <motion.div
                variants={itemVariants}
                className="about-badge inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-400 backdrop-blur-md sm:text-sm"
            >
                <HiOutlineSparkles className="animate-pulse text-sm" />
                About PromptAI
            </motion.div>

            <motion.h1
                variants={itemVariants}
                className="about-heading mt-7 max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
                We build the trusted layer for{' '}
                <span className="about-highlight bg-gradient-to-r from-indigo-400 via-purple-400 to-[#dc2f02] bg-clip-text text-transparent">
                    production-ready AI prompts
                </span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="about-description mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
            >
                PromptAI exists to remove the guesswork from generative AI. We curate, benchmark and
                distribute prompt engineering that already performs, while giving creators a fair,
                transparent place to publish and earn from their craft.
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
            >
                <Link
                    href="/all-prompts"
                    className="about-primary-cta group inline-flex w-full items-center justify-center gap-2 rounded-xl border-none bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-200 hover:scale-[1.02] hover:from-indigo-500 hover:to-purple-500 sm:w-auto"
                >
                    Explore the marketplace
                    <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                    href="/pricing"
                    className="about-secondary-cta inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/40 px-8 py-3 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white sm:w-auto"
                >
                    <FiUsers className="h-4 w-4" />
                    View membership
                </Link>
            </motion.div>

            {/* Trust badge strip */}
            {badges.length > 0 && (
                <motion.ul
                    variants={itemVariants}
                    className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                >
                    {badges.map((badge) => (
                        <li
                            key={badge}
                            className="about-trust-badge rounded-full border border-slate-700/50 bg-slate-900/40 px-3 py-1.5 text-[11px] font-medium text-slate-400 sm:text-xs"
                        >
                            {badge}
                        </li>
                    ))}
                </motion.ul>
            )}
        </motion.div>

        {/* Seam blender into the next section */}
        <div className="about-seam pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent" />
    </section>
);

export default AboutHero;
