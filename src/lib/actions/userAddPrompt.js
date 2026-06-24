import { serverMutation } from "../core/server"

export const userAddPrompt = (promptData) => {
    return serverMutation('/api/user-add-prompt', promptData);
}