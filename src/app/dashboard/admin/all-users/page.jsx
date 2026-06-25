// src/app/admin/users/page.jsx (or your specific path)
import UserRow from '@/components/dashboard/admin-dashboard/UserRow';
import { getUsers } from '@/lib/api/users';
import React from 'react';
import { FiUsers, FiUserCheck, FiShield, FiSearch, FiFilter } from 'react-icons/fi';

const AdminAllUsersPage = async () => {
    const users = await getUsers() || [];

    const totalUsers = users.length;
    const admins = users.filter(u => u.role === 'admin').length;
    const creators = users.filter(u => u.role === 'creator').length;

    return (
        <div className="p-4 md:p-8 bg-[#0b0f19] min-h-screen text-slate-200 antialiased max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">All Users</h1>
                <p className="text-slate-400 text-sm mt-1">Manage user accounts, roles, and platform permissions for promptAI.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                        <FiUsers className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Users</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{totalUsers}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
                        <FiUserCheck className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Creators</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{creators}</p>
                    </div>
                </div>

                <div className="bg-[#111827]/60 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 shadow-lg flex items-center space-x-4">
                    <div className="p-3 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
                        <FiShield className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Administrators</p>
                        <p className="text-2xl font-bold text-white mt-0.5">{admins}</p>
                    </div>
                </div>
            </div>

            {/* Utility Bar */}
            {/* <div className="bg-[#111827]/80 p-4 rounded-t-xl border-x border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="relative w-full sm:w-72">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full bg-[#0b0f19] text-slate-200 pl-9 pr-4 py-2 border border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 transition-all placeholder:text-slate-600"
                        disabled
                    />
                </div>
                <button className="w-full sm:w-auto px-4 py-2 border border-slate-800 bg-[#0b0f19] text-slate-400 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#111827] cursor-not-allowed transition-colors">
                    <FiFilter /> Filter
                </button>
            </div> */}

            {/* Layout Wrapper handles rendering rows dynamically */}
            <div className="bg-[#111827]/40 rounded-xl border border-slate-800/80 shadow-2xl overflow-visible backdrop-blur-sm">
                {/* Desktop View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#111827]/90 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                <th className="py-4 px-6">User Details</th>
                                <th className="py-4 px-1">Joined Date</th>
                                <th className="py-4 px-6">Plan</th>
                                <th className="py-4 px-6">Role</th>
                                <th className="py-4 px-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-sm">
                            {users.map((user) => (
                                <UserRow key={user._id?.$oid || user.email} user={user} view="desktop" />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="grid grid-cols-1 gap-4 md:hidden p-4 bg-[#0b0f19]">
                    {users.map((user) => (
                        <UserRow key={user._id?.$oid || user.email} user={user} view="mobile" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminAllUsersPage;