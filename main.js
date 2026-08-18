const addProductToCatalog = require('./addProduct');
const getAvailableProducts = require('./getAvailableProducts');
const calculateTotalAmount = require('./getCatalogValue');
const createProductApi = require('./asyncAwait').createProductApi;

const productsCatalog = [
    {id: 1, name: "Mouse", price: 100, stock: 10},
    {id: 2, name: "Keyboard", price: 200, stock: 5},
    {id: 3, name: "Monitor", price: 500, stock: 0},
];

const newProduct = {
    id: 4,
    name: "Webcam",
    price: 250,
    stock: 6,
}

const invalidProduct = {
    id: 5,
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

console.log("\n --- Simulating an API --- \n");

const { getProduct, showProduct } = createProductApi(updatedCatalog);

(async () => {

  console.log("product 1 ->", await getProduct(1));
  console.log("product 3 ->", await getProduct(3));
  console.log("product 10 ->", await getProduct(10));

  // Promise.all: pide varias promesas en paralelo
  const allProducts = await Promise.all([getProduct(1), getProduct(2), getProduct(3), getProduct(4)]);
  console.log("\nPromise.all ->", allProducts);

  console.log("product 1 ->", await showProduct(1));
  console.log("product 2 ->", await showProduct(2));
  console.log("product 10 ->", await showProduct(10));

})();
