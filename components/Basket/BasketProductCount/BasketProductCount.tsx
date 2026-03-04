import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';
import { BasketDeleteProduct } from '../BasketDeleteProduct/BasketDeleteProduct';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import { increaseProductCount } from '../../../services/basketUser';

interface IProps {
    product: IBasketItemsStore;
}

export const BasketProductCount = ({ product }: IProps) => {
    const { removeCartItem } = useProductBasketClientStore();
    const { increaseCartItem } = useProductBasketClientStore();

    const onRemoveProduct = () => {
        removeCartItem(product.id);
    };

    const plusProduct = () => {
        const count = product.quantity + 1;
        increaseCartItem(product.id, count);
    };

    const minusProduct = () => {
        const count = product.quantity - 1;
        increaseCartItem(product.id, count);
    };

    return (
        <>
            <div className='basket__item__count'>
                <button className='basket__item__minus' onClick={minusProduct}>
                    -
                </button>
                <h3 className='basket__item__number'>{product.quantity}</h3>
                <button className='basket__item__plus' onClick={plusProduct}>
                    +
                </button>
                <h3 className='basket__item__price'>{product.price} ₽</h3>
                <div onClick={onRemoveProduct}>
                    <BasketDeleteProduct />
                </div>
            </div>
        </>
    );
};
