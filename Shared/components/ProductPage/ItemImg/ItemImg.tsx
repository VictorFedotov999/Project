import { ProductIdType } from '../../../../prisma/prismaType';

interface IProps {
    product: ProductIdType;
}

const ItemImg = ({ product }: IProps) => {
    return (
        <>
            <div className='product__img'>
                <img className='product__img-product' src={product.image} alt='' />
            </div>
        </>
    );
};

export default ItemImg;
