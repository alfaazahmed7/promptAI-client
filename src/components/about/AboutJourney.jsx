'use client';

import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';

const AboutJourney = ({ milestones = [] }) => {
    if (milestones.length === 0) return null;

    return (
        <section className="bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="about-badge mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                        <FiClock className="text-sm" />
                        Our Journey
                    </div>
                    <h2 className="about-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        From prompt library to{' '}
                        <span className="about-highlight bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            multi-model platform
                        </span>
                    </h2>
                    <p className="about-description mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                        Each phase of PromptAI was shaped by a single question: what would make this
                        genuinely useful for a working team?
                    </p>
                </div>

                <ol className="about-journey-line relative space-y-6 border-l border-slate-800/70 pl-6 sm:pl-8">
                    {milestones.map((milestone, index) => (
                        <motion.li
                            key={milestone.id ?? milestone.title}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="about-milestone group relative rounded-2xl border border-slate-800/70 bg-[#0d131f] p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-[#0B1220] bg-indigo-500 transition-colors duration-300 group-hover:bg-amber-400 sm:-left-[39px]" />
                            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                                {milestone.period}
                            </p>
                            <h3 className="about-milestone-title mt-2 text-base font-bold tracking-tight text-white sm:text-lg">
                                {milestone.title}
                            </h3>
                            <p className="about-milestone-text mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                                {milestone.description}
                            </p>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default AboutJourney;
