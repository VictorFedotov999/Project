import { prisma } from './../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);

        const basketUser = await prisma.userBasket.findMany({
            where: { userId },
            include: {
                userBasketProducts: {
                    orderBy: { id: 'asc' },
                    include: {
                        product: true,
                        sizeOption: true,
                        typeOption: true,
                        ingredients: true,
                    },
                },
            },
        });

        return NextResponse.json(basketUser ?? []);
    } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);
        const body = await req.json();

        const ingredientIds: number[] = Array.isArray(body.ingredients) ? body.ingredients : [];

        const userBasket = await prisma.userBasket.findFirst({ where: { userId } });
        if (!userBasket) return NextResponse.json({ error: 'Корзина не найдена' }, { status: 404 });

        const product = await prisma.product.findUnique({
            where: { id: body.productId },
            include: {
                sizeOptions: true,
                typeOptions: true,
                ingredients: true,
            },
        });

        if (!product) {
            return NextResponse.json({ error: 'Продукт не найден' }, { status: 404 });
        }

        const sizeOption = body.sizeOptionId
            ? await prisma.sizeOption.findUnique({ where: { id: body.sizeOptionId } })
            : null;

        const typeOption = body.typeOptionId
            ? await prisma.typeOption.findUnique({ where: { id: body.typeOptionId } })
            : null;

        const ingredients = await prisma.ingredient.findMany({
            where: { id: { in: ingredientIds } },
        });

        const ingredientsPrice = ingredients.reduce((sum, ing) => sum + ing.price, 0);
        const totalPrice =
            (product.price +
                ingredientsPrice +
                (sizeOption?.price ?? 0) +
                (typeOption?.price ?? 0)) *
            1;

        const existingItems = await prisma.userBasketProduct.findMany({
            where: {
                basketId: userBasket.id,
                productId: body.productId,
                sizeOptionId: body.sizeOptionId,
                typeOptionId: body.typeOptionId,
            },
            include: { ingredients: true },
        });

        const compareIngredients = (a: number[], b: number[]) =>
            a.length === b.length && [...a].sort().every((id, i) => id === [...b].sort()[i]);

        const existingItem = existingItems.find((item) =>
            compareIngredients(
                item.ingredients.map((i) => i.id),
                ingredientIds,
            ),
        );

        if (existingItem) {
            const newQuantity = existingItem.quantity + 1;
            const newPrice =
                (product.price +
                    ingredientsPrice +
                    (sizeOption?.price ?? 0) +
                    (typeOption?.price ?? 0)) *
                newQuantity;

            const updatedItem = await prisma.userBasketProduct.update({
                where: { id: existingItem.id },
                data: {
                    quantity: { increment: 1 },
                    price: newPrice,
                },
                include: { product: true, sizeOption: true, typeOption: true, ingredients: true },
            });
            return NextResponse.json(updatedItem);
        }

        const basketItem = await prisma.userBasketProduct.create({
            data: {
                basketId: userBasket.id,
                productId: body.productId,
                sizeOptionId: body.sizeOptionId,
                typeOptionId: body.typeOptionId,
                quantity: 1,
                price: totalPrice,
                ingredients: {
                    connect: ingredientIds.map((id) => ({ id })),
                },
            },
            include: { product: true, sizeOption: true, typeOption: true, ingredients: true },
        });

        return NextResponse.json(basketItem);
    } catch (error) {
        console.error('POST Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера', details: error }, { status: 500 });
    }
}
export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();

        const basketProduct = await prisma.userBasketProduct.findUnique({
            where: { id: body.productId },
            include: {
                product: true,
                sizeOption: true,
                typeOption: true,
                ingredients: true,
            },
        });

        if (!basketProduct) {
            return NextResponse.json({ error: 'Товар не найден' }, { status: 404 });
        }

        const basePrice = basketProduct.product?.price ?? 0;
        const sizePrice = basketProduct.sizeOption?.price ?? 0;
        const typePrice = basketProduct.typeOption?.price ?? 0;
        const ingredientsPrice = basketProduct.ingredients.reduce((sum, ing) => sum + ing.price, 0);

        const newPrice = (basePrice + ingredientsPrice + sizePrice + typePrice) * body.count;

        const updatedItem = await prisma.userBasketProduct.update({
            where: { id: body.productId },
            data: {
                quantity: body.count,
                price: newPrice,
            },
        });

        return NextResponse.json({ success: true, price: newPrice });
    } catch (error) {
        console.error('PATCH Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);
        const body = await req.json();

        const userBasket = await prisma.userBasket.findFirst({ where: { userId } });
        if (!userBasket) return NextResponse.json({ error: 'Корзина не найдена' }, { status: 404 });

        if (body.clear) {
            await prisma.userBasketProduct.deleteMany({
                where: { basketId: userBasket.id },
            });
            return NextResponse.json({ success: true });
        }

        await prisma.userBasketProduct.deleteMany({
            where: { id: body.productId, basketId: userBasket.id },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('DELETE Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}
