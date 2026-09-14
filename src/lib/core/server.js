import { headers } from "next/headers";
import { auth } from "../auth";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export async function getServerJWT() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) throw new Error("Unauthorized");

    // Get JWT using the server auth API.
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    return token;
}

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);

    if (!res.ok) {
        console.error(`serverFetch failed (${res.status})`, path);
        return [];
    }

    const data = await res.json();
    return data;
};

export async function protectedServerFetch(path) {
    const token = await getServerJWT();
    console.log(token, 'token');

    const res = await fetch(`${baseUrl}${path}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}

export const serverMutation = async (path, data) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return res.json();
}