import { getUserSession } from '@/lib/core/session';
import PricingPlans from '@/components/pricing/PricingPlans';

const PricingPage = async () => {
    const user = await getUserSession();
    console.log(user, 'user');
    const isPremium = user?.plan?.toLowerCase() === 'premium';

    return <PricingPlans isPremium={isPremium} userName={user?.name} />;
};

export default PricingPage;
