'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';
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

const ContactHero = ({ badges = [] }) => (
    <section className="contact-hero relative overflow-hidden bg-[#011627] px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        {/* Ambient glow layers - hidden on small screens to stay lightweight */}
        <div className="contact-glow pointer-events-none absolute left-1/4 top-1/4 hidden h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px] md:block" />
        <div className="contact-glow pointer-events-none absolute bottom-1/4 right-1/4 hidden h-[420px] w-[420px] translate-x-1/2 rounded-full bg-[#dc2f02]/10 blur-[140px] md:block" />

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
        >
            <motion.div
                variants={itemVariants}
                className="contact-badge inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-400 backdrop-blur-md sm:text-sm"
            >
                <HiOutlineSparkles className="animate-pulse text-sm" />
                Contact PromptAI
            </motion.div>

            <motion.h1
                variants={itemVariants}
                className="contact-heading mt-7 max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
                Talk to the people who build{' '}
                <span className="contact-highlight bg-gradient-to-r from-indigo-400 via-purple-400 to-[#dc2f02] bg-clip-text text-transparent">
                    the platform with you
                </span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="contact-description mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
            >
                Whether you are troubleshooting an account, evaluating PromptAI for a team or
                asking about a creator payout, a real person on the team picks up your message.
                No ticket black holes, no scripted replies.
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
            >
                <a
                    href="#contact-form"
                    className="contact-primary-cta group inline-flex w-full items-center justify-center gap-2 rounded-xl border-none bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-200 hover:scale-[1.02] hover:from-indigo-500 hover:to-purple-500 sm:w-auto"
                >
                    Send us a message
                    <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <Link
                    href="/about"
                    className="contact-secondary-cta inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/40 px-8 py-3 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white sm:w-auto"
                >
                    <FiMessageCircle className="h-4 w-4" />
                    Read about the team
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
                            className="contact-trust-badge rounded-full border border-slate-700/50 bg-slate-900/40 px-3 py-1.5 text-[11px] font-medium text-slate-400 sm:text-xs"
                        >
                            {badge}
                        </li>
                    ))}
                </motion.ul>
            )}
        </motion.div>

        {/* Seam blender into the next section */}
        <div className="contact-seam pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent" />
    </section>
);

export default ContactHero;
