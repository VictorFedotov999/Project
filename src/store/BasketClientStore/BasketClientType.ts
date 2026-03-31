import { Ingredient, Product, SizeOption, TypeOption, UserBasket } from '@prisma/client';

export interface IActions {
    fetchCartItems: () => void;
    addCartItem: (value: { productItemId: number; quantity: number }) => void;
    removeCartItem: (productId: number) => void;
    removeBasketProducts: () => void;
    increaseCartItem: (productId: number, count: number) => void;
}

export interface IInitialState {
    items: IBasketItemsStore[];
    error: boolean;
    errorMessage: string;
    loading: boolean;
    totalCost: number;
    productCount: number;
}

export interface IUseProductBasketClientState extends IInitialState, IActions {}

export interface IBasketProduct extends UserBasket {
    product: IProduct;
}

export interface IBasketItemsStore {
    id: number;
    quantity: number;
    title: string;
    imageUrl: string;
    price: number;
    pizzaSize?: number | null;
    pizzaType?: string | null;
    ingredients: Array<{ title: string; price: number }>;
}

export interface IProduct extends Product {
    ingredient: Ingredient[];
    sizeOption: SizeOption[];
    typeOption: TypeOption[];
}
