const { Router } = require('express');
const { postProduct,
  getProducts,
  getProductId,
  getProductsByName,
  getTrademarkProducts,
  getTrademarkProductsByName,
  getTypeProducts,
  getTypeProductsByName } = require('../controllers/productController')

const productRouter = Router()

productRouter.post('/', async (req,res) => {
    try {
        const product = await postProduct(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

productRouter.get("/typeproducts", (req, res) => {
  const productTypeName = req.query.name;
  try {
    let products;
    if (productTypeName) {
      products = getTypeProductsByName(productTypeName);
    } else {
      products = getTypeProducts();
    }
    res.status(200).json({ data: products, message: "Listado de productos por tipo" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

productRouter.get("/trademarkproducts", (req, res) => {
  const productTradeName = req.query.name;
  try {
    let products;
    if (productTradeName) {
      products = getTrademarkProductsByName(productTradeName);
    } else {
      products = getTrademarkProducts();
    }
    res.status(200).json({ data: products, message: "Listado de productos por marca" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

productRouter.get("/products", (req, res) => {
  const productName = req.query.name;
  try {
    let products;
    if (productName) {
      products = getProductsByName(productName);
    } else {
      products = getProducts();
    }
    res.status(200).json({ data: products, message: "Listado de productos" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

  productRouter.get("/products/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      const result = await getProductId(productId);
      if (result) {
        res.status(200).json({ data: result, message: "Producto solicitado" });
      } else {
        res.status(404).json({ error: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

module.exports = {productRouter}