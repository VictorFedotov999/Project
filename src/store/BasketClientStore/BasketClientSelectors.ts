import { useProductBasketClientStore } from './BasketClientStore';
import { INewProduct } from './BasketClientType';

export const useProductBasketClient = () => useProductBasketClientStore((state) => state.products);

export const useProductBasketCost = () => useProductBasketClientStore((state) => state.totalCost);

export const useProductBasketCount = () =>
    useProductBasketClientStore((state) => state.productCount);

export const addProduct = (newProduct: INewProduct) =>
    useProductBasketClientStore.getState().addProduct(newProduct);

export const removeProduct = (newProduct: INewProduct) =>
    useProductBasketClientStore.getState().removeProduct(newProduct);

export const plusProduct = (newProduct: INewProduct) =>
    useProductBasketClientStore.getState().plusProduct(newProduct);
