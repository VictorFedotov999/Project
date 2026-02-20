'use client';

import React from 'react';

import { BasketSvg } from './BasketSvg';
import { Basket } from '../../Basket/Basket';
import { BasketProductEmpty } from '../../Basket/BasketProductEmpty/BasketProductEmpty';

import {
    useProductBasketCost,
    useProductBasketCount,
} from '@/store/BasketClientStore/BasketClientSelectors';

export const BasketBtn = () => {
    const [openBasket, setOpenBasket] = React.useState(false);
    const productsCount = useProductBasketCount();
    const totalCost = useProductBasketCost();

    const onClickBasket = (open: boolean) => {
        setOpenBasket(open);
    };

    return (
        <>
            <div className='header__basket'>
                <button className='header__basket-btn' onClick={() => onClickBasket(true)}>
                    <p className='header__basket-price'>{totalCost} ₽</p>
                    <BasketSvg />
                    <p className='header__basket-count'>{productsCount}</p>
                </button>

                <Basket openBasket={openBasket} onClickBasket={onClickBasket} />
            </div>
        </>
    );
};
