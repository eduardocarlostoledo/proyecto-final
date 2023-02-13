const { Router } = require('express');
const {postProduct, getProducts, getProductId} = require('../controllers/productController')

const productRouter = Router()

productRouter.post('/', async (req,res) => {
    try {
        const product = await postProduct(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error.message)
    }
})
productRouter.get("/products", async (req, res) => {
    try {
      const allProducts = await getProducts();
      res.status(200).json({ data: allProducts, message: "Listado de productos" });
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