import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { ArticleSortField } from '../../model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeSort, onChangeOrder,
    } = props;
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('vozrastaniyu'),
        },
        {
            value: 'desc',
            content: t('ubivaniyu'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date sozdaniya'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('nazvaniyu'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('prosmotram'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Sortirovat po')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('po')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
