import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { articleDetailsRecommendationSchema } from './articleDetailsRecommendationSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: articleDetailsRecommendationSchema;
}
