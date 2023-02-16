const { Product, User, Type, Brand } = require("../db");
const {Op} = require('sequelize')


// Obtiene los tipos de productos de la BDD

const getTypeProducts = async() => {
  try {
    const addTypes = ["Cooler", "Power Supply", "Graphics Card","Processor", "SSD","HDD", "RAM", "Motherboard", "Mouse", "Headset", "Monitor", "PC Case", "Keyboard"]
    addTypes.map(async (t) => {
      await Type.create({name: t}) // !!! AÑADO LOS TYPES HARDCODEADOS, SOLO SIRVE EN EL DESARROLLO, CUANDO SE CAMBIE A "alter: true", HAY QUE COMENTAR DE LA LINEA 9 A LA 12
    })
    const products = await Type.findAll();  
    return products;
  } catch (error) {
    throw new Error("Error retrieving product by Type: " + error.message);

  }
}

// Obtiene las marcas de la BDD

const getBrandProducts = async() => {
  try {
    const addBrand = ["Corsair", "EVGA", "Acer", "ASUS", "Samsung", "Cooler Master", "HyperX", "Gigabyte", "Logitech", "Audio-Technica", "Razer"]
    addBrand.map(async (b) => {
      await Brand.create({name:b})
    })
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
      where: {
        name: {
          [Op.iLike]: `%${productName}%`,
        },
      },
    });
    return products;
  } catch (error) {
    throw new Error("Error retrieving product by Name: " + error.message);
  }
};


//Obtiene todos los productos de la BDD

const getProducts = async () => {
    try {
      const allProducts = await Product.findAll();
      console.log(allProducts)
      return allProducts;
    } catch (error) {
      throw new Error("Error retrieving products: " + error.message);
    }
  };
  

// Obtiene los productos cuando tienen el nombre exactamente igual al que reciben por parametro (Sirve para la ruta Detail en el Front)

const getProductName = async (product) => {
  try {
    const result = await Product.findAll({where:{name:product}});
    if (result) return result;
    throw new Error("Product not found with exact name: " + product);
  } catch (error) {
    throw new Error("Error retrieving product by name: " + error.message);
  }
};

// Crea un producto en la BDD, esta accion sirve para testear. (Unicamente va a ser ejecutada por un administrador, no el usuario)

const postProduct = async (product) => {
  const { name, price, type, brand, image, description } = product;
  if (!name || !price || !brand || !type) throw Error("Mandatory data missing");
  else {
    const newProduct = await Product.create({
      name,
      price,
      description,
      image,
    });

    Brand.findOrCreate({where:{name:brand}})

    Type.findOrCreate({where:{name:type}})

    const marca=await Brand.findOne({where:{name:brand}})
    const tipo=await Type.findOne({where:{name:type}})

    marca.addProduct(newProduct);
    tipo.addProduct(newProduct);

    return "succesfully!";
  }
};
// PUT  de productos, edita un producto ya creado

const putProduct = async (product,id) => {
  const { name, price,description,image,brand,type} = product;

  if (!name || !price || !brand || !type)  throw Error('Product data missing')
  else {
    const updatedProduct = await Product.update({name,price,image,description},{where:{id}});

    await Brand.findOrCreate({where:{name:brand}})
    await Type.findOrCreate({where:{name:type}})

    const marca=await Brand.findOne({where:{name:brand}})
    const tipo=await Type.findOne({where:{name:type}})

    marca.addProduct(updatedProduct);
    tipo.addProduct(updatedProduct);

    return "Product updated";
  }
}


// PUT  de productos, edita un producto ya creado

const putProduct = async (product,id) => {
  const { name, price,description,image,brand,type} = product;

  if (!name || !price || !brand || !type)  throw Error('Product data missing')
  else {
    const updatedProduct = await Product.update({name,price,image,description},{where:{id}});

    await Brand.findOrCreate({where:{name:brand}})
    await Type.findOrCreate({where:{name:type}})

    const marca=await Brand.findOne({where:{name:brand}})
    const tipo=await Type.findOne({where:{name:type}})

    marca.addProduct(updatedProduct);
    tipo.addProduct(updatedProduct);

    return "Product updated";
  }
}


module.exports = {
  putProduct,
  postProduct,
  getProducts,
  getProductName,
  getProductsByName,
  getBrandProducts,
  getTypeProducts,
};
