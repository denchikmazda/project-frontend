import { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
    // Проверить работоспособность
    // @ts-ignore
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
