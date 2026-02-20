import { INewProduct } from './../src/store/BasketClientStore/BasketClientType';
import { product } from './../prisma/constans';

interface IPoduct {
    id: number;
    title: string;
    imageUrl: string;
    size: number;
    type: string;
    price: number;
    count: number;
}

interface IProps {
    product: IPoduct;
}
