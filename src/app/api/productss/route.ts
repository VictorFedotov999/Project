import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';

    const category = req.nextUrl.searchParams.get('category');
    const sort = req.nextUrl.searchParams.get('sort');
    const ingredientsParam = req.nextUrl.searchParams.get('ingredients') || null;
    const ingredients = ingredientsParam ? ingredientsParam.split(',') : [];
    const where: any = {};
    let orderBy: any = undefined;
    let take: number | undefined = undefined;

    if (query) {
        take = 5;
        where.title = {
            contains: query,
            mode: 'insensitive',
        };
    }

    if (category) {
        where.categoryId = Number(category);
    }

    const sortMap: Record<string, any> = {
        Рейтинг: { rating: 'desc' },
        Цене: { price: 'asc' },
        Алфавиту: { title: 'asc' },
    };

    if (sort && sortMap[sort]) {
        orderBy = sortMap[sort];
    }

    if (ingredients.length > 0) {
        where.ingredient = {
            some: {
                title: {
                    in: ingredients,
                },
            },
        };
    }

    const products = await prisma.product.findMany({
        take,
        where,
        orderBy,
    });

    return NextResponse.json(products);
}
