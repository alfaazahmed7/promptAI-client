import { getFeaturedPrompts } from '@/lib/api/prompts';
import React from 'react';
import Link from 'next/link';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import PromptCard from './PromptCard';

const FeaturedPromptsPage = async () => {
    // Fetch limited featured/trending prompts from your API layer
    const featuredPrompts = await getFeaturedPrompts() || [];

    return (
        <section className="min-h-screen bg-[#0B1220] text-gray-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                            <HiOutlineSparkles className="text-sm animate-pulse" />
                            Trending Now
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                            Featured <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">AI Prompts</span>
                        </h2>
                        <p className="text-gray-400 mt-2 max-w-xl text-sm sm:text-base">
                            Discover top-performing, expert-crafted prompts designed to maximize your generative AI workflows.
                        </p>
                    </div>

                    <Link
                        href="/all-prompts"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group transition-colors duration-200"
                    >
                        Explore all prompts
                        <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Empty State Fallback */}
                {featuredPrompts.length === 0 ? (
                    <div className="text-center py-20 bg-[#0e1624] rounded-2xl border border-gray-800">
                        <p className="text-gray-400">No featured prompts found at the moment.</p>
                    </div>
                ) : (
                    /* Responsive Layout Grid (Max 6 Items via API limit) */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {featuredPrompts.slice(0, 6).map((prompt) => (
                            <PromptCard key={prompt._id?.$oid || prompt._id} prompt={prompt} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default FeaturedPromptsPage;