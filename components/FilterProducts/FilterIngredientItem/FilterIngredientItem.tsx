import React from 'react';

import { Ingredient } from '@prisma/client';

type PropsType = {
    ingredients: Ingredient;
    checked: boolean;
    onChange: () => void;
};

export const FilterIngredientItem: React.FC<PropsType> = ({ ingredients, checked, onChange }) => {
    return (
        <>
            <ul className='filter__ingredients-items'>
                <li className='filter__ingredients-item'>
                    <input
                        checked={checked}
                        onChange={onChange}
                        type='checkbox'
                        id={`ingredient-${ingredients.id}`}
                    />
                    <label htmlFor={`ingredient-${ingredients.id}`}>{ingredients.title}</label>
                </li>
            </ul>
        </>
    );
};
