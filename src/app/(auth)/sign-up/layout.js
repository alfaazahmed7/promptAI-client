// The page at this route is a Client Component (`"use client"`), so it cannot
// export `metadata` itself. This server layout exists only to attach the route's
// metadata — it renders `children` untouched, adding no markup or styling.
export const metadata = {
    title: 'Sign Up',
    description:
        'Create a free PromptAI account to save prompts, publish your own and join the community.',
    robots: { index: false, follow: false },
};

export default function SignUpLayout({ children }) {
    return children;
}
