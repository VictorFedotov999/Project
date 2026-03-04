import Link from 'next/link';
import Image from 'next/image';
import { ProductIdType } from '../../../prisma/prismaType';

interface IProps {
    products: ProductIdType[];
    setFocused: (type: boolean) => void;
}

const InputPopop = ({ products, setFocused }: IProps) => {
    return (
        <>
            <div className='header__popup active'>
                <div className='header__popup__items'>
                    {products.map((product) => (
                        <Link key={product.description} href={`/prods/${product.id}`}>
                            <div className='header__popup__item' onClick={() => setFocused(false)}>
                                <Image
                                    className='header__popup__item-img'
                                    src={product.image}
                                    alt='Product'
                                    width={30}
                                    height={30}
                                />

                                <h3 className='header__popup__item-title'>{product.title}</h3>
                                <h3 className='header__popup__item-price'>{product.price} ₽</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default InputPopop;
