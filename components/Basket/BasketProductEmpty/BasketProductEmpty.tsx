export const BasketProductEmpty = () => {
    return (
        <>
            <div className='basket__item-empty'>
                <img className='basket__empty-img' src='' alt='' />
                <h3 className='basket__empty-title'>Корзина пустая</h3>
                <p className='basket__empty-text'>
                    Добавьте хотя бы одну пиццу, чтобы совершить заказ
                </p>
                <button className='basket__empty-button'>
                    <img className='basket__empty-button-arrow' src='' alt='' />
                    Вернуть на главную
                </button>
            </div>
        </>
    );
};
