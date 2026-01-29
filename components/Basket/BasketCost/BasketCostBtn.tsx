export const BasketCostBtn = () => {
    return (
        <>
            <button className='basket__order'>
                Оформить заказ
                <div>
                    <svg
                        width='16'
                        height='14'
                        viewBox='0 0 16 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M1 6.99414H14.7143'
                            stroke='white'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M8.71436 1L14.7144 6.99408L8.71436 12.9882'
                            stroke='white'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
            </button>
        </>
    );
};
