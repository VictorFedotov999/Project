'use client';

import React from 'react';
import ItemButton from '../ItemButton/ItemButton';
import ItemIgredients from '../ItemIgredients/ItemIgredients';
import ItemImg from '../ItemImg/ItemImg';
import ItemSizes from '../ItemSizes/ItemSizes';
import ItemTitle from '../ItemTitle/ItemTitle';
import ItemType from '../ItemType/ItemType';

import { Product, SizeOption, TypeOption, Ingredient } from '@prisma/client';
import { addProduct } from '@/store/BasketClientStore/BasketClientSelectors';
type ProductInfoType = {
    product: Product;
    sizes: SizeOption[];
    sizeOptions: SizeOption[];
    types: TypeOption[];
    typeOptions: TypeOption[];
    ingredients: Ingredient[];
};

export const ProductInfo = ({
    product,
    sizes,
    sizeOptions,
    types,
    typeOptions,
    ingredients,
}: ProductInfoType) => {
    const [sizeActive, setSizeAcitve] = React.useState(0);
    const [typeActive, setTypeActive] = React.useState(0);
    const [igredientActive, setIgredientActive] = React.useState(0);

    const sizeCurrent = sizes.map((size) => size.size);
    const typeCurrent = types.map((type) => type.type);

    const onClickAddProduct = () => {
        const newProduct = {
            id: product.id,
            title: product.title,
            imageUrl: product.imageUrl,
            size: sizeCurrent[sizeActive],
            type: typeCurrent[typeActive],
            price: product.price,
            count: 1,
        };
        addProduct(newProduct);
    };

    return (
        <>
            <ItemImg product={product} />

            <div className='product__info'>
                <ItemTitle product={product} />
                <p className='product__info-text'>25 см, традиционное тесто 25, 380 г</p>

                <ItemSizes
                    sizes={sizes}
                    sizeOptions={sizeOptions}
                    sizeActive={sizeActive}
                    setSizeAcitve={setSizeAcitve}
                />

                <ItemType
                    types={types}
                    typeOptions={typeOptions}
                    typeActive={typeActive}
                    setTypeActive={setTypeActive}
                />

                <ItemIgredients
                    ingredients={ingredients}
                    igredientActive={igredientActive}
                    setIgredientActive={setIgredientActive}
                />

                <div onClick={onClickAddProduct}>
                    <ItemButton price={product.price} />
                </div>
            </div>
        </>
    );
};
