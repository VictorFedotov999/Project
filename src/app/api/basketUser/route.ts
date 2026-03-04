import { create } from 'zustand';
import { prisma } from './../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const basketUser = await prisma.userBasket.findMany({
        where: { userId: 1 },
        include: {
            userBasketProducts: {
                include: {
                    product: {},
                    sizeOption: {},
                    typeOption: {},
                    ingredients: {},
                },
            },
        },
    });
    return NextResponse.json(basketUser);
}
// export async function POST(req: NextRequest) {
//     const body = await req.json();

//     const basketItem = await prisma.userBasketProduct.create({
//         data: {
//             basketId: body.basketId,
//             productId: body.productId,
//             sizeOptionId: body.sizeOptionId,
//             typeOptionId: body.typeOptionId,
//             ingredients: {
//                 connect: body.ingredients.map((id: number) => ({ id })),
//             },
//         },
//     });

//     return NextResponse.json(basketItem);
// }

export async function POST(req: NextRequest) {
    const body = await req.json();

    const userBasket = await prisma.userBasket.findFirst({
        where: { userId: 1 },
    });

    if (!userBasket) {
        return NextResponse.json({ error: 'Корзина не найдена' }, { status: 404 });
    }

    const existingItem = await prisma.userBasketProduct.findFirst({
        where: {
            basketId: userBasket.id,
            productId: body.productId,
            sizeOptionId: body.sizeOptionId,
            typeOptionId: body.typeOptionId,

            ingredients: {
                every: {
                    id: { in: body.ingredients },
                },
            },
        },
        include: {
            ingredients: true,
        },
    });

    if (existingItem) {
        const updatedItem = await prisma.userBasketProduct.update({
            where: {
                id: existingItem.id,
            },
            data: {
                quantity: {
                    increment: 1,
                },
            },
            include: {
                product: true,
                sizeOption: true,
                typeOption: true,
                ingredients: true,
            },
        });
        return NextResponse.json(updatedItem);
    } else {
        const basketItem = await prisma.userBasketProduct.create({
            data: {
                basketId: userBasket.id,
                productId: body.productId,
                sizeOptionId: body.sizeOptionId,
                typeOptionId: body.typeOptionId,
                ingredients: {
                    connect: body.ingredients.map((id: number) => ({ id })),
                },
                quantity: 1,
            },
            include: {
                product: true,
                sizeOption: true,
                typeOption: true,
                ingredients: true,
            },
        });
        return NextResponse.json(basketItem);
    }
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();

    await prisma.userBasketProduct.update({
        where: {
            id: body.productId,
        },
        data: {
            quantity: body.count,
        },
    });

    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
    const body = await req.json();

    await prisma.userBasketProduct.delete({
        where: {
            id: body.productId,
        },
    });

    return NextResponse.json({ success: true });
}
