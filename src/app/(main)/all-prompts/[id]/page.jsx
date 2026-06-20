import React from 'react';
import { notFound } from 'next/navigation';
import PromptHeader from '@/components/all-prompts/prompt-details/PromptHeader';
import InteractionBar from '@/components/all-prompts/prompt-details/InteractionBar';
import PromptContentCard from '@/components/all-prompts/prompt-details/PromptComponentCard';
import ReviewSystem from '@/components/all-prompts/prompt-details/ReviewSystem';
import { getPromptById } from '@/lib/api/prompts';
import { getUserSession } from '@/lib/core/session';

const PromptDetailsPage = async ({ params }) => {
    const resolvedParams = await params;
    const promptId = resolvedParams.id;
    console.log(promptId);

    // Fetch prompt details & user state
    const prompt = await getPromptById(promptId);
    const user = await getUserSession();

    if (!prompt) {
        notFound();
    }

    // Safety logic logic check
    const isPremiumTier = prompt.tier === 'premium';
    const hasPremiumAccess = user?.isSubscribed || false;
    const isLocked = isPremiumTier && !hasPremiumAccess;

    return (
        <div className="min-h-screen bg-base-300 text-base-content pb-16 pt-[96px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8 pt-6">

                {/* Meta Header */}
                <PromptHeader prompt={prompt} />

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left & Center: Prompt Actions & Source Text */}
                    <div className="lg:col-span-2 space-y-6">
                        <InteractionBar
                            promptId={prompt._id}
                            initialBookmarked={user?.bookmarks?.includes(prompt._id) || false}
                            initialCopyCount={prompt.copyCount || 0}
                            isLocked={isLocked}
                        />

                        <PromptContentCard
                            prompt={prompt}
                            isLocked={isLocked}
                        />
                    </div>

                    {/* Right Column: Usage Rules & Reviews */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-base-200 p-6 rounded-2xl border border-base-content/5 shadow-xl">
                            <h3 className="font-bold text-lg mb-3 text-secondary">Usage Instructions</h3>
                            <p className="text-sm text-base-content/80 leading-relaxed">
                                {prompt.usageInstructions || "No explicit configuration instructions provided."}
                            </p>
                        </div>

                        <ReviewSystem
                            promptId={prompt._id}
                            reviews={prompt.reviews || []}
                            isLocked={isLocked}
                            user={user}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromptDetailsPage;