import { prisma } from '../../../../prisma/prisma-client';
import Image from 'next/image';

type PropsType = {
    params: Promise<{
        id: string;
    }>;
};
const ProductPage = async ({ params }: PropsType) => {
    const { id } = await params;

    const numericId = Number(id);

    const product = await prisma.product.findUnique({
        where: {
            id: numericId,
        },
    });

    console.log(product);

    return (
        <section className='product'>
            <div className='container'>
                <div className='product__inner'>
                    <div className='product__img'>
                        <img className='product__img-product' src={product?.imageUrl} alt='' />
                    </div>
                    <div className='product__info'>
                        <h1 className='product__info-title'>{product.title}</h1>
                        <p className='product__info-text'>25 см, традиционное тесто 25, 380 г</p>
                        <div className='product__info-sizes'>
                            <h3 className='product__info-sizes-text active'>Меленькая</h3>
                            <h3 className='product__info-sizes-text'>Средняя</h3>
                            <h3 className='product__info-sizes-text'>Большая</h3>
                        </div>
                        <div className='product__info-types'>
                            <h3 className='product__info-type-text'>Традиционное</h3>
                            <h3 className='product__info-type-text active'>Тонкое</h3>
                        </div>
                        <div className='product__info-igredients'>
                            <h1 className='product__info-igredients-title'>Ингредиенты</h1>
                            <div className='product__info-items'>
                                <div className='product__info-item active'>
                                    <img className='product__info-igredient-img' src='' alt='' />
                                    <h3 className='product__info-igredient-title'>Сырный бортик</h3>
                                    <h3 className='product__info-igredient-price'>179 ₽</h3>
                                </div>
                                <div className='product__info-item'>
                                    <img
                                        className='product__info-igredient-img'
                                        src='./img/product/item2.png'
                                        alt=''
                                    />
                                    <h3 className='product__info-igredient-title'>Сырный бортик</h3>
                                    <h3 className='product__info-igredient-price'>179 ₽</h3>
                                </div>
                                <div className='product__info-item'>
                                    <img
                                        className='product__info-igredient-img'
                                        src='./img/product/item3.png'
                                        alt=''
                                    />
                                    <h3 className='product__info-igredient-title'>Сырный бортик</h3>
                                    <h3 className='product__info-igredient-price'>179 ₽</h3>
                                </div>
                                <div className='product__info-item'>
                                    <img
                                        className='product__info-igredient-img'
                                        src='./img/product/item4.png'
                                        alt=''
                                    />
                                    <h3 className='product__info-igredient-title'>Сырный бортик</h3>
                                    <h3 className='product__info-igredient-price'>179 ₽</h3>
                                </div>
                            </div>
                        </div>
                        <button className='product__btn'>Добавить в корзину за 799₽</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
