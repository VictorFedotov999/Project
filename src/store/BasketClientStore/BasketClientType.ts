export interface INewProduct {
    id: number;
    title: string;
    imageUrl: string;
    size: number;
    type: string;
    price: number;
    count: number;
}

export interface IActions {
    addProduct: (newProduct: INewProduct) => void;
    removeProduct: (newProduct: INewProduct) => void;
    plusProduct: (newProduct: INewProduct) => void;
}

export interface IInitialState {
    products: INewProduct[];
    totalCost: number;
    productCount: number;
}

export interface IUseProductBasketClientState extends IInitialState, IActions {}
