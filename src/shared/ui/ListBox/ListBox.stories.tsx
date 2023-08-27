import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items = [
    { value: 'Option 1', content: 'Option 1' },
    { value: 'Option 2', content: 'Option 2' },
    { value: 'Option 3', content: 'Option 3', disabled: true },
    { value: 'Option 4', content: 'Option 4' },
];

export const Normal = Template.bind({});
Normal.args = {
    items,
    defaultValue: 'Option 1',
};
