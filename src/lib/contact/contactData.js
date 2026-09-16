// Central data source for the Contact Us page.
//
// Mirrors the About page convention (`src/lib/about/aboutData.js`): every list
// rendered on the page is produced by one of the exported functions below
// instead of being declared inline in JSX, so the copy can be swapped for
// API-driven data without touching the section components.

export const getContactChannels = () => [
    {
        id: 'sales',
        title: 'Sales & Partnerships',
        description:
            'Talk through team seats, volume licensing or a custom prompt pipeline for your organisation.',
        email: 'sales@promptai.com',
        response: 'Replies within 1 business day',
        icon: 'sales',
        accent: 'indigo',
    },
    {
        id: 'support',
        title: 'Technical Support',
        description:
            'Account access, checkout issues, prompt delivery or anything blocking you inside the workspace.',
        email: 'support@promptai.com',
        response: 'Replies within a few hours',
        icon: 'support',
        accent: 'emerald',
    },
    {
        id: 'creators',
        title: 'Creator Helpdesk',
        description:
            'Submissions, review feedback, payouts and analytics for prompt engineers publishing on PromptAI.',
        email: 'creators@promptai.com',
        response: 'Replies within 2 business days',
        icon: 'creators',
        accent: 'amber',
    },
    {
        id: 'press',
        title: 'Press & Media',
        description:
            'Brand assets, interviews, product data and comment requests for journalists and analysts.',
        email: 'press@promptai.com',
        response: 'Replies within 3 business days',
        icon: 'press',
        accent: 'blue',
    },
];

export const getSupportTopics = () => [
    { value: 'general', label: 'General enquiry' },
    { value: 'sales', label: 'Sales & team licensing' },
    { value: 'technical', label: 'Technical issue' },
    { value: 'billing', label: 'Billing & premium access' },
    { value: 'creator', label: 'Creator or payout question' },
    { value: 'report', label: 'Report a listing' },
    { value: 'press', label: 'Press & media' },
];

export const getContactFaqEntries = () => [
    {
        id: 'response-time',
        question: 'How quickly will I hear back?',
        answer:
            'Support requests are answered within a few hours on business days. Sales, creator and press enquiries are routed to a specialist and typically answered within one to three business days.',
    },
    {
        id: 'account-specific',
        question: 'Can you help with a problem on my account?',
        answer:
            'Yes. Include the email address tied to your PromptAI account and, where relevant, the prompt or order reference. Never send passwords, card numbers or API keys through this form.',
    },
    {
        id: 'refunds',
        question: 'Where do I ask about a refund or billing charge?',
        answer:
            'Pick "Billing & premium access" as your topic. Premium is a one-time lifetime purchase processed through Stripe, and our team will verify the transaction before any adjustment is made.',
    },
    {
        id: 'creators-contact',
        question: 'I am a creator. Where should I send submission questions?',
        answer:
            'Use the creator topic so the message reaches the curation guild directly. They can explain review feedback, listing standards and payout reporting for your published prompts.',
    },
];

export const getSupportHours = () => [
    { id: 'weekdays', label: 'Monday - Friday', value: '9:00 - 18:00 UTC' },
    { id: 'saturday', label: 'Saturday', value: '10:00 - 14:00 UTC' },
    { id: 'sunday', label: 'Sunday', value: 'Closed' },
];

export const getOfficeLocations = () => [
    {
        id: 'hq',
        label: 'Headquarters',
        lines: ['PromptAI Corp.', 'Level 12, Innovation Tower', 'Dhaka 1212, Bangladesh'],
    },
    {
        id: 'remote',
        label: 'Remote Team',
        lines: ['Engineering, curation and trust', 'operations distributed across', '6 countries and 4 time zones.'],
    },
];

export const getContactBadges = () => [
    'No spam, ever',
    'Human replies only',
    'Encrypted transport',
    'Sub-24h support SLA',
    'Creator-first payouts',
    'GDPR-aligned handling',
];
