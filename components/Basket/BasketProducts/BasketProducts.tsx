import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import React from 'react';
import { BasketProduct } from '../BasketProduct/BasketProduct';
import { BasketProductEmpty } from '../BasketProductEmpty/BasketProductEmpty';
import { useFetchCartItems, useStoreItems } from '@/store/BasketClientStore/BasketClientSelectors';
import { BasketProductType } from '../../../prisma/prismaType';

interface IProps {
    basketProducts: IBasketItemsStore[];
}

export const BasketProducts = ({ basketProducts }: IProps) => {
    return (
        <>
            <div className='basket__content'>
                <div className='basket__items'>
                    {basketProducts.map((product: IBasketItemsStore) => (
                        <BasketProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};
