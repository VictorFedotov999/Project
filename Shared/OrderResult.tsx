import Image from 'next/image';

interface IProps {
    img: string;
    text: string;
    price: number;
}

export const OrderResult = ({ img, text, price }: IProps) => {
    return (
        <>
            <div className='order__result-cost'>
                <h4 className='order__result-text'>
                    <Image
                        className='order__result-icon'
                        src={img}
                        alt='Icon'
                        width={20}
                        height={20}
                    />
                    {text}
                </h4>
                <h4 className='order__result-itog'>{price} ₽</h4>
            </div>
        </>
    );
};
