import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import toast from 'react-hot-toast';
import { RemoveSvg } from './RemoveSvg';

interface IProps {
    product: IBasketItemsStore;
}

export const CartItemRemove = ({ product }: IProps) => {
    const { removeCartItem } = useProductBasketClientStore();

    const onRemoveProduct = () => {
        removeCartItem(product.id);
        toast.error(`Продукт удален`);
    };

    return (
        <button className='item__remove-btn' onClick={onRemoveProduct}>
            <RemoveSvg />
        </button>
    );
};
