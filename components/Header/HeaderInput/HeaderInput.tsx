'use client';

import React from 'react';

import InputPopop from './InputPopop';
import { Api } from '../../../services/api-client';
import { debounce } from 'lodash';
import { useClickAway } from 'react-use';
import { ProductIdType } from '../../../prisma/prismaType';

export const HeaderInput = () => {
    const [searchQuery, setSearQuery] = React.useState<string>('');
    const [focused, setFocused] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<ProductIdType[]>([]);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    const onClickRemoveSearchQuery = () => {
        setSearQuery('');
    };

    const fetchProducts = React.useCallback(
        debounce(async (query: string) => {
            const data = await Api.searchProduct(query);
            setProducts(data);
        }, 500),
        [],
    );

    React.useEffect(() => {
        fetchProducts(searchQuery);
    }, [searchQuery, fetchProducts]);

    return (
        <>
            <div className={focused ? 'black--font' : ''} ref={ref}>
                <div className='header__search'>
                    <input
                        className='header__input'
                        type=''
                        placeholder='Поиск пиццы...'
                        onFocus={() => setFocused(true)}
                        value={searchQuery}
                        onChange={(e) => setSearQuery(e.target.value)}
                    />
                </div>

                <img
                    onClick={onClickRemoveSearchQuery}
                    className={searchQuery.length > 1 ? 'header__search-delete' : 'none'}
                    src='../../deleteInpt.svg'
                    alt=''
                />

                {focused && <InputPopop products={products} setFocused={setFocused} />}
            </div>
        </>
    );
};
