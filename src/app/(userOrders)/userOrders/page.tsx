import { prisma } from '../../../../prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { UserOrder } from '../../../../Shared/components/UserOrder/UserOrder';

const userOrdersPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return (
            <div className='container'>
                <h1>Нужно войти</h1>
                <p>Чтобы посмотреть историю заказов, авторизуйтесь.</p>
            </div>
        );
    }

    const userId = Number((session.user as any).id);

    const orders = await prisma.userOrder.findMany({
        where: { userId },
        include: {
            userOrderProduct: {},
        },
    });

    if (!orders || orders.length === 0) {
        return (
            <div className='container'>
                <h1>Мои заказы</h1>
                <p>У вас пока нет заказов.</p>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='ordrers'>
                <h1 className='ordrers__title'>Мои заказы</h1>

                {orders.map((order) => (
                    <div className='ordrers__box' key={order.id}>
                        <h1 className='ordrers__status'>Статус {order.status}</h1>
                        <UserOrder key={order.id} order={order} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default userOrdersPage;
