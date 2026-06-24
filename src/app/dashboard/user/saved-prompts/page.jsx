import React from 'react';
import { getBookmarkByEmail } from '@/lib/api/bookmark';
import { getPromptById } from '@/lib/api/prompts';
import { getUserSession } from '@/lib/core/session';
import {
    FiBookmark,
    FiExternalLink,
    FiTrash2,
    FiCpu,
    FiCalendar
} from 'react-icons/fi';
import Link from 'next/link';

const SavedPromptsPage = async () => {
    const user = await getUserSession();
    const bookmarks = await getBookmarkByEmail(user?.email) || [];

    const savedPrompts = await Promise.all(
        bookmarks.map(async (bookmark) => {
            try {
                const promptId = bookmark.promptId?.$oid || bookmark.promptId;
                const promptData = await getPromptById(promptId);

                const savedDate = bookmark.createdAt?.$date
                    ? new Date(bookmark.createdAt.$date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                    : 'Recently';

                return {
                    bookmarkId: bookmark._id?.$oid || bookmark._id,
                    savedDate,
                    ...promptData
                };
            } catch (error) {
                console.error(`Failed to fetch prompt details:`, error);
                return null;
            }
        })
    );

    const validPrompts = savedPrompts.filter(prompt => prompt !== null);

    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-[#0b0f19] text-slate-100 p-4 sm:p-6 lg:p-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-slate-800/50">
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                        Saved Prompts
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        Your curated list of bookmarked tools and configuration setups.
                    </p>
                </div>
                <div className="bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400">
                    Total: <span className="text-violet-400 font-medium">{validPrompts.length}</span>
                </div>
            </div>

            {/* Empty State */}
            {validPrompts.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-20 border border-dashed border-slate-800/60 rounded-xl bg-slate-900/10">
                    <FiBookmark size={24} className="text-slate-600 mb-3" />
                    <h3 className="text-sm font-medium text-slate-400">No saved items found</h3>
                </div>
            ) : (
                /* Ultra-Clean Modern Row Layout */
                <div className="flex flex-col gap-3">
                    {validPrompts.map((prompt) => (
                        <div
                            key={prompt.bookmarkId}
                            className="group flex flex-col sm:flex-row items-start sm:items-center bg-slate-900/20 hover:bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 transition-colors duration-200 gap-4"
                        >
                            {/* Left Side: Fixed Shape Box (Centered perfectly via sm:items-center) */}
                            <div className="relative w-full sm:w-28 h-28 sm:h-28 rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-slate-800/80">
                                <img
                                    src={prompt.image}
                                    alt={prompt.title}
                                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Soft inner vignette border overlay */}
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/40" />
                            </div>

                            {/* Right Side: Content Area Grid/Flex */}
                            <div className="flex flex-col justify-between flex-1 min-w-0">
                                <div>
                                    {/* Badges and Creator row */}
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">
                                                {prompt.category}
                                            </span>
                                            <span className="text-[10px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded flex items-center gap-1 border border-slate-800">
                                                <FiCpu className="size-2.5 text-sky-400" />
                                                {prompt.aiTool}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                                            <span>by <strong className="text-slate-400 font-normal">{prompt.creatorName}</strong></span>
                                            <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                            <span className="flex items-center gap-1">
                                                <FiCalendar className="size-3" />
                                                {prompt.savedDate}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Heading & Paragraph */}
                                    <h3 className="text-base font-medium text-slate-100 tracking-tight transition-colors group-hover:text-violet-400">
                                        {prompt.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-2 sm:line-clamp-1 leading-relaxed max-w-4xl">
                                        {prompt.fullDescription}
                                    </p>
                                </div>

                                {/* Bottom Tags & Actions Bar */}
                                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/40">
                                    {/* Tags layout */}
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        {prompt.tags?.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-xs text-slate-500 truncate">
                                                #{tag.toLowerCase()}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Fine-tuned buttons */}
                                    <div className="flex items-center gap-1.5 shrink-0 ml-auto">
                                        <button
                                            title="Delete bookmark"
                                            className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                                        >
                                            <FiTrash2 size={16} />
                                        </button>
                                        <Link
                                            href={`/all-prompts/${prompt._id}`}
                                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-700 text-slate-300 rounded-lg transition-colors cursor-pointer"
                                        >
                                            <span>Details</span>
                                            <FiExternalLink size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SavedPromptsPage;