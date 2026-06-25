import React from 'react';
import Link from 'next/link';
import { getBookmarkByEmail } from '@/lib/api/bookmark';
import { getReviewsByEmail } from '@/lib/api/review';
import { getPromptsByEmail } from '@/lib/api/prompts';
import { getUserSession } from '@/lib/core/session';
import { 
    FiGrid, 
    FiBookmark, 
    FiMessageSquare, 
    FiTerminal, 
    FiZap, 
    FiArrowRight, 
    FiActivity, 
    FiClock 
} from 'react-icons/fi';

const DashboardOverviewPage = async () => {
    // 1. Concurrent server calls using all data functions built across your project
    const user = await getUserSession();
    
    const [bookmarks, reviews, prompts] = await Promise.all([
        getBookmarkByEmail(user?.email).then(res => res || []).catch(() => []),
        getReviewsByEmail(user?.email).then(res => res || []).catch(() => []),
        getPromptsByEmail(user?.email).then(res => res || []).catch(() => [])
    ]);

    // Account data fallback defaults
    const accountPlan = user?.plan || "free";
    const isPremium = accountPlan.toLowerCase() === 'premium';

    // 2. Metrics summary configuration
    const stats = [
        {
            title: "Total Contributions",
            value: prompts.length,
            description: "Prompts you published",
            icon: FiTerminal,
            color: "text-sky-400",
            bg: "bg-sky-500/10",
        },
        {
            title: "Bookmarked Items",
            value: bookmarks.length,
            description: "Saved templates in vault",
            icon: FiBookmark,
            color: "text-violet-400",
            bg: "bg-violet-500/10",
        },
        {
            title: "Reviews Written",
            value: reviews.length,
            description: "Community feedback logs",
            icon: FiMessageSquare,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
        }
    ];

    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-[#0b0f19] text-slate-100 p-4 sm:p-6 lg:p-8">
            
            {/* Top Welcome Title Banner Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-slate-800/50">
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
                        Welcome Back, {user?.name || "Developer"}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        Here is a performance summary overview of your account workspace.
                    </p>
                </div>
                
                {/* Visual Account Badge */}
                <div className="bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Status: <strong className={`uppercase ${isPremium ? 'text-amber-400' : 'text-slate-400'}`}>{accountPlan}</strong></span>
                </div>
            </div>

            {/* Grid 1: Metric Overview Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="bg-slate-900/20 border border-slate-800/60 rounded-xl p-5 flex items-center justify-between gap-4">
                            <div>
                                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">{stat.title}</span>
                                <span className="text-2xl font-bold text-white mt-1 block tracking-tight">{stat.value}</span>
                                <span className="text-xs text-slate-400 mt-1 block">{stat.description}</span>
                            </div>
                            <div className={`p-3.5 ${stat.bg} ${stat.color} rounded-xl border border-slate-800/20 shrink-0`}>
                                <Icon size={20} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Grid 2: Subscriptions and Dynamic Updates Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left/Main Column Side: Quick Overview Workflows */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    
                    {/* Premium Context Ad-Banner if User is in free tier */}
                    {!isPremium && (
                        <div className="relative overflow-hidden bg-gradient-to-r from-violet-950/30 to-indigo-950/20 border border-violet-500/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex gap-3 items-start">
                                <div className="p-2 bg-violet-500/10 text-violet-400 rounded-lg shrink-0 mt-0.5">
                                    <FiZap size={16} className="text-amber-400 fill-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-white">Unlock Developer Engineering Access</h4>
                                    <p className="text-xs text-slate-400 mt-1 max-w-md">
                                        Upgrade to open specialized generation systems, production boilerplate blueprints, and higher limits.
                                    </p>
                                </div>
                            </div>
                            <Link 
                                href="/dashboard/profile"
                                className="px-3.5 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-700/50 transition-colors shrink-0 flex items-center gap-1 group"
                            >
                                <span>View Plans</span>
                                <FiArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    )}

                    {/* Quick Core Portal Navigation Box */}
                    <div className="bg-slate-900/20 border border-slate-800/60 rounded-xl p-5">
                        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <FiActivity className="text-violet-400" /> Space Navigation
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <Link href="/dashboard/user/saved-prompts" className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-violet-500/30 transition-colors group">
                                <span className="text-xs font-medium text-slate-400 group-hover:text-violet-400 transition-colors block">Saved Vault</span>
                                <span className="text-xs text-slate-500 mt-1 block">Review your bookmarks.</span>
                            </Link>
                            
                            <Link href="/dashboard/user/my-reviews" className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-violet-500/30 transition-colors group">
                                <span className="text-xs font-medium text-slate-400 group-hover:text-violet-400 transition-colors block">Reviews History</span>
                                <span className="text-xs text-slate-500 mt-1 block">Inspect left feedbacks.</span>
                            </Link>

                            <Link href="/dashboard/user/profile" className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:border-violet-500/30 transition-colors group">
                                <span className="text-xs font-medium text-slate-400 group-hover:text-violet-400 transition-colors block">Account Settings</span>
                                <span className="text-xs text-slate-500 mt-1 block">Manage identity configs.</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column Side: Informative Activity Feed / Overview Summary */}
                <div className="bg-slate-900/20 border border-slate-800/60 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <FiClock className="text-violet-400" /> Workspace Log
                        </h3>
                        
                        <div className="flex flex-col gap-3">
                            {/* Static/Informative tracker states matching what's available inside your data */}
                            <div className="flex gap-3 items-start p-2.5 rounded-lg bg-slate-900/30 border border-slate-800/30">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                                <div>
                                    <p className="text-xs text-slate-300 font-medium">Data Sync Verified</p>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Linked session securely to system APIs.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start p-2.5 rounded-lg bg-slate-900/30 border border-slate-800/30">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                                <div>
                                    <p className="text-xs text-slate-300 font-medium">Collection Catalog Loaded</p>
                                    <p className="text-[11px] text-slate-500 mt-0.5">{bookmarks.length} bookmarked items mapped down instantly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-[11px] text-slate-500 text-center border-t border-slate-800/40 pt-4 mt-6">
                        System context current as of 2026
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardOverviewPage;