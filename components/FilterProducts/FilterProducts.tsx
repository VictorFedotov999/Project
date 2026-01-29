import { FilterBtn } from './FilterBtn/FilterBtn';
import { FilterIngredients } from './FilterIngredients/FilterIngredients';
import { FilterPrice } from './FilterPrice/FilterPrice';
import { FilterProduct } from './FilterProduct/FilterProduct';

export const FilterProducts = () => {
    return (
        <>
            <div className='filter'>
                <h1 className='filter__title'>Фильтрация</h1>

                <FilterProduct />
                <FilterPrice />

                <FilterIngredients />
                <FilterBtn />
            </div>
        </>
    );
};
