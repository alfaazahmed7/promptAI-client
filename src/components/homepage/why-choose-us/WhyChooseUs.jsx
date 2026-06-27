'use client';
import React from 'react';
import { FiCpu, FiShield, FiZap, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <FiZap className="text-xl text-amber-400" />,
            title: "Production-Ready Prompts",
            description: "No more endless tweaking. Get structured, deeply tested blueprints engineered to fetch peak responses immediately from tools like Midjourney and GPT.",
            glowColor: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
        },
        {
            icon: <FiCpu className="text-xl text-blue-400" />,
            title: "Multi-Model Native",
            description: "From stunning hyper-realistic AI artwork pipelines to technical engineering codebases, unlock optimal shortcuts fine-tuned for every leading AI engine.",
            glowColor: "group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        },
        {
            icon: <FiShield className="text-xl text-purple-400" />,
            title: "Verified Tokens & Tiers",
            description: "Browse with confidence. Every prompt variant is verified by internal engineers and community copy-counts to eliminate hallucinations and save API credits.",
            glowColor: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        }
    ];

    return (
        <section className="bg-[#0B1220] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <HiOutlineSparkles className="text-sm animate-pulse" />
                        The promptAI Advantage
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Engineered for Next-Gen <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">AI Workflows</span>
                    </h2>
                    <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
                        Stop guessing expressions and variables. Tap into a curated engine built specifically to maximize generative efficiency while cutting out wasted testing cycles.
                    </p>
                </div>

                {/* Benefits Core Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl bg-[#0d131f] p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 border border-slate-800/80 hover:-translate-y-1.5 ${benefit.glowColor}`}
                        >
                            {/* Decorative Background Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-20" />

                            <div>
                                {/* Icon Header Container */}
                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 shadow-inner mb-6 transition-transform duration-300 group-hover:scale-110">
                                    {benefit.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-200">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Trust Indicator Checkmark Footer */}
                            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-semibold text-slate-500 group-hover:text-slate-400 transition-colors duration-200">
                                <FiCheckCircle className="text-indigo-500/70 text-xs" />
                                <span>COMMUNITY INTEGRATED</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;