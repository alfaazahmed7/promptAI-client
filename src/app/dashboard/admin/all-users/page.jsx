import { getUsers } from '@/lib/api/users';
import React from 'react';
import {
    FiUsers,
    FiUserCheck,
    FiShield,
    FiTrash2,
    FiEdit2,
    FiSearch,
    FiFilter
} from 'react-icons/fi';

const AdminAllUsersPage = async () => {
    const users = await getUsers() || [];

    // Quick stats calculations
    const totalUsers = users.length;
    const admins = users.filter(u => u.role === 'admin').length;
    const creators = users.filter(u => u.role === 'creator').length;

    return (
        // Primary Dashboard Background: #0b0f19
        <div className="p-4 md:p-8 bg-[#0b0f19] min-h-screen text-slate-200 antialiased max-w-7xl mx-auto">

            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">All Users</h1>
                <p className="text-slate-400 text-sm mt-1">Manage user accounts, roles, and platform permissions for promptAI.</p>
            </div>

            {/* Quick Stats Overview Widgets - Using subtle dark card colors */}
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

            {/* Utility Bar: Search & Filter */}
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

            {/* Desktop Table View (Hidden on Mobile) */}
            <div className="hidden md:block bg-[#111827]/40 rounded-xl border border-slate-800/80 shadow-2xl overflow-hidden backdrop-blur-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#111827]/90 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            <th className="py-4 px-6">User Details</th>
                            <th className="py-4 px-6">Joined Date</th>
                            <th className="py-4 px-6">Plan</th>
                            <th className="py-4 px-6">Role</th>
                            <th className="py-4 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-sm">
                        {users.map((user) => (
                            <tr key={user._id?.$oid || user.email} className="hover:bg-[#111827]/40 transition-colors group">
                                {/* Profile Info */}
                                <td className="py-4 px-6 flex items-center space-x-3">
                                    <img
                                        src={user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
                                        alt={user.name}
                                        className="w-10 h-10 rounded-full object-cover bg-[#0b0f19] ring-2 ring-slate-800 group-hover:ring-slate-700 transition-all"
                                    />
                                    <div>
                                        <h2 className="font-medium text-slate-200 group-hover:text-white transition-colors">{user.name}</h2>
                                        <p className="text-xs text-slate-500 font-mono tracking-tight">{user.email}</p>
                                    </div>
                                </td>

                                {/* Registration Date */}
                                <td className="py-4 px-6 text-slate-400">
                                    {user.createdAt?.$date ? new Date(user.createdAt.$date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    }) : 'N/A'}
                                </td>

                                {/* Plan Badge */}
                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide border ${user.plan === 'pro' || user.plan === 'premium'
                                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                            : 'bg-slate-800/50 text-slate-400 border-slate-700/50'
                                        }`}>
                                        {user.plan || 'free'}
                                    </span>
                                </td>

                                {/* Role Badge */}
                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold capitalize tracking-wide ${user.role === 'admin'
                                            ? 'bg-rose-500/10 text-rose-400 ring-1 ring-inset ring-rose-500/20'
                                            : user.role === 'creator'
                                                ? 'bg-indigo-500/10 text-indigo-400 ring-1 ring-inset ring-indigo-500/20'
                                                : 'bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-500/20'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>

                                {/* Action Buttons */}
                                <td className="py-4 px-6 text-right">
                                    <div className="flex items-center justify-end space-x-1">
                                        <button
                                            title="Change Role"
                                            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                                        >
                                            <FiEdit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            title="Delete User"
                                            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"
                                        >
                                            <FiTrash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards Layout (Hidden on Desktop) */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {users.map((user) => (
                    <div key={user._id?.$oid || user.email} className="bg-[#111827]/60 p-5 rounded-xl border border-slate-800/80 shadow-lg flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                            <img
                                src={user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
                                alt={user.name}
                                className="w-12 h-12 rounded-full object-cover bg-[#0b0f19] ring-2 ring-slate-800"
                            />
                            <div className="overflow-hidden">
                                <h2 className="font-semibold text-slate-200 truncate">{user.name}</h2>
                                <p className="text-xs text-slate-500 font-mono truncate">{user.email}</p>
                            </div>
                        </div>

                        <hr className="border-slate-800/60" />

                        <div className="grid grid-cols-2 gap-y-2 text-xs">
                            <div>
                                <span className="text-slate-500 block font-medium uppercase tracking-wider mb-1">Role</span>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold capitalize ${user.role === 'admin' ? 'bg-rose-500/10 text-rose-400' : user.role === 'creator' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-blue-500/10 text-blue-400'
                                    }`}>
                                    {user.role}
                                </span>
                            </div>
                            <div>
                                <span className="text-slate-500 block font-medium uppercase tracking-wider mb-1">Plan</span>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium uppercase border ${user.plan === 'pro' || user.plan === 'premium' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800/50 text-slate-400 border-slate-700/50'
                                    }`}>
                                    {user.plan || 'free'}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800/60">
                            <button className="flex-1 py-2 px-3 border border-slate-800 text-slate-300 bg-[#0b0f19] rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-[#111827] transition-colors">
                                <FiEdit2 className="w-3.5 h-3.5" /> Edit Role
                            </button>
                            <button className="flex-1 py-2 px-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-rose-500/20 transition-colors">
                                <FiTrash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AdminAllUsersPage;