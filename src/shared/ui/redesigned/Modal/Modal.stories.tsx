import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Modal } from './Modal';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem maiores fugiat fuga repellendus. Repellat illum deleniti explicabo molestiae quae!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem maiores fugiat fuga repellendus. Repellat illum deleniti explicabo molestiae quae!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
