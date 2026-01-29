import { BasketCost } from './BasketCost/BasketCost';

import { BasketInfo } from './BasketInfo/BasketInfo';
import { BasketProducts } from './BasketProducts/BasketProducts';

export const Basket = () => {
    return (
        <>
            <section className='basket '>
                <div className='basket__container'>
                    <div className='basket__inner'>
                        <BasketInfo />
                        <BasketProducts />
                    </div>
                    <BasketCost />
                </div>
            </section>
        </>
    );
};
