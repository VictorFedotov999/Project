'use client';

import React from 'react';
import Image from 'next/image';
import { useClickAway } from 'react-use';
import { useRouter, useSearchParams } from 'next/navigation';
import ChoiceProductIcon from '../../../../public/choiceProduct/choiceProduct.svg';
import { Sorting } from '@prisma/client';
import { SortProductItem } from './SortProductItem';

interface IProps {
    sorts: Sorting[];
}

export const SortProduct = ({ sorts }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [OpenSortPopup, setOpenSortPopup] = React.useState<boolean>(false);

    const currentSort = searchParams.get('sort') || 'Рейтинг';
    const onClickPopup = () => {
        setOpenSortPopup(true);
    };

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        setOpenSortPopup(false);
    });

    const onClickSort = (sort: string) => {
        setOpenSortPopup(false);

        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', sort);

        router.replace(`/?${params.toString()}`);
    };

    return (
        <div className='sort__inner' ref={ref}>
            <Image
                className='sort__img'
                src={ChoiceProductIcon}
                width={20}
                height={20}
                alt='Choice-Icon'
            />
            <p className='sort__title:'>Сортировка:</p>
            <p className='sort__text' onClick={() => onClickPopup()}>
                {currentSort}
            </p>

            <div
                className={OpenSortPopup ? ' header__sort__popup active' : ' header__sort__popup '}
            >
                {sorts.map((sort) => (
                    <SortProductItem
                        key={sort.id}
                        sort={sort}
                        currentSort={currentSort}
                        onClickSort={onClickSort}
                    />
                ))}
            </div>
        </div>
    );
};
