import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'denchik',
            last: 'mazda',
            username: 'denchikmazda1-2',
            age: 23,
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.USD,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'denchik',
            last: 'mazda',
            username: 'denchikmazda1-2',
            age: 23,
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.USD,
        },
    },
})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    profile: {
        form: {
            first: 'denchik',
            last: 'mazda',
            username: 'denchikmazda1-2',
            age: 23,
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.USD,
        },
    },
})];
