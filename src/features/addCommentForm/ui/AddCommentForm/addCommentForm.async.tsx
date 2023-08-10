import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // Проверить работоспособность
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
