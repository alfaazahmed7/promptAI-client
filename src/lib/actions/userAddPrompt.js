import { serverMutation } from "../core/server"
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const userAddPrompt = (promptData) => {
    return serverMutation('/api/user-add-prompt', promptData);
}

export const updateUserAddPromptStatus = async (promptId) => {
    const res = await fetch(`${baseUrl}/api/update-user-add-prompt`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promptId })
    });

    return res.json();
}