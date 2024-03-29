import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: '123',
        },
        {
            content: '456',
        },
        {
            content: 'third',
        },
    ],
};
