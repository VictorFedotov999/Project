import Image from 'next/image';
import Product from '../../../public/products/productPizza.png';

export const BasketProduct = () => {
    return (
        <>
            <div className='basket__item'>
                <Image className='basket__item-img' src={Product} alt='фото пиццы' />

                <div className='basket__item__info'>
                    <h1 className='basket__item__info-title'>Чизбургер-пицца</h1>
                    <p className='basket__item__info-text'>Средняя 30 см, традиционное тесто</p>
                    <div className='basket__item__count'>
                        <button className='basket__item__minus'>-</button>
                        <h3 className='basket__item__number'>2</h3>
                        <button className='basket__item__plus'>+</button>
                        <h3 className='basket__item__price'>560 ₽</h3>
                    </div>
                </div>
            </div>
        </>
    );
};
