import { API_SORTING, axionsInstatce } from './instance';
import { Sorting } from '@prisma/client';

export const getSorts = async () => {
    const { data } = await axionsInstatce.get<Sorting[]>(API_SORTING);
    return data;
};
