import { Product } from '@prisma/client';

type PropsType = {
    product: Product;
};

const ItemTitle = ({ product }: PropsType) => {
    return (
        <>
            <h1 className='product__info-title'>{product.title}</h1>
        </>
    );
};

export default ItemTitle;
