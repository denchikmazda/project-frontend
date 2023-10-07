import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                view={view}
                key={index}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
        target,
    } = props;
    const { t } = useTranslation('article');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Statyi ne naideni')} />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    wrap="wrap"
                    gap="16"
                    className={classNames(cls.ArticleListRedesigned, {}, [])}
                    data-testid="ArticleList"
                >
                    {articles.length > 0 ? articles.map(renderArticle) : null}
                    {isLoading && getSkeletons(view)}
                </HStack>
            }
            off={
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                    data-testid="ArticleList"
                >
                    {articles.length > 0 ? articles.map(renderArticle) : null}
                    {isLoading && getSkeletons(view)}
                </div>
            }
        />
    );
});
