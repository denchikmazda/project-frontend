import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // Проверить работоспособность
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
