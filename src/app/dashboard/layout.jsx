"use client";
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className='flex min-h-screen bg-[#0b0f19] text-slate-100 antialiased font-sans relative overflow-x-hidden'>

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

                {/* Dashboard Inner Core Workspace Viewport */}
                <main className='flex-1 p-6 lg:p-10 xl:p-12 overflow-y-auto max-w-[1600px] w-full mx-auto'>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;