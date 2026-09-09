"use client";
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Nunito_Sans } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const Nunito_Sans_Font = Nunito_Sans({
    subsets: ["latin"],
    weight: "400",
});

const DashboardLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className={`${Nunito_Sans_Font.className} dashboard-shell flex h-screen bg-[#0b0f19] text-slate-100 antialiased font-sans relative overflow-hidden`}>

            {/* Sidebar Component */}
            <DashboardSidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            {/* Main Application Window Canvas */}
            <div className='flex-1 flex flex-col min-w-0 w-full'>

                {/* Mobile Screen Navigation Top Bar */}
                <header className="lg:hidden w-full h-16 flex items-center justify-between px-4 border-b border-slate-800/60 bg-[#0f1422]/90 backdrop-blur sticky top-0 z-30">
                    <div className="flex items-center gap-3">
                        {/* Clicking this toggles the side panel visible on smaller devices */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="p-2 -ml-2 text-slate-400 hover:text-white cursor-pointer transition-colors"
                        >
                            <FiMenu size={22} />
                        </button>
                        <Link href="/">
                            <div className="text-2xl font-semibold text-white tracking-wide">
                                Prompt<span className="text-[#dc2f02] font-extrabold">AI</span>
                            </div>
                        </Link>
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400">
                        Dashboard
                    </span>
                </header>

                {/* Dashboard Inner Core Workspace Viewport.
                    The root SmoothScrollProvider (SmoothScrollProvider.jsx) targets the
                    document/window scroll, but the dashboard scrolls inside this nested
                    <main> (window never scrolls here). With allowNestedScroll the root
                    Lenis defers nested scrollables to native scrolling, which is why the
                    dashboard felt non-smooth. So we spawn a dedicated Lenis instance on
                    this scroll container to smooth-scroll it directly. */}
                <main className='dashboard-main flex-1 flex flex-col min-w-0 min-h-0'>
                    <ReactLenis
                        options={{ lerp: 0.1 }}
                        className='dashboard-viewport flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 lg:p-8 xl:p-10'
                    >
                        {children}
                    </ReactLenis>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;