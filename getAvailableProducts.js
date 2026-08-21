const getAvailableProducts = (catalog) => {
    const availableProducts = catalog.filter(product => product.stock > 0);

    return availableProducts;

};

if (typeof module !== "undefined") {
    module.exports = getAvailableProducts;
}

if (typeof window !== "undefined") {
    window.getAvailableProducts = getAvailableProducts;
}