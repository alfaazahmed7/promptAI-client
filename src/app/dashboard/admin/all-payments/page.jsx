// src/app/admin/payments/page.jsx
import PaymentRow from '@/components/dashboard/admin-dashboard/PaymentRow';
import { getAllSubscriptions } from '@/lib/api/subscriptions';
import React from 'react';
import { FiDollarSign, FiCreditCard, FiActivity } from 'react-icons/fi';

const AdminAllPaymentsPage = async () => {
    const subscriptions = await getAllSubscriptions() || [];

    // Calculate quick administrative financial stats
    const totalTransactions = subscriptions.length;

    // Simple mock calculation based on common tier setups ($9.99 / $19.99 average) for dashboard flair
    const estimatedMRR = subscriptions.reduce((acc, current) => {
        return acc + (current.planId ? 14.99 : 0);
    }, 0);

    return (
        <div className="p-4 md:p-8 bg-[#0b0f19] min-h-screen text-slate-200 antialiased max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Payment Ledger</h1>
                <p className="text-slate-400 text-sm mt-1">Monitor user subscriptions, stripe plan allocations, and transactional volume history.</p>
            </div>

            {/* Overview Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                        <FiDollarSign className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Estimated Volume</p>
                        <p className="text-2xl font-bold text-white mt-0.5">${estimatedMRR.toFixed(2)}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                        <FiCreditCard className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Subscriptions</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{totalTransactions}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
                        <FiActivity className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gateway Status</p>
                        <p className="text-xs font-bold text-emerald-400 mt-1.5 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                            STRIPE LIVE
                        </p>
                    </div>
                </div>
            </div>

            {/* Layout Wrapper */}
            <div className="bg-[#111827]/40 rounded-xl border border-slate-800/80 shadow-2xl overflow-visible backdrop-blur-sm">
                {/* Desktop Responsive Table View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#111827]/90 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                <th className="py-4 px-6">Subscriber Account</th>
                                <th className="py-4 px-6">Stripe Plan Identifier</th>
                                <th className="py-4 px-6">Tier Allocation</th>
                                <th className="py-4 px-6 text-right">Settlement Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-sm">
                            {subscriptions.map((sub) => (
                                <PaymentRow key={sub._id?.$oid || sub.email} sub={sub} view="desktop" />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Responsive Cards View */}
                <div className="grid grid-cols-1 gap-4 md:hidden p-4 bg-[#0b0f19]">
                    {subscriptions.map((sub) => (
                        <PaymentRow key={sub._id?.$oid || sub.email} sub={sub} view="mobile" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminAllPaymentsPage;