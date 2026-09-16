'use server';

import { serverMutation } from '../core/server';

// Contact submissions are a public, unauthenticated write, so this uses
// `serverMutation` (plain POST) rather than `protectedServerFetch`, which would
// require a signed-in JWT.
export const sendContactMessage = async (messageData) => {
    const res = await serverMutation('/api/contact', messageData);

    // The backend may answer with `{ success: false, message }` on validation
    // failure, so the caller needs the body rather than a thrown error.
    return res;
};
