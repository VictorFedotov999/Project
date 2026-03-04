import { useProductBasketClientStore } from './BasketClientStore';

export const useStoreItems = () => useProductBasketClientStore((state) => state.items);

export const useStoreTotalCost = () => useProductBasketClientStore((state) => state.totalCost);

export const useStoreProductCount = () =>
    useProductBasketClientStore((state) => state.productCount);

//___________________________________________________________//

export const useFetchCartItems = () => useProductBasketClientStore.getState().fetchCartItems();

export const useAddCartItem = (value: { productItemId: number; quantity: number }) =>
    useProductBasketClientStore.getState().addCartItem(value);

export const useRemoveCartItem = (value: { productItemId: number }) =>
    useProductBasketClientStore.getState().removeCartItem(value);
