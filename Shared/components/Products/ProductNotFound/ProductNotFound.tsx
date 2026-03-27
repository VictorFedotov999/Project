import Image from 'next/image';

import NotProductImg from '../../../../public/not-find/Not-Product.png';

export const ProductNotFound = () => {
    return (
        <>
            <div className='not__product'>
                <Image
                    className='
                    not__product-img'
                    src={NotProductImg}
                    width={400}
                    height={400}
                    alt='Not-Product'
                />
                <h1 className='not__product-text'> Не найдено</h1>
            </div>
        </>
    );
};
