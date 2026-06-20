'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiTag, FiUser, FiLayers } from 'react-icons/fi';

const PromptHeader = ({ prompt }) => {
    const difficultyColors = {
        Easy: 'badge-success text-white',
        Intermediate: 'badge-warning text-neutral',
        Advanced: 'badge-error text-white'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-base-200 p-6 sm:p-8 rounded-2xl border border-base-content/5 shadow-xl relative overflow-hidden"
        >
            {/* Background Accent glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />

            <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="badge badge-primary gap-1 text-xs font-semibold px-3 py-2">
                    <FiCpu /> {prompt.aiTool}
                </span>
                <span className="badge badge-outline gap-1 text-xs px-3 py-2">
                    <FiLayers /> {prompt.category}
                </span>
                <span className={`badge text-xs font-bold px-3 py-2 ${difficultyColors[prompt.difficulty] || 'badge-ghost'}`}>
                    {prompt.difficulty}
                </span>
                {prompt.tier === 'premium' && (
                    <span className="badge badge-secondary text-xs font-bold px-3 py-2 animate-pulse">
                        👑 PREMIUM
                    </span>
                )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-base-content">
                {prompt.title}
            </h1>

            <p className="text-base-content/70 max-w-3xl text-sm sm:text-base leading-relaxed mb-6">
                {prompt.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-base-content/5 text-xs text-base-content/60">
                <div className="flex items-center gap-2">
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-6">
                            <span>{prompt.creatorName?.[0] || 'A'}</span>
                        </div>
                    </div>
                    <span className="font-medium text-base-content">Curated by {prompt.creatorName}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 ml-auto">
                    {prompt.tags?.map((tag) => (
                        <span key={tag} className="text-[11px] bg-base-300 text-base-content/70 px-2 py-0.5 rounded-md">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default PromptHeader;