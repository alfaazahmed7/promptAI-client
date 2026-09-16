'use client';

import { motion } from 'framer-motion';
import { FiClock, FiGlobe, FiMapPin } from 'react-icons/fi';

const ContactDetails = ({ hours = [], locations = [] }) => {
    if (hours.length === 0 && locations.length === 0) return null;

    return (
        <section className="contact-details-section bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                    {/* Narrative column */}
                    <div>
                        <div className="contact-badge mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                            <FiGlobe className="text-sm" />
                            Support Coverage
                        </div>
                        <h2 className="contact-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Real humans,{' '}
                            <span className="contact-highlight bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                                across four time zones
                            </span>
                        </h2>
                        <div className="contact-description mt-5 space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                            <p>
                                Support is staffed by the same engineers who maintain the platform,
                                not an outsourced queue. That means the person answering already
                                knows how checkout, delivery and payouts behave under load.
                            </p>
                            <p>
                                Outside the published hours the inbox is still monitored for
                                security and payment incidents, so anything critical is triaged
                                immediately rather than waiting for the next working day.
                            </p>
                        </div>
                    </div>

                    {/* Hours + locations column */}
                    <div className="space-y-5">
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.4 }}
                            className="contact-support-card group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d131f] p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-white/5 to-transparent" />
                            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                                <FiClock className="text-sm" />
                                Support Hours
                            </p>
                            <dl className="mt-4 space-y-3">
                                {hours.map((entry) => (
                                    <div
                                        key={entry.id ?? entry.label}
                                        className="flex items-center justify-between gap-4 border-b border-slate-800/60 pb-3 last:border-b-0 last:pb-0"
                                    >
                                        <dt className="contact-support-label text-xs text-slate-400 sm:text-sm">
                                            {entry.label}
                                        </dt>
                                        <dd className="contact-support-value text-xs font-semibold text-slate-200 sm:text-sm">
                                            {entry.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </motion.div>

                        {locations.map((location, index) => (
                            <motion.div
                                key={location.id ?? location.label}
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                                className="contact-location-card group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d131f] p-6 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-gradient-to-br from-white/5 to-transparent" />
                                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                                    <FiMapPin className="text-sm" />
                                    {location.label}
                                </p>
                                <address className="contact-location-text mt-3 space-y-1 text-sm not-italic leading-relaxed text-slate-300">
                                    {location.lines.map((line) => (
                                        <span key={line} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </address>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
