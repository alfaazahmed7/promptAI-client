const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const UserChangeRole = async (userId, newRole) => {
    const res = await fetch(`${baseUrl}/api/admin/user`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId,
            newRole
        })
    });

    return res.json();
}