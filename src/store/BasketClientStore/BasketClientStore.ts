import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
    clearBasket,
    addProductItem,
    getBasketUser,
    increaseProductCount,
    removeProductItem,
} from '../../../services/basketUser';
import { infoBasketProductInfo } from '../../../Shared/lib/info-basket-product';
import { IInitialState, IUseProductBasketClientState } from './BasketClientType';

const initialState: IInitialState = {
    items: [],
    error: false,
    errorMessage: '',
    loading: true,
    totalCost: 0,
    productCount: 0,
};

const updateBasketState = (set: any, items: IInitialState['items'], loading = false) => {
    const totalCost = items.reduce((sum, item) => sum + item.price, 0);
    const productCount = items.length;

    set({
        items,
        totalCost,
        productCount,
        loading,
        error: false,
        errorMessage: '',
    });
};

const ProductBasketClientStore: StateCreator<IUseProductBasketClientState> = (set, get) => ({
    ...initialState,

    fetchCartItems: async () => {
        set({ loading: true, error: false, errorMessage: '' });
        try {
            const data = await getBasketUser();
            const items = infoBasketProductInfo(data);
            updateBasketState(set, items, false);
        } catch (err: any) {
            console.error(err);
            set({
                error: true,
                errorMessage: err.message || 'Ошибка при загрузке корзины',
                loading: false,
            });
        }
    },

    addCartItem: async (value) => {
        set({ loading: true, error: false, errorMessage: '' });
        try {
            await addProductItem(value);
            const data = await getBasketUser();
            const items = infoBasketProductInfo(data);
            updateBasketState(set, items, false);
        } catch (err: any) {
            console.error(err);
            set({
                error: true,
                errorMessage: err.message || 'Ошибка при добавлении товара',
                loading: false,
            });
        }
    },

    removeCartItem: async (productId) => {
        set({ loading: true, error: false, errorMessage: '' });
        try {
            await removeProductItem(productId);
            const data = await getBasketUser();
            const items = infoBasketProductInfo(data);
            updateBasketState(set, items, false);
        } catch (err: any) {
            console.error(err);
            set({
                error: true,
                errorMessage: err.message || 'Ошибка при удалении товара',
                loading: false,
            });
        }
    },

    increaseCartItem: async (productId, count) => {
        set({ loading: true, error: false, errorMessage: '' });
        try {
            await increaseProductCount(productId, count);
            const data = await getBasketUser();
            const items = infoBasketProductInfo(data);
            updateBasketState(set, items, false);
        } catch (err: any) {
            console.error(err);
            set({
                error: true,
                errorMessage: err.message || 'Ошибка при увеличении количества',
                loading: false,
            });
        }
    },

    removeBasketProducts: async () => {
        set({ loading: true, error: false, errorMessage: '' });
        try {
            await clearBasket();
            updateBasketState(set, [], false);
        } catch (err: any) {
            console.error(err);
            set({
                error: true,
                errorMessage: err.message || 'Ошибка при очистке корзины',
                loading: false,
            });
        }
    },
});

export const useProductBasketClientStore = create<IUseProductBasketClientState>()(
    devtools(ProductBasketClientStore),
);
