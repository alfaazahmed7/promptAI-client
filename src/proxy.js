import { NextResponse } from 'next/server';
import { getUserSession } from './lib/core/session';

export async function proxy(request) {
    const session = await getUserSession(request.headers);

    if (!session) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/all-prompts/:path+", // one or more path segments only
        "/dashboard/:path*",
        "/profile/:path*",
        "/pricing/:path*",
    ],
}
