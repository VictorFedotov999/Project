import { prisma } from '../../prisma/prisma-client';

export async function calculateAndUpdateBasketProductPrice(basketProductId: number) {
    try {
        const basketProduct = await prisma.userBasketProduct.findUnique({
            where: { id: basketProductId },
            include: {
                product: true,
                sizeOption: true,
                typeOption: true,
                ingredients: true,
            },
        });

        if (!basketProduct) return null;

        const basePrice = basketProduct.product?.price ?? 0;
        const sizePrice = basketProduct.sizeOption?.price ?? 0;
        const typePrice = basketProduct.typeOption?.price ?? 0;
        const ingredientsPrice = basketProduct.ingredients.reduce((sum, ing) => sum + ing.price, 0);

        const totalPrice =
            (basePrice + ingredientsPrice + sizePrice + typePrice) * basketProduct.quantity;

        const updated = await prisma.userBasketProduct.update({
            where: { id: basketProductId },
            data: { price: totalPrice },
        });

        return updated;
    } catch (error) {
        console.error('Error', error);
        return null;
    }
}
