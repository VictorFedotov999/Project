import { ProductSkeleton } from '../../../../Skeletons/ProductSkeleton';

export const SkeletonProduct = () => {
    const limitProduct = 12;
    const skeletonProduct = Array(limitProduct).fill(0);
    return (
        <div className='items'>
            {skeletonProduct.map((_, index: number) => (
                <ProductSkeleton key={`${_}-${index}`} />
            ))}
        </div>
    );
};
