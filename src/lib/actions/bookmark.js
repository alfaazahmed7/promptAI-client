import { serverMutation } from "../core/server"

export const addBookmark = async (bookmardData) => {
    return serverMutation('/api/bookmarks', bookmardData);
}