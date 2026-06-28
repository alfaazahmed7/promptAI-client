import Banner from "@/components/homepage/banner/Banner";
import CustomerReviewsPage from "@/components/homepage/customer-reviews/CustomerReviews";
import FeaturedPromptsPage from "@/components/homepage/featured-prompts/FeaturedPrompts";
import InteractivePlayground from "@/components/homepage/interactive-playground/InteractivePlayground";
import LiveStatsTicker from "@/components/homepage/live-stats-ticker/LiveStatsTicker";
import TopCreatorsPage from "@/components/homepage/top-creators/TopCreators";
import WhyChooseUs from "@/components/homepage/why-choose-us/WhyChooseUs";
import FeaturedPromptsSkeleton from "@/components/shared/skeletons/FeaturedPromptsSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />

      <Suspense fallback={<FeaturedPromptsSkeleton />}>
        <FeaturedPromptsPage />
      </Suspense>

      <WhyChooseUs />
      <InteractivePlayground />
      <TopCreatorsPage />
      <LiveStatsTicker />
      <CustomerReviewsPage />
    </div>
  );
}
