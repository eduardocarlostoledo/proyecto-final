const { Order } = require("../db");
const { Router } = require('express');
const orderRouter = Router()
const { postOrder } = require("../controllers/orderControllers")

orderRouter.post('/', async (req,res) => {
    try {
        console.log("REQ.BODY POST CART", req.body)
        const newOrder=await postOrder(req.body)
        res.status(200).json(newOrder)
    } catch (error) {
        res.status(400).json(error.message) 
    }
})

orderRouter.get('/', async (req,res) => {   
    
    try {
        const response = await Order.findAll();
        res.status(201).send(response);   
    } catch (error) {
        res.status(400).json("Error Handler Get Order")   

    }
    
    
    });  

module.exports = { orderRouter };