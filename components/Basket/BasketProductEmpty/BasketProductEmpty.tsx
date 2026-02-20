'use client';
import BasketEmpty from '../../../public/basket/basket-empty.png';
import ArrowBack from '../../../public/basket/arrow-left.svg';
import Image from 'next/image';

export const BasketProductEmpty = ({ onClickBasket }) => {
    const onClicClouseBasket = () => {
        onClickBasket(false);
    };
    return (
        <>
            <div className='basket__item-empty '>
                <Image className='basket__empty-img' src={BasketEmpty} alt='fff' />
                <h3 className='basket__empty-title'>Корзина пустая</h3>
                <p className='basket__empty-text'>
                    Добавьте хотя бы одну пиццу, чтобы совершить заказ
                </p>
                <button className='basket__empty-button' onClick={onClicClouseBasket}>
                    <img className='basket__empty-button-arrow' src='' alt='' />
                    <Image src={ArrowBack} alt='ff' />
                    Вернуть на главную
                </button>
            </div>
        </>
    );
};
