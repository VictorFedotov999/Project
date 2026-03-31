import Link from 'next/link';

export const NotOrders = () => {
    return (
        <div className='container'>
            <div className='empty-state'>
                <h1 className='empty-state__title'>📦 У вас пока нет заказов</h1>
                <p className='empty-state__message'>
                    Сделайте свой первый заказ, и он появится здесь
                </p>
                <Link href='/' className='empty-state__button'>
                    Начать покупки
                </Link>
            </div>
        </div>
    );
};
