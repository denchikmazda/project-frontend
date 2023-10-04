import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

export default {
    title: 'shared/redesigned/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="text" text="text test text2" />,
};
