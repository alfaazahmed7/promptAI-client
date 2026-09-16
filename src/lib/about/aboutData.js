// Central data source for the About Us page.
//
// Every list rendered on the About page is produced by one of the exported
// functions below (instead of being declared inline in JSX) so the marketing
// copy can be swapped for API-driven data without touching the components.

export const getAboutStats = () => [
    {
        id: 'prompts',
        label: 'Published Prompts',
        value: '12,400+',
        detail: 'Engineered across 9 model families',
        accent: 'indigo',
    },
    {
        id: 'creators',
        label: 'Verified Creators',
        value: '3,150+',
        detail: 'Vetted prompt engineers worldwide',
        accent: 'amber',
    },
    {
        id: 'copies',
        label: 'Prompt Executions',
        value: '1.2M+',
        detail: 'Copies, forks and API runs to date',
        accent: 'blue',
    },
    {
        id: 'uptime',
        label: 'Delivery Uptime',
        value: '99.98%',
        detail: 'Trailing 12-month edge availability',
        accent: 'emerald',
    },
];

export const getMissionPillars = () => [
    {
        id: 'mission',
        label: 'Our Mission',
        text: 'Give every builder, from solo founders to enterprise AI teams, instant access to prompt engineering that already works in production.',
    },
    {
        id: 'vision',
        label: 'Our Vision',
        text: 'Become the trusted standard layer for generative AI instructions, where quality is verified, creators are paid fairly and results are reproducible.',
    },
    {
        id: 'promise',
        label: 'Our Promise',
        text: 'No hallucinated filler. Every listing is reviewed by internal engineers and scored by real copy and execution data before it reaches your workspace.',
    },
];

export const getCoreValues = () => [
    {
        id: 'craft',
        title: 'Engineering Over Guesswork',
        description:
            'Each prompt is benchmarked against real models before it ships. We publish structure, variables and expected output shape, never a wall of vague instructions.',
        icon: 'craft',
        accent: 'indigo',
    },
    {
        id: 'creators',
        title: 'Creators Paid Transparently',
        description:
            'Creators keep the majority of every sale with a payout ledger they can audit line by line. No hidden platform cuts, no delayed reporting.',
        icon: 'creators',
        accent: 'amber',
    },
    {
        id: 'security',
        title: 'Security by Default',
        description:
            'Role-based access control, encrypted checkout and scoped sessions protect every account. Your workspace data is never used to train third-party models.',
        icon: 'security',
        accent: 'emerald',
    },
    {
        id: 'community',
        title: 'Community Verified Signals',
        description:
            'Copy counts, ratings, bookmarks and reports build a reputation graph that surfaces the genuinely useful prompts and removes the rest.',
        icon: 'community',
        accent: 'blue',
    },
    {
        id: 'speed',
        title: 'Speed as a Feature',
        description:
            'Streaming-first rendering, edge caching and lightweight interfaces keep PromptAI responsive on any device, on any connection.',
        icon: 'speed',
        accent: 'indigo',
    },
    {
        id: 'clarity',
        title: 'Radical Clarity',
        description:
            'Pricing, licensing and refund terms are written in plain language. You always know exactly what you are buying and who owns the output.',
        icon: 'clarity',
        accent: 'amber',
    },
];

export const getMilestones = () => [
    {
        id: 'launch',
        period: 'Phase 01',
        title: 'Platform Foundation',
        description:
            'PromptAI launches as a curated prompt library with authenticated workspaces and role-aware dashboards for readers, creators and administrators.',
    },
    {
        id: 'marketplace',
        period: 'Phase 02',
        title: 'Creator Marketplace',
        description:
            'Creators gain publishing tools, performance analytics and revenue tracking, turning a static library into a living marketplace.',
    },
    {
        id: 'trust',
        period: 'Phase 03',
        title: 'Trust & Moderation Layer',
        description:
            'Reviews, bookmarking, reporting queues and admin moderation keep the catalogue accurate and safe as the community scales.',
    },
    {
        id: 'premium',
        period: 'Phase 04',
        title: 'Premium & Payments',
        description:
            'Stripe-powered subscriptions unlock lifetime premium access to advanced prompt packs, priority support and early model coverage.',
    },
    {
        id: 'now',
        period: 'Today',
        title: 'Multi-Model Intelligence',
        description:
            'PromptAI now serves prompt frameworks tuned for Midjourney, GPT, Claude and Stable Diffusion, with analytics that prove what performs.',
    },
];

export const getLeadershipTeam = () => [
    {
        id: 'product',
        name: 'Alfaaz Ahmed',
        role: 'Founder & Product Lead',
        bio: 'Sets product direction and owns the end-to-end marketplace experience, from onboarding through premium checkout.',
        focus: 'Product Strategy',
    },
    {
        id: 'engineering',
        name: 'Platform Engineering',
        role: 'Full-Stack Engineering Group',
        bio: 'Builds the API layer, authentication, payment pipeline and role-based dashboards that power every user journey.',
        focus: 'Platform Reliability',
    },
    {
        id: 'curation',
        name: 'Prompt Curation Team',
        role: 'Prompt Engineering Guild',
        bio: 'Reviews, benchmarks and rewrites submitted prompts so every published listing performs across its target models.',
        focus: 'Prompt Quality',
    },
    {
        id: 'trust',
        name: 'Trust & Safety',
        role: 'Moderation & Compliance',
        bio: 'Monitors reports, enforces licensing and keeps the marketplace free of low-quality or harmful listings.',
        focus: 'Community Integrity',
    },
];

export const getTrustBadges = () => [
    'Role-based access control',
    'Stripe-secured payments',
    'Verified creator badge',
    'Auditable payout ledger',
    'Moderated marketplace',
    'Multi-model coverage',
];

export const getFaqEntries = () => [
    {
        id: 'what',
        question: 'What exactly is PromptAI?',
        answer:
            'PromptAI is a marketplace and workspace for production-grade AI prompts. Members discover, purchase and organise prompts, while creators publish their work and track its performance through a dedicated dashboard.',
    },
    {
        id: 'who',
        question: 'Who is PromptAI built for?',
        answer:
            'Solo builders, marketing and design teams, agencies and enterprise AI groups who want reliable prompts without spending weeks on trial and error.',
    },
    {
        id: 'premium',
        question: 'How does premium membership work?',
        answer:
            'Premium is a one-time lifetime purchase handled securely through Stripe. It unlocks advanced prompt packs, priority engineering support and early access to new model coverage.',
    },
    {
        id: 'creators',
        question: 'How do creators earn on the platform?',
        answer:
            'Creators publish prompts, build reputation through ratings and copy counts, and receive transparent payouts on every sale with reporting available in their analytics dashboard.',
    },
];
