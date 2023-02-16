const { Router } = require('express');
const {productRouter} = require('./productRouter')
const {userRouter} = require("./userRouter.js")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', productRouter)
router.use('/register', userRouter)



// router.use('/users', userRouter)

module.exports = router;