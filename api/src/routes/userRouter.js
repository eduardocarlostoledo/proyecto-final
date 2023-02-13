const { Router } = require('express');
const {putUser} = require("../controllers/usersController")
const userRouter = Router()


userRouter.put("/register", (req, res) => {
    try {
        const user = putUser(req.body);         
        res.status(200).json(user, "Actualizado con Éxito")
    } catch (error) {
        res.status(400).json(error.message)
    } 
 })


module.exports = {userRouter}