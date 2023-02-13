const { Router } = require('express');
const {postProduct} = require('../controllers/productController')

const productRouter = Router()

productRouter.post('/', async (req,res) => {
    try {
        const product = await postProduct(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = {productRouter}