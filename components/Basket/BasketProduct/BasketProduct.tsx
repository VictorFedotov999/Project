'use client';

import { BasketProductInfo } from '../BasketProductInfo/BasketProductInfo';
import { BasketProductCount } from '../BasketProductCount/BasketProductCount';

import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const BasketProduct = ({ product }: IProps) => {
    return (
        <>
            <div className='basket__item'>
                <img className='basket__item-img' src={product.imageUrl} alt='photoProduct' />

                <div className='basket__item__info'>
                    <BasketProductInfo product={product} />
                    <BasketProductCount product={product} />
                </div>
            </div>
        </>
    );
};
