const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const userModalEditData = async (promptId, data) => {
    const res = await fetch(`${baseUrl}/api/user-edit-modal/${promptId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    return res.json();
}