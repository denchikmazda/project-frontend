import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // Проверить работоспособность
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
