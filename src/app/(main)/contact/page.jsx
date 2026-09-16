import ContactChannels from '@/components/contact/ContactChannels';
import ContactCta from '@/components/contact/ContactCta';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactFaq from '@/components/contact/ContactFaq';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import {
    getContactBadges,
    getContactChannels,
    getContactFaqEntries,
    getOfficeLocations,
    getSupportHours,
    getSupportTopics,
} from '@/lib/contact/contactData';

export const metadata = {
    title: 'Contact Us | PromptAI',
    description:
        'Reach the PromptAI team directly - sales, technical support, creator helpdesk and press. Send a message and a real member of the team will reply.',
};

const ContactPage = () => {
    // All copy is produced by the exported data functions so the page can be
    // switched to API-driven content without touching the section components.
    const channels = getContactChannels();
    const topics = getSupportTopics();
    const faqEntries = getContactFaqEntries();
    const hours = getSupportHours();
    const locations = getOfficeLocations();
    const badges = getContactBadges();

    return (
        <div className="contact-page">
            <ContactHero badges={badges} />
            <ContactChannels channels={channels} />
            <ContactForm topics={topics} />
            <ContactDetails hours={hours} locations={locations} />
            <ContactFaq entries={faqEntries} />
            <ContactCta />
        </div>
    );
};

export default ContactPage;
