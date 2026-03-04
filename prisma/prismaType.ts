import { Prisma } from '@prisma/client';

export type ProductIdType = Prisma.ProductGetPayload<{
    include: {
        sizeOptions: true;
        typeOptions: true;
        ingredients: true;
    };
}>;

export type BasketProductType = Prisma.UserBasketGetPayload<{
    include: {
        userBasketProducts: {
            include: {
                product: {};
                sizeOption: {};
                typeOption: {};
                ingredients: {};
            };
        };
    };
}>;
