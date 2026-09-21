import { getUserSession } from '@/lib/core/session';
import PricingPlans from '@/components/pricing/PricingPlans';

export const metadata = {
    title: 'Pricing',
    description:
        'Compare PromptAI plans and unlock premium AI prompts, full usage instructions and unlimited access to the curated prompt library.',
};

const PricingPage = async () => {
    const user = await getUserSession();
    console.log(user, 'user');
    const isPremium = user?.plan?.toLowerCase() === 'premium';

    return <PricingPlans isPremium={isPremium} userName={user?.name} />;
};

export default PricingPage;
