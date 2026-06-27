// app/admin/analytics/page.jsx
import AnalyticsHeader from '@/components/dashboard/admin-dashboard/AnalyticsHeader';
import QuickInsights from '@/components/dashboard/admin-dashboard/QuickInsights';
import StatsGrid from '@/components/dashboard/admin-dashboard/StatsGrid';
import { getAllPrompts } from '@/lib/api/prompts';
import { getAllReviews } from '@/lib/api/review';
import { getUsers } from '@/lib/api/users';
import React from 'react';

const AdminAnalyticsPage = async () => {
    // Fetching data concurrently for optimization
    const [users, prompts, reviews] = await Promise.all([
        getUsers(),
        getAllPrompts(),
        getAllReviews()
    ]);

    // Safely reduce and calculate total copies from prompts array
    const totalCopies = prompts?.reduce((acc, prompt) => acc + (prompt.copyCount || 0), 0) || 0;
    console.log(totalCopies, 'total copies');

    const stats = {
        totalUsers: users?.length || 0,
        totalPrompts: prompts?.length || 0,
        totalReviews: reviews?.length || 0,
        totalCopies: totalCopies,
    };

    return (
        <div className="max-w-7xl mx-auto min-h-screen p-4 md:p-8 bg-[#0b0f19] transition-colors duration-200">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Section */}
                <AnalyticsHeader />

                {/* Stats Cards Grid */}
                <StatsGrid stats={stats} />

                {/* Additional Insights Section */}
                <QuickInsights stats={stats} />
            </div>
        </div>
    );
};

export default AdminAnalyticsPage;