'use client';

import React from 'react';
import { ProductItem as ItemProduct } from './Product/Product';
import { useSearchParams } from 'next/navigation';
import { ProductIdType } from '../../../prisma/prismaType';
import { Api } from '../../../services/api-client';
import { ProductNotFound } from './ProductNotFound/ProductNotFound';
import { SkeletonProduct } from './Product/SkeletonProduct/SkeletonProduct';

export const Products = () => {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || 'Рейтинг';
    const category = searchParams.get('category') || '0';
    const ingredients = searchParams.get('ingredients') || '';
    const size = searchParams.get('size') || '';
    const type = searchParams.get('type') || '';

    const [products, setProducts] = React.useState<ProductIdType[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsLoading(true);

        Api.filteringProducts(category, sort, ingredients, size, type)
            .then((item) => {
                setProducts(item);
                setIsLoading(false);
            })
            .catch((error) => console.error('Error:', error));
    }, [category, sort, ingredients, size, type]);

    if (isLoading) {
        return <SkeletonProduct />;
    }

    if (products.length === 0) {
        return <ProductNotFound />;
    }

    return (
        <>
            <div className='items'>
                {products.map((product) => (
                    <ItemProduct key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};
