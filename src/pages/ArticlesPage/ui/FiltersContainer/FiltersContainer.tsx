import { memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;

    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            search={search}
            sort={sort}
            order={order}
            type={type}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
