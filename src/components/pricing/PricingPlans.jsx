'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FiArrowRight,
    FiCheck,
    FiCheckCircle,
    FiCompass,
    FiCpu,
    FiLock,
    FiShield,
    FiSparkles,
    FiStar,
    FiUsers,
    FiX,
    FiZap,
} from 'react-icons/fi';

const premiumFeatures = [
    'Unlimited advanced prompt generations',
    'Full access to premium prompt templates',
    'Priority engineering support',
    'Early access to PromptAI updates',
    'Verified Premium profile badge',
    'Ad-free platform experience',
];

const freeFeatures = [
    'Access to basic AI model generations',
    'Standard community forum access',
    'View community member profiles',
    'Standard response times',
];

const PageShell = ({ children }) => (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#011627] px-4 pb-16 pt-36">
        <div className="pointer-events-none absolute left-1/3 top-1/4 hidden h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px] md:block" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/3 hidden h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#dc2f02]/10 blur-[140px] md:block" />
        {children}
    </main>
);

const PremiumMemberView = ({ userName }) => (
    <PageShell>
        <section className="relative z-10 w-full max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/15 via-slate-900/80 to-indigo-950/60 p-7 shadow-2xl shadow-emerald-950/20 sm:p-10"
            >
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                            <FiCheckCircle /> Premium membership active
                        </span>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                            You are all set{userName ? `, ${userName.split(' ')[0]}` : ''}.
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                            Thank you for supporting PromptAI. Your premium workspace is unlocked with full access to advanced prompts, member benefits, and priority resources.
                        </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-emerald-400/20 bg-[#071c2a]/70 p-4 backdrop-blur-sm">
                        <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300"><FiStar size={23} /></div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Your plan</p>
                            <p className="mt-0.5 font-bold text-white">Premium · Lifetime</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/45 p-6 backdrop-blur-xl">
                    <FiCpu className="text-indigo-400" size={22} />
                    <h2 className="mt-4 font-bold text-white">Premium library</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">Open every premium prompt and use the complete implementation details.</p>
                </div>
                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/45 p-6 backdrop-blur-xl">
                    <FiZap className="text-amber-300" size={22} />
                    <h2 className="mt-4 font-bold text-white">Early access</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">Stay ahead with new prompt releases and platform improvements as they arrive.</p>
                </div>
                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/45 p-6 backdrop-blur-xl">
                    <FiUsers className="text-emerald-300" size={22} />
                    <h2 className="mt-4 font-bold text-white">Priority support</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">Your membership includes priority help when you need guidance with PromptAI.</p>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 grid grid-cols-1 gap-8 rounded-3xl border border-slate-700/60 bg-slate-900/35 p-6 shadow-xl backdrop-blur-xl sm:p-8 md:grid-cols-[1.4fr_1fr]">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">Everything included</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Your Premium access</h2>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {premiumFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                                <FiCheck className="mt-0.5 shrink-0 text-emerald-400" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border border-indigo-500/20 bg-[#071c2a]/70 p-5">
                    <h2 className="flex items-center gap-2 font-bold text-white"><FiShield className="text-indigo-400" /> Membership details</h2>
                    <dl className="mt-5 space-y-4 text-sm">
                        <div className="flex items-center justify-between gap-4 border-b border-slate-700/50 pb-3"><dt className="text-slate-400">Status</dt><dd className="font-semibold text-emerald-300">Active</dd></div>
                        <div className="flex items-center justify-between gap-4 border-b border-slate-700/50 pb-3"><dt className="text-slate-400">Billing</dt><dd className="font-semibold text-slate-200">One-time payment</dd></div>
                        <div className="flex items-center justify-between gap-4"><dt className="text-slate-400">Renewal</dt><dd className="font-semibold text-slate-200">Not required</dd></div>
                    </dl>
                </div>
            </motion.div>

            <div className="relative z-10 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/all-prompts" className="btn border-none bg-indigo-600 px-6 text-white hover:bg-indigo-500"><FiCompass /> Explore premium prompts <FiArrowRight /></Link>
                <Link href="/dashboard/user/profile" className="btn border-slate-600 bg-slate-900/50 px-6 text-slate-200 hover:bg-slate-800">View account profile</Link>
            </div>
        </section>
    </PageShell>
);

const FreePlansView = () => (
    <PageShell>
        <section className="relative z-10 w-full max-w-5xl">
            <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-400"><FiZap /> Premium Route</span>
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Upgrade Your Experience</h1>
                <p className="mx-auto max-w-lg text-base text-slate-400 sm:text-lg">Unlock lifetime access to advanced tools, elite creator networks, and premium prompts on PromptAI.</p>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                <section className="flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-900/30 p-8 shadow-xl backdrop-blur-xl">
                    <div><h2 className="text-xl font-bold text-slate-300">Starter Plan</h2><p className="mt-1 text-sm text-slate-500">Explore basic utilities and standard networking tools.</p><p className="my-8 text-5xl font-extrabold text-white">$0<span className="ml-1 text-sm font-semibold text-slate-500"> / forever</span></p><FeatureList features={freeFeatures} color="text-emerald-500" /><p className="mt-3 flex gap-3 text-sm text-slate-600 line-through"><FiX className="mt-0.5" /> Advanced AI tools</p></div>
                    <button disabled className="mt-8 w-full cursor-not-allowed rounded-xl border border-slate-700/50 bg-slate-800/50 py-3 text-sm font-medium text-slate-400">Your Current Plan</button>
                </section>
                <section className="relative flex flex-col justify-between rounded-3xl border-2 border-indigo-500 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8 shadow-2xl shadow-indigo-600/5 backdrop-blur-xl">
                    <span className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-indigo-600 to-[#dc2f02] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Highly Recommended</span>
                    <div><div className="flex items-center gap-2"><h2 className="text-xl font-bold text-white">Premium Access</h2><span className="badge border-indigo-500/40 bg-indigo-500/20 text-[10px] font-bold text-indigo-400">LIFETIME</span></div><p className="mt-1 text-sm text-slate-400">Supercharge your prompt-building workflow today.</p><p className="my-8 text-5xl font-extrabold text-white">$5<span className="ml-2 text-sm font-semibold text-slate-400"> / one-time payment</span></p><FeatureList features={premiumFeatures} color="text-indigo-400" /></div>
                    <div className="mt-8 border-t border-slate-800 pt-6"><form action="/api/subscription" method="POST"><button type="submit" className="btn w-full border-none bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500">Pay Safely via Stripe <FiArrowRight /></button></form><p className="mt-4 flex justify-center gap-4 text-[11px] font-medium text-slate-500"><span className="flex items-center gap-1"><FiLock className="text-indigo-400" /> 256-bit encrypted</span><span className="flex items-center gap-1"><FiShield className="text-indigo-400" /> Stripe verified</span></p></div>
                </section>
            </div>
        </section>
    </PageShell>
);

const FeatureList = ({ features, color }) => <ul className="space-y-3 border-t border-slate-800/60 pt-6">{features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-slate-300"><FiCheck className={`mt-0.5 shrink-0 ${color}`} />{feature}</li>)}</ul>;

const PricingPlans = ({ isPremium, userName }) => isPremium ? <PremiumMemberView userName={userName} /> : <FreePlansView />;

export default PricingPlans;
