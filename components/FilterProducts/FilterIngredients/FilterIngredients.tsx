import { prisma } from '../../../prisma/prisma-client';
import { FilterIngredientItem } from '../FilterIngredientItem/FilterIngredientItem';

export const FilterIngredients = async () => {
    const ingredients = await prisma.ingredients.findMany();

    return (
        <>
            <div className='filter__ingredients'>
                <div className='filter__ingredients-title'>Ингредиенты:</div>
                {ingredients.map((ingredient) => (
                    <FilterIngredientItem key={ingredient.img} ingredients={ingredient} />
                ))}

                <button className='filter__all'>+ Показать все</button>
            </div>
        </>
    );
};
