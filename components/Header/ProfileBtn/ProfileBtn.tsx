'use client';

import { AuthorizationBtn } from 'components/AuthorizationBtn/AuthorizationBtn';
import { IconSvg } from './IconSvg';
import React from 'react';

export const ProfileBtn = () => {
    const settings = ['Настройки', 'Заказы', 'Выйти'];
    const [openPopup, setOpenPopup] = React.useState(false);
    const [setting, setSetting] = React.useState(0);

    const onClickOpenPopup = () => {
        setOpenPopup(true);
    };

    const onClickSetting = (index: number) => {
        setSetting(index);
        setOpenPopup(false);
    };
    return (
        <>
            <div className='header__profile'>
                <button className='header__profile-btn'>
                    <IconSvg />
                    <p className='header__profile-text' onClick={onClickOpenPopup}>
                        Профиль
                    </p>
                </button>

                <div
                    className={openPopup ? 'header__profile_popup active' : 'header__profile_popup'}
                >
                    {settings.map((set, index) => (
                        <h3
                            key={index}
                            onClick={() => onClickSetting(index)}
                            className={
                                setting === index
                                    ? 'header__profile_popup-text active'
                                    : 'header__profile_popup-text'
                            }
                        >
                            {set}
                        </h3>
                    ))}
                </div>
                {/* <AuthorizationBtn /> */}
            </div>
        </>
    );
};
