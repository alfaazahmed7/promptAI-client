'use client';

import { motion } from 'framer-motion';
import { FiHeadphones, FiMail, FiPenTool, FiShoppingBag, FiClock } from 'react-icons/fi';

const ICONS = {
    sales: <FiShoppingBag />,
    support: <FiHeadphones />,
    creators: <FiPenTool />,
    press: <FiMail />,
};

const ACCENT_STYLES = {
    indigo: {
        icon: 'text-indigo-400',
        hover: 'group-hover:border-indigo-500/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]',
        title: 'group-hover:text-indigo-300',
    },
    amber: {
        icon: 'text-amber-400',
        hover: 'group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]',
        title: 'group-hover:text-amber-300',
    },
    emerald: {
        icon: 'text-emerald-400',
        hover: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]',
        title: 'group-hover:text-emerald-300',
    },
    blue: {
        icon: 'text-blue-400',
        hover: 'group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
        title: 'group-hover:text-blue-300',
    },
};

const ContactChannels = ({ channels = [] }) => {
    if (channels.length === 0) return null;

    return (
        <section className="bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="contact-badge mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        <FiMail className="animate-pulse text-sm" />
                        Direct Channels
                    </div>
                    <h2 className="contact-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Reach the right desk{' '}
                        <span className="contact-highlight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            on the first try
                        </span>
                    </h2>
                    <p className="contact-description mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                        Each address routes straight to the specialists who own that area, so your
                        question never bounces between teams.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                    {channels.map((channel, index) => {
                        const accent = ACCENT_STYLES[channel.accent] ?? ACCENT_STYLES.indigo;

                        return (
                            <motion.div
                                key={channel.id ?? channel.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
                                className={`contact-channel-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d131f] p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${accent.hover}`}
                            >
                                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-300 group-hover:opacity-20" />

                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-xl shadow-inner transition-transform duration-300 group-hover:scale-110">
                                    <span className={accent.icon}>
                                        {ICONS[channel.icon] ?? ICONS.support}
                                    </span>
                                </div>

                                <h3
                                    className={`contact-channel-title text-lg font-bold tracking-tight text-white transition-colors duration-200 ${accent.title}`}
                                >
                                    {channel.title}
                                </h3>
                                <p className="contact-channel-text mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                                    {channel.description}
                                </p>

                                <div className="mt-6 flex flex-col gap-3 border-t border-slate-800/60 pt-5">
                                    <a
                                        href={`mailto:${channel.email}`}
                                        className="contact-channel-email inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors duration-200 hover:text-white sm:text-sm"
                                    >
                                        <FiMail className="h-4 w-4 shrink-0" />
                                        {channel.email}
                                    </a>
                                    <span className="contact-channel-response inline-flex items-center gap-2 text-[11px] text-slate-500 sm:text-xs">
                                        <FiClock className="h-3.5 w-3.5 shrink-0" />
                                        {channel.response}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactChannels;
