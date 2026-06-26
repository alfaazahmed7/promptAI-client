'use client';

import { UserChangeRole } from '@/lib/actions/userChangeRole';
import { userDelete } from '@/lib/actions/userDelete';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiAlertTriangle, FiX } from 'react-icons/fi';

// --- GENERIC CONFIRMATION MODAL ---
const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, subMessage, confirmVariant = 'blue' }) => {
    if (!isOpen) return null;

    const btnStyles = {
        blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20',
        rose: 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20'
    };

    const iconStyles = {
        blue: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm text-left font-normal normal-case tracking-normal">
            <div className="bg-[#111827] border border-slate-800 w-full max-w-md rounded-xl p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 transition-colors"
                >
                    <FiX className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg border ${iconStyles[confirmVariant] || iconStyles.blue}`}>
                        <FiAlertTriangle className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>

                <div className="text-sm text-slate-400 space-y-2 mb-6">
                    <p>{message}</p>
                    {subMessage && (
                        <p className="bg-[#0b0f19] p-3 rounded-lg border border-slate-800/80">
                            {subMessage}
                        </p>
                    )}
                </div>

                <div className="flex space-x-3 justify-end text-sm font-medium">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-4 py-2 text-white rounded-lg shadow-lg transition-all cursor-pointer ${btnStyles[confirmVariant] || btnStyles.blue}`}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- MAIN ROW COMPONENT ---
const UserRow = ({ user, view }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const dropdownRef = useRef(null);

    const availableRoles = ['user', 'creator', 'admin'];
    const router = useRouter();

    const userData = authClient.useSession();
    const userDetails = userData.data?.user;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const userId = user._id?.$oid || user._id;

    // Handle Role Changes
    const handleRoleSelect = (role) => {
        if (role === user.role) {
            setIsDropdownOpen(false);
            return;
        }
        setSelectedRole(role);
        setIsRoleModalOpen(true);
        setIsDropdownOpen(false);
    };

    const handleConfirmRoleChange = async () => {
        const res = await UserChangeRole(userId, selectedRole);
        if (res.modifiedCount > 0) {
            router.refresh();
            toast.success(`Updated user ${user.email} role to ${selectedRole}`);
        } else {
            toast.error('No document was updated');
        }
        setIsRoleModalOpen(false);
    };

    // Handle User Deletion
    const handleConfirmDelete = async () => {
        // Guard against an admin deleting themselves if security logic allows it here
        if (userDetails && userDetails.email === user.email) {
            toast.error("You cannot delete your own account from the dashboard!");
            setIsDeleteModalOpen(false);
            return;
        }

        const res = await userDelete(userId);
        if (res.deletedCount > 0 || res.success) {
            router.refresh();
            toast.success(`User ${user.email} has been successfully deleted.`);
        } else {
            toast.error(res.message || 'Failed to delete user account');
        }
        setIsDeleteModalOpen(false);
    };

    const getRoleStyles = (role) => {
        switch (role) {
            case 'admin': return 'bg-rose-500/10 text-rose-400 ring-rose-500/20';
            case 'creator': return 'bg-indigo-500/10 text-indigo-400 ring-indigo-500/20';
            default: return 'bg-blue-500/10 text-blue-400 ring-blue-500/20';
        }
    };

    // --- DESKTOP RENDER VIEW ---
    if (view === 'desktop') {
        return (
            <tr className="hover:bg-[#111827]/40 transition-colors group">
                <td className="py-4 px-6 flex items-center space-x-3">
                    <img
                        src={user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover bg-[#0b0f19] ring-2 ring-slate-800"
                    />
                    <div>
                        <h2 className="font-medium text-slate-200 group-hover:text-white transition-colors">{user.name}</h2>
                        <p className="text-xs text-slate-500 font-mono tracking-tight">{user.email}</p>
                    </div>
                </td>
                <td className="py-4 px-5 text-slate-400">
                    {user.createdAt?.$date ? new Date(user.createdAt.$date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
                </td>
                <td className="py-4 px-5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase border ${user.plan === 'pro' || user.plan === 'premium' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800/50 text-slate-400 border-slate-700/50'
                        }`}>
                        {user.plan || 'free'}
                    </span>
                </td>
                <td className="py-4 px-5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold capitalize ring-1 ring-inset ${getRoleStyles(user.role)}`}>
                        {user.role}
                    </span>
                </td>
                <td className="py-4 px-5 text-right overflow-visible">
                    <div className="flex items-center justify-end space-x-1 relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`p-2 rounded-lg transition-all cursor-pointer ${isDropdownOpen ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:text-blue-400 hover:bg-blue-500/10'}`}
                        >
                            <FiEdit2 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsDeleteModalOpen(true)}
                            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all cursor-pointer"
                        >
                            <FiTrash2 className="w-4 h-4" />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-10 top-0 mt-1 w-36 bg-[#111827] border border-slate-800 rounded-lg shadow-xl z-40 py-1 overflow-hidden text-left">
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider px-3 py-1.5 border-b border-slate-800/60">Assign Role</p>
                                {availableRoles.map((role) => (
                                    <button
                                        key={role}
                                        onClick={() => handleRoleSelect(role)}
                                        className={`w-full text-left px-3 py-2 text-xs capitalize transition-colors cursor-pointer ${user.role === role ? 'text-blue-400 bg-blue-500/5 font-medium' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                            }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Modals Container */}
                    <ConfirmationModal
                        isOpen={isRoleModalOpen}
                        onClose={() => setIsRoleModalOpen(false)}
                        onConfirm={handleConfirmRoleChange}
                        title="Confirm Role Change"
                        message={<>Are you sure you want to alter permissions for <span className="text-white font-medium">{user.name}</span>?</>}
                        subMessage={<>Change role from <span className="text-slate-300 font-semibold uppercase">{user.role}</span> to <span className="text-blue-400 font-semibold uppercase">{selectedRole}</span>.</>}
                        confirmVariant="blue"
                    />

                    <ConfirmationModal
                        isOpen={isDeleteModalOpen}
                        onClose={() => setIsDeleteModalOpen(false)}
                        onConfirm={handleConfirmDelete}
                        title="Delete User Account"
                        message={<>Are you absolutely sure you want to delete <span className="text-white font-medium">{user.name}</span>?</>}
                        subMessage="Warning: This action is permanent. All database information related to this user profile will be scrubbed cleanly."
                        confirmVariant="rose"
                    />
                </td>
            </tr>
        );
    }

    // --- MOBILE RENDER VIEW ---
    return (
        <div className="bg-[#111827]/60 p-5 rounded-xl border border-slate-800/80 shadow-lg flex flex-col space-y-4 relative">
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
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold capitalize ${getRoleStyles(user.role).split(' ')[0]} ${getRoleStyles(user.role).split(' ')[1]}`}>
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

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800/60 relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex-1 py-2 px-3 border rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${isDropdownOpen ? 'bg-blue-500/20 border-blue-500/40 text-blue-400' : 'border-slate-800 text-slate-300 bg-[#0b0f19] hover:bg-[#111827]'
                        }`}
                >
                    <FiEdit2 className="w-3.5 h-3.5" /> Edit Role
                </button>
                <button
                    onClick={() => setIsDeleteModalOpen(true)}
                    className="flex-1 py-2 px-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-rose-500/20 transition-colors"
                >
                    <FiTrash2 className="w-3.5 h-3.5" /> Delete
                </button>

                {isDropdownOpen && (
                    <div className="absolute left-0 bottom-full mb-2 w-full bg-[#111827] border border-slate-800 rounded-lg shadow-xl z-40 py-1 overflow-hidden">
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider px-3 py-1.5 border-b border-slate-800/60">Assign New Role</p>
                        {availableRoles.map((role) => (
                            <button
                                key={role}
                                onClick={() => handleRoleSelect(role)}
                                className={`w-full text-left px-4 py-2.5 text-xs capitalize transition-colors ${user.role === role ? 'text-blue-400 bg-blue-500/5 font-medium' : 'text-slate-300 hover:bg-slate-800'
                                    }`}
                            >
                                {role}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Modals Container */}
            <ConfirmationModal
                isOpen={isRoleModalOpen}
                onClose={() => setIsRoleModalOpen(false)}
                onConfirm={handleConfirmRoleChange}
                title="Confirm Role Change"
                message={<>Are you sure you want to alter permissions for <span className="text-white font-medium">{user.name}</span>?</>}
                subMessage={<>Change role from <span className="text-slate-300 font-semibold uppercase">{user.role}</span> to <span className="text-blue-400 font-semibold uppercase">{selectedRole}</span>.</>}
                confirmVariant="blue"
            />

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete User Account"
                message={<>Are you absolutely sure you want to delete <span className="text-white font-medium">{user.name}</span>?</>}
                subMessage="Warning: This action is permanent. All database information related to this user profile will be scrubbed cleanly."
                confirmVariant="rose"
            />
        </div>
    );
};

export default UserRow;