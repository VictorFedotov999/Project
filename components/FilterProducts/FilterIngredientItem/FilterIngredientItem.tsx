import React from 'react';

export const FilterIngredientItem = ({ ingredients }) => {
    return (
        <>
            <ul className='filter__ingredients-items'>
                <li className='filter__ingredients-item'>
                    <input type='checkbox' id={`ingredient-${ingredients.id}`} />
                    <label htmlFor={`ingredient-${ingredients.id}`}>{ingredients.title}</label>
                </li>
            </ul>
        </>
    );
};
