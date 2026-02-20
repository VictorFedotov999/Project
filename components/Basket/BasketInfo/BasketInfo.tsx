import { BasketInfoBtnClouse } from './BasketInfoBtnClouse';

interface IProps {
    onClickBasket: (open: boolean) => void;
    productsCount: number;
}

export const BasketInfo = ({ onClickBasket, productsCount }: IProps) => {
    return (
        <>
            <div className='basket__top'>
                <h3 className='basket__count'>
                    В корзине <span>{productsCount} товара</span>
                </h3>
                <div onClick={() => onClickBasket(false)}>
                    <BasketInfoBtnClouse />
                </div>
            </div>
        </>
    );
};
