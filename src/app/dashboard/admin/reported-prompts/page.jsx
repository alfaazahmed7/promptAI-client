// src/app/admin/reports/page.jsx
import ReportRow from '@/components/dashboard/admin-dashboard/ReportRow';
import { getAllReports } from '@/lib/api/reports';
import React from 'react';
import { FiAlertTriangle, FiCheckSquare, FiShield } from 'react-icons/fi';

const AdminReportedPrompts = async () => {
    const reports = await getAllReports() || [];

    // Calculate baseline admin statistics
    const totalReports = reports.length;
    const spamCount = reports.filter(r => r.reason === 'Spam').length;

    return (
        <div className="p-4 md:p-8 bg-[#0b0f19] min-h-screen text-slate-200 antialiased max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Report Moderation Queue</h1>
                <p className="text-slate-400 text-sm mt-1">Review user flagging inputs, analyze platform compliance issues, and execute moderation actions.</p>
            </div>

            {/* Admin Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
                        <FiAlertTriangle className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Active Flags</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{totalReports}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
                        <FiShield className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Spam Infractions</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{spamCount}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                        <FiCheckSquare className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Platform Status</p>
                        <p className="text-xs font-bold text-emerald-400 mt-1.5 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                            SECURE & MODERATED
                        </p>
                    </div>
                </div>
            </div>

            {/* Layout Wrapper */}
            <div className="bg-[#111827]/40 rounded-xl border border-slate-800/80 shadow-2xl overflow-visible backdrop-blur-sm">
                {/* Desktop Responsive Table View */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#111827]/90 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                <th className="py-4 px-6">Reporter</th>
                                <th className="py-4 px-6">Reason / Details</th>
                                <th className="py-4 px-6">Target Prompt ID</th>
                                <th className="py-4 px-6">Timestamp</th>
                                <th className="py-4 px-6 text-right">Moderation</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-sm">
                            {reports.map((report) => (
                                <ReportRow key={report._id?.$oid || report._id} report={report} view="desktop" />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Responsive Cards View */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden p-4 bg-[#0b0f19]">
                    {reports.map((report) => (
                        <ReportRow key={report._id?.$oid || report._id} report={report} view="mobile" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminReportedPrompts;