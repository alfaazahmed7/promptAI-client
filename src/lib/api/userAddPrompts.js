import { serverFetch } from "../core/server"

export const getUserAddPrompts = (userEmail) => {
    return serverFetch(`/api/user-add-prompts?userEmail=${userEmail}`);
}

export const getAllUserAddPrompts = async () => {
    return serverFetch('/api/user-all-add-prompts');
}