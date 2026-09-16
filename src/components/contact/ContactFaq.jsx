'use client';

import { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const ContactFaq = ({ entries = [] }) => {
    const [openId, setOpenId] = useState(entries[0]?.id ?? null);

    if (entries.length === 0) return null;

    return (
        <section className="bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="contact-badge mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
                        <FiHelpCircle className="text-sm" />
                        Common Questions
                    </div>
                    <h2 className="contact-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Before you write to us
                    </h2>
                    <p className="contact-description mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                        Quick answers to the questions the team hears most often.
                    </p>
                </div>

                <div className="space-y-3">
                    {entries.map((entry) => {
                        const isOpen = openId === entry.id;

                        return (
                            <div
                                key={entry.id ?? entry.question}
                                className="contact-faq-item overflow-hidden rounded-2xl border border-slate-800/70 bg-[#0d131f]"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenId(isOpen ? null : entry.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`contact-faq-${entry.id}`}
                                    className="contact-faq-trigger flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 sm:px-6"
                                >
                                    <span className="contact-faq-question text-sm font-semibold text-white sm:text-base">
                                        {entry.question}
                                    </span>
                                    <FiChevronDown
                                        className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {/* Answer panel. Collapsed state is `display: none` so the
                                    panel contributes zero height and zero overflow - the same
                                    accordion fix used on the About page FAQ. */}
                                <div
                                    id={`contact-faq-${entry.id}`}
                                    className={`contact-faq-panel ${
                                        isOpen
                                            ? 'contact-faq-panel-open'
                                            : 'contact-faq-panel-closed'
                                    }`}
                                >
                                    <p className="contact-faq-answer contact-faq-body border-t border-slate-800/60 px-5 pb-5 pt-4 text-xs leading-relaxed text-slate-400 sm:px-6 sm:text-sm">
                                        {entry.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactFaq;
