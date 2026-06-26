const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const userDelete = async (userId) => {
    const res = await fetch(`${baseUrl}/api/user/delete/${userId}`, {
        method: "DELETE"
    });

    return res.json();
}