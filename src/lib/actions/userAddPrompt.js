'use server';

import { getServerJWT } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const userAddPrompt = async (promptData) => {
    const token = await getServerJWT();
    const res = await fetch(`${baseUrl}/api/user-add-prompt`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(promptData)
    });

    return res.json();
}

export const updateUserAddPromptStatus = async (promptId) => {
    const token = await getServerJWT();
    const res = await fetch(`${baseUrl}/api/update-user-add-prompt`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promptId })
    });

    return res.json();
}

export const updateUserAddPromptRejectionStatus = async (promptId, feedbackRemarks) => {
    const token = await getServerJWT();
    const res = await fetch(`${baseUrl}/api/user-add-prompt-rejection-status`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ promptId, feedbackRemarks })
    });

    return res.json();
}

export const deleteUserAddPrompt = async (promptId) => {
    const token = await getServerJWT();
    const res = await fetch(`${baseUrl}/api/delete-user-add-prompt/${promptId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    return res.json();
}