function createProductApi(catalog) {

  // Promise manual: simula una llamada a una API con setTimeout
  function searchProduct(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = catalog.find((p) => p.id === id);
        product ? resolve(product) : reject(new Error("Producto no encontrado"));
      }, 500);
    });
  }

  // async/await + try/catch
  async function getProduct(id) {
    try {
      return await searchProduct(id);
    } catch (error) {
      console.log("error ->", error.message);
      return null;
    }
  }

  // encadenar await sobre otra función async
  async function showProduct(id) {
    const product = await getProduct(id);
    return product ? `Producto: ${product.name}, Precio: ${product.price}` : "Producto no encontrado";
  }

  return { getProduct, showProduct };
}

module.exports = { createProductApi };