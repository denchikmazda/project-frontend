import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
