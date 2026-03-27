import { Sorting } from '@prisma/client';

interface IProps {
    sort: Sorting;
    currentSort: string;
    onClickSort: (sort: string) => void;
}

export const SortProductItem = ({ sort, currentSort, onClickSort }: IProps) => {
    return (
        <>
            <div>
                <h3
                    onClick={() => onClickSort(sort.title)}
                    className={
                        currentSort === sort.title
                            ? 'header__profile_popup-text active'
                            : 'header__profile_popup-text '
                    }
                >
                    {sort.title}
                </h3>
            </div>
        </>
    );
};
