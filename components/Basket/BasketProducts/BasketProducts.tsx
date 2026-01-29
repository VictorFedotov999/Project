import { BasketCostBtn } from '../BasketCost/BasketCostBtn';
import { BasketProduct } from '../BasketProduct/BasketProduct';
import { BasketProductEmpty } from '../BasketProductEmpty/BasketProductEmpty';

export const BasketProducts = () => {
    return (
        <>
            <div className='basket__content'>
                <div className='basket__items'>
                    {/* <BasketProductEmpty /> */}
                    <BasketProduct />
                </div>
            </div>
        </>
    );
};
