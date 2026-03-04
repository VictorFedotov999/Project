import { BasketSvg } from '../BasketBtn/BasketSvg';
import {
    useStoreProductCount,
    useStoreTotalCost,
} from '@/store/BasketClientStore/BasketClientSelectors';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const HeaderBtnInfo = ({ onClickBasket }: IProps) => {
    const productCount = useStoreProductCount();
    const totalCost = useStoreTotalCost();
    return (
        <>
            <button className='header__basket-btn' onClick={() => onClickBasket(true)}>
                <p className='header__basket-price'>{totalCost} ₽</p>
                <BasketSvg />
                <p className='header__basket-count'>{productCount}</p>
            </button>
        </>
    );
};
