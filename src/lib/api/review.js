import { protectedServerFetch, serverFetch } from "../core/server"

export const getReviewById = async (promptId) => {
    return protectedServerFetch(`/api/review?promptId=${promptId}`);
}

export const getReviewsByEmail = async (userEmail) => {
    return protectedServerFetch(`/api/reviews/${userEmail}`);
}

export const getAllReviews = async () => {
    const res = await serverFetch('/api/get-all-reviews');

    // The backend returns a plain array, but tolerate an object/error wrapper
    // (e.g. { success, reviews }) so the homepage ".slice()" always receives a
    // real array. This is what fixes "allReviews.slice is not a function"
    // during prerendering of "/".
    if (Array.isArray(res)) return res;
    if (Array.isArray(res?.reviews)) return res.reviews;
    return [];
}