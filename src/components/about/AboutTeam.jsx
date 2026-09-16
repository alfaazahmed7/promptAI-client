'use client';

import { motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';

const AboutTeam = ({ team = [] }) => {
    if (team.length === 0) return null;

    return (
        <section className="bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="about-badge mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-400">
                        <FiUsers className="text-sm" />
                        The People Behind PromptAI
                    </div>
                    <h2 className="about-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        A small team obsessed with{' '}
                        <span className="about-highlight bg-gradient-to-r from-purple-400 via-pink-400 to-[#dc2f02] bg-clip-text text-transparent">
                            prompt quality
                        </span>
                    </h2>
                    <p className="about-description mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                        Product, engineering, curation and trust operations working as one group so
                        what ships is accurate, safe and useful.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.id ?? member.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="about-team-card group relative flex flex-col rounded-2xl border border-slate-800/60 bg-[#131c2e] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-base font-bold text-indigo-300">
                                {member.name?.charAt(0)?.toUpperCase() ?? 'P'}
                            </div>

                            <h3 className="about-team-name mt-4 text-base font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-indigo-300">
                                {member.name}
                            </h3>
                            <p className="about-team-role mt-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
                                {member.role}
                            </p>
                            <p className="about-team-bio mt-3 flex-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                                {member.bio}
                            </p>

                            <div className="mt-5 border-t border-slate-800/60 pt-4">
                                <span className="about-team-focus inline-block rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    {member.focus}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
