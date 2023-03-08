const { Router } = require("express");
const payRouter = Router();
const mercadopago = require("mercadopago");
const { deleteAllCart } = require("../controllers/cartController");
const enviarMail = require("../mail/nodemail");
const { postOrder, updateProductStock } = require("../controllers/orderControllers");
const { Cart } = require("../db");

let arrayPreference = {}

let arrayProducts = []

payRouter.post("/preference", (req, res) => {  
  console.log("LLEGA REQ.BODY", req.body); 
  console.log("APAREZCO!!!!!!!!!!! ", req.body[0].buyer_email) 
  arrayPreference = 
    {
      product_description: "description",     
      total_order_price: req.body[0].total_order_price,      
      prodId: req.body[1].prodId,
      buyer_email: req.body[0].buyer_email,
      product_name: req.body[1].product_name,
      product_image: req.body[1].product_image,
      product_amount: req.body[1].product_amount,
      product_unit_price: req.body[1].product_unit_price,
    }  
    console.log("TENGO PREFERENCE", arrayPreference);  

    req.body.map((prod) => prod.buyer_email ? null : arrayProducts.push({id:prod.prodId, amount: prod.product_amount}))
    console.log("ACA ESTOY!!!!!!!!!", arrayProducts)
  });
  

payRouter.post("/create_preference", (req, res) => {    
  console.log("LLEGA PREFERENCIA", req.body);  
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity)        
      },
    ],
    back_urls: {
      success: "http://localhost:3001/pay/feedback/success",
      failure: "http://localhost:3001/pay/feedback/failure",
      pending: "http://localhost:3001/pay/feedback/pending",
    },
    auto_return: "approved",
  };  

  arrayPreference = {...arrayPreference, product_description:req.body.description}

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.send({
        id: response.body.id,
        data: response.body.items
      });           
    })   
    .catch(function (error) {
      console.log(error);
    });
});

payRouter.get("/feedback/success", async function (req, res) {  
  console.log("FEEDBACK SUCCESS", arrayPreference );
  try {
    const {
      payment_id: paymentId,
      status: statusId,
      merchant_order_id: merchantOrderId,
    } = req.query;
    const {
      product_description,     
      total_order_price,      
      prodId,
      buyer_email,
      product_name,
      product_image,
      product_amount,
      product_unit_price
    } = arrayPreference

    const newOrder = await postOrder(      
      paymentId,
      statusId,
      merchantOrderId,
      product_description,     
      total_order_price,      
      prodId,
      buyer_email,
      product_name,
      product_image,
      product_amount,
      product_unit_price
    );
    await enviarMail(product_name, total_order_price, buyer_email, statusId)

    //Hacer aca la funcion
    arrayProducts.map((prod) => updateProductStock(prod.id, prod.amount))

    console.log("SE HA DESCONTADO" ,prodId, 1, "DEL STOCK")
    
    console.log(newOrder, "FEEDBACK SUCCESS ORDEN REGISTRADA OK");
    
    res.send(`
            <!DOCTYPE html>
            <html>            
              <head>
                <title>Mi página HTML</title>
                <link rel="stylesheet" type="text/css" href="./payStyles/succes.css">
              </head>
              <body>
                <div class="contenedor_succes">
                  <a href="http://localhost:3000/"><svg class='succes_svg' width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg></a>
                    <h1 class="succes_h1">Payment Successful</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xXsXXnglKn4YmVFVx39Pd-0LgWqhiUVk5g&usqp=CAU" alt="" class='succes_img'>
                    <a href="http://localhost:3000/Products" class="succes_a">Keep Buying</a>
                    <p class="succes_p">COMPUTER STORE</p>
                    <ul class="succes_ul">          
                      <li class="succes_li">Payment ID: ${paymentId}</li>
                      <li class="succes_li">Status: ${statusId}</li>
                      <li class="succes_li">Merchant Order ID: ${merchantOrderId}</li>
                  </ul>
                </div>
              </body>
            </html>
            `);
    await deleteAllCart(); // esto elimina el carrito al realizar una compra exitosa

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

payRouter.get("/feedback/pending", async function (req, res) {
  try {
    const {
      payment_id: paymentId,
      status: statusId,
      merchant_order_id: merchantOrderId,
    } = req.query;
    const {
      product_description,     
      total_order_price,      
      prodId,
      buyer_email,
      product_name,
      product_image,
      product_amount,
      product_unit_price
    } = arrayPreference

    const newOrder = await postOrder(      
      paymentId,
      statusId,
      merchantOrderId,
      product_description,     
      total_order_price,      
      prodId,
      buyer_email,
      product_name,
      product_image,
      product_amount,
      product_unit_price
    );
    await enviarMail(product_name, total_order_price, buyer_email, statusId)
    await updateProductStock(prodId, product_amount)
    console.log("SE HA DESCONTADO" ,prodId, product_amount, "DEL STOCK")

    console.log(newOrder, "FEEDBACK PENDING ORDEN REGISTRADA OK");

    res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Mi página HTML</title>
            <link rel="stylesheet" type="text/css" href="./payStyles/pending.css">
          </head>
          <body>
            <div class="contenedor_pending">
              <a href="http://localhost:3000/"><svg class='pending_svg' width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg></a>
              <h1 class="pending_h1"> Pending Pay !</h1>
              <img class='pending_img'src="https://img.freepik.com/fotos-premium/simbolo-signo-exclamacion-azul-atencion-o-icono-signo-precaucion-fondo-problema-peligro-alerta-representacion-3d-senal-advertencia_256259-2831.jpg" alt="">
              <a class="pending_a" href="http://localhost:3000/Products">Keep Buying</a>
              <p class="pending_p">COMPUTER STORE</p>
            </div>
          </body>
        </html>
      `);
  await deleteAllCart(); // esto elimina el carrito al realizar una compra exitosa
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

payRouter.get("/feedback/failure", async function (req, res) {
  try {
    const {
      payment_id: paymentId,
      status: statusId,
      merchant_order_id: merchantOrderId,
    } = req.query;
    const {
      product_description,     
      total_order_price,      
      prodId,
      buyer_email,
      product_name,
      product_image,
      product_amount,
      product_unit_price
    } = arrayPreference

    const newOrder = await postOrder(      
      paymentId,
      statusId,
      merchantOrderId,
      product_description,     
      total_order_price,      
      prodId,
      buyer_email,
      product_name,
      product_image,
      product_amount,
      product_unit_price
    );
        
    console.log(newOrder, "FEEDBACK FAILURE ORDEN REGISTRADA OK");

    res.send(`
        <!DOCTYPE html>
          <html>
            <head>
            <title>Mi página HTML</title>
            <link rel="stylesheet" type="text/css" href="./payStyles/failure.css">
            </head>
            <body>
            <div class="contenedor_failure">
              <a href="http://localhost:3000/"><svg class='failure_svg' width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg></a>
              <h1 class="failure_h1"> Failure Pay!</h1>
              <img class="failure_img" src="https://static.vecteezy.com/system/resources/thumbnails/017/178/563/small/cross-check-icon-symbol-on-transparent-background-free-png.png" alt="">
              <a href="http://localhost:3000/Products" class="failure_a">Keep Buying</a>
              <p class="failure_p">COMPUTER STORE</p>
            </div>
            </body>
        </html>
              `);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = { payRouter };
