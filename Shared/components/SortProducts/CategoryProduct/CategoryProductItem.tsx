import { Category } from '@prisma/client';

interface IProps {
    category: Category;
    currentCategory: string;
    onClickCategory: (index: number) => void;
    index: number;
}

export const CategoryProductItem = ({
    category,
    currentCategory,
    onClickCategory,
    index,
}: IProps) => {
    return (
        <>
            <div
                key={category.id}
                onClick={() => onClickCategory(index)}
                className={
                    currentCategory === index.toString()
                        ? 'product__categorie-text active'
                        : 'product__categorie-text'
                }
            >
                {category.title}
            </div>
        </>
    );
};
