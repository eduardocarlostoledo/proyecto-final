const { Router } = require('express');
const {putUser,postUser, getUsers, getUserId } = require("../controllers/usersController")
const userRouter = Router()


userRouter.post("/register", async (req, res) => {
    try {
        const user =await postUser(req.body);         
        res.status(200).json({data: user, message:"Usuario Creado"})
    } catch (error) {
        res.status(400).json(error.message)
    } 
 })
 userRouter.put("/:id", async (req, res) => {
  const {id}=req.params;
  try {
    const user =await putUser(req.body,id)
    res.status(200).json("Usuario actualizado")
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