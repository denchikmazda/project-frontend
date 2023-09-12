// import { addDecorator } from '@storybook/react';
// import { Theme } from '../../src/app/providers/ThemeProvider';
// import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
// import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
// import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';

// export const parameters = {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//         matchers: {
//             color: /(background|color)$/i,
//             date: /Date$/,
//         },
//     },
// };

// addDecorator(StyleDecorator);
// addDecorator(RouterDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));

import { addDecorator } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import i18n from './i18n';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#FFF' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#000000' },
            { name: 'orange', class: ['app', Theme.ORANGE], color: 'ffb005' },
        ],
    },
    i18n,
    locale: 'en',
    locales: {
        en: 'English',
        ru: 'Russian',
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(SuspenseDecorator);
