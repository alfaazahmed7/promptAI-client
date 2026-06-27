'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiCopy, FiArrowRight, FiUser } from 'react-icons/fi';
import { AiFillCrown } from 'react-icons/ai';
import { BsLightningChargeFill } from 'react-icons/bs';

const PromptCard = ({ prompt }) => {
    const isPremium = prompt.tier === 'premium' || prompt.featured; // Handling featured highlight flags

    return (
        <div className={`group relative rounded-2xl bg-[#0d131f] flex flex-col justify-between overflow-hidden transition-all duration-300 border shadow-lg hover:-translate-y-1.5 ${
            isPremium
                ? 'border-amber-500/20 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                : 'border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]'
        }`}>
            
            {/* Top Image Banner Section */}
            <div className="relative w-full aspect-video overflow-hidden bg-slate-900 border-b border-slate-800/60">
                <Image
                    src={prompt.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"}
                    alt={prompt.title || "Prompt Thumbnail"}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    priority={isPremium}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for Badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d131f]/40 to-transparent pointer-events-none" />

                {/* Floating Meta Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-md bg-slate-950/80 text-purple-400 backdrop-blur-md border border-purple-500/20">
                        {prompt.category}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md bg-slate-950/80 text-emerald-400 backdrop-blur-md border border-emerald-500/20">
                        {prompt.aiTool}
                    </span>
                </div>

                {/* Dynamic Feature Tag Badge Overlay */}
                {isPremium && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black tracking-wider shadow-md z-10">
                        <BsLightningChargeFill className="text-[11px] animate-bounce" />
                        FEATURED
                    </span>
                )}
            </div>

            {/* Card Content Details */}
            <div className="p-5 flex flex-col flex-1 justify-between text-white">
                <div>
                    {/* Card Title */}
                    <h3 className={`text-base font-bold tracking-tight transition-colors duration-300 line-clamp-1 ${
                        isPremium ? 'group-hover:text-amber-400' : 'group-hover:text-indigo-400'
                    }`}>
                        {prompt.title}
                    </h3>

                    {/* Description Details */}
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 min-h-[40px] leading-relaxed">
                        {prompt.fullDescription || "No description provided for this dynamic prompt design strategy."}
                    </p>
                </div>

                {/* Bottom Row / Utility Metrics */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    {/* Creator Flag info */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <div className="p-1 rounded-full bg-slate-800 text-slate-400">
                            <FiUser className="text-sm shrink-0" />
                        </div>
                        <span className="truncate max-w-[100px]">{prompt.creatorName}</span>
                    </div>

                    {/* Action Panel Metrics & Links */}
                    <div className="flex items-center gap-2">
                        {/* Copy Badge Indicator */}
                        <div className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md border border-slate-800 bg-slate-900 text-slate-300 shadow-inner">
                            <FiCopy className="text-xs text-indigo-400" />
                            <span>{prompt.copyCount || 0}</span>
                        </div>

                        {/* Details Action CTA */}
                        <Link
                            href={`/all-prompts/${prompt._id?.$oid || prompt._id || 'details'}`}
                            className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg font-bold shadow-md transition-all duration-300 ${
                                isPremium
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950'
                                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                            }`}
                        >
                            <span>View</span>
                            <FiArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PromptCard;