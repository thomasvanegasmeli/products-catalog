const baseProductsCatalog = [
    { id: 1, name: "Mouse", price: 100, stock: 10 },
    { id: 2, name: "Keyboard", price: 200, stock: 5 },
    { id: 3, name: "Monitor", price: 500, stock: 0},
];

const newProduct = {
    id: 4,
    name: "Webcam",
    price: 270,
    stock: 6,
};

window.productsCatalog = [...baseProductsCatalog, newProduct];