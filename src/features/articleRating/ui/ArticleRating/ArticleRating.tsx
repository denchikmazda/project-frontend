import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');
    const userData = useSelector(getUserAuthData);

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArtileMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArtileMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [articleId, rateArtileMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Otsenite statyu')}
            feedbackTitle={t('Ostavte otzyv')}
            hasFeedback
        />
    );
});

export default ArticleRating;
