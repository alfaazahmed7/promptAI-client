'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBookmark, FiCopy, FiAlertTriangle, FiCheck } from 'react-icons/fi';
import useRouter from 'next/navigation';
import toast from 'react-hot-toast';

const InteractionBar = ({ promptId, initialBookmarked, initialCopyCount, isLocked }) => {
    const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
    const [copyCount, setCopyCount] = useState(initialCopyCount);
    const [isReporting, setIsReporting] = useState(false);
    const [reportReason, setReportReason] = useState('');

    const handleBookmark = async () => {
        try {
            // Pseudo-API call implementation: await toggleBookmarkAPI(promptId);
            const newState = !isBookmarked;
            setIsBookmarked(newState);
            if (newState) {
                toast.success('Prompt added to bookmarks successfully!');
            } else {
                toast.info('Bookmark removed.');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again.');
        }
    };

    const handleReportSubmit = (e) => {
        e.preventDefault();
        if (!reportReason) return toast.error('Please pick a valid reason');
        
        // Pseudo-API call implementation: await submitReport(promptId, reportReason);
        toast.success('Report submitted. Our moderation team will review this soon.');
        setIsReporting(false);
    };

    return (
        <div className="bg-base-200 p-4 rounded-xl border border-base-content/5 shadow-md flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-6">
                <div className="text-center sm:text-left">
                    <span className="text-xs block text-base-content/50 uppercase tracking-wider font-bold">Total Copies</span>
                    <span className="text-xl font-extrabold text-primary">{copyCount}</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button 
                    onClick={handleBookmark}
                    className={`btn btn-sm sm:btn-md gap-2 rounded-xl transition-all duration-200 ${isBookmarked ? 'btn-primary' : 'btn-outline'}`}
                >
                    <FiBookmark className={isBookmarked ? 'fill-current' : ''} />
                    <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                </button>

                <button 
                    onClick={() => setIsReporting(true)}
                    className="btn btn-sm sm:btn-md btn-outline btn-error gap-2 rounded-xl"
                >
                    <FiAlertTriangle />
                    <span className="hidden sm:inline">Report</span>
                </button>
            </div>

            {/* DaisyUI reporting modal template */}
            {isReporting && (
                <div className="modal modal-open backdrop-blur-sm">
                    <div className="modal-box bg-base-200 border border-base-content/10 rounded-2xl">
                        <h3 className="font-extrabold text-lg flex items-center gap-2 text-error">
                            <FiAlertTriangle /> Report Material Block
                        </h3>
                        <form onSubmit={handleReportSubmit} className="space-y-4 mt-4">
                            <div className="form-control">
                                <label className="label font-semibold text-sm">Reason for flag</label>
                                <select 
                                    value={reportReason} 
                                    onChange={(e) => setReportReason(e.target.value)}
                                    className="select select-bordered w-full rounded-xl"
                                    required
                                >
                                    <option value="">Select a critical reason</option>
                                    <option value="Spam">Spam or Link Manipulation</option>
                                    <option value="Inappropriate Content">Inappropriate Content</option>
                                    <option value="Copyright Violation">Copyright or Intellectual property theft</option>
                                </select>
                            </div>
                            <div className="modal-action">
                                <button type="button" onClick={() => setIsReporting(false)} className="btn btn-ghost rounded-xl">Cancel</button>
                                <button type="submit" className="btn btn-error rounded-xl">Submit Violation File</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteractionBar;