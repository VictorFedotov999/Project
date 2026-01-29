import { IconSvg } from '../Header/ProfileBtn/IconSvg';

export const AuthorizationBtn = () => {
    return (
        <>
            <button className='header__profile-btn'>
                <IconSvg />
                <p className='header__profile-text'>Войти</p>
            </button>
        </>
    );
};
