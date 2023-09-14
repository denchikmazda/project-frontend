import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Skeleton } from '../Skeleton';

import { AppImage } from './AppImage';

import AvatarImg from '@/shared/assets/tests/storybook.jpg';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    src: AvatarImg,
};

export const Loading = Template.bind({});
Loading.args = {
    errorFallback: <Skeleton width={200} height={200} />,
};
