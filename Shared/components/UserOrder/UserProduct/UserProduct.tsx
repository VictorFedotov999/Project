import { UserOrderProduct } from '@prisma/client';
import { OrderProductImg } from './OrderProductImg';

interface IIngredient {
    id: number;
    title: string;
    price: number;
}

interface IProps {
    product: UserOrderProduct;
}

export const UserProduct = ({ product }: IProps) => {
    let ingredients = [];

    if (product.ingredients) {
        ingredients = JSON.parse(product.ingredients);
        try {
        } catch (error) {
            console.error('Error', error);
        }
    }

    const priceIngredients = ingredients.map((ingredient: IIngredient) => ingredient.price);

    const totalPriceIngredients = priceIngredients.reduce((a: number, b: number) => a + b, 0);

    const totalPrice =
        (Number(product.price) +
            Number(product.sizePrice) +
            Number(product.typePrice) +
            Number(totalPriceIngredients)) *
        Number(product.quantity);

    return (
        <>
            <div className='product-item'>
                <OrderProductImg product={product} />

                <div className='product-item__info'>
                    <h3 className='product-item__title'>{product.title}</h3>

                    {(product.typeValue ||
                        Number(product.sizeValue) ||
                        Number(ingredients.length) > 1) && (
                        <div className='product-item__details'>
                            {product.typeValue && (
                                <span className='product-item__detail product-item__detail--type'>
                                    {product.typeValue} : {product.typePrice} руб
                                </span>
                            )}
                            {product.sizeValue && (
                                <span className='product-item__detail product-item__detail--size'>
                                    {product.sizeValue}см : {product.sizePrice} руб
                                </span>
                            )}
                            {ingredients && (
                                <span className='product-item__detail product-item__detail--ingredient'>
                                    {ingredients.map((ingredient: IIngredient) => (
                                        <div key={ingredient.id}>
                                            {ingredient.title}:{ingredient.price} руб,
                                        </div>
                                    ))}
                                </span>
                            )}
                        </div>
                    )}

                    <div className='product-item__details'>
                        <span className='product-item__detail product-item__detail--quantity'>
                            Кол-во: {product.quantity} шт.
                        </span>
                    </div>

                    <div className='product-item__price'>
                        {totalPrice} руб <br />
                    </div>
                </div>
            </div>
        </>
    );
};
