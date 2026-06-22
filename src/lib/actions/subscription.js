import { serverMutation } from "../core/server"

export const createSubscription = async (data) => {
    return serverMutation('/api/subscription', data);
}