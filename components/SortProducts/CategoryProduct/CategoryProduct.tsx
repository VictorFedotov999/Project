'use client';
import React from 'react';

import { getCategorys } from '../../../services/categorys';
import { useRouter, useSearchParams } from 'next/navigation';

type PropsType = {};

type CategoryType = {
    id: number;
    title: string;
};

export const CategoryProduct: React.FC<PropsType> = () => {
    const [category, setCategory] = React.useState(0);
    const [categorys, setCategorys] = React.useState<CategoryType[]>([]);

    const searchParams = useSearchParams();
    React.useEffect(() => {
        getCategorys().then((res) => setCategorys(res));
    }, []);

    const onClickCategory = (index: number) => {
        const currentSort = searchParams.get('sort') || 'Рейтинг';
        router.push(`/?category=${index}&sort=${currentSort}`);
        setCategory(index);
    };

    const router = useRouter();

    return (
        <>
            {
                <div className='product__categorie-inner'>
                    {categorys.map((categor: CategoryType, index: number) => (
                        <div
                            key={index}
                            onClick={() => onClickCategory(index)}
                            className={
                                category === index
                                    ? 'product__categorie-text active'
                                    : 'product__categorie-text'
                            }
                        >
                            {categor.title}
                        </div>
                    ))}
                </div>
            }
        </>
    );
};
