const addProductToCatalog = (catalog, product) => {

     const {name, price, stock} = product;

    // En JS null, undefined, 0, false, NaN, "" (cadena vacía) son valores falsy.
    if (!product || !product.name || !product.price || !product.stock) {
        throw new Error("Product must have name, price, and stock properties.");
    }

    const existingProduct = catalog.find(p => p.name === name);
    if (existingProduct) {
        throw new Error(`Product with name "${name}" already exists in the catalog. \n`);
    }

    return [...catalog, product];
};

module.exports = addProductToCatalog;