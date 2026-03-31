'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { PersonalInfoCart } from '../PersonalInfoCart/PersonalInfoCart';
import { DeliveryCart } from '../DeliveryCart/DeliveryCart';
import { API_ORDER } from '../../../../services/instance';
import toast from 'react-hot-toast';

export interface IForm {
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    comment: string;
}

export const FormCart = () => {
    const methods = useForm<IForm>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            address: '',
            comment: '',
        },
    });

    const { register, formState, handleSubmit } = methods;

    const onSubmit = async (data: IForm) => {
        try {
            const response = await fetch(API_ORDER, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (!response.ok) {
                toast.error('Ошибка при создании заказа');
                alert(result.message || '');
                return;
            }
            toast.success('Заказ успешно создан!');
        } catch (err) {
            console.error(err);
            alert('Ошибка сервера');
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <PersonalInfoCart register={register} formState={formState} />
                <DeliveryCart register={register} formState={formState} />

                <button className='order__promo-btn' type='submit'>
                    Перейти к оплате
                </button>
            </form>
        </FormProvider>
    );
};
