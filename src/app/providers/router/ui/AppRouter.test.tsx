import { act, screen } from '@testing-library/react';

import AppRouter from './AppRouter';

import { UserRole } from '@/entities/User';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/adsafsfa',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
    test('Редирект неавторизованного пользователя на главную страницу', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ к закрытой странице для авторизованного пользователя', async () => {
        await act(() => {
            componentRender(<AppRouter />, {
                route: getRouteProfile('1'),
                initialState: {
                    user: { _inited: true, authData: {} },
                },
            });
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ запрещён (отсутствует роль)', async () => {
        await act(() => {
            componentRender(<AppRouter />, {
                route: getRouteAdmin(),
                initialState: {
                    user: { _inited: true, authData: {} },
                },
            });
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ разрешён (Роль админа)', async () => {
        await act(() => {
            componentRender(<AppRouter />, {
                route: getRouteAdmin(),
                initialState: {
                    user: {
                        _inited: true,
                        authData: { roles: [UserRole.ADMIN] },
                    },
                },
            });
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
