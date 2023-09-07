import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleBlockType, ArticleType, ArticleView } from '@/entities/Article/model/consts/articleConsts';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlePage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            isLoading: true,
            error: undefined,
            page: 1,
            limit: 9,
            hasMore: false,
            view: ArticleView.GRID,
            order: 'asc',
            type: ArticleType.ALL,
            ids: ['1'],
            entities: {
                1: {
                    id: '1',
                    title: 'Python news',
                    subtitle: "What's new in Python for 2022?",
                    img: 'https://cdn-edge.kwork.ru/pics/t3/05/21311018-1655653505.jpg',
                    views: 812,
                    createdAt: '01.03.2020',
                    type: [ArticleType.IT],
                    blocks: [
                        {
                            id: '1',
                            type: ArticleBlockType.TEXT,
                            title: 'Title of this block',
                            paragraphs: [
                                'Python is a widely-used programming language known for its simplicity and versatility.',
                            ],
                        },
                        {
                            id: '2',
                            type: ArticleBlockType.CODE,
                            code: "print('Hello, world!')",
                        },
                        {
                            id: '3',
                            type: ArticleBlockType.IMAGE,
                            src: 'https://cdn-edge.kwork.ru/pics/t3/05/21311018-1655653505.jpg',
                            title: 'Image 1 - Python logo',
                        },
                    ],
                },
            },
            _inited: true,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

// export const Normal = Template.bind({});
// Normal.args = {};
// Normal.decorators = [StoreDecorator({
//     articlesPage: {
//         isLoading: false,
//         view: ArticleView.GRID,
//     },
// })];

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK),
//     StoreDecorator({
//         articlesPage: {
//             isLoading: false,
//             view: ArticleView.GRID,
//         },
// })];
