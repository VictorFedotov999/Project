import { UserOrderProduct } from '@prisma/client';
import Image from 'next/image';

interface IProps {
    product: UserOrderProduct;
}

export const OrderProductImg = ({ product }: IProps) => {
    return (
        <>
            <div className='product-item__image'>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={120}
                    height={120}
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </>
    );
};
