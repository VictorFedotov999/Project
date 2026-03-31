interface IProps {
    totalPrice: number;
}

export const OrderCost = ({ totalPrice }: IProps) => {
    return (
        <>
            <div className='order__total'>
                <div className='order__total-label'>Итого:</div>
                <div className='order__total-price'>{totalPrice} ₽</div>
            </div>
        </>
    );
};
