import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text, TextSize, TextTheme } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet sit amet',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet sit amet',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title Lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem ipsum dolor sit amet sit amet',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet sit amet',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title Lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet sit amet',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet sit amet',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet sit amet',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet sit amet',
    size: TextSize.S,
};
