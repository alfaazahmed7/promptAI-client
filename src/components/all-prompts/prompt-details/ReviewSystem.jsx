'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiStar, FiLock, FiMessageSquare } from 'react-icons/fi';

const ReviewSystem = ({ promptId, reviews, isLocked, user }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [localReviews, setLocalReviews] = useState(reviews);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (!user) return toast.error('You must sign in to submit evaluations.');
        if (isLocked) return toast.error('Action Restricted.');

        const newReview = {
            name: user.name || 'Anonymous User',
            email: user.email,
            rating: Number(rating),
            date: new Date().toLocaleDateString(),
            comment
        };

        setLocalReviews([newReview, ...localReviews]);
        setComment('');
        toast.success('Review processing loop complete! Review recorded.');
    };

    return (
        <div className="bg-base-200 p-6 rounded-2xl border border-base-content/5 shadow-xl space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2 text-primary">
                <FiMessageSquare /> Feedback & Ratings
            </h3>

            {/* Write Form Segment */}
            {isLocked ? (
                <div className="p-4 bg-base-300 rounded-xl text-center space-y-2 border border-dashed border-base-content/10">
                    <FiLock className="mx-auto text-base-content/40" size={20} />
                    <p className="text-xs text-base-content/60 font-medium">Review console locked for free tier accounts.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmitReview} className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">Your Rating:</span>
                        <div className="rating rating-sm gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    name="rating-star"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked={rating === star}
                                    onChange={() => setRating(star)}
                                />
                            ))}
                        </div>
                    </div>
                    <textarea
                        className="textarea textarea-bordered w-full h-20 text-sm rounded-xl focus:textarea-primary"
                        placeholder="Share your evaluation of this prompt's performance matrix..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-sm btn-primary w-full rounded-xl">
                        Publish Review
                    </button>
                </form>
            )}

            {/* Historical list render element */}
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {localReviews.length === 0 ? (
                    <p className="text-xs text-center text-base-content/50 py-4">No validation metrics submitted yet.</p>
                ) : (
                    localReviews.map((rev, index) => (
                        <div key={index} className="p-3 bg-base-300 rounded-xl border border-base-content/5 text-xs space-y-1">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-base-content/90">{rev.name}</span>
                                <span className="text-[10px] opacity-50">{rev.date}</span>
                            </div>
                            <div className="flex text-orange-400 gap-0.5 my-1">
                                {Array.from({ length: rev.rating }).map((_, i) => (
                                    <FiStar key={i} className="fill-current" size={10} />
                                ))}
                            </div>
                            <p className="text-base-content/70 italic leading-normal">{rev.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ReviewSystem;