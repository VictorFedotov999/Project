import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import { BasketProductType } from '../prisma/prismaType';

export const infoBasketProductInfo = (data: BasketProductType[]): IBasketItemsStore[] => {
    return data.flatMap((basket) =>
        basket.userBasketProducts.map((basketItem) => {
            const priceIngredients = basketItem.ingredients.map((ingredient) => ingredient.price);

            const totalPrice =
                priceIngredients.reduce((sum, price) => sum + price, 0) +
                Number(basketItem.sizeOption.price) +
                Number(basketItem.typeOption.price);
            return {
                id: basketItem.id,
                quantity: basketItem.quantity,

                title: basketItem.product.title,
                imageUrl: basketItem.product.image,
                price: (Number(basketItem.product.price) + totalPrice) * basketItem.quantity,

                pizzaSize: basketItem.sizeOption.size,
                pizzaType: basketItem.typeOption.type,

                ingredients: basketItem.ingredients,
            };
        }),
    );
};
