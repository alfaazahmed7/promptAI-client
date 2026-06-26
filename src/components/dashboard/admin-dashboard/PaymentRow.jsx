// src/components/dashboard/admin-dashboard/PaymentRow.jsx
'use client';

import React from 'react';
import { FiUser, FiLayers, FiCalendar, FiHash } from 'react-icons/fi';

const PaymentRow = ({ sub, view }) => {

    // Converts Stripe price IDs into user-friendly names and badge layouts
    const parsePlanTier = (planId) => {
        if (!planId) return { name: 'Free Account', color: 'text-slate-400 bg-slate-500/5 border-slate-500/10' };

        // You can substitute your real configuration dynamic IDs here later!
        if (planId.includes('1Tkw9TD2YO91UGvS1bnKyAxK')) {
            return { name: 'Pro Access', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' };
        }
        return { name: 'Premium Access', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' };
    };

    // Formats system date strings into a highly human-readable setup
    const formatDate = (dateInput) => {
        if (!dateInput) return 'N/A';
        const target = dateInput.$date ? dateInput.$date : dateInput;
        return new Date(target).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const tierInfo = parsePlanTier(sub.planId);

    // --- DESKTOP TABLE VIEW ---
    if (view === 'desktop') {
        return (
            <tr className="hover:bg-[#111827]/40 transition-colors group">
                {/* Account Details */}
                <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-500 transition-all">
                            <FiUser className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-200 group-hover:text-white transition-colors">{sub.email.split('@')[0]}</p>
                            <p className="text-xs text-slate-400 font-mono tracking-tight">{sub.email}</p>
                        </div>
                    </div>
                </td>

                {/* Gateway Plan Reference */}
                <td className="py-4 px-6 font-mono text-xs text-slate-500 max-w-[240px] truncate">
                    <span className="flex items-center gap-1.5" title={sub.planId}>
                        <FiHash className="text-slate-600 flex-shrink-0" />
                        {sub.planId}
                    </span>
                </td>

                {/* Dynamic Tier Allocation badge */}
                <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 border text-xs font-semibold rounded-md tracking-wide ${tierInfo.color}`}>
                        {tierInfo.name}
                    </span>
                </td>

                {/* Time Stamp Settlement */}
                <td className="py-4 px-6 text-right font-mono text-xs text-slate-400">
                    {formatDate(sub.createdAt)}
                </td>
            </tr>
        );
    }

    // --- MOBILE/TABLET CARD VIEW ---
    return (
        <div className="bg-[#111827]/60 p-5 rounded-xl border border-slate-800/80 shadow-md flex flex-col space-y-4">
            <div className="flex items-start justify-between space-x-2">
                <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center text-slate-400">
                        <FiUser className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                        <h2 className="font-semibold text-slate-200 truncate">{sub.email.split('@')[0]}</h2>
                        <span className="text-xs font-mono text-slate-400 block truncate">{sub.email}</span>
                    </div>
                </div>
                <span className={`inline-flex items-center px-2 py-0.5 border text-[11px] font-bold rounded ${tierInfo.color} flex-shrink-0`}>
                    {tierInfo.name}
                </span>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800/60 text-xs">
                <div className="flex items-center justify-between bg-[#0b0f19]/40 p-2 rounded-lg border border-slate-800/40">
                    <span className="text-slate-500 flex items-center gap-1 font-medium"><FiLayers /> Stripe ID:</span>
                    <span className="font-mono text-slate-400 truncate max-w-[180px]" title={sub.planId}>{sub.planId}</span>
                </div>

                <div className="flex items-center justify-between px-1 text-slate-400">
                    <span className="text-slate-500 flex items-center gap-1 font-medium"><FiCalendar /> Subscribed On:</span>
                    <span className="font-mono text-[11px]">{formatDate(sub.createdAt)}</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentRow;