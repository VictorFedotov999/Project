// import { SortProducts } from 'components/SortProducts/SortProduct';
// import { FilterProducts } from 'components/FilterProducts/FilterProducts';
// import { Products } from 'components/Products/Products';
// import { Basket } from 'components/Basket/Basket';
// import { Header } from 'components/Header/Header';
import { Header } from '../../components/Header/Header';
import { Basket } from '../../components/Basket/Basket';
import { Products } from '../../components/Products/Products';
import { FilterProducts } from '../../components/FilterProducts/FilterProducts';

import { SortProducts } from '../../components/SortProducts/SortProduct';

export default function Home() {
    return (
        <>
            <main className='main'>
                <Header />
                <Basket />
                <SortProducts />

                <section className='products'>
                    <div className='container'>
                        <div className='products__inner'>
                            <FilterProducts />
                            <Products />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
