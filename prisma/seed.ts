import { categorys, filters, ingredients, sizesProduct, typesProduct } from './constans';
import { prisma } from './prisma-client';

async function up() {
    await prisma.category.createMany({
        data: categorys,
    });
    await prisma.user.createMany({
        data: [
            { id: 1, name: 'Nikita', surname: 'Pashenko', role: 'USER' },
            { id: 2, name: 'Andrey', surname: 'Nikiten', role: 'USER' },
            { id: 3, name: 'Pasha', surname: 'Litakov', role: 'USER' },
        ],
    });

    await prisma.userBasket.createMany({
        data: [
            { id: 1, userId: 1 },
            { id: 2, userId: 2 },
            { id: 3, userId: 3 },
        ],
    });

    await prisma.product.createMany({
        data: [
            {
                id: 1,
                title: 'Масала',
                description:
                    'Пряные новости: у нас новинка с индийскими мотивами! В ней сочный цыпленок, лук, помидоры, перец, соусы альфредо и масала',
                imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/019bcbc9b40370a4b47c6298dcac292a.avif',
                price: 389,
                rating: 4,
                categoryId: 1,
            },
            {
                id: 2,
                title: 'Пицца с хреном ',
                description:
                    'Возможно, первая в истории пицца с пикантным сливочным хреном, свиной шейкой, красным луком и маринованными огурчиками. Дерзайте пробовать!',
                imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/0199b8e98ec871ab8a443887a3e1a136.avif',
                price: 469,
                rating: 2,
                categoryId: 3,
            },
            {
                id: 3,
                title: 'Мясная',
                description:
                    'Перезагрузили рецепт: теперь пять видов мяса и новый фирменный соус, который делает вкус еще ярче. Цыпленок, говядина, колбаски, пепперони и бекон стали еще мяснее!',
                imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/019a897c5ea574b889475bd98412de7b.avif',
                price: 389,
                rating: 6,
                categoryId: 2,
            },
        ],
    });

    await prisma.typeOption.createMany({
        data: typesProduct,
    });

    await prisma.sizeOption.createMany({
        data: sizesProduct,
    });

    await prisma.ingredients.createMany({
        data: ingredients,
    });

    await prisma.filters.createMany({
        data: filters,
    });
}

async function main() {
    await up();
}

main();
