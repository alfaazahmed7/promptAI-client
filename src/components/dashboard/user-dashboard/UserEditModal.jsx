'use client';

import React, { useState, useEffect } from 'react';
import { FiX, FiEdit2 } from 'react-icons/fi';

const UserEditModal = ({ isOpen, onClose, prompt, onSave }) => {
    // Clean state initialization with no default placeholder fallbacks
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        aiTool: '',
        difficulty: '',
        visibility: '',
        tier: '',
        logoUrl: '',
        fullDescription: '',
        promptContent: '',
        usageInstructions: '',
        tags: ''
    });

    // Directly bind backend data changes without injection overrides
    useEffect(() => {
        if (prompt) {
            setFormData({
                title: prompt.title || '',
                category: prompt.category || '',
                aiTool: prompt.aiTool || '',
                difficulty: prompt.difficulty || '',
                visibility: prompt.visibility || '',
                tier: prompt.tier || '',
                logoUrl: prompt.logoUrl || '',
                fullDescription: prompt.fullDescription || '',
                promptContent: prompt.promptContent || '',
                usageInstructions: prompt.usageInstructions || '',
                tags: prompt.tags || ''
            });
        }
    }, [prompt]);

    if (!isOpen || !prompt) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const updatedPromptData = {
            ...prompt,
            ...formData,
        };
        delete updatedPromptData._id;
        onSave(updatedPromptData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">

            {/* Modal Box Container — Fixed with overflow-hidden to clip sharp headers/footers */}
            <div className="bg-[#111827] border border-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl my-8 relative transform scale-100 transition-all flex flex-col max-h-[90vh] overflow-hidden">

                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-start bg-[#161f30] sticky top-0 z-10">
                    {/* Left Column Container for Title + Description */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <FiEdit2 className="text-emerald-400" size={18} />
                            <h3 className="text-lg font-bold text-white">Edit Prompt Configuration</h3>
                        </div>
                        <p className="text-xs text-slate-400 pl-6">
                            Modify the parameters, metadata, and core structure of your submitted prompt.
                        </p>
                    </div>

                    {/* Right Aligned Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0 cursor-pointer"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* Modal Content - Scrollable Form */}
                <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-5 flex-1 text-left">

                    {/* Title & Logo Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Prompt Title</label>
                            <input
                                type="text" name="title" value={formData.title} onChange={handleChange} required
                                className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm outline-none transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Logo / Image URL</label>
                            <input
                                type="url" name="logoUrl" value={formData.logoUrl} onChange={handleChange}
                                className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm outline-none transition-colors"
                            />
                        </div>
                    </div>

                    {/* Category & AI Tool Model Dropdowns Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Category Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Category</label>
                            <div className="relative">
                                <select
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm appearance-none cursor-pointer transition-all pr-10 outline-none"
                                >
                                    <option value="" className="bg-slate-900 text-slate-500">Choose Category</option>
                                    <option value="Content Writing" className="bg-slate-900 text-white">Content Writing</option>
                                    <option value="SEO Strategy" className="bg-slate-900 text-white">SEO Strategy</option>
                                    <option value="Graphic Prompting" className="bg-slate-900 text-white">Graphic Prompting</option>
                                    <option value="Coding Assistant" className="bg-slate-900 text-white">Coding Assistant</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* AI Tool Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">AI Tool Model</label>
                            <div className="relative">
                                <select
                                    name="aiTool"
                                    required
                                    value={formData.aiTool}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm appearance-none cursor-pointer transition-all pr-10 outline-none"
                                >
                                    <option value="" className="bg-slate-900 text-slate-500">Select Model Target</option>
                                    <option value="ChatGPT" className="bg-slate-900 text-white">ChatGPT</option>
                                    <option value="Midjourney" className="bg-slate-900 text-white">Midjourney</option>
                                    <option value="Claude AI" className="bg-slate-900 text-white">Claude AI</option>
                                    <option value="Stable Diffusion" className="bg-slate-900 text-white">Stable Diffusion</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Dropdowns Configuration */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Difficulty</label>
                            <select name="difficulty" value={formData.difficulty} onChange={handleChange}
                                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm outline-none transition-colors"
                            >
                                <option value="" className="bg-slate-900 text-slate-500">Select Difficulty</option>
                                <option value="Beginner" className="bg-slate-900 text-white">Beginner</option>
                                <option value="Intermediate" className="bg-slate-900 text-white">Intermediate</option>
                                <option value="Advanced" className="bg-slate-900 text-white">Advanced</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Visibility</label>
                            <select name="visibility" value={formData.visibility} onChange={handleChange}
                                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm outline-none transition-colors"
                            >
                                <option value="" className="bg-slate-900 text-slate-500">Select Visibility</option>
                                <option value="Public" className="bg-slate-900 text-white">Public</option>
                                <option value="Private" className="bg-slate-900 text-white">Private</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Access Tier</label>
                            <select name="tier" value={formData.tier} onChange={handleChange}
                                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm outline-none transition-colors"
                            >
                                <option value="" className="bg-slate-900 text-slate-500">Select Tier</option>
                                <option value="free" className="bg-slate-900 text-white">Free Mode</option>
                                <option value="premium" className="bg-slate-900 text-white">Premium Mode</option>
                            </select>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tags (Comma-Separated)</label>
                        <input
                            type="text" name="tags" value={formData.tags} onChange={handleChange}
                            className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl px-3 py-2 text-sm outline-none transition-colors"
                        />
                    </div>

                    {/* Summary */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Short Summary Description</label>
                        <textarea
                            name="fullDescription" value={formData.fullDescription} onChange={handleChange} rows={2} required
                            className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl p-3 text-sm outline-none transition-colors resize-none"
                        />
                    </div>

                    {/* Prompt Box */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Core Prompt Content Structure</label>
                        <textarea
                            name="promptContent" value={formData.promptContent} onChange={handleChange} rows={4} required
                            className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-emerald-100 font-mono rounded-xl p-3 text-xs tracking-wide leading-relaxed outline-none transition-colors"
                        />
                    </div>

                    {/* Usage Instructions */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Usage Instructions</label>
                        <textarea
                            name="usageInstructions" value={formData.usageInstructions} onChange={handleChange} rows={2}
                            className="w-full bg-slate-900/50 border border-slate-800 focus:border-emerald-500/50 text-white rounded-xl p-3 text-sm outline-none transition-colors resize-none"
                        />
                    </div>
                </form>

                {/* Modal Footer Controls */}
                <div className="px-6 py-4 bg-[#161f30] border-t border-slate-800 flex justify-end gap-3 sticky bottom-0 z-10">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-colors border border-slate-700 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-colors shadow-lg shadow-emerald-950/20 cursor-pointer"
                    >
                        Save & Update Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UserEditModal;