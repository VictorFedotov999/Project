'use client';

import React from 'react';

import { SortProductSvg } from './SortProductSvg';
import { useClickAway } from 'react-use';
import { getSorts } from '../../../services/sorts';
import { useRouter, useSearchParams } from 'next/navigation';

type PropsType = {};

type SortType = {
    id: number;
    title: string;
};

export const SortProduct: React.FC<PropsType> = () => {
    const [sorts, setSorts] = React.useState<SortType[]>([]);
    const [activeSort, setActiveSort] = React.useState('Рейтинг');

    const [OpenSortPopup, setOpenSortPopup] = React.useState(false);

    const onClickPopup = () => {
        setOpenSortPopup(true);
    };
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category') || '0';

    const onClickSort = (sort: string) => {
        setActiveSort(sort);
        setOpenSortPopup(false);
        router.push(`/?category=${currentCategory}&sort=${sort}`);
    };

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        setOpenSortPopup(false);
    });

    React.useEffect(() => {
        getSorts().then((data) => setSorts(data));
    }, []);

    const router = useRouter();
    return (
        <>
            <div className='sort__inner' ref={ref}>
                <SortProductSvg />

                <p className='sort__title:' onClick={() => onClickPopup()}>
                    Сортировка:
                </p>
                <p className='sort__text' onClick={() => onClickPopup()}>
                    {activeSort}
                </p>

                <div
                    className={
                        OpenSortPopup ? ' header__sort__popup active' : ' header__sort__popup '
                    }
                >
                    {sorts.map((sort: SortType, index: number) => (
                        <div>
                            <h3
                                key={sort.id}
                                onClick={() => onClickSort(sort.title)}
                                className={
                                    activeSort === sort.title
                                        ? 'header__profile_popup-text active'
                                        : 'header__profile_popup-text '
                                }
                            >
                                {sort.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
