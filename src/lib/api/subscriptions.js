import { serverFetch } from "../core/server"

export const getAllSubscriptions = () => {
    return serverFetch('/api/all-subscriptions');
}