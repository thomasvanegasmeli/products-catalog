const productsGrid = document.querySelector("#products-grid");
const productCount = document.querySelector("#product-count");
const emptyState = document.querySelector("#empty-state");
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

const createProductCard = (product) => {
    const card = document.createElement("article");
    const productNumber = document.createElement("span");
    const name = document.createElement("h3");
    const price = document.createElement("p");
    const stock = document.createElement("span");

    card.className = "product-card";
    productNumber.className = "product-number";
    price.className = "product-price";
    stock.className = "stock-label";

    productNumber.textContent = `Product ${String(product.id).padStart(2, "0")}`;
    name.textContent = product.name;
    price.textContent = currencyFormatter.format(product.price);
    stock.textContent = `${product.stock} units available`;

    card.append(productNumber, name, price, stock);
    return card;
};

const availableProducts = window.getAvailableProducts(window.productsCatalog);

productCount.textContent = `${availableProducts.length} products available`;
emptyState.hidden = availableProducts.length > 0;
productsGrid.append(...availableProducts.map(createProductCard));