'use client';

import { BasketCost } from './BasketCost/BasketCost';

import { BasketInfo } from './BasketInfo/BasketInfo';
import { BasketProducts } from './BasketProducts/BasketProducts';

import {
    useProductBasketClient,
    useProductBasketCost,
    useProductBasketCount,
} from '@/store/BasketClientStore/BasketClientSelectors';
import { BasketProductEmpty } from './BasketProductEmpty/BasketProductEmpty';
type PropsType = {
    openBasket: boolean;
    onClickBasket: (open: boolean) => void;
};

export const Basket = ({ openBasket, onClickBasket }: PropsType) => {
    const productsClient = useProductBasketClient();
    const productsCount = useProductBasketCount();
    const totalCost = useProductBasketCost();
    console.log('productsClient', productsClient);
    console.log('productsCount', productsCount);
    console.log('totalCost', totalCost);
    return (
        <>
            <section className={openBasket === true ? 'basket active' : 'basket'}>
                <div className='basket__container'>
                    {productsClient.length === 0 ? (
                        <BasketProductEmpty onClickBasket={onClickBasket} />
                    ) : (
                        <>
                            <div className='basket__inner'>
                                <BasketInfo
                                    onClickBasket={onClickBasket}
                                    productsCount={productsCount}
                                />
                                <BasketProducts productsClient={productsClient} />
                            </div>
                            <BasketCost onClickBasket={onClickBasket} totalCost={totalCost} />
                        </>
                    )}
                </div>
            </section>
        </>
    );
};
