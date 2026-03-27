import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);
        const body = await req.json();
        const { name, surname, email, phone, address, comment } = body;

        // Получаем корзину с продуктами и ингредиентами
        const basket = await prisma.userBasket.findUnique({
            where: { userId },
            include: {
                userBasketProducts: {
                    where: { userOrderId: null },
                    include: {
                        product: true,
                        sizeOption: true,
                        typeOption: true,
                        ingredients: true,
                    },
                },
            },
        });

        if (!basket || basket.userBasketProducts.length === 0)
            return NextResponse.json({ message: 'Корзина пустая' }, { status: 400 });

        // Считаем totalAmount
        const totalAmount = basket.userBasketProducts.reduce((sum, item) => {
            const basePrice = item.product?.price ?? 0;
            const sizePrice = item.sizeOption?.price ?? 0;
            const typePrice = item.typeOption?.price ?? 0;
            const ingredientsPrice = item.ingredients?.reduce((a, i) => a + i.price, 0) ?? 0;

            return sum + (basePrice + sizePrice + typePrice + ingredientsPrice) * item.quantity;
        }, 0);

        // Создаём заказ
        const order = await prisma.userOrder.create({
            data: {
                userId,
                paymentId: 1,
                name,
                surname,
                patronymic: '',
                email,
                phone,
                address,
                comment,
                status: 'PENDING',
                totalAmount,
            },
        });

        // Привязываем товары к заказу
        await prisma.userBasketProduct.updateMany({
            where: { basketId: basket.id, userOrderId: null },
            data: { userOrderId: order.id },
        });

        // Обнуляем корзину
        await prisma.userBasket.update({
            where: { id: basket.id },
            data: { quantity: 0, basketCost: 0 },
        });

        return NextResponse.json(order);
    } catch (e) {
        console.error('ERROR POST ORDER:', e);
        return NextResponse.json(
            { message: 'Ошибка сервера', error: (e as Error).message },
            { status: 500 },
        );
    }
}
