import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // Проверить работоспособность
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
