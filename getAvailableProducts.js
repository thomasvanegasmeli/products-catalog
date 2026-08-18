const getAvailableProducts =  (catalog) => {
    
    const availableProducts = catalog.filter(product => product.stock > 0);

    return availableProducts;

}

module.exports = getAvailableProducts;