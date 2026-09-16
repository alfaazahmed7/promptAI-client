const SkeletonBlock = ({ className = '' }) => (
    <div className={`animate-pulse rounded-md bg-slate-700/60 ${className}`} />
);

const AboutLoading = () => (
    <div className="bg-[#011627]">
        {/* Hero skeleton */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 pt-36 pb-20 sm:px-6 lg:px-8">
            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center space-y-6 text-center">
                <SkeletonBlock className="h-7 w-40 rounded-full" />
                <SkeletonBlock className="h-12 w-full max-w-2xl" />
                <SkeletonBlock className="h-12 w-4/5 max-w-xl" />
                <SkeletonBlock className="h-5 w-full max-w-lg" />
                <SkeletonBlock className="h-5 w-4/5 max-w-md" />
                <div className="flex w-full flex-col items-center justify-center gap-4 pt-3 sm:w-auto sm:flex-row">
                    <SkeletonBlock className="h-12 w-full rounded-xl sm:w-56" />
                    <SkeletonBlock className="h-12 w-full rounded-xl sm:w-48" />
                </div>
            </div>
        </section>

        {/* Stats skeleton */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center space-y-4 text-center">
                    <SkeletonBlock className="h-7 w-44 rounded-full" />
                    <SkeletonBlock className="h-10 w-96 max-w-full" />
                    <SkeletonBlock className="h-4 w-full max-w-lg" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6">
                            <SkeletonBlock className="h-10 w-10 rounded-xl" />
                            <SkeletonBlock className="mt-4 h-9 w-28" />
                            <SkeletonBlock className="mt-3 h-3 w-32" />
                            <SkeletonBlock className="mt-4 h-3 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Values skeleton */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
                    <SkeletonBlock className="h-7 w-52 rounded-full" />
                    <SkeletonBlock className="h-10 w-80 max-w-full" />
                    <SkeletonBlock className="h-4 w-full max-w-lg" />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8">
                            <SkeletonBlock className="h-10 w-10 rounded-xl" />
                            <SkeletonBlock className="mt-6 h-6 w-48" />
                            <SkeletonBlock className="mt-3 h-4 w-full" />
                            <SkeletonBlock className="mt-2 h-4 w-4/5" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Timeline skeleton */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
                    <SkeletonBlock className="h-7 w-36 rounded-full" />
                    <SkeletonBlock className="h-10 w-96 max-w-full" />
                </div>
                <div className="space-y-6 border-l border-slate-800/70 pl-8">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-slate-800/70 bg-slate-900/30 p-6">
                            <SkeletonBlock className="h-3 w-24" />
                            <SkeletonBlock className="mt-3 h-6 w-56" />
                            <SkeletonBlock className="mt-3 h-4 w-full" />
                            <SkeletonBlock className="mt-2 h-4 w-4/5" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default AboutLoading;