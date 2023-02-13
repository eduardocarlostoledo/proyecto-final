const { Router } = require('express');
const {putUser, getUsers} = require("../controllers/usersController")
const userRouter = Router()


userRouter.put("/register", (req, res) => {
    try {
        const user = putUser(req.body);         
        res.status(200).json(user, "Actualizado con Éxito")
    } catch (error) {
        res.status(400).json(error.message)
    } 
 })

 userRouter.get("/users", (req,res) => {
    try {
        const users = getUsers();         
        res.status(200).json(users, "Listado de usuarios")
    } catch (error) {
        res.status(400).json(error.message)
    } 
 })


module.exports = {userRouter}