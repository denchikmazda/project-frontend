import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/popups';
import { Drawer } from 'shared/ui/Drawer/Drawer';
// import { BrowserView, MobileView } from 'react-device-detect';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
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
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return !isMobile
        ? (
            <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                direction="bottom left"
                trigger={trigger}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        )
        : (
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
