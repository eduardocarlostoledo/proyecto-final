const { Product, User, Type, Trademark } = require("../db");

const getProducts = async () => {
    try {
      const allProducts = await Product.findAll();
      return allProducts;
    } catch (error) {
      throw new Error("Error retrieving products: " + error.message);
    }
  };
  

const getProductId = async (productId) => {
  try {
    const result = await Product.findByPk(productId);
    if (result) return result;
    throw new Error("Product not found with ID: " + productId);
  } catch (error) {
    throw new Error("Error retrieving product: " + error.message);
  }
};

const postProduct = async (product) => {
  console.log(product);
  const { name, price, type, trademark } = product;
  if (!name || !price) throw Error("Mandatory data missing");
  else {
    try {
      const newProduct = await Product.create({
        name,
        price,
        trademarkId: type,
        typeId: trademark,
      });

      return newProduct;
    } catch (error) {
      throw Error(error.message);
    }
  }
};

module.exports = {
  postProduct,
  getProducts,
  getProductId,
};
