const CARD_CLASS = 'rounded-xl border border-slate-800/60 bg-slate-900/20';
const PANEL_CLASS = 'rounded-xl border border-slate-800/80 bg-[#111827]/60';

const Skeleton = ({ className = '' }) => (
    <div className={`animate-pulse rounded-md bg-slate-700/50 ${className}`} />
);

const createItems = (count) => Array.from({ length: count });

const PageShell = ({ children, className = '' }) => (
    <div className={`mx-auto min-h-screen max-w-7xl bg-[#0b0f19] p-4 text-slate-200 md:p-8 ${className}`}>
        {children}
    </div>
);

const PageHeader = ({ hasAction = false }) => (
    <header className="mb-8 flex flex-col gap-4 border-b border-slate-800/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
            <Skeleton className="h-8 w-52" />
            <Skeleton className="h-4 w-80 max-w-full" />
        </div>
        {hasAction && <Skeleton className="h-10 w-32 rounded-lg" />}
    </header>
);

const StatCards = ({ count = 3 }) => (
    <div className={`mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 ${count === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
        {createItems(count).map((_, index) => (
            <div key={index} className={`flex items-center gap-4 p-5 shadow-lg ${PANEL_CLASS}`}>
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="space-y-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-7 w-14" />
                </div>
            </div>
        ))}
    </div>
);

const DataTable = ({ rows = 6, headerColumns = 4 }) => (
    <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-[#111827]/50">
        <div className="hidden grid-cols-4 gap-4 border-b border-slate-800/80 bg-slate-900/40 p-4 md:grid">
            {createItems(headerColumns).map((_, index) => (
                <Skeleton key={index} className="h-3 w-20" />
            ))}
        </div>

        <div className="divide-y divide-slate-800/70">
            {createItems(rows).map((_, index) => (
                <div key={index} className="grid gap-3 p-4 md:grid-cols-4 md:items-center md:gap-4">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-3 w-24" />
                    </div>
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-8 w-20 rounded-lg" />
                </div>
            ))}
        </div>
    </div>
);

const FormFieldSkeleton = ({ labelWidth = 'w-24', controlClass = 'h-11' }) => (
    <div className="space-y-2">
        <Skeleton className={`h-3 ${labelWidth}`} />
        <Skeleton className={`w-full rounded-lg bg-slate-800/70 ${controlClass}`} />
    </div>
);

export const PromptFormSkeleton = () => (
    <PageShell className="max-w-6xl">
        <PageHeader />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            <section className="space-y-6 rounded-xl border border-slate-800/80 bg-[#0f1422] p-6 shadow-sm lg:col-span-2">
                <FormFieldSkeleton />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormFieldSkeleton labelWidth="w-20" />
                    <FormFieldSkeleton labelWidth="w-20" />
                </div>

                <FormFieldSkeleton labelWidth="w-32" controlClass="h-24" />
                <FormFieldSkeleton labelWidth="w-36" controlClass="h-48" />
                <Skeleton className="h-11 w-40 rounded-lg" />
            </section>

            <aside className="space-y-5 rounded-xl border border-slate-800/80 bg-[#0f1422] p-6 shadow-sm">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-20 w-full rounded-xl bg-slate-800/70" />

                <FormFieldSkeleton />
                <FormFieldSkeleton />
                <FormFieldSkeleton />
            </aside>
        </div>
    </PageShell>
);

export const PromptTableSkeleton = () => (
    <PageShell>
        <PageHeader hasAction />
        <DataTable headerColumns={5} />
    </PageShell>
);

export const AdminTableSkeleton = () => (
    <PageShell>
        <PageHeader />
        <StatCards />
        <DataTable headerColumns={5} />
    </PageShell>
);

const CreatorAnalyticsSkeleton = () => (
    <PageShell>
        <PageHeader />
        <StatCards />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {createItems(2).map((_, index) => (
                <section key={index} className="rounded-2xl border border-slate-800/80 bg-[#111827]/50 p-5">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="mt-2 h-3 w-64 max-w-full" />
                    <Skeleton className="mt-6 h-72 w-full rounded-xl bg-slate-800/60" />
                </section>
            ))}
        </div>
    </PageShell>
);

const AdminAnalyticsSkeleton = () => (
    <PageShell>
        <PageHeader />
        <StatCards count={4} />

        <section className="rounded-xl border border-slate-800/50 bg-[#131a26] p-6 shadow-xl">
            <Skeleton className="h-6 w-56" />
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Skeleton className="h-24 w-full rounded-lg bg-[#0b0f19]/60" />
                <Skeleton className="h-24 w-full rounded-lg bg-[#0b0f19]/60" />
            </div>
        </section>
    </PageShell>
);

export const AnalyticsSkeleton = ({ admin = false }) => (
    admin ? <AdminAnalyticsSkeleton /> : <CreatorAnalyticsSkeleton />
);

export const OverviewSkeleton = () => (
    <PageShell>
        <PageHeader />
        <StatCards />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
                <Skeleton className="h-28 w-full rounded-xl bg-slate-800/60" />

                <section className={`${CARD_CLASS} p-5`}>
                    <Skeleton className="h-5 w-36" />
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {createItems(3).map((_, index) => (
                            <Skeleton key={index} className="h-24 w-full rounded-xl bg-slate-800/60" />
                        ))}
                    </div>
                </section>
            </div>

            <aside className={`${CARD_CLASS} p-5`}>
                <Skeleton className="h-5 w-32" />
                <div className="mt-5 space-y-3">
                    {createItems(4).map((_, index) => (
                        <Skeleton key={index} className="h-14 w-full rounded-lg bg-slate-800/60" />
                    ))}
                </div>
            </aside>
        </div>
    </PageShell>
);

export const ProfileSkeleton = () => (
    <PageShell>
        <PageHeader />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <section className={`flex flex-col items-center p-6 ${CARD_CLASS}`}>
                <Skeleton className="h-28 w-28 rounded-full" />
                <Skeleton className="mt-4 h-5 w-36" />
                <Skeleton className="mt-2 h-3 w-48" />

                <div className="mt-6 grid w-full grid-cols-2 gap-2 border-t border-slate-800/40 pt-4">
                    <Skeleton className="h-16 w-full rounded-lg" />
                    <Skeleton className="h-16 w-full rounded-lg" />
                </div>
            </section>

            <div className="space-y-6 lg:col-span-2">
                <section className={`${CARD_CLASS} p-6`}>
                    <Skeleton className="h-5 w-40" />
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {createItems(4).map((_, index) => (
                            <FormFieldSkeleton key={index} labelWidth="w-20" controlClass="h-10" />
                        ))}
                    </div>
                </section>

                <Skeleton className="h-32 w-full rounded-xl bg-slate-800/60" />
            </div>
        </div>
    </PageShell>
);

export const SavedPromptsSkeleton = () => (
    <PageShell>
        <PageHeader />

        <div className="flex flex-col gap-3">
            {createItems(5).map((_, index) => (
                <section key={index} className={`flex flex-col gap-4 p-4 sm:flex-row sm:items-center ${CARD_CLASS}`}>
                    <Skeleton className="h-28 w-full shrink-0 rounded-lg bg-slate-800/70 sm:w-28" />

                    <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-4">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-3 w-24" />
                        </div>
                        <Skeleton className="mt-3 h-5 w-2/3" />
                        <Skeleton className="mt-2 h-3 w-full" />

                        <div className="mt-4 flex justify-between border-t border-slate-800/40 pt-3">
                            <Skeleton className="h-3 w-36" />
                            <Skeleton className="h-8 w-20 rounded-lg" />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    </PageShell>
);

export const ReviewsSkeleton = () => (
    <PageShell>
        <PageHeader />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {createItems(6).map((_, index) => (
                <section key={index} className={`flex min-h-56 flex-col justify-between p-5 ${CARD_CLASS}`}>
                    <div>
                        <div className="flex justify-between gap-4">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                        <Skeleton className="mt-4 h-4 w-3/4" />
                        <Skeleton className="mt-3 h-20 w-full rounded-lg bg-slate-800/60" />
                    </div>

                    <div className="mt-5 flex justify-between border-t border-slate-800/40 pt-3">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-8 w-8 rounded-lg" />
                    </div>
                </section>
            ))}
        </div>
    </PageShell>
);
