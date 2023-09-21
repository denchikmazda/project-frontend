import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/editableProficeCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = () => (
    <EditableProfileCard id="1" />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                last: 'Petrov',
                first: 'Sasha',
                city: 'Moscow',
                currency: Currency.USD,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Ukraine,
                last: 'Sidorov',
                first: 'Vanya',
                city: 'SPB',
                currency: Currency.USD,
            },
        },
    }),
];
