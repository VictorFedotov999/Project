import * as search from './searchProducts';
import * as filter from './filteringProduct';
import * as user from './basketUser';

export const Api = {
    searchProduct: search.searchProduct,
    filteringProducts: filter.filteringProduct,
    userBasket: user.getBasketUser,
};
