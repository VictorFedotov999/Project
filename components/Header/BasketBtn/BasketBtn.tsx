import { BasketBtnEmpty } from 'components/BasketBtnEmpty/BasketBtnEmpty';
import { BasketSvg } from './BasketSvg';

export const BasketBtn = () => {
    return (
        <>
            <div className='header__basket'>
                <button className='header__basket-btn'>
                    <p className='header__basket-price'>520 ₽</p>

                    <BasketSvg />

                    <p className='header__basket-count'>3</p>
                </button>

                {/* <BasketBtnEmpty /> */}
            </div>
        </>
    );
};
