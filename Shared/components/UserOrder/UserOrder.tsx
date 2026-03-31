import { $Enums } from '@prisma/client';

import { UserOrderProduct } from '@prisma/client';

import { OrderStatus } from './OrderStatus/OrderStatus';
import { OrderCost } from './OrderCost/OrderCost';
import { UserProduct } from './UserProduct/UserProduct';

export interface IUserOrder {
    order: {
        id: number;
        status: $Enums.OrderStatus;
        userOrderProduct: UserOrderProduct[];
    };
}

export const UserOrder = ({ order }: IUserOrder) => {
    const totalPrice = order.userOrderProduct.reduce((sum, product) => {
        let ingredients: any[] = [];

        try {
            if (product.ingredients) {
                ingredients = JSON.parse(product.ingredients as string);
            }
        } catch (e) {
            console.error(e);
        }

        const ingredientsPrice = ingredients.reduce((acc, ing) => acc + ing.price, 0);

        const productPrice =
            Number(product.price) +
            Number(product.sizePrice || 0) +
            Number(product.typePrice || 0) +
            ingredientsPrice;

        return sum + productPrice * product.quantity;
    }, 0);
    return (
        <>
            <div className='order'>
                <OrderStatus order={order} />

                <div className='order__body'>
                    <div className='product-list'>
                        {order.userOrderProduct.map((product) => (
                            <UserProduct key={product.id} product={product} />
                        ))}
                    </div>
                    <OrderCost totalPrice={totalPrice} />
                </div>
            </div>
        </>
    );
};
