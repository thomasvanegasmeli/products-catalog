const addProductToCatalog = require('./addProduct');
const getAvailableProducts = require('./getAvailableProducts');
const calculateTotalAmount = require('./getCatalogValue');

const productsCatalog = [
    {name: "Mouse", price: 100, stock: 10},
    {name: "Keyboard", price: 200, stock: 5},
    {name: "Monitor", price: 500, stock: 0},
];

const newProduct = {
    name: "Webcam",
    price: 250,
    stock: 6,
}

const invalidProduct = {
    name: "Mouse",
    price: 150,
    stock: 2
}

const updatedCatalog = addProductToCatalog(productsCatalog, newProduct);

console.log("Original catalog:", productsCatalog);
console.log("Updated catalog:", updatedCatalog);

try {
    const updatedCatalogWithInvalidProduct = addProductToCatalog(productsCatalog, invalidProduct);
} catch (error) {
    console.error("Error adding invalid product:", error.message);
}

console.log("--- Available Products (stock > 0) ---");
console.log(getAvailableProducts(updatedCatalog));
console.log(`Catalog Total Amount: ${calculateTotalAmount(updatedCatalog)}`);