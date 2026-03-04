import { API_PRODUCTS, axionsInstatce } from './instance';
import { ProductIdType } from '../prisma/prismaType';

export const searchProduct = async (query: string): Promise<ProductIdType[]> => {
    const { data } = await axionsInstatce.get<ProductIdType[]>(API_PRODUCTS, {
        params: { query },
    });
    return data;
};
