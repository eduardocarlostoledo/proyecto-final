const { Router } = require('express');
const {putUser, getUsers, getUserId } = require("../controllers/usersController")
const userRouter = Router()


userRouter.put("/register", async (req, res) => {
    try {
        const user =await putUser(req.body);         
        res.status(200).json(user, "Actualizado con Éxito")
    } catch (error) {
        res.status(400).json(error.message)
    } 
 })

 userRouter.get("/", async (req,res) => {
    try {
        const users = await getUsers();         
        res.status(200).json({data: users,message: "Listado de usuarios"})
    } catch (error) {
        res.status(400).json(error.message)
    } 
 })

 userRouter.get("/:id", async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await getUserId(userId);
      if (result) {
        res.status(200).json({ data: result, message: "Usuario solicitado" });
      } else {
        res.status(404).json({ error: "Usuario no encontrado por ID" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


module.exports = {userRouter}