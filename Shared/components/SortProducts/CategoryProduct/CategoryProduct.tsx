'use client';

import { Category } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { CategoryProductItem } from './CategoryProductItem';

interface IProps {
    categorys: Category[];
}

export const CategoryProduct = ({ categorys }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('category') || '';

    const onClickCategory = (id: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', id.toString());
        router.replace(`/?${params.toString()}`);
    };

    return (
        <div className='product__categorie-inner'>
            {categorys.map((category, index: number) => (
                <CategoryProductItem
                    key={category.id}
                    index={index}
                    category={category}
                    currentCategory={currentCategory}
                    onClickCategory={onClickCategory}
                />
            ))}
        </div>
    );
};
