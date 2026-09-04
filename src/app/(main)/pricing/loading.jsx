'use client';

import { authClient } from "@/lib/auth-client";


const SkeletonBlock = ({ className = '' }) => (
    <div className={`animate-pulse rounded-md bg-slate-700/60 ${className}`} />
);

const FeatureSkeleton = () => (
    <div className="flex items-start gap-3">
        <SkeletonBlock className="mt-0.5 h-4 w-4 shrink-0 rounded-full" />
        <SkeletonBlock className="h-4 w-full" />
    </div>
);

const PageShell = ({ children }) => (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#011627] px-4 pb-16 pt-36">
        <section className="relative z-10 w-full max-w-5xl">{children}</section>
    </main>
);

const FreePricingSkeleton = () => (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#011627] px-4 pb-16 pt-36">
        <section className="relative z-10 w-full max-w-5xl">
            <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
                <SkeletonBlock className="mx-auto h-7 w-32 rounded-full" />
                <SkeletonBlock className="mx-auto h-12 w-80 max-w-full" />
                <SkeletonBlock className="mx-auto h-5 w-full max-w-lg" />
            </div>

            <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                {Array.from({ length: 2 }).map((_, index) => (
                    <section
                        key={index}
                        className="flex min-h-[560px] flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-900/30 p-8 shadow-xl"
                    >
                        <div>
                            <SkeletonBlock className="h-6 w-40" />
                            <SkeletonBlock className="mt-3 h-4 w-full" />
                            <SkeletonBlock className="mt-2 h-4 w-4/5" />
                            <SkeletonBlock className="my-8 h-14 w-32" />

                            <div className="space-y-4 border-t border-slate-800/60 pt-6">
                                {Array.from({ length: index === 0 ? 4 : 6 }).map((__, featureIndex) => (
                                    <FeatureSkeleton key={featureIndex} />
                                ))}
                            </div>
                        </div>

                        <SkeletonBlock className="mt-8 h-12 w-full rounded-xl" />
                    </section>
                ))}
            </div>
        </section>
    </main>
);

const PremiumPricingSkeleton = () => (
    <PageShell>
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-7 shadow-2xl sm:p-10">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                <div className="w-full max-w-2xl space-y-4">
                    <SkeletonBlock className="h-7 w-56 rounded-full" />
                    <SkeletonBlock className="h-12 w-96 max-w-full" />
                    <SkeletonBlock className="h-5 w-full max-w-xl" />
                    <SkeletonBlock className="h-5 w-4/5 max-w-lg" />
                </div>
                <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4">
                    <SkeletonBlock className="h-12 w-12 rounded-xl" />
                    <div className="space-y-2">
                        <SkeletonBlock className="h-3 w-20" />
                        <SkeletonBlock className="h-4 w-32" />
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-2xl border border-slate-700/60 bg-slate-900/45 p-6">
                    <SkeletonBlock className="h-6 w-6 rounded-full" />
                    <SkeletonBlock className="mt-4 h-5 w-32" />
                    <SkeletonBlock className="mt-3 h-4 w-full" />
                    <SkeletonBlock className="mt-2 h-4 w-4/5" />
                </div>
            ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 rounded-3xl border border-slate-700/60 bg-slate-900/35 p-6 shadow-xl sm:p-8 md:grid-cols-[1.4fr_1fr]">
            <div>
                <SkeletonBlock className="h-3 w-36" />
                <SkeletonBlock className="mt-3 h-8 w-56" />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {Array.from({ length: 6 }).map((_, index) => <FeatureSkeleton key={index} />)}
                </div>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5">
                <SkeletonBlock className="h-5 w-40" />
                <div className="mt-5 space-y-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex justify-between border-b border-slate-700/50 pb-3 last:border-0">
                            <SkeletonBlock className="h-4 w-16" />
                            <SkeletonBlock className="h-4 w-28" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
            <SkeletonBlock className="h-12 w-48 rounded-xl" />
            <SkeletonBlock className="h-12 w-40 rounded-xl" />
        </div>
    </PageShell>
);

const PricingLoading = () => {
    const { data, isPending } = authClient.useSession();
    const isPremium = data?.user?.plan?.toLowerCase() === 'premium';

    return isPending || !isPremium ? <FreePricingSkeleton /> : <PremiumPricingSkeleton />;
};

export default PricingLoading;