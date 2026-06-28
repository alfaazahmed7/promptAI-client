import { requireRole } from '@/lib/core/session';
import React from 'react';

const UserLayoutPage = async ({ children }) => {
    await requireRole('creator');
    return children
};

export default UserLayoutPage;