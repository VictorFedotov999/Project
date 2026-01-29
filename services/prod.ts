import { axionsInstatce } from './instance';
import { Product } from '@prisma/client';

export const getProducts = async () => {
    const { data } = await axionsInstatce.get<Product[]>(`/api/prods`);
    return data;
};
