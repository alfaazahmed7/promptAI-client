'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiLock, FiLogIn, FiArrowLeft, FiAlertOctagon } from 'react-icons/fi';
import { HiOutlineKey } from 'react-icons/hi';

const UnauthorizedPage = () => {
    const router = useRouter();

    return (
        <div className="bg-[#0B1220] min-h-screen w-full flex flex-col items-center justify-center relative px-4 overflow-hidden antialiased select-none">

            {/* Cyber Glow Security Gradients */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Core Box Container */}
            <div className="relative text-center max-w-md w-full z-10 flex flex-col items-center">

                {/* Shield & Key Graphic Configuration */}
                <div className="relative flex items-center justify-center mb-6">
                    {/* Pulsing Outer Status Rings */}
                    <span className="absolute w-32 h-32 rounded-full bg-rose-500/5 animate-ping [animation-duration:2.5s]" />

                    {/* Main Hex/Box Ring Node */}
                    <div className="relative w-20 h-20 rounded-2xl bg-[#131c2e] border border-rose-500/20 shadow-2xl flex items-center justify-center text-rose-400 group transition-all duration-300">
                        <FiLock className="text-3xl" />

                        {/* Orbiting Badge Element */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-rose-900 border border-rose-500/40 flex items-center justify-center text-white text-[10px]">
                            <FiAlertOctagon />
                        </div>
                    </div>
                </div>

                {/* Status Variable Identification Banner */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-mono uppercase tracking-widest mb-4">
                    <span>Status 401: Scope Restriction</span>
                </div>

                <h1 className="text-2xl font-extrabold tracking-tight text-white mb-2">
                    Access <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">Denied</span>
                </h1>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-8">
                    Your current session handshake lacks the verification signatures or administrative role clearances required to poll this route address.
                </p>

                {/* Simulated Server Policy Reason Terminal */}
                <div className="w-full bg-slate-950/50 rounded-xl border border-slate-900/80 p-4 mb-8 text-left font-mono text-[11px] leading-relaxed text-slate-500 shadow-inner">
                    <p className="text-rose-400/80"><span className="text-slate-600">&gt;</span> AUTH_SCOPE_VERIFICATION: FAILED</p>
                    <p><span className="text-slate-600">&gt;</span> Required: [tier_2_pro || sys_admin]</p>
                    <p><span className="text-slate-600">&gt;</span> Action: Token context window isolated.</p>
                </div>

                {/* Interactive Routing Operations */}
                <div className="flex flex-col gap-2.5 w-full">

                    {/* Primary Step: Re-authenticate */}
                    <Link
                        href="/login"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-lg transition-all duration-200"
                    >
                        <FiLogIn className="text-sm" />
                        Re-authenticate Token
                    </Link>

                    {/* Secondary Navigation Options */}
                    <div className="grid grid-cols-2 gap-2.5">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#131c2e] hover:bg-slate-800 text-slate-300 border border-slate-800/80 transition-all"
                        >
                            <FiArrowLeft className="text-slate-400" />
                            Step Back
                        </button>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#131c2e] hover:bg-slate-800 text-slate-300 border border-slate-800/80 transition-all"
                        >
                            <HiOutlineKey className="text-slate-400 text-sm" />
                            Main Panel
                        </Link>
                    </div>

                </div>

            </div>

            {/* Micro Tech Branding Badge */}
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                <span className="text-[9px] font-mono tracking-widest uppercase text-slate-700">
                    Security Layer Matrix • Node Shield Active
                </span>
            </div>

        </div>
    );
};

export default UnauthorizedPage;