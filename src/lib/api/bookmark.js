import { serverFetch } from "../core/server"

export const getBookmarkByIdAndEmail = async (promptId, userEmail) => {
    return serverFetch(`/api/bookmark/${promptId}?userEmail=${userEmail}`);
}

export const getBookmarkByEmail = (userEmail) => {
    return serverFetch(`/api/bookmarks/${userEmail}`);
}