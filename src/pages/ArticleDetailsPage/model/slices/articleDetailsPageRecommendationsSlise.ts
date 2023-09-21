import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const articleDetailsPageRecommendationSlise = createSlice({
    name: 'articleDetailsPageRecommendationSlise',
    initialState:
        recommendationsAdapter.getInitialState<articleDetailsRecommendationSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsPageRecommendationReducer } =
    articleDetailsPageRecommendationSlise;
