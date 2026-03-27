import { getCategorys } from '../../../services/categorys';
import { getSorts } from '../../../services/sorts';
import { CategoryProduct } from './CategoryProduct/CategoryProduct';
import { SortError } from './SortError/SortError';
import { SortProduct } from './SortProduct/SortProduct';

export const SortProducts = async () => {
    const categorys = await getCategorys();
    const sorts = await getSorts();

    if (!categorys || !sorts) {
        return <SortError />;
    }

    return (
        <>
            <section className='choice__product'>
                <div className='container'>
                    <div className='choice__product-title'>
                        <h1 className='choice__product-text'>Категории:</h1>
                    </div>

                    <div className='product__categorie'>
                        <CategoryProduct categorys={categorys} />
                        <SortProduct sorts={sorts} />
                    </div>
                </div>
            </section>
        </>
    );
};
