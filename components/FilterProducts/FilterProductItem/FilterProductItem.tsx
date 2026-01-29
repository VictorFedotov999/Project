import React from 'react';
export const FilterProductItem = ({ filt }) => {
    return (
        <>
            <li className='filter__type-item'>
                <input
                    className='filter__type-text'
                    type='checkbox'
                    id={`filterCheckbox${filt.id}`}
                />
                <label htmlFor={`filterCheckbox${filt.id}`}>{filt.title}</label>
            </li>
        </>
    );
};
