// The page at this route is a Client Component (`"use client"`), so it cannot
// export `metadata` itself. This server layout exists only to attach the route's
// metadata — it renders `children` untouched, adding no markup or styling.
export const metadata = {
    title: 'Sign In',
    description: 'Sign in to your PromptAI account to access your saved prompts and workspace.',
    robots: { index: false, follow: false },
};

export default function SignInLayout({ children }) {
    return children;
}
