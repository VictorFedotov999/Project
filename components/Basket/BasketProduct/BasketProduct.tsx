'use client';
import Image from 'next/image';
import { Product } from '@prisma/client';
import { plusProduct, removeProduct } from '@/store/BasketClientStore/BasketClientSelectors';

type ProductType = {
    id: number;
    imageUrl: string;
    title: string;
    size: Array<number>;
    type: string;
    price: number;
    count: number;
};

type PropsType = {
    product: ProductType;
};

export const BasketProduct = ({ product }: PropsType) => {
    const onClickAddProduct = () => {
        const newProduct = {
            id: product.id,
            title: product.title,
            imageUrl: product.imageUrl,
            size: product.size,
            type: product.type,
            price: product.price,
            count: 1,
        };
        removeProduct(newProduct);
    };
    const plus = () => {
        const newProduct = {
            id: product.id,
            title: product.title,
            imageUrl: product.imageUrl,
            size: product.size,
            type: product.type,
            price: product.price,
            count: 1,
        };
        plusProduct(newProduct);
    };

    return (
        <>
            <div className='basket__item'>
                <img
                    className='basket__item-img'
                    src={product.imageUrl}
                    alt=''
                    onClick={onClickAddProduct}
                />

                <div className='basket__item__info'>
                    <h1 className='basket__item__info-title'>{product.title}</h1>
                    <p className='basket__item__info-text'> {product.size}см, традиционное тесто</p>

                    <div className='basket__item__count'>
                        <button className='basket__item__minus'>-</button>
                        <h3 className='basket__item__number'>{product.count}</h3>
                        <button className='basket__item__plus' onClick={plus}>
                            +
                        </button>
                        <h3 className='basket__item__price'>{product.price} ₽</h3>
                    </div>
                </div>
            </div>
        </>
    );
};
