const { Product, User, Type, Trademark } = require("../db");

const getProductsByName = async (productName) => {
  try {
    const products = await Product.findAll({
      where: {
        productName: {
          [Op.iLike]: `%${productName}%`,
        },
      },
    });
    return products;
  } catch (error) {
    throw new Error("Error retrieving product by Name: " + error.message);
  }
};


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
    throw new Error("Error retrieving product by ID: " + error.message);
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
  getProductsByName
};
