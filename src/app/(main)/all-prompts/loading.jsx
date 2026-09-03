const SkeletonBlock = ({ className = '' }) => (
    <div className={`animate-pulse rounded-md bg-slate-700/60 ${className}`} />
);

const PromptCardSkeleton = () => (
    <div className="overflow-hidden rounded-2xl border border-gray-700/40 bg-[#161f30] shadow-sm">
        <SkeletonBlock className="aspect-video w-full rounded-none bg-gray-800/80" />
        <div className="flex min-h-[218px] flex-col justify-between p-5">
            <div>
                <SkeletonBlock className="h-6 w-3/5" />
                <SkeletonBlock className="mt-3 h-4 w-full" />
                <SkeletonBlock className="mt-2 h-4 w-11/12" />
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-gray-700/40 pt-4">
                <SkeletonBlock className="h-4 w-24" />
                <div className="flex items-center gap-2">
                    <SkeletonBlock className="h-8 w-14 rounded-lg" />
                    <SkeletonBlock className="h-8 w-20 rounded-lg" />
                </div>
            </div>
        </div>
    </div>
);

const FilterSkeleton = () => (
    <aside className="rounded-2xl border border-gray-700/40 bg-[#161f30] p-6 shadow-xl lg:sticky lg:top-6">
        <SkeletonBlock className="mb-7 h-6 w-40" />
        <div className="space-y-5">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                    <SkeletonBlock className="mb-2 h-3 w-28" />
                    <SkeletonBlock className="h-12 w-full rounded-lg bg-[#1a2333]" />
                </div>
            ))}
        </div>
    </aside>
);

const Loading = () => {
    return (
        <div className="min-h-screen bg-[#131926] px-4 pb-12 pt-[96px] text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-10 pt-12">
                <div className="space-y-3 text-center md:text-left">
                    <SkeletonBlock className="mx-auto h-12 w-72 sm:h-14 sm:w-96 md:mx-0" />
                    <SkeletonBlock className="mx-auto h-4 w-full max-w-2xl md:mx-0" />
                </div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
                    <FilterSkeleton />

                    <main className="space-y-6 lg:col-span-3">
                        <div className="flex h-[58px] items-center justify-between rounded-xl border border-gray-700/40 bg-[#161f30] p-4">
                            <SkeletonBlock className="h-4 w-56" />
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <PromptCardSkeleton key={index} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Loading;