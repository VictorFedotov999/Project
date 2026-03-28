import { $Enums } from '@prisma/client';
import { UserProduct } from './UserProduct/UserProduct';
import { UserOrderProduct } from '@prisma/client';

export const UserOrder = ({ order }) => {
    return (
        <>
            <div>
                <h2>Заказ #{order.id}</h2>
                <div className=''>
                    {order.userOrderProduct.map((product) => (
                        <UserProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};
