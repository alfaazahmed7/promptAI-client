import { serverFetch } from "../core/server"

export const getUserAddPrompts = (userEmail) => {
    return serverFetch(`/api/user-add-prompts?userEmail=${userEmail}`);
}