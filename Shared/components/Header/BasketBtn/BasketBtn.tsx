'use client';

import React from 'react';
import { HeaderBtnInfo } from '../HeaderBtnInfo/HeaderBtnInfo';
import { Basket } from '../../Basket/Basket';
import { AuthorizationBtn } from '../../AuthorizationBtn/AuthorizationBtn';
import { useSession } from 'next-auth/react';
import { useStoreItems } from '@/store/BasketClientStore/BasketClientSelectors';

export const BasketBtn = () => {
    const { data: session, status } = useSession();

    const [openBasket, setOpenBasket] = React.useState<boolean>(false);
    const onClickBasket = (open: boolean) => {
        setOpenBasket(open);
    };
    const store = useStoreItems();
    console.log('storeItems', store);
    if (status === 'loading') return null;
    return (
        <>
            {!session ? (
                <AuthorizationBtn />
            ) : (
                <div className='header__basket'>
                    <HeaderBtnInfo onClickBasket={onClickBasket} />
                    <Basket openBasket={openBasket} onClickBasket={onClickBasket} />
                </div>
            )}
        </>
    );
};
