const addProductToCatalog = require('./addProduct');

const productsCatalog = [
    {name: "Mouse", price: 100, stock: 10},
    {name: "Keyboard", price: 200, stock: 5},
    {name: "Monitor", price: 500, stock: 2},
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