import { prisma } from '../../../../prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { UserOrder } from '../../../../Shared/components/UserOrder/UserOrder';

import { NotAuth } from '../../../../Shared/components/UserOrder/not-auth/not-auth';
import { NotOrders } from '../../../../Shared/components/UserOrder/NotOrders/NotOrders';

const userOrdersPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return <NotAuth />;
    }

    const userId = Number((session.user as any).id);

    const orders = await prisma.userOrder.findMany({
        where: { userId },
        include: {
            userOrderProduct: {},
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    if (!orders || orders.length === 0) {
        return <NotOrders />;
    }

    return (
        <div className='container'>
            <div className='orders'>
                <h1 className='orders__title'>Мои заказы</h1>

                {orders.map((order) => (
                    <UserOrder key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
};

export default userOrdersPage;
