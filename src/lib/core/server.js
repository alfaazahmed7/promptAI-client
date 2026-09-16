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
    let res;

    // A network-level failure (backend down, DNS error, connection refused) makes
    // `fetch` reject instead of resolving. Without this try/catch the rejection
    // propagates out of the calling Server Component and takes down the whole
    // page render ("fetch failed" TypeError). We degrade to the same `[]`
    // fallback used for non-2xx responses so sections can render their empty state.
    try {
        res = await fetch(`${baseUrl}${path}`);
    } catch (error) {
        console.error(`serverFetch network error at ${path} (${baseUrl}):`, error.message);
        return [];
    }

    if (!res.ok) {
        console.error(`serverFetch failed (${res.status})`, path);
        return [];
    }

    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`serverFetch returned invalid JSON at ${path}:`, error.message);
        return [];
    }
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