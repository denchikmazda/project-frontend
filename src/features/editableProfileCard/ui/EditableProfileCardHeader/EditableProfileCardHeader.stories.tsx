import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/editableProficeCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
