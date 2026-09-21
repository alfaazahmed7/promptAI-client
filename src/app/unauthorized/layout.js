// The page at this route is a Client Component (`"use client"`), so it cannot
// export `metadata` itself. This server layout exists only to attach the route's
// metadata — it renders `children` untouched, adding no markup or styling.
export const metadata = {
    title: 'Unauthorized',
    description: 'Your account does not have permission to view this PromptAI page.',
    robots: { index: false, follow: false },
};

export default function UnauthorizedLayout({ children }) {
    return children;
}
