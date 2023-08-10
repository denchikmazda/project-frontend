import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // Проверить работоспособность
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
}));
