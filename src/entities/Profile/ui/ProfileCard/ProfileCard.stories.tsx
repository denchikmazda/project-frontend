import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'denchik',
        last: 'mazda',
        username: 'denchikmazda1-2',
        age: 23,
        country: Country.Belarus,
        city: 'Minsk',
        currency: Currency.USD,
        avatar: 'https://cdn.vectorstock.com/i/preview-1x/68/97/programmer-computer-expert-rgb-color-icon-vector-37206897.jpg',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
