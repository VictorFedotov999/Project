interface ISameProduct {
    products: any;
    newProduct: any;
}

const sameProduct = ({ products, newProduct }: ISameProduct) => {
    const sameProduct = products.find(
        (product) =>
            product.id === newProduct.id &&
            product.size === newProduct.size &&
            product.type === newProduct.type,
    );
    return sameProduct;
};
