import Link from 'next/link';
import { BasketCostBtn } from './BasketCostBtn';

interface IProps {
    onClickBasket: (open: boolean) => void;
    totalCost: number;
}

export const BasketCost = ({ onClickBasket, totalCost }: IProps) => {
    return (
        <>
            <div className='basket__bottom'>
                <div className='basket__bottom__inner'>
                    <div className='basket__sum'>
                        <h3 className='basket__sum-text'>Итого:</h3>
                        <h3 className='basket__sum-price'>{totalCost}₽</h3>
                    </div>
                    <div className='basket__sum'>
                        <h3 className='basket__sum-text'>Налог 5%:</h3>
                        <h3 className='basket__sum-price'>122 ₽</h3>
                    </div>

                    <Link href={'/order'} onClick={() => onClickBasket(false)}>
                        <BasketCostBtn />
                    </Link>
                </div>
            </div>
        </>
    );
};
