const SkeletonBlock = ({ className = '' }) => (
    <div className={`animate-pulse rounded-md bg-slate-700/60 ${className}`} />
);

const ContactLoading = () => (
    <div className="bg-[#011627]">
        {/* Hero skeleton */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 pt-36 pb-20 sm:px-6 lg:px-8">
            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center space-y-6 text-center">
                <SkeletonBlock className="h-7 w-44 rounded-full" />
                <SkeletonBlock className="h-12 w-full max-w-2xl" />
                <SkeletonBlock className="h-5 w-full max-w-lg" />
                <SkeletonBlock className="h-5 w-4/5 max-w-md" />
                <div className="flex w-full flex-col items-center justify-center gap-4 pt-3 sm:w-auto sm:flex-row">
                    <SkeletonBlock className="h-12 w-full rounded-xl sm:w-56" />
                    <SkeletonBlock className="h-12 w-full rounded-xl sm:w-48" />
                </div>
            </div>
        </section>

        {/* Channels skeleton */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
                    <SkeletonBlock className="h-7 w-40 rounded-full" />
                    <SkeletonBlock className="h-10 w-96 max-w-full" />
                    <SkeletonBlock className="h-4 w-full max-w-lg" />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8">
                            <SkeletonBlock className="h-10 w-10 rounded-xl" />
                            <SkeletonBlock className="mt-6 h-6 w-48" />
                            <SkeletonBlock className="mt-3 h-4 w-full" />
                            <SkeletonBlock className="mt-3 h-4 w-3/5" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Form skeleton */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center space-y-4 text-center">
                    <SkeletonBlock className="h-7 w-48 rounded-full" />
                    <SkeletonBlock className="h-10 w-80 max-w-full" />
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonBlock key={index} className="h-11 w-full rounded-xl" />
                        ))}
                    </div>
                    <SkeletonBlock className="mt-5 h-36 w-full rounded-xl" />
                    <SkeletonBlock className="mt-6 h-12 w-40 rounded-xl" />
                </div>
            </div>
        </section>
    </div>
);

export default ContactLoading;
