import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
// import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popus';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = useDevice();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return !isMobile ? (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            }
            off={
                <PopoverDeprecated
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </PopoverDeprecated>
            }
        />
    ) : (
        <>
            {trigger}
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <NotificationList />
            </Drawer>
        </>
    );
    // решение с использование библиотеки device detect
    // return (
    //     <div>
    //         <BrowserView>
    //             <Popover
    //                 className={classNames(cls.NotificationButton, {}, [className])}
    //                 direction="bottom left"
    //                 trigger={trigger}
    //             >
    //                 <NotificationList className={cls.notifications} />
    //             </Popover>
    //         </BrowserView>
    //         <MobileView>
    //             {trigger}
    //             <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
    //                 <NotificationList />
    //             </Drawer>
    //         </MobileView>
    //     </div>
    // );
});
