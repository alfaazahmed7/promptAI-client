'use server';

import { getServerJWT } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const addReview = async (reviewData) => {
    const token = await getServerJWT();
    const res = await fetch(`${baseUrl}/api/review`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(reviewData)
    });

    return res.json();
}