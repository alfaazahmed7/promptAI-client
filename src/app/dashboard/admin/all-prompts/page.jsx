// src/app/admin/prompts/page.jsx
import PromptRow from '@/components/dashboard/admin-dashboard/PromptRow';
import { getAllUserAddPrompts } from '@/lib/api/userAddPrompts';
import React from 'react';
import { FiGrid, FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi';

const AdminAllPromptsPage = async () => {
    const prompts = await getAllUserAddPrompts() || [];

    // Calculate dynamic stats
    const totalPrompts = prompts.length;
    const pendingPrompts = prompts.filter(p => p.status === 'pending').length;
    const approvedPrompts = prompts.filter(p => p.status === 'approved').length;

    return (
        <div className="p-4 md:p-8 bg-[#0b0f19] min-h-screen text-slate-200 antialiased max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    All Prompts{" "}
                    <span className="text-sm md:text-base font-medium text-slate-400">
                        (User & Creator Created Prompts)
                    </span>
                </h1>
                <p className="text-slate-400 text-sm mt-1">Review, approve, reject, and feature AI prompt submissions for promptAI.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                        <FiGrid className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Submissions</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{totalPrompts}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
                        <FiClock className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Review</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{pendingPrompts}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                        <FiCheckCircle className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Live & Approved</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{approvedPrompts}</p>
                    </div>
                </div>
            </div>

            {/* Layout Wrapper */}
            <div className="bg-[#111827]/40 rounded-xl border border-slate-800/80 shadow-2xl overflow-visible backdrop-blur-sm">
                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#111827]/90 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                <th className="py-4 px-6">Prompt Info</th>
                                <th className="py-4 px-6">Author</th>
                                <th className="py-4 px-4">Tool/Category</th>
                                <th className="py-4 px-4">Tier/Status</th>
                                <th className="py-4 px-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-sm">
                            {prompts.map((prompt) => (
                                <PromptRow key={prompt._id?.$oid || prompt.title} prompt={prompt} view="desktop" />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile/Tablet Card View */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden p-4 bg-[#0b0f19]">
                    {prompts.map((prompt) => (
                        <PromptRow key={prompt._id?.$oid || prompt.title} prompt={prompt} view="mobile" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminAllPromptsPage;