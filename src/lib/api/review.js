import { serverFetch } from "../core/server"

export const getReviewById = async (promptId) => {
    return serverFetch(`/api/review?promptId=${promptId}`);
}