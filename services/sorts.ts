import { axionsInstatce } from './instance';
import { Category } from '@prisma/client';

export const getSorts = async () => {
    const { data } = await axionsInstatce.get<Category[]>('/api/sortingss');
    return data;
};
