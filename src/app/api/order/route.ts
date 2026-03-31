import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
        }

        const userId = parseInt(session.user.id);
        const body = await req.json();
        const { name, surname, email, phone, address, comment } = body;

        if (!name || !surname || !email || !phone || !address) {
            return NextResponse.json(
                { message: 'Заполните все обязательные поля' },
                { status: 400 },
            );
        }

        const basket = await prisma.userBasket.findUnique({
            where: { userId },
            include: {
                userBasketProducts: {
                    include: {
                        product: true,
                        sizeOption: true,
                        typeOption: true,
                        ingredients: true,
                    },
                },
            },
        });

        if (!basket || basket.userBasketProducts.length === 0) {
            return NextResponse.json({ message: 'Корзина пуста' }, { status: 400 });
        }

        const order = await prisma.userOrder.create({
            data: {
                userId,
                name,
                surname,
                email,
                phone,
                address,
                comment: comment || null,
                status: 'PENDING',
            },
        });

        const orderProductsData = basket.userBasketProducts.map((item) => {
            const ingredientsPrice = item.ingredients.reduce((sum, ing) => sum + ing.price, 0);
            const totalPrice =
                (item.product?.price || 0) +
                (item.sizeOption?.price || 0) +
                (item.typeOption?.price || 0) +
                ingredientsPrice;

            const ingredientsData = item.ingredients.map((ing) => ({
                id: ing.id,
                title: ing.title,
                price: ing.price,
                image: ing.image,
            }));

            return {
                userOrderId: order.id,
                title: item.product?.title || '',
                image: item.product?.image || '',
                description: item.product?.description || null,
                rating: item.product?.rating || null,
                price: item.product?.price || 0,
                quantity: item.quantity,
                sizeValue: item.sizeOption?.size || null,
                sizePrice: item.sizeOption?.price || null,
                typeValue: item.typeOption?.type || null,
                typePrice: item.typeOption?.price || null,
                ingredients: ingredientsData.length > 0 ? JSON.stringify(ingredientsData) : null,
            };
        });

        await prisma.userOrderProduct.createMany({
            data: orderProductsData,
        });

        await prisma.userBasketProduct.deleteMany({
            where: { basketId: basket.id },
        });

        return NextResponse.json({
            success: true,
            orderId: order.id,
            message: 'Заказ успешно создан',
        });
    } catch (error) {
        console.error('ERROR POST ORDER:', error);
        return NextResponse.json(
            {
                message: 'Ошибка при создании заказа',
                error: (error as Error).message,
            },
            { status: 500 },
        );
    }
}
