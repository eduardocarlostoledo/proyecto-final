const { Product, User, Type, Brand } = require("../db");
const {Op} = require('sequelize')
const {uploadImage}=require('../utils/cloudinary')
const fs =require('fs-extra');

// Obtiene los tipos de productos de la BDD

const getTypeProducts = async() => {
  try {
    const addTypes = [
      "Cooler",
      "Power Supply",
      "Graphics Card",
      "Processor",
      "SSD",
      "HDD",
      "RAM",
      "Motherboard",
      "Mouse",
      "Headset",
      "Monitor",
      "PC Case",
      "Keyboard",
    ];
    addTypes.map(async (t) => {
      await Type.findOrCreate({ where: { name: t } }); // !!! AÑADO LOS TYPES HARDCODEADOS, SOLO SIRVE EN EL DESARROLLO, CUANDO SE CAMBIE A "alter: true", HAY QUE COMENTAR DE LA LINEA 9 A LA 12
    });
    const products = await Type.findAll();  
    return products;
  } catch (error) {
    throw new Error("Error retrieving product by Type: " + error.message);

  }
}

// Obtiene las marcas de la BDD

const getBrandProducts = async() => {
  try {
    const addBrand = [
      "Corsair",
      "EVGA",
      "Acer",
      "ASUS",
      "Samsung",
      "Cooler Master",
      "HyperX",
      "Gigabyte",
      "Logitech",
      "Audio-Technica",
      "Razer",
    ];
    addBrand.map(async (b) => {
      await Brand.findOrCreate({ where: { name: b } });
    });
    const products = await Brand.findAll();
    return products;
  } catch (error) {
    throw new Error("Error retrieving products by brand: " + error.message);
  }
}

// Obtiene los productos si contienen la palabra que recibe por parametro (Para la busqueda)

const getProductsByName = async (productName) => {
  try {
    const products = await Product.findAll({
      include: [Type,Brand],
      where: {
        name: {
          [Op.iLike]: `%${productName}%`,
        },
      },
    });
    const result = products.map((p) => {
      return {
        id: p.id,
        name: p.name,
        image:p.image.secure_url,
        price:p.price,
        description: p.description,
        type: p.type.name,
        brand: p.brand.name
      }
    })
    return result;
  } catch (error) {
    throw new Error("Error retrieving product by Name: " + error.message);
  }
};


//Obtiene todos los productos de la BDD

const getProducts = async () => {
    try {
      const allProducts = await Product.findAll({include: [Type,Brand]});
      const result = allProducts.map((p) => {
        return {
          id: p.id,
          name: p.name,
          image:p.image.secure_url,
          price:p.price,
          description: p.description,
          type: p.type.name,
          brand: p.brand.name,
          info_adicional: p.info_adicional
        }
      })
      return result;
    } catch (error) {
      throw new Error("Error retrieving products: " + error.message);
    }
  };
  

// Obtiene los productos cuando tienen el nombre exactamente igual al que reciben por parametro (Sirve para la ruta Detail en el Front)

const getProductName = async (product) => {
  try {
    const products = await Product.findAll({include: [Type,Brand],where:{name:product}});
    const result = products.map((p) => {
      return {
        id: p.id,
        name: p.name,
        image:p.image.secure_url,
        price:p.price,
        description: p.description,
        type: p.type.name,
        brand: p.brand.name,
        inCart:p.inCart
      }
    })
    if (result) return result;
    throw new Error("Product not found with exact name: " + product);
  } catch (error) {
    throw new Error("Error retrieving product by name: " + error.message);
  }
};

// Crea un producto en la BDD, esta accion sirve para testear. (Unicamente va a ser ejecutada por un administrador, no el usuario)
const postProduct = async (product,image) => {
  const { name, price, type, brand, description,info_adicional, stock} = product;
  console.log(product.name, "POST")
  if (!name || !price || !type || !brand || !description || !image ) throw Error("Mandatory data missing");
  else {
    try {
      const [typeData, createdType] = await Type.findOrCreate({
        where: { name: type },
        defaults: { name: type }
      });
      console.log(typeData.name, "POST")

      const [brandData, createdBrand] = await Brand.findOrCreate({
        where: { name: brand },
        defaults: { name: brand }
      });
      console.log(brandData.name, "POST")

      //invoco la funcion para subir la imagen a cloudinary
      const result=await uploadImage(image.tempFilePath)

      const newProduct = await Product.create({
        name: product.name,
        price: product.price,
        description: product.description,
        image:{public_id:result.public_id,secure_url:result.secure_url},
        typeId: typeData.id,
        brandId: brandData.id,
        info_adicional:product.info_adicional,
        stock:product.stock
      });
      
      //borro la imagen de la carpeta uploads para que solo quede guardada en cloudinary
      await fs.unlink(image.tempFilePath)

      console.log(product.name, newProduct, "POSTOK")

      return newProduct;
    } catch (error) {
      throw Error(error.message);
    }
  }
};

const BuildSearch = async (socket) => {
  try {
    const products = await Product.findAll({
      include: [Type,Brand],
      where: {
        "info_adicional.socket": socket,
      },
    });
    const result = products.map((p) => {
      return {
        id: p.id,
        name: p.name,
        image:p.image,
        price:p.price,
        description: p.description,
        info_adicional: p.info_adicional,
        type: p.type.name,
        brand: p.brand.name
      }
    })
    return result;
  } catch (error) {
    throw new Error("Error retrieving products by brand: " + error.message);
  }
};

module.exports = {
  postProduct,
  getProducts,
  getProductName,
  getProductsByName,
  getBrandProducts,
  getTypeProducts,
  BuildSearch
};