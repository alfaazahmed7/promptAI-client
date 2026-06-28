'use client';
import React from 'react';
import { FiTrendingUp, FiActivity, FiDownload, FiCpu } from 'react-icons/fi';
import { IoAnalyticsOutline } from 'react-icons/io5';

const liveActivityData = [
    { id: 1, user: "dev_alpha", action: "copied Midjourney v6 Cinematic prompt", time: "2m ago", system: "MJ-V6" },
    { id: 2, user: "alex_code", action: "purchased Full-Stack Boilerplate generation bundle", time: "5m ago", system: "GPT-4o" },
    { id: 3, user: "pixel_artist", action: "optimized Stable Diffusion 3 vector model string", time: "12m ago", system: "SD-3" },
    { id: 4, user: "hustle_ai", action: "upgraded account matrix to Premium tier", time: "18m ago", system: "SYSTEM" },
    { id: 5, user: "quantum_coder", action: "deployed customized Next.js API handler prompt", time: "24m ago", system: "GPT-4o" },
    { id: 6, user: "design_guru", action: "copied Cyberpunk Character Portrait macro parameters", time: "31m ago", system: "MJ-V6" },
];

const LiveStatsTicker = () => {
    return (
        <section className="bg-[#0B1220] text-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Standardized Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <IoAnalyticsOutline className="text-sm animate-pulse" />
                        Platform Performance
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Ecosystem Metrics & <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">Live Operations</span>
                    </h2>
                    <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
                        Track production volume in real-time. Our decentralized platform monitors optimization streams and active engineer clusters across global clusters.
                    </p>
                </div>

                {/* Platform Metric Grid System */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                    {/* Stat Item 1 */}
                    <div className="bg-[#131c2e] border border-slate-800/60 rounded-2xl p-6 relative overflow-hidden group shadow-lg">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl pointer-events-none transition-all duration-300 group-hover:bg-indigo-500/10" />
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
                            <FiTrendingUp className="text-lg" />
                        </div>
                        <p className="text-3xl font-extrabold text-white tracking-tight">1.2M+</p>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1.5">Tokens Optimized</p>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="bg-[#131c2e] border border-slate-800/60 rounded-2xl p-6 relative overflow-hidden group shadow-lg">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none transition-all duration-300 group-hover:bg-blue-500/10" />
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
                            <FiDownload className="text-lg" />
                        </div>
                        <p className="text-3xl font-extrabold text-white tracking-tight">342K+</p>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1.5">Marketplace Downloads</p>
                    </div>

                    {/* Stat Item 3 */}
                    <div className="bg-[#131c2e] border border-slate-800/60 rounded-2xl p-6 relative overflow-hidden group shadow-lg">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none transition-all duration-300 group-hover:bg-purple-500/10" />
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
                            <FiCpu className="text-lg" />
                        </div>
                        <p className="text-3xl font-extrabold text-white tracking-tight">99.98%</p>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1.5">Model Execution Uptime</p>
                    </div>

                    {/* Stat Item 4 */}
                    <div className="bg-[#131c2e] border border-slate-800/60 rounded-2xl p-6 relative overflow-hidden group shadow-lg">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none transition-all duration-300 group-hover:bg-emerald-500/10" />
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                        </div>
                        <p className="text-3xl font-extrabold text-white tracking-tight">4,821</p>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1.5">Engineers Online Now</p>
                    </div>

                </div>

                {/* Live Activity Marquee Container */}
                <div className="bg-slate-950/40 rounded-2xl border border-slate-900/60 p-4 flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden shadow-inner">

                    {/* Fixed Static Label Frame */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131c2e] border border-slate-800 text-slate-200 text-xs font-bold whitespace-nowrap tracking-wide z-10 shadow-md">
                        <FiActivity className="text-indigo-400 animate-pulse text-sm" />
                        <span>Live Activity Feed</span>
                    </div>

                    {/* Infinite Horizontal Sliding Window Wrapper */}
                    <div className="w-full relative flex items-center overflow-hidden">
                        <style jsx>{`
                            @keyframes marquee {
                                0% { transform: translateX(0%); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-marquee-stream {
                                display: flex;
                                width: max-content;
                                animation: marquee 35s linear infinite;
                            }
                            .animate-marquee-stream:hover {
                                animation-play-state: paused;
                            }
                        `}</style>

                        <div className="animate-marquee-stream gap-8 pr-8">
                            {liveActivityData.concat(liveActivityData).map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-xs font-medium text-slate-400 whitespace-nowrap">
                                    <span className="text-white font-bold">@{item.user}</span>
                                    <span className="text-slate-500">{item.action}</span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-indigo-400">{item.system}</span>
                                    <span className="text-slate-600 font-mono">{item.time}</span>
                                    <span className="text-slate-800 font-light ml-2">|</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default LiveStatsTicker;