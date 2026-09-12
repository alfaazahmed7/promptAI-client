import React from 'react';
import { getUserAddPrompts } from '@/lib/api/userAddPrompts';
import { getUserSession } from '@/lib/core/session';
import { userModalEditData } from '@/lib/actions/userEditModal';
import { DeletePromptById } from '@/lib/actions/userModalDelete';
import PromptTableList from '@/components/dashboard/user-dashboard/PromptTableList';

const MyPromptPage = async () => {
    const user = await getUserSession();
    const fetchedPrompts = await getUserAddPrompts(user?.email);

    const userPromptsData = fetchedPrompts || [];

    return (
        <div className="p-6 max-w-7xl mx-auto min-h-screen bg-[#0b0f19] text-slate-200">
            <PromptTableList
                userPromptsData={userPromptsData}
                userModalEditData={userModalEditData}
                DeletePromptById={DeletePromptById}
            />
        </div>
    );
};

export default MyPromptPage;