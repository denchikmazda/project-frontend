import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: 'fdjgjdsahjlk132', value: '123' },
        { content: 'kgjfkgl;fsj321', value: '1234' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: 'fdjgjdsahjlk132', value: '123' },
        { content: 'kgjfkgl;fsj321', value: '1234' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: 'fdjgjdsahjlk132', value: '123' },
        { content: 'kgjfkgl;fsj321', value: '1234' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: 'fdjgjdsahjlk132', value: '123' },
        { content: 'kgjfkgl;fsj321', value: '1234' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: 'fdjgjdsahjlk132', value: '123' },
        { content: 'kgjfkgl;fsj321', value: '1234' },
    ],
};
