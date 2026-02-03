import * as products from './searchProducts';
import * as category from './productCategory';

export const Api = {
    SearchProduct: products.search,
    CategoryProduct: category.category,
};
