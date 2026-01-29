import { CategoryProduct } from './CategoryProduct/CategoryProduct';
import { SortProduct } from './SortProduct/SortProduct';

export const SortProducts = () => {
    return (
        <>
            <section className='choice__product'>
                <div className='container'>
                    <div className='choice__product-title'>
                        <h1 className='choice__product-text'>Все пиццы</h1>
                    </div>

                    <div className='product__categorie'>
                        <CategoryProduct />
                        <SortProduct />
                    </div>
                </div>
            </section>
        </>
    );
};
