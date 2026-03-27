import { ProductIdType } from '../../../../prisma/prismaType';

interface IProps {
    product: ProductIdType;
}

const ItemTitle = ({ product }: IProps) => {
    return (
        <>
            <h1 className='product__info-title'>{product.title}</h1>
        </>
    );
};

export default ItemTitle;
