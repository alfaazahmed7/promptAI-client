import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";

export const getUserSession = async (requestHeaders) => {
    const session = await auth.api.getSession({
        headers: requestHeaders || await headers()
    });

    return session?.user || null;
}

export const requireRole = async (role) => {
    const user = await getUserSession();
    if (user.role !== role) {
        return redirect('/unauthorized');
    }
}