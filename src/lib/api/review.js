import { protectedServerFetch, serverFetch } from "../core/server"

export const getReviewById = async (promptId) => {
    return protectedServerFetch(`/api/review?promptId=${promptId}`);
}

export const getReviewsByEmail = async (userEmail) => {
    return protectedServerFetch(`/api/reviews/${userEmail}`);
}

export const getAllReviews = async () => {
    return serverFetch('/api/get-all-reviews');
}