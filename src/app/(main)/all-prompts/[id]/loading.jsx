const SkeletonBlock = ({ className = '' }) => (
    <div className={`animate-pulse rounded-md bg-slate-700/60 ${className}`} />
);

const Loading = () => {
    return (
        <div className="min-h-screen bg-[#121824] px-4 pb-16 pt-[96px] text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-8 pt-6">
                {/* Prompt header */}
                <section className="relative overflow-hidden rounded-2xl border border-gray-700/40 bg-[#161f30] p-6 shadow-xl sm:p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                        <SkeletonBlock className="h-7 w-24 rounded-full" />
                        <SkeletonBlock className="h-7 w-28 rounded-full" />
                        <SkeletonBlock className="h-7 w-20 rounded-full" />
                    </div>
                    <SkeletonBlock className="h-9 w-4/5 sm:h-11" />
                    <SkeletonBlock className="mt-4 h-4 w-full max-w-3xl" />
                    <SkeletonBlock className="mt-2 h-4 w-3/4 max-w-2xl" />
                    <div className="mt-6 flex items-center gap-2 border-t border-gray-700/40 pt-4">
                        <SkeletonBlock className="h-6 w-6 rounded-full" />
                        <SkeletonBlock className="h-3 w-36" />
                    </div>
                </section>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        {/* Interaction bar */}
                        <section className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-700/40 bg-[#161f30] p-4 shadow-md">
                            <div>
                                <SkeletonBlock className="h-3 w-24" />
                                <SkeletonBlock className="mt-2 h-6 w-10" />
                            </div>
                            <div className="flex gap-2">
                                <SkeletonBlock className="h-10 w-28 rounded-xl" />
                                <SkeletonBlock className="h-10 w-24 rounded-xl" />
                            </div>
                        </section>

                        {/* Prompt content */}
                        <section className="overflow-hidden rounded-2xl border border-gray-700/40 bg-[#161f30] shadow-xl">
                            <div className="flex items-center justify-between border-b border-gray-700/30 bg-[#1a2333] px-5 py-3">
                                <SkeletonBlock className="h-3 w-40" />
                                <SkeletonBlock className="h-6 w-24 rounded-md" />
                            </div>
                            <div className="space-y-3 p-6">
                                <SkeletonBlock className="h-4 w-full" />
                                <SkeletonBlock className="h-4 w-11/12" />
                                <SkeletonBlock className="h-4 w-full" />
                                <SkeletonBlock className="h-4 w-4/5" />
                                <SkeletonBlock className="h-4 w-2/3" />
                            </div>
                        </section>

                        {/* Community feed */}
                        <section className="rounded-2xl border border-gray-700/40 bg-[#161f30] p-6 shadow-xl">
                            <div className="mb-4 flex items-center justify-between">
                                <SkeletonBlock className="h-6 w-36" />
                                <SkeletonBlock className="h-5 w-7 rounded-full" />
                            </div>
                            <SkeletonBlock className="h-20 w-full rounded-xl bg-[#1a2333]" />
                        </section>
                    </div>

                    <aside className="space-y-6 lg:col-span-1">
                        {/* Usage instructions */}
                        <section className="rounded-2xl border border-gray-700/40 bg-[#161f30] p-6 shadow-xl">
                            <SkeletonBlock className="mb-4 h-6 w-36" />
                            <SkeletonBlock className="h-4 w-full" />
                            <SkeletonBlock className="mt-2 h-4 w-11/12" />
                            <SkeletonBlock className="mt-2 h-4 w-3/4" />
                        </section>

                        {/* Review form */}
                        <section className="rounded-2xl border border-gray-700/40 bg-[#161f30] p-6 shadow-xl">
                            <SkeletonBlock className="h-6 w-40" />
                            <SkeletonBlock className="mt-5 h-4 w-28" />
                            <SkeletonBlock className="mt-3 h-20 w-full rounded-xl bg-[#1a2333]" />
                            <SkeletonBlock className="mt-3 h-8 w-full rounded-xl" />
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Loading;
