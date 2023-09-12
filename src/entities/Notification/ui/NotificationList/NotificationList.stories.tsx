import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'На канале UlbiTV вышло новое видео!',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'На канале UlbiTV вышел новый рилс!',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'На канале UlbiTV вышел новый пост!',
                },
            ],
        },
    ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {};
IsLoading.decorators = [StoreDecorator({})];
IsLoading.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'На канале UlbiTV вышло новое видео!',
                },
            ],
            delay: 3000,
        },
    ],
};
