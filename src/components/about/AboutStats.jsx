'use client';

import { motion } from 'framer-motion';
import { FiActivity, FiAward, FiCpu, FiTrendingUp } from 'react-icons/fi';

const ICONS = {
    indigo: <FiTrendingUp className="text-lg" />,
    amber: <FiAward className="text-lg" />,
    blue: <FiCpu className="text-lg" />,
    emerald: <FiActivity className="text-lg" />,
};

const AboutStats = ({ stats = [] }) => {
    if (stats.length === 0) return null;

    return (
        <section className="bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="about-badge mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        <FiActivity className="animate-pulse text-sm" />
                        Platform Snapshot
                    </div>
                    <h2 className="about-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Numbers behind the{' '}
                        <span className="about-highlight bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                            PromptAI engine
                        </span>
                    </h2>
                    <p className="about-description mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                        Aggregated production signals from our marketplace, creator payouts and
                        delivery infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id ?? stat.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="about-stat-card group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-[#131c2e] p-6 shadow-lg"
                        >
                            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-500/5 blur-xl transition-all duration-300 group-hover:bg-indigo-500/10" />
                            <div
                                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl border ${
                                    stat.accent === 'amber'
                                        ? 'border-amber-500/20 bg-amber-500/10 text-amber-400'
                                        : stat.accent === 'blue'
                                            ? 'border-blue-500/20 bg-blue-500/10 text-blue-400'
                                            : stat.accent === 'emerald'
                                                ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                                                : 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400'
                                }`}
                            >
                                {ICONS[stat.accent] ?? ICONS.indigo}
                            </div>
                            <p className="about-stat-value text-3xl font-extrabold tracking-tight text-white">
                                {stat.value}
                            </p>
                            <p className="about-stat-label mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                                {stat.label}
                            </p>
                            <p className="about-stat-detail mt-3 border-t border-slate-800/60 pt-3 text-[11px] leading-relaxed text-slate-500">
                                {stat.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
