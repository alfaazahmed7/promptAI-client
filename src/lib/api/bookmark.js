import { serverFetch } from "../core/server"

export const getBookmark = async (promptId) => {
    return serverFetch(`/api/bookmarks/${promptId}`);
}