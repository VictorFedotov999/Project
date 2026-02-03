import { Ingredient } from '@prisma/client';
import { axionsInstatce } from './instance';

export const getIngredients = async () => {
    const { data } = await axionsInstatce.get<Ingredient[]>('/api/ingredientss');
    return data;
};
