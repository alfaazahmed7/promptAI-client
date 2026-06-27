import Banner from "@/components/homepage/banner/Banner";
import FeaturedPromptsPage from "@/components/homepage/featured-prompts/FeaturedPrompts";
import FeaturedPromptsSkeleton from "@/components/shared/skeletons/FeaturedPromptsSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<FeaturedPromptsSkeleton />}>
        <FeaturedPromptsPage />
      </Suspense>
    </div>
  );
}
