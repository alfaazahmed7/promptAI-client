'use client';

import React from 'react';
import { FiX, FiBarChart2, FiLayers, FiCopy, FiTrendingUp, FiCheckCircle, FiBookmark, FiStar } from 'react-icons/fi';

const UserAnalyticsModal = ({ isOpen, onClose, prompt }) => {
    if (!isOpen || !prompt) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity">

            {/* Modal Box */}
            <div className="bg-[#111827] border border-slate-800 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden relative transform scale-100 transition-all">

                {/* Modal Header */}
                <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-[#161f30]">
                    <div className="flex items-center gap-2">
                        <FiBarChart2 className="text-indigo-400" size={20} />
                        <h3 className="text-lg font-bold text-white">Prompt Performance</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">

                    {/* Prompt Summary Card */}
                    <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800/80 rounded-xl">
                        {prompt.logoUrl && (
                            <img src={prompt.logoUrl} alt="" className="w-12 h-12 rounded-lg object-cover border border-slate-700/40" />
                        )}
                        <div>
                            <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">
                                {prompt.aiTool} • {prompt.category}
                            </span>
                            <h4 className="text-base font-bold text-white mt-1.5">{prompt.title}</h4>
                        </div>
                    </div>

                    {/* Analytics Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Total Copies Stat */}
                        <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-3">
                            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                                <FiCopy size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Total Copies</p>
                                <p className="text-xl font-bold text-white mt-0.5">{prompt.copyCount || 0}</p>
                            </div>
                        </div>

                        {/* Impressions Stat */}
                        <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                <FiTrendingUp size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Impressions</p>
                                <p className="text-xl font-bold text-white mt-0.5">
                                    {prompt.copyCount ? (prompt.copyCount * 4.5).toFixed(0) : 0}
                                </p>
                            </div>
                        </div>

                        {/* Bookmarks Stat (New Static Data) */}
                        <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-3">
                            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
                                <FiBookmark size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Bookmarks</p>
                                {/* Static placeholder value: e.g., 24 */}
                                <p className="text-xl font-bold text-white mt-0.5">{prompt.bookmarkCount || 0}</p>
                            </div>
                        </div>

                        {/* Average Rating Stat (New Static Data) */}
                        <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-3">
                            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                                <FiStar size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Avg Rating</p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    {/* Static placeholder value: e.g., 4.8 */}
                                    <span className="text-xl font-bold text-white">{prompt.averageRating || "0"}</span>
                                    <span className="text-xs text-purple-400 font-medium">/ 5.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Status Metadata Log */}
                    <div className="border-t border-slate-800/80 pt-4 grid grid-cols-2 gap-y-2 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-slate-500" />
                            <span>Visibility: <strong className="text-slate-200 capitalize">{prompt.visibility}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-slate-500" />
                            <span>Access Level: <strong className="text-slate-200 capitalize">{prompt.tier} Mode</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-slate-500" />
                            <span>System Status: <strong className="text-amber-400 capitalize">{prompt.status || 'pending'}</strong></span>
                        </div>
                    </div>

                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-[#161f30] border-t border-slate-800 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-colors border border-slate-700 cursor-pointer"
                    >
                        Close View
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UserAnalyticsModal;