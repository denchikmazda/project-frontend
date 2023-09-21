import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Navbar } from './Navbar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://cdn.vectorstock.com/i/preview-1x/68/97/programmer-computer-expert-rgb-color-icon-vector-37206897.jpg',
            },
        },
    }),
];
