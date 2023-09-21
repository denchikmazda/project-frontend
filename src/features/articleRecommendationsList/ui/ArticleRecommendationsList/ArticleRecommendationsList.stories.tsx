import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

import { Article, ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

const article: Article = {
    id: '1',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcD_nlQbD8UTt8pBz9A7Ex4X9NrIx1a8sO5K4QWcqLUYr2p3pM1m2D5PHnfc8v6AHbv0&usqp=CAU',
    createdAt: '',
    views: 100,
    user: { id: '1', username: 'user' },
    blocks: [],
    type: [ArticleType.IT],
    title: 'Title',
    subtitle: 'qwerty',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
