const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const addReview = async (reviewData) => {
    const res = await fetch(`${baseUrl}/api/review`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
    });

    return res.json();
}