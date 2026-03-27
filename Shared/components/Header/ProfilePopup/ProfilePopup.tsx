import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SETTINGS_PAGE, USER_ORDERS_PAGE } from '../../../../services/instance';
import { ProfilePopupItem } from './ProfilePopupItem';

interface IProps {
    openPopup: boolean;
    setOpenPopup: (open: boolean) => void;
}

export const ProfilePopup = ({ setOpenPopup, openPopup }: IProps) => {
    const route = useRouter();
    const [setting, setSetting] = React.useState<number>(1);

    const settings = [
        {
            id: 1,
            name: 'Настройки',
            path: SETTINGS_PAGE,
        },
        {
            id: 2,
            name: 'Заказы',
            path: USER_ORDERS_PAGE,
        },
        {
            id: 3,
            name: 'Выйти',

            path: '/',
        },
    ];

    const onClickSetting = (id: number) => {
        const selectedSetting = settings.find((set) => set.id === id);
        if (!selectedSetting) return;

        if (selectedSetting.name === 'Настройки') {
            route.push(selectedSetting.path);
        }
        if (selectedSetting.name === 'Заказы') {
            route.push(selectedSetting.path);
        }
        if (selectedSetting.name === 'Выйти') {
            signOut({ callbackUrl: '/' });
        }
        setSetting(id);
        setOpenPopup(false);
    };

    return (
        <div className={openPopup ? 'header__profile_popup active' : 'header__profile_popup'}>
            {settings.map((set) => (
                <ProfilePopupItem
                    key={set.id}
                    set={set}
                    onClickSetting={onClickSetting}
                    activeId={setting}
                />
            ))}
        </div>
    );
};
