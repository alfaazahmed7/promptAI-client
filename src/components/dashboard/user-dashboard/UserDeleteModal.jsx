'use client';

import React from 'react';
import { FiX, FiAlertTriangle, FiTrash2 } from 'react-icons/fi';

const UserDeleteModal = ({ isOpen, onClose, prompt, onDeleteConfirm }) => {
    console.log(prompt,'prompt');
    if (!isOpen || !prompt) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity">

            {/* Modal Container */}
            <div className="bg-[#111827] border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative transform scale-100 transition-all flex flex-col">

                {/* Close Button Pin */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 p-1 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                    <FiX size={18} />
                </button>

                {/* Modal Body Warning Structure */}
                <div className="p-6 pt-8 text-center flex flex-col items-center">

                    {/* Warning Icon Halo */}
                    <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 border border-rose-500/20 shadow-lg shadow-rose-950/20">
                        <FiAlertTriangle size={24} />
                    </div>

                    {/* Typography */}
                    <h3 className="text-lg font-bold text-white">Delete Prompt Permanently?</h3>
                    <p className="text-xs text-slate-400 mt-2 max-w-sm leading-relaxed">
                        Are you sure you want to delete <strong className="text-slate-200">{prompt.title}</strong>? This action cannot be undone and will remove all metric history associated with it.
                    </p>

                    {/* Preview Badge Info */}
                    <div className="mt-4 px-3 py-1.5 bg-slate-900/60 border border-slate-800 rounded-lg text-[11px] text-slate-400 font-medium">
                        {prompt.aiTool} • {prompt.category}
                    </div>
                </div>

                {/* Action Footer Drawer */}
                <div className="px-6 py-4 bg-[#161f30] border-t border-slate-800/60 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-colors border border-slate-700 cursor-pointer"
                    >
                        Cancel, Keep
                    </button>
                    <button
                        type="button"
                        onClick={() => onDeleteConfirm(prompt)}
                        className="flex-1 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-950/20 cursor-pointer"
                    >
                        <FiTrash2 size={14} />
                        Confirm Delete
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UserDeleteModal;