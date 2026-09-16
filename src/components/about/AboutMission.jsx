'use client';

import { motion } from 'framer-motion';
import { FiTarget } from 'react-icons/fi';

const AboutMission = ({ pillars = [] }) => {
    if (pillars.length === 0) return null;

    return (
        <section className="bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                    {/* Narrative column */}
                    <div>
                        <div className="about-badge mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                            <FiTarget className="text-sm" />
                            Why we exist
                        </div>
                        <h2 className="about-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Prompt engineering should be{' '}
                            <span className="about-highlight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                repeatable
                            </span>
                        </h2>
                        <div className="about-description mt-5 space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                            <p>
                                Most teams lose weeks rewriting instructions, testing outputs and
                                guessing which phrasing a model actually responds to. That trial and
                                error burns credits, time and confidence in generative AI.
                            </p>
                            <p>
                                PromptAI was built to close that gap. We treat prompts as engineered
                                assets: structured, documented and benchmarked against the models
                                they target, then shipped through a marketplace that rewards the
                                people who craft them.
                            </p>
                            <p>
                                The result is a workspace where a marketing lead, a developer and an
                                enterprise AI group can all start from a proven baseline instead of
                                a blank chat box.
                            </p>
                        </div>
                    </div>

                    {/* Pillars column */}
                    <div className="space-y-5">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.id ?? pillar.label}
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="about-pillar group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d131f] p-6 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-white/5 to-transparent" />
                                <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                                    {pillar.label}
                                </p>
                                <p className="about-pillar-text mt-3 text-sm leading-relaxed text-slate-300">
                                    {pillar.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;
