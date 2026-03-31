import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';
import { InputForm } from '../../../Form/input-form';
import { Title } from '../../../title-cart';

interface IProps {
    register: UseFormRegister<FieldValues>;
    formState: FormState<FieldValues>;
}

export const PersonalInfoCart = ({ register, formState }: IProps) => {
    const nameError = formState.errors['name']?.message;
    const surnameError = formState.errors['surname']?.message;
    const emailError = formState.errors['email']?.message;
    const phoneError = formState.errors['phone']?.message;

    return (
        <div className='order__cart'>
            <Title title={'2. Персональная информация'} />
            <div className='order__personal'>
                <div className='order__form-inner'>
                    <InputForm
                        type='text'
                        placeholder='Имя'
                        regName='name'
                        error={nameError}
                        register={register}
                    />
                    <InputForm
                        type='text'
                        placeholder='Фамилия'
                        regName='surname'
                        error={surnameError}
                        register={register}
                    />
                    <InputForm
                        type='email'
                        placeholder='Email'
                        regName='email'
                        error={emailError}
                        register={register}
                    />
                    <InputForm
                        type='text'
                        placeholder='Телефон'
                        regName='phone'
                        error={phoneError}
                        register={register}
                    />
                </div>
            </div>
        </div>
    );
};
