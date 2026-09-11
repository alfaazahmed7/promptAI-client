const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const addBookmark = async (bookmardData) => {
    const res = await fetch(`${baseUrl}/api/bookmarks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookmardData)
    });

    return res.json();
}

export const deleteBookmarkById = async (bookmarkId) => {
    const res = await fetch(`${baseUrl}/api/bookmark/${bookmarkId}`, {
        method: 'DELETE',
    });

    return res.json();
}