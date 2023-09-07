import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
