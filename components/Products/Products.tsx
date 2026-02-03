'use client';
import React from 'react';
import { ProductItem } from './Product/Product';
import { Api } from '../../services/api-client';
import { useSearchParams } from 'next/navigation';
import { Product } from '@prisma/client';

export const Products = () => {
    const searchParams = useSearchParams();
    const sort = String(searchParams.get('sort')) || 'Рейтинг';
    const category = Number(searchParams.get('category'));
    const ingredients = String(searchParams.get('ingredients'));

    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        Api.CategoryProduct(String(category || ''), sort, String(ingredients || null)).then(
            (item) => setProducts(item),
        );
    }, [category, sort, ingredients]);

    if (products.length === 0) {
        return 'Ничего не найдено';
    }

    return (
        <>
            <div className='items'>
                {products.map((product, index) => (
                    <ProductItem
                        key={`${product.title} + ${index}`}
                        title={product.title}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        id={product.id}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    );
};
