'use client';
import 'react-dadata/dist/react-dadata.css';
import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import { useFormContext, Controller } from 'react-hook-form';

interface IProps {
    addressError?: string;
}

export const SearchAddras = ({ addressError }: IProps) => {
    const { control } = useFormContext();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div>
            {addressError && <span className='error'>{addressError}</span>}
            <Controller
                name='address'
                control={control}
                defaultValue=''
                render={({ field }) => (
                    <AddressSuggestions
                        token='fcdf620d655a307627f7a604d2ff33b7ffd8607e'
                        value={field.value ?? ''}
                        onChange={(suggestion) => field.onChange(suggestion?.value ?? '')}
                    />
                )}
            />
        </div>
    );
};
