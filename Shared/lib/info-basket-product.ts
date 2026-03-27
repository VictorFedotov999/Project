import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import { BasketProductType } from '../../prisma/prismaType';

export const infoBasketProductInfo = (data: BasketProductType[]): IBasketItemsStore[] => {
    if (!Array.isArray(data)) return [];

    return data.flatMap((basket) =>
        Array.isArray(basket.userBasketProducts)
            ? basket.userBasketProducts.map((item) => {
                  const priceIngredients = Array.isArray(item.ingredients)
                      ? item.ingredients.map((i) => i.price)
                      : [];
                  const ingredientsPrice = priceIngredients.reduce((sum, p) => sum + p, 0);

                  const basePrice = item.product?.price ?? 0;
                  const sizePrice = item.sizeOption?.price ?? 0;
                  const typePrice = item.typeOption?.price ?? 0;
                  const totalPrice =
                      (basePrice + ingredientsPrice + sizePrice + typePrice) * (item.quantity ?? 1);

                  return {
                      id: item.id,
                      quantity: item.quantity ?? 1,
                      title: item.product?.title ?? '',
                      imageUrl: item.product?.image ?? '',
                      price: totalPrice,
                      pizzaSize: item.sizeOption?.size ?? '',
                      pizzaType: item.typeOption?.type ?? '',
                      ingredients: Array.isArray(item.ingredients) ? item.ingredients : [],
                  };
              })
            : [],
    );
};
