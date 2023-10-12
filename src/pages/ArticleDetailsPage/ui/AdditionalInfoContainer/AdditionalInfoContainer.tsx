import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/article';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticlesEdit } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import cls from './AdditionalInfoContainer.module.scss';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticlesEdit(article.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card padding="24" border="partial" className={cls.card}>
            <ArticleAdditionalInfo
                author={article.user}
                createdAd={article.createdAt}
                canEdit={canEdit}
                views={article.views}
                onEdit={onEditArticle}
            />
        </Card>
    );
});
