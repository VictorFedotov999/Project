'use client';

import BoxIcon from '../../../../public/order/box.svg';
import ProcentIcon from '../../../../public/order/procent.svg';
import CarIcon from '../../../../public/order/car.svg';
import { OrderResult } from '../../../OrderResult';
import { useStoreTotalCost } from '@/store/BasketClientStore/BasketClientSelectors';

export const PayOrderInfo = () => {
    const priceOrder = useStoreTotalCost();
    return (
        <>
            <div className='order__result-contant'>
                <OrderResult img={BoxIcon} text='Стоимость товаров:' price={priceOrder} />
                <OrderResult img={ProcentIcon} text=' Налоги:' price={0} />
                <OrderResult img={CarIcon} text=' Доставка:' price={0} />
            </div>
        </>
    );
};
