const SkeletonBlock = ({ className = '' }) => (
  <div className={`animate-pulse rounded-md bg-slate-700/60 ${className}`} />
);

const ProfileLoading = () => (
  <div className="min-h-screen bg-[#0b0f19] px-4 pb-16 pt-36 text-slate-100 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <section className="rounded-3xl border border-slate-700/60 bg-[#101722] p-6 shadow-2xl sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <SkeletonBlock className="h-20 w-20 shrink-0 rounded-2xl" />
            <div className="space-y-3 pt-1">
              <SkeletonBlock className="h-3 w-32" />
              <SkeletonBlock className="h-10 w-72 max-w-[65vw] sm:w-96" />
              <SkeletonBlock className="h-4 w-full max-w-2xl" />
            </div>
          </div>

          <div className="flex gap-3">
            <SkeletonBlock className="h-9 w-24 rounded-xl" />
            <SkeletonBlock className="h-9 w-32 rounded-xl" />
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 shadow-lg"
          >
            <div className="space-y-3">
              <SkeletonBlock className="h-3 w-28" />
              <SkeletonBlock className="h-9 w-14" />
            </div>
            <SkeletonBlock className="h-11 w-11 rounded-xl" />
          </div>
        ))}
      </section>

      <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section className="rounded-2xl border border-slate-800/70 bg-slate-900/35 p-6 shadow-xl sm:p-7">
            <div className="flex items-center gap-3">
              <SkeletonBlock className="h-10 w-10 rounded-xl" />
              <div className="space-y-2">
                <SkeletonBlock className="h-4 w-40" />
                <SkeletonBlock className="h-3 w-64 max-w-[60vw]" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-xl border border-slate-800/60 bg-[#0b0f19]/60 p-4">
                  <SkeletonBlock className="h-8 w-full" />
                  <SkeletonBlock className="mt-3 h-6 w-14" />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800/70 bg-slate-900/35 p-6 shadow-xl sm:p-7">
            <SkeletonBlock className="h-3 w-44" />
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-xl border border-slate-800/70 bg-[#0b0f19]/60 p-4">
                  <SkeletonBlock className="h-5 w-8" />
                  <SkeletonBlock className="mt-5 h-4 w-full" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="rounded-2xl border border-slate-800/70 bg-slate-900/35 p-6 shadow-xl">
          <SkeletonBlock className="h-5 w-40" />
          <div className="mt-6 space-y-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border-b border-slate-800/60 pb-4 last:border-0">
                <SkeletonBlock className="h-3 w-24" />
                <SkeletonBlock className="mt-2 h-4 w-40 max-w-full" />
              </div>
            ))}
          </div>
          <SkeletonBlock className="mt-6 h-11 w-full rounded-xl" />
        </aside>
      </section>
    </div>
  </div>
);

export default ProfileLoading;