// src/app/dashboard/user/add-prompt/page.jsx — Server Component.
// Resolves the session, fetches this account's submitted prompts, and
// computes the free-plan quota on the server. All interactivity lives in
// the Client Component, which only receives serializable data via props.
import AddPromptFormClient from '@/components/dashboard/creator-dashboard/AddPromptFormClient';
import { getUserAddPrompts } from '@/lib/api/userAddPrompts';
import { getUserSession } from '@/lib/core/session';

const AddPromptPage = async () => {
    const sessionUser = await getUserSession();
    const user = sessionUser || {};

    let prompts = [];
    if (user.email) {
        prompts = await getUserAddPrompts(user.email) || [];
    }

    const userAddedPromptsCount = prompts.length;
    const isLimitReached = user?.plan === "free" && userAddedPromptsCount >= 3;

    return (
        <AddPromptFormClient
            user={user}
            initialPrompts={prompts}
            isLimitReached={isLimitReached}
            variant="user"
        />
    );
};

export default AddPromptPage;
