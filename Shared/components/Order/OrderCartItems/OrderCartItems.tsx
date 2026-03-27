'use client';

import React from 'react';
import { useFetchCartItems, useStoreItems } from '@/store/BasketClientStore/BasketClientSelectors';
import { OrderCartItem } from './OrderCartItem/OrderCartItem';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

export const OrderCartItems = () => {
    const basketProducts = useStoreItems();

    React.useEffect(() => {
        useFetchCartItems();
    }, []);

    if (basketProducts.length === 0) {
        return <h1>Корзина пустая</h1>;
    }

    return (
        <>
            {basketProducts.map((product: IBasketItemsStore) => (
                <OrderCartItem key={product.id} product={product} />
            ))}
        </>
    );
};
