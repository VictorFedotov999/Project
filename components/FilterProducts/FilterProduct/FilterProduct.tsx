import { prisma } from '../../../prisma/prisma-client';
import { FilterProductItem } from '../FilterProductItem/FilterProductItem';

import { Filter } from '@prisma/client';

export const FilterProduct = async () => {
    const filter = await prisma.filter.findMany();
    console.log(filter);

    return (
        <>
            <div className='filter__type'>
                <ul className='filter__type-items'>
                    {filter.map((filter: Filter) => (
                        <FilterProductItem key={filter.title} filt={filter} />
                    ))}
                </ul>
            </div>
        </>
    );
};
