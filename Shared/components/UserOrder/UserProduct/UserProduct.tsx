import { Ingredient, UserOrderProduct } from '@prisma/client';
import Image from 'next/image';
interface IProps {
    product: UserOrderProduct;
}

export const UserProduct = ({ product }: IProps) => {
    const ingredients = (product.ingredients as Ingredient[]) || '';

    const IngredientsPrice = Array.isArray(ingredients)
        ? ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
        : 0;

    const ingredientsTitles = Array.isArray(ingredients)
        ? ingredients.map((ingredient) => ingredient.title)
        : [];
    const ingredientsString = ingredientsTitles.join(', ');
    const price =
        Number(product.price) +
        Number(product.sizePrice) +
        Number(product.typePrice) +
        Number(IngredientsPrice);

    return (
        <>
            <div className='ordrers__info'>
                <div>
                    <Image src={product.image} alt={product.title} width={250} height={250} />
                </div>
                <div>
                    <h3 className='ordrers__info-title'> {product.title}</h3>

                    {product.typeValue || product.sizeValue ? (
                        <>
                            <p className='ordrers__info-text'>Тип: {product.typeValue}</p>
                            <p className='ordrers__info-text'>Размер: {product.sizeValue}</p>
                        </>
                    ) : (
                        ''
                    )}
                    {ingredientsString}
                    <p className='ordrers__info-text'>Кол-во: {product.quantity}</p>
                    <p>Цена заказа: {price} </p>
                </div>
            </div>
        </>
    );
};
