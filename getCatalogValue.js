const getCatalogValue = catalog => {
    
    let total = catalog.reduce((accumulator, product) => {
        return accumulator + product.price * product.stock;
    }, 0);

    return total;
};

module.exports = getCatalogValue;