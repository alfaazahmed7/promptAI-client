import AboutCta from '@/components/about/AboutCta';
import AboutFaq from '@/components/about/AboutFaq';
import AboutHero from '@/components/about/AboutHero';
import AboutJourney from '@/components/about/AboutJourney';
import AboutMission from '@/components/about/AboutMission';
import AboutStats from '@/components/about/AboutStats';
import AboutTeam from '@/components/about/AboutTeam';
import AboutValues from '@/components/about/AboutValues';
import {
    getAboutStats,
    getCoreValues,
    getFaqEntries,
    getLeadershipTeam,
    getMilestones,
    getMissionPillars,
    getTrustBadges,
} from '@/lib/about/aboutData';

export const metadata = {
    title: 'About Us | PromptAI',
    description:
        'Learn how PromptAI curates, benchmarks and distributes production-ready AI prompts for creators, builders and enterprise teams.',
};

const AboutPage = () => {
    // All copy is produced by the exported data functions so the page can be
    // switched to API-driven content without touching the section components.
    const stats = getAboutStats();
    const pillars = getMissionPillars();
    const values = getCoreValues();
    const milestones = getMilestones();
    const team = getLeadershipTeam();
    const badges = getTrustBadges();
    const faqEntries = getFaqEntries();

    return (
        <div className="about-page">
            <AboutHero badges={badges} />
            <AboutStats stats={stats} />
            <AboutMission pillars={pillars} />
            <AboutValues values={values} />
            <AboutJourney milestones={milestones} />
            <AboutTeam team={team} />
            <AboutFaq entries={faqEntries} />
            <AboutCta />
        </div>
    );
};

export default AboutPage;