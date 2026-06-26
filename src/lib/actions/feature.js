const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;


export const toggleFeature = async (promptId) => {
    const res = await fetch(`${baseUrl}/api/user-add-prompt-feature`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ promptId })
    });

    return res.json();
}