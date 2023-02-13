const { Router } = require('express');
const {productRouter, userRouter} = require('./productRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', productRouter)
// router.use('/users', userRouter)

module.exports = router;
